import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-grid">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-info"
                >
                    <h2 className="gradient-text">Get in Touch</h2>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities moving forward.</p>
                    
                    <div className="contact-methods">
                        <div className="method">
                            <span className="icon">📧</span>
                            <p className="selectable-text">the.cyber.wolf.4@gmail.com</p>
                        </div>
                        <div className="method">
                            <span className="icon">📍</span>
                            <p>India</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact
