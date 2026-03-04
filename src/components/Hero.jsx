import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 2,
        badge: "Premium Entertainment Included",
        badgeColor: "var(--accent-fuchsia)",
        title1: "Unlimited",
        title2: "OTT Streaming",
        desc: "Combine your high-speed internet with access to 16 premium OTT platforms. Watch your favorite movies, sports, and web shows without any interruptions.",
        buttonText: "View OTT Bundles",
        visualType: "image",
        imageSrc: "/ott-icons.jpg"
    },
    {
        id: 3,
        badge: "Enterprise-Grade Reliability",
        badgeColor: "var(--accent-cyan)",
        title1: "99.99%",
        title2: "Uptime Guaranteed",
        desc: "Enjoy flawless connectivity with our military-grade infrastructure and dedicated 24/7 priority support. Because your connection should never drop.",
        buttonText: "Contact Sales",
        visualType: "stats",
        statsBadge: "Network Reliability",
        statsVal: "99.9",
        statsUnit: "Percent Uptime SLA",
        icon: "fa-network-wired"
    }
];

export default function Hero({ onOpenEnquiry }) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[activeSlide];

    return (
        <section id="home" style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'var(--bg-dark)',
            paddingTop: '80px'
        }}>
            {/* Dynamic Deep Glowing Ambient Background Mesh */}
            <div
                className="bg-mesh-1"
                style={{
                    position: 'absolute',
                    top: '-30%',
                    right: '-20%',
                    width: '80vw',
                    height: '80vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(2, 6, 23, 0) 60%)',
                    filter: 'blur(80px)',
                    zIndex: 1
                }}
            />
            <div
                className="bg-mesh-2"
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-20%',
                    width: '70vw',
                    height: '70vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(2, 6, 23, 0) 60%)',
                    filter: 'blur(80px)',
                    zIndex: 1
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="hero-flex-container"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem' }}
                    >

                        {/* Text Content */}
                        <div className="hero-text-container" style={{ flex: '1 1 500px' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="glass-panel hero-badge"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '50px',
                                    color: 'var(--text-main)',
                                    marginBottom: '2rem',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    gap: '0.5rem'
                                }}
                            >
                                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: slide.badgeColor, boxShadow: `0 0 10px ${slide.badgeColor}` }}></span>
                                {slide.badge}
                            </motion.div>

                            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                                {slide.title1} <br />
                                <span className="text-gradient">{slide.title2}</span>
                            </h1>

                            <p className="hero-desc" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '540px', lineHeight: 1.8 }}>
                                {slide.desc}
                            </p>

                            <div className="hero-buttons-wrapper" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <motion.a
                                    href="#plans"
                                    className="glowing-button hero-main-btn"
                                >
                                    {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                                </motion.a>
                                <motion.button
                                    onClick={onOpenEnquiry}
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="glowing-button"
                                    style={{
                                        color: 'var(--text-main)',
                                        padding: '1.25rem 2.5rem',
                                        borderRadius: '50px',
                                        fontWeight: 600,
                                        fontSize: '1.2rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        gap: '0.75rem',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Get Connection
                                    <i className="fa-solid fa-arrow-right"></i>
                                </motion.button>
                            </div>
                        </div>

                        {/* Visual Container */}
                        <div className="hero-visual-container" style={{ flex: '1 1 450px', display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="glass-panel hero-visual-panel"
                                style={{
                                    width: '100%',
                                    maxWidth: '450px',
                                    borderRadius: '24px',
                                    padding: slide.visualType === 'image' ? '1rem' : '2.5rem',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Grid overlay */}
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2, pointerEvents: 'none', zIndex: 0 }}></div>

                                {slide.visualType === 'stats' ? (
                                    <>
                                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                            <div style={{ color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{slide.statsBadge}</div>
                                            <div style={{ background: `rgba(15, 169, 104, 0.2)`, border: `1px solid rgba(15, 169, 104, 0.4)`, color: '#0fa968', padding: '0.4rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ display: 'block', width: '6px', height: '6px', borderRadius: '50%', background: '#0fa968', boxShadow: '0 0 8px #0fa968' }}></span> Active
                                            </div>
                                        </div>

                                        <div className="hero-stats-block" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3rem 0' }}>
                                            <div
                                                className="hero-icon-ring"
                                                style={{
                                                    width: '120px', height: '120px', borderRadius: '50%',
                                                    background: 'conic-gradient(from 0deg, var(--accent-cyan), var(--accent-purple), var(--accent-fuchsia), var(--accent-cyan))',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)'
                                                }}
                                            >
                                                <div className="hero-icon-inner" style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <i className={`fa-solid ${slide.icon} hero-icon-fa`} style={{ fontSize: '3rem', color: 'var(--text-main)' }}></i>
                                                </div>
                                            </div>
                                            <div className="hero-stats-val" style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginTop: '1.5rem', lineHeight: 1 }}>{slide.statsVal}</div>
                                            <div style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 600 }}>{slide.statsUnit}</div>
                                        </div>

                                        <div style={{ position: 'relative', zIndex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                                <span>Bandwidth Capacity</span>
                                                <span>Optimum</span>
                                            </div>
                                            <div style={{ height: '6px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                                                <div style={{ width: '100%', height: '100%', background: 'var(--accent-gradient)' }} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <img src={slide.imageSrc} alt="Premium OTT Entertainment" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Indicators */}
                <div className="hero-indicators" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            style={{
                                width: activeSlide === index ? '30px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                background: activeSlide === index ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.2)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Blur Bottom line */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(to right, transparent, var(--accent-purple), transparent)', opacity: 0.5, boxShadow: '0 0 20px var(--accent-purple)' }}></div>
        </section>
    );
}
