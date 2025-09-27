import React, { useState } from 'react';

const ReportsGenerator = () => {
  const [formData, setFormData] = useState({
    dateRange: { start: '', end: '' },
    reportType: '',
    format: 'PDF',
    includeCharts: true,
    includeInsights: true
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState(null);

  const reportTypes = [
    'Weekly Summary',
    'Monthly Analysis', 
    'Crime Category Breakdown',
    'Response Time Analysis',
    'Officer Performance',
    'Citizen Satisfaction',
    'AI Insights Report'
  ];

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedReport({
        id: `RPT-${Date.now()}`,
        title: `${formData.reportType} Report`,
        generatedAt: new Date().toISOString(),
        size: '2.4 MB',
        pages: 12
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            borderRadius: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            boxShadow: '0 8px 25px rgba(245, 158, 11, 0.3)'
          }}>
            📄
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
              Reports Generator
            </h1>
            <p style={{ 
              color: '#64748b', 
              fontSize: '16px', 
              margin: '5px 0 0 0',
              fontWeight: '500'
            }}>
              Generate comprehensive reports with AI-powered insights
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
        {/* Configuration Form */}
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
            <span style={{ fontSize: '18px' }}>⚙️</span>
            Report Configuration
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Date Range */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Date Range
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input
                  type="date"
                  value={formData.dateRange.start}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateRange: { ...prev.dateRange, start: e.target.value } }))}
                  style={{
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease'
                  }}
                />
                <input
                  type="date"
                  value={formData.dateRange.end}
                  onChange={(e) => setFormData(prev => ({ ...prev, dateRange: { ...prev.dateRange, end: e.target.value } }))}
                  style={{
                    padding: '12px 16px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '14px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Report Type */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Report Type
              </label>
              <select
                value={formData.reportType}
                onChange={(e) => setFormData(prev => ({ ...prev, reportType: e.target.value }))}
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
                <option value="">Select report type...</option>
                {reportTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Format */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                Output Format
              </label>
              <select
                value={formData.format}
                onChange={(e) => setFormData(prev => ({ ...prev, format: e.target.value }))}
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
                <option value="PDF">PDF Document</option>
                <option value="Excel">Excel Spreadsheet</option>
                <option value="Word">Word Document</option>
                <option value="CSV">CSV Data</option>
              </select>
            </div>

            {/* Options */}
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '12px' }}>
                Report Options
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.includeCharts}
                    onChange={(e) => setFormData(prev => ({ ...prev, includeCharts: e.target.checked }))}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <span style={{ fontSize: '14px', color: '#64748b' }}>Include charts and graphs</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.includeInsights}
                    onChange={(e) => setFormData(prev => ({ ...prev, includeInsights: e.target.checked }))}
                    style={{ transform: 'scale(1.2)' }}
                  />
                  <span style={{ fontSize: '14px', color: '#64748b' }}>Include AI insights and recommendations</span>
                </label>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerateReport}
              disabled={!formData.reportType || !formData.dateRange.start || !formData.dateRange.end || isGenerating}
              style={{
                width: '100%',
                padding: '16px 24px',
                background: isGenerating ? '#9ca3af' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isGenerating ? 'none' : '0 4px 15px rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                if (!isGenerating) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isGenerating) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
                }
              }}
            >
              {isGenerating ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #ffffff',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Generating Report...
                </>
              ) : (
                <>
                  <span style={{ fontSize: '18px' }}>📊</span>
                  Generate Report
                </>
              )}
            </button>
          </div>
        </div>

        {/* Report Preview */}
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
            <span style={{ fontSize: '18px' }}>👁️</span>
            Report Preview
          </h2>
          
          {generatedReport ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid #bbf7d0',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  ✅
                </div>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#166534', fontSize: '16px', fontWeight: '600' }}>
                    Report Generated Successfully!
                  </h3>
                  <p style={{ margin: '0', color: '#166534', fontSize: '12px' }}>
                    Your report is ready for download
                  </p>
                </div>
              </div>

              <div style={{
                background: 'rgba(248, 250, 252, 0.8)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid rgba(226, 232, 240, 0.5)'
              }}>
                <h3 style={{ margin: '0 0 15px 0', color: '#1e293b', fontSize: '16px', fontWeight: '600' }}>
                  Report Details
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '14px' }}>
                  <div><strong>ID:</strong> {generatedReport.id}</div>
                  <div><strong>Format:</strong> {formData.format}</div>
                  <div><strong>Size:</strong> {generatedReport.size}</div>
                  <div><strong>Pages:</strong> {generatedReport.pages}</div>
                </div>
              </div>

              <button style={{
                width: '100%',
                padding: '12px 20px',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
              }}>
                <span style={{ fontSize: '16px' }}>📥</span>
                Download Report
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>📄</div>
              <h3 style={{ color: '#64748b', fontSize: '16px', margin: '0 0 8px 0' }}>
                No report generated
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0' }}>
                Configure your report settings and click "Generate Report" to create a new report.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ReportsGenerator;