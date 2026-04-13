import { motion } from 'framer-motion'

const Hero = ({ userName }) => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-subtitle"
                >
                    HI, I'M <span className="gradient-text">{userName?.toUpperCase() || 'ANSHUL'}</span>
                </motion.p>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Securing the <span className="gradient-text">Future</span> <br />
                    Through Tactical Research
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-description"
                >
                    Cybersecurity Student specializing in Threat Intelligence, 
                    Network Security, and Incident Response.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hero-cta"
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </motion.div>
            </div>
            
            {/* The 3D Canvas is handled in App.jsx via Experience component */}
        </section>
    )
}

export default Hero
