import React from 'react';

const Overview = () => {
  const StatCard = ({ title, value, subtitle, icon, color, trend }) => (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0',
      transition: 'all 0.2s ease'
    }}
    onMouseEnter={(e) => {
      e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div>
          <p style={{ 
            color: '#64748b', 
            fontSize: '14px', 
            fontWeight: '500',
            margin: '0 0 8px 0'
          }}>
            {title}
          </p>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: '700', 
            color: color,
            margin: '0 0 4px 0'
          }}>
            {value}
          </div>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: '0' }}>{subtitle}</p>
        </div>
        <div style={{
          width: '40px',
          height: '40px',
          background: color,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          color: 'white'
        }}>
          {icon}
        </div>
      </div>
      
      {trend && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '12px',
          color: trend > 0 ? '#10b981' : '#ef4444',
          fontWeight: '500'
        }}>
          <span>{trend > 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(trend)}% from last period</span>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Header Section */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          color: '#1e293b', 
          fontSize: '28px', 
          fontWeight: '700',
          margin: '0 0 8px 0'
        }}>
          Operations Dashboard
        </h1>
        <p style={{ 
          color: '#64748b', 
          fontSize: '16px', 
          margin: '0',
          fontWeight: '400'
        }}>
          Monitor police operations and citizen reports
        </p>
      </div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '25px',
        marginBottom: '40px'
      }}>
        <StatCard
          title="Total Reports"
          value="1,247"
          subtitle="All time records"
          icon="📋"
          color="#3b82f6"
          trend={12}
        />
        <StatCard
          title="This Week"
          value="120"
          subtitle="Recent activity"
          icon="📈"
          color="#10b981"
          trend={8}
        />
        <StatCard
          title="Resolved Cases"
          value="892"
          subtitle="Successfully closed"
          icon="✅"
          color="#f59e0b"
          trend={15}
        />
        <StatCard
          title="Under Investigation"
          value="298"
          subtitle="Active cases"
          icon="🔍"
          color="#8b5cf6"
          trend={-3}
        />
      </div>

      {/* Quick Actions */}
      <div style={{ 
        background: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0',
        marginBottom: '24px'
      }}>
        <h2 style={{ 
          color: '#1e293b', 
          fontSize: '18px', 
          fontWeight: '600',
          margin: '0 0 16px 0'
        }}>
          Quick Actions
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '12px' 
        }}>
          {[
            { name: 'New Report', icon: '📝', color: '#3b82f6' },
            { name: 'Generate Report', icon: '📊', color: '#10b981' },
            { name: 'View Analytics', icon: '📈', color: '#8b5cf6' },
            { name: 'System Settings', icon: '⚙️', color: '#f59e0b' }
          ].map((action, index) => (
            <button
              key={index}
              style={{
                background: action.color,
                color: 'white',
                padding: '12px 16px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            >
              <span style={{ fontSize: '14px' }}>{action.icon}</span>
              {action.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ 
        background: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0'
      }}>
        <h2 style={{ 
          color: '#1e293b', 
          fontSize: '18px', 
          fontWeight: '600',
          margin: '0 0 16px 0'
        }}>
          Recent Activity
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { time: '2 minutes ago', action: 'New case report submitted', type: 'Report', status: 'pending' },
            { time: '15 minutes ago', action: 'Case RPT-001 updated', type: 'Update', status: 'processing' },
            { time: '1 hour ago', action: 'Weekly report generated', type: 'Report', status: 'completed' },
            { time: '2 hours ago', action: 'System backup completed', type: 'System', status: 'completed' }
          ].map((activity, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f8fafc',
              borderRadius: '6px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: activity.status === 'completed' ? '#10b981' : 
                          activity.status === 'processing' ? '#f59e0b' : '#3b82f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: 'white'
              }}>
                {activity.type === 'Report' ? '📋' : activity.type === 'Update' ? '🔄' : '⚙️'}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: '0 0 4px 0', fontWeight: '500', color: '#1e293b', fontSize: '14px' }}>{activity.action}</p>
                <p style={{ margin: '0', fontSize: '12px', color: '#64748b' }}>{activity.time}</p>
              </div>
              <div style={{
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '10px',
                fontWeight: '500',
                background: activity.status === 'completed' ? '#dcfce7' : 
                          activity.status === 'processing' ? '#fef3c7' : '#dbeafe',
                color: activity.status === 'completed' ? '#166534' : 
                      activity.status === 'processing' ? '#92400e' : '#1e40af'
              }}>
                {activity.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;