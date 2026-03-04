import React from 'react';
import { motion } from 'framer-motion';

const ottApps = [
    { name: 'Bhakti Flix', color: 'linear-gradient(135deg, #e65c00, #F9D423)' },
    { name: 'Chaupal Bhojpuri', color: 'linear-gradient(135deg, #4A00E0, #8E2DE2)' },
    { name: 'Dangal Play', color: 'linear-gradient(135deg, #1f4037, #99f2c8)' },
    { name: 'Distro TV', color: 'linear-gradient(135deg, #1CB5E0, #000046)' },
    { name: 'Dollywood Play', color: 'linear-gradient(135deg, #f12711, #f5af19)' },
    { name: 'Fancode', color: 'linear-gradient(135deg, #FF416C, #FF4B2B)' },
    { name: 'Fridaay', color: 'linear-gradient(135deg, #00C9FF, #92FE9D)' },
    { name: 'JioHotstar', color: 'linear-gradient(135deg, #0f0c29, #302b63)' },
    { name: 'Om TV', color: 'linear-gradient(135deg, #b92b27, #1565C0)' },
    { name: 'Playflix', color: 'linear-gradient(135deg, #DA4453, #89216B)' },
    { name: 'Runn TV', color: 'linear-gradient(135deg, #141E30, #243B55)' },
    { name: 'Me', color: 'linear-gradient(135deg, #ff00cc, #333399)' },
    { name: 'Sony Liv', color: 'linear-gradient(135deg, #434343, #000000)' },
    { name: 'Stage', color: 'linear-gradient(135deg, #cb2d3e, #ef473a)' },
    { name: 'VC OTT', color: 'linear-gradient(135deg, #4b6cb7, #182848)' },
    { name: 'Z5', color: 'linear-gradient(135deg, #2c3e50, #3498db)' },
];

export default function OTTGrid() {
    // Duplicate array once for seamless marquee scrolling effect
    const marqueeItems = [...ottApps, ...ottApps];

    return (
        <section id="ott" style={{ padding: '8rem 0', background: 'var(--bg-dark)', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Ultimate <span className="text-gradient">Entertainment</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 3rem' }}>
                    Get instant access to 16 premium OTT applications deeply integrated into our high-speed network. Every movie. Every match. Zero buffering.
                </p>

                {/* Displaying original uploaded Image */}
                <img src="/ott-icons.jpg" alt="16 OTT Premium Platforms" style={{ width: '100%', maxWidth: '800px', borderRadius: '16px', margin: '0 auto 2rem', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.5)', display: 'block', border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>

            <div className="marquee-container">
                <div className="marquee-content">
                    {marqueeItems.map((app, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            className="glass-panel"
                            style={{
                                minWidth: '160px',
                                borderRadius: '16px',
                                padding: '1rem 1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '12px',
                                background: app.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)',
                                border: '2px solid rgba(255,255,255,0.2)'
                            }}>
                                {app.name.charAt(0)}
                            </div>
                            <span style={{
                                fontWeight: '700',
                                color: 'var(--text-main)',
                                fontSize: '1.1rem',
                                letterSpacing: '0.5px'
                            }}>
                                {app.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
