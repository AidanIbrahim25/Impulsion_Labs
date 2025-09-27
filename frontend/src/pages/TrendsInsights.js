import React from 'react';

const TrendsInsights = () => {
  const insights = [
    {
      title: 'Crime Pattern Analysis',
      description: 'Analysis shows 23% increase in theft-related incidents in the downtown area during evening hours (6-10 PM).',
      confidence: 87,
      type: 'pattern',
      icon: '🔍',
      color: '#3b82f6'
    },
    {
      title: 'Resource Allocation Recommendation',
      description: 'Based on historical data, recommend increasing patrol presence in the commercial district on weekends.',
      confidence: 92,
      type: 'recommendation',
      icon: '💡',
      color: '#10b981'
    },
    {
      title: 'Predictive Alert',
      description: 'High probability of traffic incidents during rush hour on Highway 101 due to weather conditions.',
      confidence: 78,
      type: 'prediction',
      icon: '⚠️',
      color: '#f59e0b'
    }
  ];

  const metrics = [
    { label: 'Crime Reduction', value: '23%', trend: '+5%', color: '#10b981' },
    { label: 'Response Time', value: '4.2h', trend: '-12%', color: '#3b82f6' },
    { label: 'Resolution Rate', value: '87%', trend: '+8%', color: '#8b5cf6' },
    { label: 'AI Accuracy', value: '94%', trend: '+2%', color: '#f59e0b' }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
          }}>
            📊
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
              Trends & Insights
            </h1>
            <p style={{ 
              color: '#64748b', 
              fontSize: '16px', 
              margin: '5px 0 0 0',
              fontWeight: '500'
            }}>
              AI-powered analytics and crime pattern analysis
            </p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        marginBottom: '40px'
      }}>
        {metrics.map((metric, index) => (
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
              fontSize: '32px', 
              fontWeight: '800', 
              color: metric.color,
              marginBottom: '8px'
            }}>
              {metric.value}
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: '#64748b', 
              fontWeight: '600',
              marginBottom: '8px'
            }}>
              {metric.label}
            </div>
            <div style={{
              fontSize: '12px',
              color: metric.trend.startsWith('+') ? '#10b981' : '#ef4444',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px'
            }}>
              <span>{metric.trend.startsWith('+') ? '↗' : '↘'}</span>
              {metric.trend}
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ 
          color: '#1e293b', 
          fontSize: '24px', 
          fontWeight: '700',
          margin: '0 0 25px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '20px' }}>🤖</span>
          AI Insights
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '25px' 
        }}>
          {insights.map((insight, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              padding: '25px',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                <div style={{
                  width: '45px',
                  height: '45px',
                  background: `linear-gradient(135deg, ${insight.color}, ${insight.color}dd)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  boxShadow: `0 4px 15px ${insight.color}30`
                }}>
                  {insight.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    margin: '0 0 8px 0', 
                    fontSize: '18px', 
                    fontWeight: '700',
                    color: '#1e293b'
                  }}>
                    {insight.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '600',
                      background: insight.confidence >= 90 ? '#dcfce7' : 
                                insight.confidence >= 80 ? '#fef3c7' : '#fecaca',
                      color: insight.confidence >= 90 ? '#166534' : 
                            insight.confidence >= 80 ? '#92400e' : '#dc2626'
                    }}>
                      {insight.confidence}% confidence
                    </span>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '11px',
                      fontWeight: '600',
                      background: insight.type === 'pattern' ? '#dbeafe' : 
                                insight.type === 'recommendation' ? '#dcfce7' : '#fef3c7',
                      color: insight.type === 'pattern' ? '#1e40af' : 
                            insight.type === 'recommendation' ? '#166534' : '#92400e'
                    }}>
                      {insight.type === 'pattern' ? 'Pattern Analysis' :
                       insight.type === 'recommendation' ? 'Recommendation' : 'Predictive Alert'}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ 
                color: '#64748b', 
                fontSize: '14px', 
                lineHeight: '1.6',
                margin: '0'
              }}>
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Placeholder */}
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
          margin: '0 0 20px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '18px' }}>📈</span>
          Analytics Dashboard
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px dashed #cbd5e1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
            <h3 style={{ color: '#64748b', fontSize: '16px', margin: '0 0 8px 0' }}>Crime Trends Chart</h3>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0' }}>Interactive visualization coming soon</p>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
            padding: '40px',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px dashed #cbd5e1'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>🥧</div>
            <h3 style={{ color: '#64748b', fontSize: '16px', margin: '0 0 8px 0' }}>Category Breakdown</h3>
            <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0' }}>Pie chart visualization</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
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
          fontSize: '24px', 
          fontWeight: '700',
          margin: '0 0 25px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '20px' }}>💡</span>
          AI Recommendations
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { 
              icon: '🚔', 
              title: 'Resource Allocation', 
              description: 'Consider increasing patrol presence in the downtown area during evening hours (6-10 PM) based on recent theft pattern analysis.',
              priority: 'high'
            },
            { 
              icon: '👥', 
              title: 'Community Outreach', 
              description: 'Implement community outreach programs in residential areas showing increased domestic disturbance reports.',
              priority: 'medium'
            },
            { 
              icon: '🌧️', 
              title: 'Weather Alert', 
              description: 'High probability of traffic incidents during rush hour on Highway 101 due to predicted weather conditions.',
              priority: 'high'
            }
          ].map((rec, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
              padding: '20px',
              background: 'rgba(248, 250, 252, 0.8)',
              borderRadius: '15px',
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
                width: '40px',
                height: '40px',
                background: rec.priority === 'high' ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 
                          'linear-gradient(135deg, #f59e0b, #d97706)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px'
              }}>
                {rec.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <h4 style={{ margin: '0', fontSize: '16px', fontWeight: '600', color: '#1e293b' }}>
                    {rec.title}
                  </h4>
                  <span style={{
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '10px',
                    fontWeight: '600',
                    background: rec.priority === 'high' ? '#fecaca' : '#fef3c7',
                    color: rec.priority === 'high' ? '#dc2626' : '#d97706'
                  }}>
                    {rec.priority.toUpperCase()}
                  </span>
                </div>
                <p style={{ margin: '0', fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
                  {rec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendsInsights;