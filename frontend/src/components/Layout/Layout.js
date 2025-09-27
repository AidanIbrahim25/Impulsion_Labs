import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  const navigation = [
    { 
      name: 'Overview', 
      href: '/', 
      icon: '📊'
    },
    { 
      name: 'Case Reports', 
      href: '/case-reports', 
      icon: '📋'
    },
    { 
      name: 'Analytics', 
      href: '/trends', 
      icon: '📈'
    },
    { 
      name: 'Reports', 
      href: '/reports-generator', 
      icon: '📄'
    },
    { 
      name: 'Public Portal', 
      href: '/citizen-transparency', 
      icon: '🌐'
    },
  ];

  return (
    <div style={{ 
      display: 'flex', 
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: '240px', 
        background: '#1e293b',
        color: 'white', 
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid #334155'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#3b82f6',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px'
            }}>
              🚔
            </div>
            <div>
              <h2 style={{ 
                margin: '0', 
                fontSize: '16px', 
                fontWeight: '600',
                color: 'white'
              }}>
                Police System
              </h2>
              <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#94a3b8' }}>
                Operations Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ 
          padding: '16px 0',
          flex: 1
        }}>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                textDecoration: 'none',
                color: isActive ? 'white' : '#cbd5e1',
                background: isActive ? '#3b82f6' : 'transparent',
                borderLeft: isActive ? '3px solid #60a5fa' : '3px solid transparent',
                transition: 'all 0.2s ease',
                fontSize: '14px',
                fontWeight: '500'
              })}
              onMouseEnter={(e) => {
                if (!e.target.closest('a').classList.contains('active')) {
                  e.target.closest('a').style.background = '#334155';
                  e.target.closest('a').style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.target.closest('a').classList.contains('active')) {
                  e.target.closest('a').style.background = 'transparent';
                  e.target.closest('a').style.color = '#cbd5e1';
                }
              }}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #334155',
          background: '#0f172a'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '4px'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              background: '#10b981',
              borderRadius: '50%'
            }}></div>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>System Online</span>
          </div>
          <div style={{ fontSize: '10px', color: '#64748b' }}>
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ 
        flex: 1, 
        background: '#f8fafc',
        minHeight: '100vh',
        overflow: 'auto'
      }}>
        <div style={{ padding: '24px' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;