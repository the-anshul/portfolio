import { motion } from 'framer-motion'

const experiences = [
    {
        title: "B.Tech — Cyber Security",
        company: "Maharishi University, Noida",
        duration: "2023 – 2026",
        description: "Specializing in Cybersecurity and Network Defense. Actively building practical tools, participating in CTFs, and exploring areas like OSINT, penetration testing, and security automation.",
        icon: "🎓"
    },
    {
        title: "Security Researcher & Tool Builder",
        company: "Self-Directed / Open Source",
        duration: "2024 – Present",
        description: "Built ReconX — a modular async recon automation framework. Developed AI-NIDS for hybrid intrusion detection using ML and signature-based techniques. Created Logs Analyser for automated threat detection in server logs.",
        icon: "🛡️"
    },
    {
        title: "Certifications & Achievements",
        company: "TryHackMe · Coursera",
        duration: "2023 – Present",
        description: "Completed labs and learning paths in ethical hacking, network security, and digital forensics. Consistently solving CTF challenges to sharpen offensive and defensive security skills.",
        icon: "🏆",
        certs: [
            { label: "📄 TryHackMe Certificate", link: "/thm-certificate.pdf" },
            { label: "📄 Intro to Cybersecurity", link: "/intro-cybersec-cert.pdf" }
        ]
    }
]

const WorkExperience = () => {
    return (
        <section id="experience" className="experience-section">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">My Journey</h2>
                <p>Education, projects, and milestones in my cybersecurity career.</p>
            </motion.div>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="experience-card glass-effect"
                    >
                        <div className="exp-icon">{exp.icon}</div>
                        <div className="exp-content">
                            <span className="exp-duration">{exp.duration}</span>
                            <h3>{exp.title}</h3>
                            <h4 className="gradient-text">{exp.company}</h4>
                            <p>{exp.description}</p>
                            {exp.certs && (
                                <div className="cert-links">
                                    {exp.certs.map((cert, i) => (
                                        <a
                                            key={i}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-link"
                                        >
                                            {cert.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience
