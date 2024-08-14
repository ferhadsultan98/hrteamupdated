import React, { useState } from 'react';
import './Sevensection.css';

const Sevensection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showWaitingMessage, setShowWaitingMessage] = useState(false);

    const toggleChatBox = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const closeChatBox = () => {
        setIsOpen(false);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Generate a random number for the message queue
            const queueNumber = Math.floor(Math.random() * 10) + 1;
            const isFirstMessage = messages.length === 0;

            setMessages([...messages, { text: input, type: 'user', queueNumber }]);
            setInput('');
            setShowWaitingMessage(true);
            
            // Simulate waiting for a response
            setTimeout(() => {
                if (isFirstMessage) {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: 'Mesajınıza yanıt verene kadar bekleyin...', type: 'bot' }
                    ]);
                } else {
                    setMessages(prevMessages => [
                        ...prevMessages,
                        { text: `Sıra numaranız: ${queueNumber}. Sizi unutmadık, yanıt için lütfen bekleyin...`, type: 'bot' }
                    ]);
                }
                setShowWaitingMessage(false);
            }, 2000); // 2 saniye bekle
        }
    };

    return (
        <div className="chat-widget">
            {!isOpen && (
                <button className="chat-button" onClick={toggleChatBox}>
                    💬
                </button>
            )}
            {isOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        Canlı Sohbet
                        <button className="close-button" onClick={closeChatBox} aria-label="Close chat">
                            &times;
                        </button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.type}`}
                            >
                                <div className="message-icon">
                                    {message.type === 'user' ? '👤' : '🤖'}
                                </div>
                                <div className="message-text">
                                    {message.text}
                                </div>
                            </div>
                        ))}
                        {showWaitingMessage && (
                            <div className="waiting-message">
                                Mesajınıza yanıt verene kadar bekleyin...
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleSubmit} className="messagebuttons">
                        <input
                            type="text"
                            className="chat-input"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Mesajınızı yazın..."
                        />
                        <button type="submit">Send</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Sevensection;
