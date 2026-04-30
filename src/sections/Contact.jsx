import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | success

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending') // Use sending state while API request is made

        // API Endpoint for Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                // TODO: Replace with your actual Access Key from web3forms.com
                access_key: "YOUR_ACCESS_KEY_HERE",
                name: formData.name,
                email: formData.email,
                message: formData.message,
                subject: "New Contact Form Submission from Portfolio"
            })
        })

        const result = await response.json()

        if (result.success) {
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            // Reset status after a few seconds
            setTimeout(() => setStatus('idle'), 5000)
        } else {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="contact-section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Get in Touch</h2>
                <p>Have a project, opportunity, or just want to connect? I'm all ears.</p>
            </motion.div>

            <div className="contact-grid">
                {/* Left — Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-info"
                >
                    <h3>Let's Connect</h3>
                    <p>I'm always open to discussing new projects, creative ideas, or opportunities in cybersecurity.</p>

                    <div className="contact-methods">
                        <div className="method">
                            <span className="method-icon"><FaEnvelope /></span>
                            <p className="selectable-text">the.cyber.wolf.4@gmail.com</p>
                        </div>
                        <div className="method">
                            <span className="method-icon"><FaMapMarkerAlt /></span>
                            <p>India — Open to Remote</p>
                        </div>
                        <div className="method">
                            <a href="https://www.linkedin.com/in/the-cyber-wolf" target="_blank" rel="noopener noreferrer" className="social-link-wrapper">
                                <span className="method-icon"><FaLinkedin /></span>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                        <div className="method">
                            <a href="https://github.com/the-anshul" target="_blank" rel="noopener noreferrer" className="social-link-wrapper">
                                <span className="method-icon"><FaGithub /></span>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="contact-form glass-effect"
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="What's on your mind?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending...' : <><FaPaperPlane style={{ marginRight: '0.5rem' }} /> Send Message</>}
                    </button>

                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="form-status success"
                        >
                            ✅ Message sent successfully! I'll get back to you soon.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="form-status error"
                        >
                            ❌ Something went wrong. Please check your Access Key.
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    )
}

export default Contact
