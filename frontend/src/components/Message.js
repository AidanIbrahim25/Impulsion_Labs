import React from 'react';

const Message = ({ text, sender, timestamp }) => {
  const containerStyle = {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: sender === 'user' ? '#2563eb' : '#fff',
    color: sender === 'user' ? '#fff' : '#111827',
    border: sender === 'assistant' ? '1px solid #e5e7eb' : 'none'
  };

  const timestampStyle = {
    fontSize: 10,
    marginTop: 4,
    color: sender === 'user' ? '#bfdbfe' : '#9ca3af'
  };

  return (
    <div style={containerStyle}>
      <p>{text}</p>
      <p style={timestampStyle}>{timestamp.toLocaleTimeString()}</p>
    </div>
  );
};

export default Message;
