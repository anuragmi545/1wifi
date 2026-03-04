import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aiConfig = {
    endpoint: 'https://text.pollinations.ai/openai',
    model: 'openai',
    systemPrompt: `You are Wiva, the friendly and very brief 1-WiFi virtual assistant. 
  Answer the user briefly about broadband and OTT plans.`
};

export default function WivaChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I am Wiva. Want me to check your connection or generate an image for you?", isUser: false }
    ]);
    const [inputState, setInputState] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);

    const parseText = (text) => {
        const imgRegex = /!\[([^\]]*)\]\((https?:\/\/[^\s]+)\)/g;
        if (imgRegex.test(text)) {
            const parts = text.split(imgRegex);
            const elements = [];
            let i = 0;
            text.replace(imgRegex, (match, alt, url, offset) => {
                elements.push(<span key={i++}>{text.substring(i === 0 ? 0 : elements[elements.length - 1]?.offsetEnd, offset)}</span>);
                elements.push(
                    <img key={`img-${i++}`} src={url} alt={alt} style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }} />
                );
                elements[elements.length - 1].offsetEnd = offset + match.length;
            });
            return elements.length > 0 ? elements : text;
        }
        return text;
    };

    const handleSend = async (query = inputState) => {
        if (!query.trim()) return;

        setMessages(prev => [...prev, { text: query, isUser: true }]);
        setInputState('');
        setIsTyping(true);

        const qLower = query.toLowerCase();

        // Explicit Local Intercept to bypass text AI "I'm sorry" refusal completely
        if (qLower.includes('image') || qLower.includes('picture') || qLower.includes('draw') || qLower.includes('generate')) {
            setTimeout(() => {
                const imageMarkdown = `Here is your image: \n\n![Generated Image](https://image.pollinations.ai/prompt/${encodeURIComponent(query)}?width=500&height=500&nologo=true)`;
                setMessages(prev => [...prev, { text: imageMarkdown, isUser: false }]);
                setIsTyping(false);
            }, 1500);
            return;
        }

        try {
            const response = await fetch(aiConfig.endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: aiConfig.model,
                    messages: [
                        { role: "system", content: aiConfig.systemPrompt },
                        { role: "user", content: query }
                    ]
                })
            });

            const data = await response.json();
            let reply = "I couldn't process this right now.";
            if (data.choices && data.choices.length > 0) {
                reply = data.choices[0].message.content;
            }

            setMessages(prev => [...prev, { text: reply, isUser: false }]);
        } catch (e) {
            setMessages(prev => [...prev, { text: "Network error connecting to AI.", isUser: false }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <>
            <button
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '30px',
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--accent-gradient)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.5)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    fontSize: '1.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(217, 70, 239, 0.6)' }}
                />
                <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-robot"}></i>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        style={{
                            position: 'fixed',
                            bottom: '180px',
                            right: '30px',
                            width: '380px',
                            height: '550px',
                            background: 'rgba(15, 23, 42, 0.8)',
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)',
                            zIndex: 1000,
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ background: 'var(--accent-gradient)', padding: '1.25rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                                <i className="fa-solid fa-robot"></i>
                            </div>
                            <div>
                                <h4 style={{ margin: 0, color: 'white', fontSize: '1.15rem', fontFamily: 'var(--font-heading)' }}>Wiva Core</h4>
                                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <span style={{ width: '6px', height: '6px', background: '#0fa968', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 5px #0fa968' }}></span> Active AI
                                </span>
                            </div>
                        </div>

                        <div className="wiva-chat-body" style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        maxWidth: '85%',
                                        padding: '1rem',
                                        borderRadius: '16px',
                                        alignSelf: m.isUser ? 'flex-end' : 'flex-start',
                                        background: m.isUser ? 'var(--accent-gradient)' : 'rgba(255,255,255,0.05)',
                                        color: 'white',
                                        borderBottomRightRadius: m.isUser ? 0 : '16px',
                                        borderBottomLeftRadius: !m.isUser ? 0 : '16px',
                                        border: m.isUser ? 'none' : '1px solid rgba(255,255,255,0.1)',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.5,
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    {parseText(m.text)}
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '16px', borderBottomLeftRadius: 0, border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}
                                >
                                    <i className="fa-solid fa-circle-notch fa-spin" style={{ color: 'var(--accent-cyan)' }}></i> Generating...
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.75rem', background: 'rgba(0,0,0,0.2)' }}>
                            <input
                                value={inputState}
                                onChange={e => setInputState(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask Wiva or Generate Image..."
                                style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', outline: 'none', color: 'white', fontSize: '0.95rem' }}
                            />
                            <button
                                onClick={() => handleSend()}
                                style={{ background: 'var(--accent-gradient)', color: 'white', border: 'none', width: '50px', height: '50px', borderRadius: '12px', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)' }}
                            >
                                <i className="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
