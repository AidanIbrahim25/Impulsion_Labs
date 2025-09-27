import React, { useState } from 'react';
import Message from './Message';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: "Hello! I'm here to help you submit feedback about your city.", sender: 'assistant', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ms', name: 'Malay', flag: '🇲🇾' },
    { code: 'zh', name: 'Mandarin', flag: '🇨🇳' },
    { code: 'ta', name: 'Tamil', flag: '🇮🇳' }
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const newMsg = { id: Date.now().toString(), text: inputText, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }
  };

  const containerStyle = { display: 'flex', flexDirection: 'column', height: '100%' };
  const messagesStyle = { flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column-reverse' };
  const inputContainerStyle = { borderTop: '1px solid #e5e7eb', padding: 16, display: 'flex', gap: 12 };
  const textAreaStyle = { flex: 1, border: '1px solid #d1d5db', borderRadius: 8, padding: 8, fontSize: 14, resize: 'none' };
  const buttonStyle = { backgroundColor: '#2563eb', color: '#fff', padding: '8px 16px', borderRadius: 8, fontWeight: 500, cursor: 'pointer' };
  const buttonDisabledStyle = { ...buttonStyle, backgroundColor: '#d1d5db', cursor: 'not-allowed' };

  return (
    <div style={containerStyle}>
      <div style={messagesStyle}>
        {messages.map(msg => <Message key={msg.id} {...msg} />)}
      </div>

      <div style={inputContainerStyle}>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your feedback..."
          style={textAreaStyle}
          rows={3}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim()}
          style={!inputText.trim() ? buttonDisabledStyle : buttonStyle}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
