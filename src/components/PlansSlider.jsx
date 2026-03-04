import React from 'react';
import { motion } from 'framer-motion';

const broadbandPlans = [
    { speed: '50 Mbps', title: 'Starter', prices: [{ d: '30 Days', p: 500 }, { d: '90 Days', p: 1500 }, { d: '210 Days', p: 3000 }], popular: false },
    { speed: '100 Mbps', title: 'Value', prices: [{ d: '30 Days', p: 750 }, { d: '90 Days', p: 2250 }, { d: '210 Days', p: 4500 }], popular: false },
    { speed: '150 Mbps', title: 'Premium', prices: [{ d: '30 Days', p: 1000 }, { d: '90 Days', p: 3000 }, { d: '210 Days', p: 6000 }], popular: true },
    { speed: '200 Mbps', title: 'Ultra', prices: [{ d: '30 Days', p: 1200 }, { d: '90 Days', p: 3600 }, { d: '210 Days', p: 7200 }], popular: false }
];

const ottPlans = [
    { speed: '50 Mbps', title: 'OTT Included', desc: 'Access to 16 premium OTTs', prices: [{ d: '30 Days', p: 650 }, { d: '90 Days', p: 1950 }], popular: false },
    { speed: '150 Mbps', title: 'OTT Included', desc: '16+ Premium OTT Apps', prices: [{ d: '30 Days', p: 1000 }, { d: '90 Days', p: 3000 }], popular: true },
    { speed: '200 Mbps', title: 'OTT Included', desc: '4K Streaming + 16+ OTTs', prices: [{ d: '30 Days', p: 1200 }, { d: '90 Days', p: 3600 }], popular: false },
    { speed: '300 Mbps', title: 'OTT Included', desc: 'Hyper Speed + All Premium OTTs', prices: [{ d: '30 Days', p: 1800 }, { d: '90 Days', p: 5400 }], popular: false }
];

export default function PlansSlider({ activeTab }) {
    const plans = activeTab === 'broadband' ? broadbandPlans : ottPlans;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
                display: 'flex',
                gap: '2.5rem',
                alignItems: 'stretch',
                overflowX: 'auto',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                scrollSnapType: 'x mandatory'
            }}
        >
            {plans.map((plan, i) => (
                <motion.div
                    key={`${activeTab}-${i}`}
                    whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
                    className="glass-panel"
                    style={{
                        minWidth: '260px',
                        flex: '0 0 auto',
                        scrollSnapAlign: 'start',
                        borderRadius: '20px',
                        padding: '1.25rem',
                        position: 'relative',
                        border: plan.popular ? '2px solid rgba(139, 92, 246, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: plan.popular ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
                        transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    {plan.popular && (
                        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-gradient)', color: 'white', padding: '0.3rem 1rem', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.75rem', boxShadow: '0 4px 10px rgba(139, 92, 246, 0.4)' }}>
                            Most Popular
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginBottom: '1rem', borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: '0.75rem' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', display: 'block', lineHeight: 1 }}>{plan.speed}</span>
                        <span style={{ color: 'var(--accent-fuchsia)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.75rem', marginTop: '0.5rem', display: 'block', letterSpacing: '1px' }}>{plan.title}</span>
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        {plan.prices.map((pr, j) => (
                            <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{pr.d}</span>
                                <strong style={{ color: '#0fa968', fontSize: '1rem' }}>₹{pr.p}</strong>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        {plan.desc ? plan.desc : (
                            <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}></i> Unlimited Data</li>
                                <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}></i> Symmetrical Speed</li>
                                <li><i className="fa-solid fa-check" style={{ color: 'var(--accent-cyan)', marginRight: '0.75rem' }}></i> Free Installation*</li>
                            </ul>
                        )}
                    </div>

                    <a href="#contact" className="glowing-button" style={{ display: 'flex', width: '100%', padding: '0.75rem 1rem', fontSize: '0.9rem' }}>Secure Connection</a>

                </motion.div>
            ))}
        </motion.div>
    );
}
