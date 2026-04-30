import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import Typewriter from 'typewriter-effect'

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
                    {userName && userName !== 'Guest' ? `WELCOME, ${userName.toUpperCase()} | ` : ''} HI, I'M <span className="gradient-text">ANSHUL</span>
                </motion.p>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Securing the <span className="gradient-text">Future</span> <br />
                    Through Tactical Research
                </motion.h1>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-description"
                >
                    <Typewriter
                        options={{
                            strings: [
                                'Cybersecurity Student',
                                'Threat Intelligence Analyst',
                                'Network Security Enthusiast',
                                'Incident Responder',
                                'Tool Builder'
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                        }}
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hero-cta"
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                    <a 
                        href="/resume.pdf" 
                        download="Anshul_Resume.pdf"
                        className="btn btn-download"
                    >
                        <FaDownload style={{ marginRight: '0.5rem' }} />
                        Download CV
                    </a>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hero-socials"
                >
                    <a href="https://github.com/the-anshul" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/the-cyber-wolf" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                </motion.div>
            </div>
            
            {/* The 3D Canvas is handled in App.jsx via Experience component */}
        </section>
    )
}

export default Hero
