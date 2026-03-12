import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-50% 0px -50% 0px' // Trigger right when the section reaches the middle of the screen
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        // Let `#home` trigger at the very top as well
        const homeSection = document.getElementById('home');
        if (homeSection) observer.observe(homeSection);

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        setActiveSection(sectionId); // Force the highlight immediately on click

        // Defer scroll slightly to allow state (like closing the mobile menu) to settle
        setTimeout(() => {
            const target = document.getElementById(sectionId);
            if (target) {
                const navbarHeight = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                borderBottom: '1px solid #E2E8F0'
            }}
        >
            <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        backgroundColor: '#111',
                        border: '2px solid white',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '32px',
                            height: '32px',
                            border: '1px solid white',
                            borderRadius: '5px'
                        }}>
                            <i className="fa-solid fa-wifi" style={{ color: 'white', fontSize: '1rem' }}></i>
                        </div>
                    </div>

                    <div style={{
                        width: '4px',
                        height: '35px',
                        backgroundColor: '#111',
                        borderRadius: '2px'
                    }}></div>

                    <span style={{
                        fontSize: '2.4rem',
                        fontWeight: 900,
                        color: isScrolled ? 'var(--primary-color)' : '#111', /* Force black text */
                        letterSpacing: '-1.5px',
                        fontFamily: 'var(--font-heading)'
                    }}>
                        1-WiFi
                    </span>
                </a>

                <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="desktop-nav">
                    <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
                    <a href="#plans" onClick={(e) => handleNavClick(e, 'plans')} className={`nav-link ${activeSection === 'plans' ? 'active' : ''}`}>Plans</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact Us</a>
                </nav>

                <a href="https://portal.1wifi.in" style={{
                    background: 'linear-gradient(135deg, #3182CE 0%, #805AD5 100%)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(49, 130, 206, 0.4)'
                }} className="login-btn">
                    Login <i className="fa-solid fa-user"></i>
                </a>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'black' }}>
                    <i className={isMobileMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ background: 'white', borderBottom: '1px solid #E2E8F0', overflow: 'hidden' }}
                        className="mobile-dropdown"
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem 2rem', gap: '0.5rem' }}>
                            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
                            <a href="#plans" onClick={(e) => handleNavClick(e, 'plans')} className={`mobile-nav-link ${activeSection === 'plans' ? 'active' : ''}`}>Plans & Pricing</a>
                            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}>About Us</a>
                            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact Us</a>
                            <a href="https://portal.1wifi.in" onClick={() => setIsMobileMenuOpen(false)} style={{
                                background: 'linear-gradient(135deg, #3182CE 0%, #805AD5 100%)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '8px',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '0.5rem'
                            }}>
                                Login <i className="fa-solid fa-user"></i>
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header >
    );
}
