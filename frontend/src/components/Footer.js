import React from 'react';

const Footer = () => {
  const styles = {
    container: { backgroundColor: '#fff', borderTop: '1px solid #e5e7eb', padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    text: { color: '#6b7280', fontSize: 12 }
  };

  return (
    <div style={styles.container}>
      <span style={styles.text}>© 2025 Citizen Voice App</span>
    </div>
  );
};

export default Footer;
