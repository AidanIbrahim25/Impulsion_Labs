import React from 'react';
import ChatBox from '../components/ChatBox';

const Feedback = () => {
  const containerStyle = { display: 'flex', flexDirection: 'column', height: '100%', padding: 16 };
  const titleStyle = { fontSize: 16, fontWeight: 600, marginBottom: 12 };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Submit Your Feedback</h2>
      <div style={{ flex: 1 }}>
        <ChatBox />
      </div>
    </div>
  );
};

export default Feedback;
