import React, { useState } from 'react';

const CaseReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const mockReports = [
    { id: 'RPT-001', date: '2024-01-15', location: 'Downtown District', summary: 'Suspicious activity reported', status: 'Under Investigation', priority: 'High' },
    { id: 'RPT-002', date: '2024-01-14', location: 'Residential Area', summary: 'Noise complaint from neighbor', status: 'Resolved', priority: 'Low' },
    { id: 'RPT-003', date: '2024-01-14', location: 'Commercial District', summary: 'Theft reported at electronics store', status: 'Under Investigation', priority: 'High' },
    { id: 'RPT-004', date: '2024-01-13', location: 'Park Area', summary: 'Vandalism to public property', status: 'Closed', priority: 'Medium' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' };
      case 'Under Investigation': return { bg: '#fef3c7', color: '#92400e', border: '#fde68a' };
      case 'Closed': return { bg: '#f1f5f9', color: '#475569', border: '#e2e8f0' };
      default: return { bg: '#dbeafe', color: '#1e40af', border: '#bfdbfe' };
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return { bg: '#fecaca', color: '#dc2626', border: '#fca5a5' };
      case 'Medium': return { bg: '#fef3c7', color: '#d97706', border: '#fde68a' };
      case 'Low': return { bg: '#dcfce7', color: '#166534', border: '#bbf7d0' };
      default: return { bg: '#f1f5f9', color: '#475569', border: '#e2e8f0' };
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
          }}>
            📋
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
              Case Reports
            </h1>
            <p style={{ 
              color: '#64748b', 
              fontSize: '16px', 
              margin: '5px 0 0 0',
              fontWeight: '500'
            }}>
              Manage and track all citizen reports
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '25px',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
              Search Reports
            </label>
            <input
              type="text"
              placeholder="Search by ID, location, or summary..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                background: 'rgba(255, 255, 255, 0.8)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
              Filter by Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '14px',
                background: 'rgba(255, 255, 255, 0.8)',
                cursor: 'pointer'
              }}
            >
              <option value="all">All Status</option>
              <option value="Under Investigation">Under Investigation</option>
              <option value="Resolved">Resolved</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '25px', borderBottom: '1px solid rgba(226, 232, 240, 0.5)' }}>
          <h2 style={{ 
            color: '#1e293b', 
            fontSize: '20px', 
            fontWeight: '700',
            margin: '0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '18px' }}>📊</span>
            Reports ({mockReports.length})
          </h2>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(248, 250, 252, 0.8)' }}>
                {['ID', 'Date', 'Location', 'Summary', 'Status', 'Priority', 'Actions'].map((header) => (
                  <th key={header} style={{
                    padding: '20px 25px',
                    textAlign: 'left',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderBottom: '1px solid rgba(226, 232, 240, 0.5)'
                  }}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockReports.map((report, index) => {
                const statusColors = getStatusColor(report.status);
                const priorityColors = getPriorityColor(report.priority);
                
                return (
                  <tr key={report.id} style={{
                    borderBottom: '1px solid rgba(226, 232, 240, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(248, 250, 252, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}>
                    <td style={{ padding: '20px 25px', fontWeight: '600', color: '#1e293b' }}>
                      {report.id}
                    </td>
                    <td style={{ padding: '20px 25px', color: '#64748b' }}>
                      {new Date(report.date).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '20px 25px', color: '#64748b' }}>
                      {report.location}
                    </td>
                    <td style={{ padding: '20px 25px', color: '#64748b', maxWidth: '200px' }}>
                      <div style={{ 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap' 
                      }}>
                        {report.summary}
                      </div>
                    </td>
                    <td style={{ padding: '20px 25px' }}>
                      <span style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        background: statusColors.bg,
                        color: statusColors.color,
                        border: `1px solid ${statusColors.border}`
                      }}>
                        {report.status}
                      </span>
                    </td>
                    <td style={{ padding: '20px 25px' }}>
                      <span style={{
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        background: priorityColors.bg,
                        color: priorityColors.color,
                        border: `1px solid ${priorityColors.border}`
                      }}>
                        {report.priority}
                      </span>
                    </td>
                    <td style={{ padding: '20px 25px' }}>
                      <button style={{
                        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-1px)';
                        e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.3)';
                      }}>
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaseReports;