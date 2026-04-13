import { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">
                <a href="#hero" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', textDecoration: 'none' }}>
                    ANSHUL<span style={{ color: 'var(--primary)' }}>.</span>
                </a>
            </div>
            <ul className="nav-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
