import { motion } from 'framer-motion'

const skillsData = [
    { name: "Python", level: 90 },
    { name: "Network Security", level: 85 },
    { name: "Linux / Bash", level: 85 },
    { name: "Penetration Testing", level: 80 },
    { name: "Log Analysis / SIEM", level: 80 },
    { name: "JavaScript / React", level: 75 }
]

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Technical Arsenal</h2>
                <p>Core competencies and tools I use to secure systems and build solutions.</p>
            </motion.div>

            <div className="skills-container glass-effect">
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div key={skill.name} className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <motion.div 
                                    className="progress-bar-fill gradient-bg"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
