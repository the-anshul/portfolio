import { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { Experience } from './components/Experience'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import WorkExperience from './sections/WorkExperience'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Intro from './sections/Intro'

function App() {
    const [showIntro, setShowIntro] = useState(true)
    const [userName, setUserName] = useState('')

    return (
        <main>
            <AnimatePresence mode="wait">
                {showIntro ? (
                    <Intro key="intro-section" onComplete={(name) => {
                        setUserName(name)
                        setShowIntro(false)
                    }} />
                ) : (
                    <motion.div 
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="content-container"
                    >
                        <Navbar />
                        <Hero userName={userName} />
                        <About />
                        <Projects />
                        <WorkExperience />
                        <Contact />
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Render Canvas globally after intro for better transition */}
            {!showIntro && (
                <div className="canvas-container">
                    <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                        <color attach="background" args={['#030712']} />
                        <Suspense fallback={null}>
                            <Experience isIntro={false} />
                        </Suspense>
                    </Canvas>
                </div>
            )}
        </main>
    )
}

export default App
