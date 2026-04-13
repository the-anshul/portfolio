import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Intro = ({ onComplete }) => {
    const [step, setStep] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        if (step === 0) {
            const timer = setTimeout(() => setStep(1), 2000)
            return () => clearTimeout(timer)
        }
    }, [step])

    const handleStart = () => {
        setName('GUEST')
        setStep(3)
        setTimeout(() => onComplete('GUEST'), 1500)
    }

    return (
        <div className="intro-overlay" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--text-main)',
            background: 'var(--bg-dark)',
            width: '100vw',
            fontFamily: 'Fira Code, monospace'
        }}>
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ fontSize: '1.2rem', letterSpacing: '0.4rem', fontWeight: 600 }}
                    >
                        [sys.init] BOOT SEQUENCE INITIATED...
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }} className="gradient-text">SYSTEM ACCESS GRANTED</h2>
                        <button
                            onClick={handleStart}
                            className="btn btn-outline"
                        >
                            [ INIT SESSION ]
                        </button>
                    </motion.div>
                )}



                {step === 3 && (
                    <motion.div
                        key="decrypt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ fontSize: '1.2rem', textAlign: 'center' }}
                    >
                        DECRYPTING ASSESTS FOR <br />
                        <span className="gradient-text" style={{ fontSize: '2rem', fontWeight: 800 }}>{name.toUpperCase()}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Intro
