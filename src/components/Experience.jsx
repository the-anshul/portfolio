import { Float, Stars, ContactShadows, QuadraticBezierLine } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Helper to get 3D pos from random spherical coordinates
const getPos = (radius) => {
    const phi = Math.random() * Math.PI * 2
    const theta = Math.acos(2 * Math.random() - 1)
    return new THREE.Vector3(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
    )
}

const AttackArc = ({ start, end, onComplete }) => {
    const [progress, setProgress] = useState(0)
    const radius = 1.5
    
    const control = useMemo(() => {
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
        const distance = start.distanceTo(end)
        mid.setLength(radius + distance * 0.5)
        return mid
    }, [start, end, radius])

    const color = useMemo(() => (Math.random() > 0.5 ? "#ff003c" : "#00ff41"), [])

    useFrame((state, delta) => {
        setProgress((prev) => {
            const next = prev + delta * 0.6
            if (next >= 1) {
                onComplete()
                return 1
            }
            return next
        })
    })

    return (
        <QuadraticBezierLine
            start={start}
            end={end}
            control={control}
            color={color}
            lineWidth={1.5}
            transparent
            opacity={0.8 * (1 - progress)}
            dashed
            dashScale={10}
            dashSize={1}
            dashOffset={-progress * 20}
        />
    )
}

const AttackPing = ({ position, onComplete }) => {
    const [scale, setScale] = useState(0)
    const [opacity, setOpacity] = useState(1)

    useFrame((state, delta) => {
        setScale((s) => s + delta * 1.5)
        setOpacity((o) => {
            const next = o - delta * 1.5
            if (next <= 0) {
                onComplete()
                return 0
            }
            return next
        })
    })

    return (
        <mesh position={position}>
            <sphereGeometry args={[0.02 * scale, 16, 16]} />
            <meshBasicMaterial color="#00ff41" transparent opacity={opacity} />
        </mesh>
    )
}

const Globe = () => {
    const meshRef = useRef()
    const [attacks, setAttacks] = useState([])
    const [pings, setPings] = useState([])
    const lastAttackTime = useRef(0)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
        }

        if (state.clock.elapsedTime - lastAttackTime.current > 0.15) {
            const numAttacks = Math.random() > 0.7 ? 2 : 1
            const newAttacks = Array.from({ length: numAttacks }).map(() => ({
                id: Math.random(),
                start: getPos(1.5),
                end: getPos(1.5)
            }))
            setAttacks((prev) => [...prev, ...newAttacks])
            lastAttackTime.current = state.clock.elapsedTime
        }
    })

    const handleArcComplete = (id, end) => {
        setAttacks((prev) => prev.filter((a) => a.id !== id))
        setPings((prev) => [...prev, { id: Math.random(), position: end }])
    }

    return (
        <group position={[2.5, -0.5, -2]} scale={1.3}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial 
                    color="#00ff41" 
                    wireframe={true}
                    transparent={true} 
                    opacity={0.2} 
                    emissive="#00ff41"
                    emissiveIntensity={0.4}
                />
            </mesh>
            
            {/* Core Glow */}
            <mesh scale={0.97}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshStandardMaterial color="#000a02" transparent opacity={0.6} />
            </mesh>

            {attacks.map((attack) => (
                <AttackArc 
                    key={attack.id} 
                    start={attack.start} 
                    end={attack.end} 
                    onComplete={() => handleArcComplete(attack.id, attack.end)} 
                />
            ))}

            {pings.map((ping) => (
                <AttackPing 
                    key={ping.id} 
                    position={ping.position} 
                    onComplete={() => setPings((prev) => prev.filter((p) => p.id !== ping.id))} 
                />
            ))}
        </group>
    )
}

export const Experience = ({ isIntro }) => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} color="#ff003c" intensity={1} />
            <pointLight position={[10, 5, 5]} color="#00ff41" intensity={2} />

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            {!isIntro && (
                <>
                    <Globe />
                    <ContactShadows opacity={0.4} scale={15} blur={2.4} far={4.5} />
                    
                    {/* Grid Floor */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
                        <planeGeometry args={[100, 100]} />
                        <meshStandardMaterial color="#020202" transparent opacity={0.9} />
                    </mesh>
                    <gridHelper args={[100, 40, "#001a07", "#001a07"]} position={[0, -2.49, 0]} />
                </>
            )}
        </>
    )
}
