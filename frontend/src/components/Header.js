import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    container: { backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    title: { fontSize: 20, fontWeight: 600, color: '#111827' },
    subtitle: { fontSize: 14, color: '#6b7280' },
    navLink: { color: '#374151', marginLeft: 12, textDecoration: 'none', fontWeight: 500 },
    navLinkHover: { color: '#2563eb' }
  };

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Citizen Voice App</h1>
        <p style={styles.subtitle}>Share feedback to improve our city</p>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
        <Link to="/feedback" style={styles.navLink}>Feedback</Link>
      </nav>
    </div>
  );
};

export default Header;
