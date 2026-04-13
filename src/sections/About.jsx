import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="bento-grid">
                {/* Intro Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-card card-large glass-effect"
                >
                    <div className="card-content">
                        <h3>Dedicated to Security</h3>
                        <p>I'm a Cybersecurity student with a deep interest in network defense, ethical hacking, and digital forensics. I spend my time researching new vulnerabilities and building tools to detect intrusions.</p>
                    </div>
                </motion.div>

                {/* Tech Stack Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bento-card card-medium glass-effect"
                >
                    <div className="card-content">
                        <h3>My Focus Areas</h3>
                        <div className="tech-tags">
                            <span className="tag">Network Security</span>
                            <span className="tag">Pen Testing</span>
                            <span className="tag">Python</span>
                            <span className="tag">Linux</span>
                            <span className="tag">OSINT</span>
                            <span className="tag">Forensics</span>
                            <span className="tag">SIEM</span>
                        </div>
                    </div>
                </motion.div>

                {/* Flexible Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bento-card card-small glass-effect"
                >
                    <div className="card-content" style={{ textAlign: 'center' }}>
                        <h3>Location</h3>
                        <p>Currently based in India, open to remote work worldwide.</p>
                    </div>
                </motion.div>

                {/* Contact Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bento-card card-small glass-effect"
                >
                    <div className="card-content" style={{ textAlign: 'center' }}>
                        <h3>Let's Talk</h3>
                        <p>Have a project in mind?</p>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', marginTop: '1rem', display: 'inline-block' }}>Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
