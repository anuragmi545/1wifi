import React from 'react';
import { motion } from 'framer-motion';

const features = [
    { icon: 'fa-gauge-high', title: 'Hyperspeed Core', desc: 'Uncapped gigabit throughput designed for ultimate 4K streaming and pro gaming.', colSpan: 2 },
    { icon: 'fa-headset', title: '24/7 Priority Support', desc: 'Zero wait times. Direct access to our L2 network engineers.', colSpan: 1 },
    { icon: 'fa-tags', title: 'Honest Pricing', desc: 'No hidden caps. No throttles. Pure flexible connectivity.', colSpan: 1 },
    { icon: 'fa-network-wired', title: '99.99% Reliability', desc: 'Enterprise-grade SLA backed uptime. Always connected.', colSpan: 2 }
];

export default function Features() {
    return (
        <section id="about" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div style={{ display: 'inline-block', color: 'var(--accent-fuchsia)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Why 1-WiFi?</div>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Engineered for <span className="text-gradient">Excellence</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
                        Our infrastructure leverages military-grade fiber optics, ensuring that your home receives an uninterrupted, pristine data flow.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, borderColor: 'rgba(0, 229, 255, 0.4)' }}
                            className={`glass-panel ${f.colSpan > 1 ? 'feature-span-2' : ''}`}
                            style={{
                                padding: '3rem 2rem',
                                borderRadius: '24px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '16px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem',
                                fontSize: '1.8rem',
                                color: 'var(--accent-cyan)',
                                boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.1)'
                            }}>
                                <i className={`fa-solid ${f.icon}`}></i>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
