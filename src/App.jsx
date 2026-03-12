import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import PlansSlider from './components/PlansSlider';
import OTTGrid from './components/OTTGrid';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';
import LegalPage from './components/LegalPage';

function App() {
    const [activeTab, setActiveTab] = useState('broadband');
    const [isScrolled, setIsScrolled] = useState(false);
    const [legalView, setLegalView] = useState(null); // 'terms', 'privacy', 'refund', or null

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-container" style={{ background: 'var(--bg-dark)' }}>
            <Navbar isScrolled={isScrolled} />

            {legalView ? (
                <LegalPage pageType={legalView} onClose={() => setLegalView(null)} />
            ) : (
                <>
                    <main>
                        <Hero />
                        <OTTGrid />

                        <section id="plans" style={{ padding: '8rem 0', background: 'var(--bg-light)' }}>
                            <div className="container" style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', color: 'var(--accent-cyan)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Flexible Pricing</div>
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Our <span className="text-gradient">High-Speed</span> Plans</h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.15rem' }}>Select the perfect capacity configuration for your home structure.</p>

                                <div className="glass-panel" style={{ display: 'inline-flex', padding: '0.5rem', borderRadius: '50px', marginBottom: '4rem' }}>
                                    <button
                                        onClick={() => setActiveTab('broadband')}
                                        style={{
                                            padding: '1rem 3rem',
                                            borderRadius: '50px',
                                            border: 'none',
                                            background: activeTab === 'broadband' ? 'var(--accent-gradient)' : 'transparent',
                                            color: activeTab === 'broadband' ? 'white' : 'var(--text-muted)',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Broadband Plans
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('ott')}
                                        style={{
                                            padding: '1rem 3rem',
                                            borderRadius: '50px',
                                            border: 'none',
                                            background: activeTab === 'ott' ? 'var(--accent-gradient)' : 'transparent',
                                            color: activeTab === 'ott' ? 'white' : 'var(--text-muted)',
                                            fontWeight: '700',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        OTT Plans
                                    </button>
                                </div>

                                {/* Wrapper added for spacing */}
                                <div style={{ textAlign: 'left' }}>
                                    <PlansSlider activeTab={activeTab} />
                                </div>
                            </div>
                        </section>

                        <Features />

                        <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg-light)' }}>
                            <div className="container" style={{ textAlign: 'center' }}>
                                <div style={{ display: 'inline-block', color: 'var(--accent-fuchsia)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem' }}>Get in Touch</div>
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-1px' }}>Ready for an <span className="text-gradient">upgrade?</span></h2>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '5rem', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto 5rem' }}>
                                    Contact us today to get your new fiber connection installed within 24 hours.
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                                    <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderRadius: '24px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                                        <div style={{ width: '64px', height: '64px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', fontSize: '1.8rem', margin: '0 auto 1.5rem' }}>
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Call Us</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                            <a href="tel:+918953200770" style={{ color: 'var(--accent-cyan)', display: 'block' }}>+91 8953200770</a>
                                            <a href="tel:+917565056768" style={{ color: 'var(--accent-cyan)', display: 'block', marginTop: '0.25rem' }}>+91 7565056768</a>
                                        </p>
                                    </div>

                                    <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderRadius: '24px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                                        <div style={{ width: '64px', height: '64px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', fontSize: '1.8rem', margin: '0 auto 1.5rem' }}>
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Email Us</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                            <a href="mailto:info@1wifi.in" style={{ color: 'var(--accent-cyan)' }}>info@1wifi.in</a>
                                        </p>
                                    </div>

                                    <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderRadius: '24px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                                        <div style={{ width: '64px', height: '64px', background: 'rgba(217, 70, 239, 0.1)', color: 'var(--accent-fuchsia)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px', fontSize: '1.8rem', margin: '0 auto 1.5rem' }}>
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Visit Us</h3>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                            Nai Bazar, Mirzapur Road, Naini<br />
                                            Prayagraj, 211008, Uttar Pradesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <Footer setLegalView={setLegalView} />
                </>
            )}

            <FloatingActions />
        </div>
    );
}

export default App;
