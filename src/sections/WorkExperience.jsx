import { motion } from 'framer-motion'

const experiences = [
    {
        title: "B.Tech Student",
        company: "University / College",
        duration: "2023 - 2026",
        description: "Currently pursuing my Bachelor of Technology degree. Exploring core fundamentals, continuously learning new technologies, and actively building practical projects.",
        icon: "🎓"
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
                <p>Professional experience and milestones in my career.</p>
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
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WorkExperience
