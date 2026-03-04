import React from 'react';

export default function Footer({ setLegalView }) {
    return (
        <footer style={{ background: 'var(--bg-dark)', color: 'var(--text-main)', paddingTop: '5rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ flex: '1 1 300px' }}>
                    <a href="#home" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                        marginBottom: '1.5rem'
                    }} onClick={(e) => { e.preventDefault(); setLegalView(null); window.scrollTo(0, 0); }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48px',
                            height: '48px',
                            backgroundColor: '#111',
                            border: '2px solid white',
                            borderRadius: '10px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '38px',
                                height: '38px',
                                border: '1px solid white',
                                borderRadius: '6px'
                            }}>
                                <i className="fa-solid fa-wifi" style={{ color: 'white', fontSize: '1.2rem' }}></i>
                            </div>
                        </div>

                        <div style={{
                            width: '5px',
                            height: '40px',
                            backgroundColor: 'white',
                            borderRadius: '2px'
                        }}></div>

                        <span style={{
                            fontSize: '2.8rem',
                            fontWeight: 900,
                            color: 'white',
                            letterSpacing: '-1.5px',
                            fontFamily: 'var(--font-heading)'
                        }}>
                            1-WiFi
                        </span>
                    </a>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '350px' }}>
                        Bringing blazing fast broadband and unmatched reliability directly to your home and business.
                    </p>
                </div>

                <div style={{ flex: '1 1 200px' }}>
                    <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                        <li><a href="#home" onClick={(e) => { e.preventDefault(); setLegalView(null); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Home</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); setLegalView(null); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>About Us</a></li>
                        <li><a href="#plans" onClick={(e) => { e.preventDefault(); setLegalView(null); document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Plans & Pricing</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); setLegalView(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Contact Us</a></li>
                        <li><a href="http://user.1wifi.in" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', textDecoration: 'none' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Customer Login</a></li>
                    </ul>
                </div>

                <div style={{ flex: '1 1 200px' }}>
                    <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Legal</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                        <li><a onClick={(e) => { e.preventDefault(); setLegalView('terms'); window.scrollTo(0, 0); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Terms & Condition</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setLegalView('privacy'); window.scrollTo(0, 0); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Privacy Policy</a></li>
                        <li><a onClick={(e) => { e.preventDefault(); setLegalView('refund'); window.scrollTo(0, 0); }} style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Refund Policy</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ padding: '2rem 0', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.95rem' }}>
                <div className="container">
                    <p>&copy; 2026 1-WiFi Broadband Services. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
