import { useEffect, useState } from 'react'

const commands = [
    "SCANNING NETWORK...",
    "TRACING IP: 192.168.1.1...",
    "BYPASSING FIREWALL...",
    "ACCESS GRANTED",
    "DECRYPTING ARCHIVES...",
    "NIDS SYSTEM: ACTIVE",
    "THREAT LEVEL: LOW",
    "ENCRYPTING CONNECTION...",
    "WAKE UP, NEO...",
    "SYSTEM SECURE"
]

const SecurityTerminal = () => {
    const [lines, setLines] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLines(prev => [...prev.slice(-4), `> ${commands[index]}`])
            setIndex(prev => (prev + 1) % commands.length)
        }, 1500)
        return () => clearInterval(interval)
    }, [index])

    return (
        <div style={{
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(0, 255, 0, 0.05)',
            border: '1px solid rgba(0, 255, 0, 0.2)',
            borderRadius: '4px',
            width: '300px',
            textAlign: 'left',
            fontSize: '0.8rem',
            color: '#00ff00',
            minHeight: '100px'
        }}>
            {lines.map((line, i) => (
                <div key={i}>{line}</div>
            ))}
            <div style={{ animation: 'blink 1s infinite' }}>_</div>
            <style>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
        </div>
    )
}

export default SecurityTerminal
