import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingActions() {
    return (
        <>
            {/* Phone - Left */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+918953200770"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '30px',
                    zIndex: 900,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#3182CE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,255,255,0.2)'
                }}
            >
                <i className="fa-solid fa-phone"></i>
            </motion.a>

            {/* WhatsApp - Right */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/918953200770"
                target="_blank"
                rel="noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 900,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.8rem',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,255,255,0.2)'
                }}
            >
                <i className="fa-brands fa-whatsapp"></i>
            </motion.a>
        </>

    );
}
