import { motion } from 'framer-motion'

const projects = [
    {
        title: "Logs Analyser",
        description: "A comprehensive log analysis engine designed to parse and monitor server logs for security anomalies, performance bottlenecks, and automated threat detection.",
        tags: ["Python", "Data Analysis", "Security", "Logging"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/the-anshul/logs_analyser",
        github: "https://github.com/the-anshul/logs_analyser"
    },
    {
        title: "AI-NIDS",
        description: "Hybrid network intrusion detection system combining Machine Learning anomalies with signature-based intelligence to identify zero-day threats in real-time.",
        tags: ["Python", "Machine Learning", "Scapy", "Cybersecurity"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/the-anshul/AI-NIDS",
        github: "https://github.com/the-anshul/AI-NIDS"
    },
    {
        title: "LeetCode City",
        description: "An interactive visualization of LeetCode progress, gamifying coding interview preparation through a dynamic data-driven interface.",
        tags: ["JavaScript", "Visualization", "Frontend", "API"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
        link: "https://github.com/the-anshul/leetcode-city",
        github: "https://github.com/the-anshul/leetcode-city"
    }
]

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-header"
            >
                <h2 className="gradient-text">Selected Work</h2>
                <p>A collection of my recent projects focusing on security and scalability.</p>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="project-card glass-effect"
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3 className="selectable-text">{project.title}</h3>
                            <p className="selectable-text">{project.description}</p>
                            <div className="tech-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} className="link-btn">Demo</a>
                                <a href={project.github} className="link-btn github">GitHub</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
