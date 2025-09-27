import React from 'react';

const CitizenTransparency = () => {
  const stats = [
    { label: 'Cases This Month', value: '456', icon: '📊', color: '#3b82f6' },
    { label: 'Resolved Cases', value: '389', icon: '✅', color: '#10b981' },
    { label: 'Active Cases', value: '67', icon: '🔍', color: '#f59e0b' },
    { label: 'Avg Response Time', value: '4.2h', icon: '⚡', color: '#8b5cf6' }
  ];

  const categories = [
    { name: 'Traffic Incidents', percentage: 35, count: 160, color: '#3b82f6' },
    { name: 'Property Crimes', percentage: 28, count: 128, color: '#10b981' },
    { name: 'Public Safety', percentage: 20, count: 91, color: '#f59e0b' },
    { name: 'Community Issues', percentage: 17, count: 77, color: '#8b5cf6' }
  ];

  const safetyTips = [
    { icon: '🚨', title: 'Report Suspicious Activity', description: 'If you see something, say something. Report suspicious activity to help keep our community safe.' },
    { icon: '📞', title: 'Emergency Contacts', description: 'For emergencies, call 911. For non-emergencies, call our dispatch at (555) 123-4567.' },
    { icon: '👥', title: 'Community Programs', description: 'Join our community watch programs and neighborhood safety initiatives.' }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
          }}>
            👁️
          </div>
          <div>
            <h1 style={{ 
              color: '#1e293b', 
              fontSize: '32px', 
              fontWeight: '800',
              margin: '0',
              background: 'linear-gradient(135deg, #1e293b, #475569)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Citizen Transparency Dashboard
            </h1>
            <p style={{ 
              color: '#64748b', 
              fontSize: '16px', 
              margin: '5px 0 0 0',
              fontWeight: '500'
            }}>
              Public information about police operations and community safety
            </p>
          </div>
        </div>
      </div>

      {/* Transparency Notice */}
      <div style={{
        background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid #93c5fd',
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          flexShrink: 0
        }}>
          ℹ️
        </div>
        <div>
          <h3 style={{ margin: '0 0 8px 0', color: '#1e40af', fontSize: '16px', fontWeight: '600' }}>
            Transparency Notice
          </h3>
          <p style={{ margin: '0', color: '#1e40af', fontSize: '14px', lineHeight: '1.5' }}>
            This dashboard provides anonymized, aggregated data about police operations. All personal information has been removed to protect citizen privacy while maintaining transparency about public safety operations.
          </p>
        </div>
      </div>

      {/* Key Statistics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '40px'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            padding: '25px',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 15px auto',
              boxShadow: `0 4px 15px ${stat.color}30`
            }}>
              {stat.icon}
            </div>
            <div style={{ 
              fontSize: '28px', 
              fontWeight: '800', 
              color: stat.color,
              marginBottom: '8px'
            }}>
              {stat.value}
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: '#64748b', 
              fontWeight: '600'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Category Breakdown */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        marginBottom: '30px'
      }}>
        <h2 style={{ 
          color: '#1e293b', 
          fontSize: '20px', 
          fontWeight: '700',
          margin: '0 0 25px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '18px' }}>📊</span>
          Case Categories
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {categories.map((category, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '15px',
              background: 'rgba(248, 250, 252, 0.8)',
              borderRadius: '12px',
              border: '1px solid rgba(226, 232, 240, 0.5)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(248, 250, 252, 1)';
              e.target.style.borderColor = '#cbd5e1';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(248, 250, 252, 0.8)';
              e.target.style.borderColor = 'rgba(226, 232, 240, 0.5)';
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: category.color,
                borderRadius: '50%',
                flexShrink: 0
              }}></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '14px' }}>{category.name}</span>
                  <span style={{ color: '#64748b', fontSize: '12px' }}>{category.count} cases</span>
                </div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: '#e2e8f0',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${category.percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                    borderRadius: '3px',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: category.color,
                minWidth: '35px',
                textAlign: 'right'
              }}>
                {category.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Information */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {/* Safety Tips */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h2 style={{ 
            color: '#1e293b', 
            fontSize: '20px', 
            fontWeight: '700',
            margin: '0 0 25px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '18px' }}>🛡️</span>
            Community Safety Tips
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {safetyTips.map((tip, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '15px',
                background: 'rgba(248, 250, 252, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.5)'
              }}>
                <div style={{
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  {tip.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                    {tip.title}
                  </h4>
                  <p style={{ margin: '0', fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h2 style={{ 
            color: '#1e293b', 
            fontSize: '20px', 
            fontWeight: '700',
            margin: '0 0 25px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '18px' }}>📞</span>
            Contact Information
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '🏢', title: 'Police Department', details: ['123 Main Street', 'City, State 12345', 'Phone: (555) 123-4567'] },
              { icon: '🚨', title: 'Emergency', details: ['Call 911 for immediate assistance'] },
              { icon: '📞', title: 'Non-Emergency', details: ['Call (555) 123-4567 for non-urgent matters'] },
              { icon: '💻', title: 'Online Reporting', details: ['Visit our website to file reports online'] }
            ].map((contact, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                padding: '15px',
                background: 'rgba(248, 250, 252, 0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.5)'
              }}>
                <div style={{
                  width: '35px',
                  height: '35px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  {contact.icon}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>
                    {contact.title}
                  </h4>
                  {contact.details.map((detail, idx) => (
                    <p key={idx} style={{ margin: '0 0 3px 0', fontSize: '12px', color: '#64748b' }}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Notice */}
      <div style={{
        background: 'rgba(248, 250, 252, 0.8)',
        padding: '20px',
        borderRadius: '15px',
        border: '1px solid rgba(226, 232, 240, 0.5)',
        marginTop: '30px',
        textAlign: 'center'
      }}>
        <p style={{ 
          margin: '0', 
          fontSize: '12px', 
          color: '#64748b', 
          lineHeight: '1.5'
        }}>
          This dashboard is updated daily with anonymized data. For the most current information, 
          contact the Police Department directly. All data is subject to verification and may be 
          updated as investigations progress.
        </p>
      </div>
    </div>
  );
};

export default CitizenTransparency;