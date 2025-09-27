// Mock data for the Police AI Feedback System

export const mockReports = [
  {
    id: 'RPT-001',
    date: '2024-01-15',
    location: 'Downtown District',
    summary: 'Suspicious activity reported near city hall',
    status: 'Under Investigation',
    type: 'Suspicious Activity',
    priority: 'Medium',
    officer: 'Officer Johnson',
    details: 'Citizen reported seeing individuals acting suspiciously around the city hall building at approximately 2:30 PM. No immediate threat observed.'
  },
  {
    id: 'RPT-002',
    date: '2024-01-14',
    location: 'Residential Area - Oak Street',
    summary: 'Noise complaint from neighbor dispute',
    status: 'Resolved',
    type: 'Noise Complaint',
    priority: 'Low',
    officer: 'Officer Smith',
    details: 'Residents reported loud music and shouting from apartment 3B. Officer responded and mediated the situation.'
  },
  {
    id: 'RPT-003',
    date: '2024-01-14',
    location: 'Commercial District',
    summary: 'Theft reported at electronics store',
    status: 'Under Investigation',
    type: 'Theft',
    priority: 'High',
    officer: 'Detective Brown',
    details: 'Store owner reported theft of electronic devices worth approximately $2,500. Security footage being reviewed.'
  },
  {
    id: 'RPT-004',
    date: '2024-01-13',
    location: 'Park Area',
    summary: 'Vandalism to public property',
    status: 'Closed',
    type: 'Vandalism',
    priority: 'Medium',
    officer: 'Officer Davis',
    details: 'Graffiti found on park benches and playground equipment. Case closed after suspect identification.'
  },
  {
    id: 'RPT-005',
    date: '2024-01-13',
    location: 'Highway 101',
    summary: 'Traffic accident with injuries',
    status: 'Under Investigation',
    type: 'Traffic Accident',
    priority: 'High',
    officer: 'Officer Wilson',
    details: 'Two-vehicle collision reported at mile marker 15. One person transported to hospital with minor injuries.'
  },
  {
    id: 'RPT-006',
    date: '2024-01-12',
    location: 'Shopping Mall',
    summary: 'Lost child incident',
    status: 'Resolved',
    type: 'Missing Person',
    priority: 'High',
    officer: 'Officer Martinez',
    details: '5-year-old child separated from parents in shopping mall. Child found safe within 30 minutes.'
  },
  {
    id: 'RPT-007',
    date: '2024-01-12',
    location: 'University Campus',
    summary: 'Drug-related incident',
    status: 'Under Investigation',
    type: 'Drug Offense',
    priority: 'High',
    officer: 'Detective Taylor',
    details: 'Suspicious substance found in campus restroom. Testing in progress.'
  },
  {
    id: 'RPT-008',
    date: '2024-01-11',
    location: 'Residential Area - Pine Street',
    summary: 'Domestic disturbance',
    status: 'Resolved',
    type: 'Domestic Violence',
    priority: 'High',
    officer: 'Officer Anderson',
    details: 'Neighbor reported loud argument and possible physical altercation. Situation de-escalated, no arrests made.'
  }
];

export const mockStats = {
  totalReports: 1247,
  thisWeek: 120,
  thisMonth: 456,
  resolved: 892,
  underInvestigation: 298,
  closed: 57
};

export const mockChartData = {
  reportsOverTime: [
    { month: 'Jan', reports: 120 },
    { month: 'Feb', reports: 135 },
    { month: 'Mar', reports: 142 },
    { month: 'Apr', reports: 128 },
    { month: 'May', reports: 156 },
    { month: 'Jun', reports: 168 },
    { month: 'Jul', reports: 145 },
    { month: 'Aug', reports: 172 },
    { month: 'Sep', reports: 189 },
    { month: 'Oct', reports: 201 },
    { month: 'Nov', reports: 178 },
    { month: 'Dec', reports: 165 }
  ],
  categoryBreakdown: [
    { name: 'Theft', value: 35, count: 245 },
    { name: 'Traffic', value: 25, count: 175 },
    { name: 'Domestic', value: 20, count: 140 },
    { name: 'Vandalism', value: 15, count: 105 },
    { name: 'Other', value: 5, count: 35 }
  ],
  weeklyTrend: [
    { day: 'Mon', reports: 18 },
    { day: 'Tue', reports: 22 },
    { day: 'Wed', reports: 25 },
    { day: 'Thu', reports: 20 },
    { day: 'Fri', reports: 28 },
    { day: 'Sat', reports: 15 },
    { day: 'Sun', reports: 12 }
  ]
};

export const mockAIInsights = [
  {
    title: 'Crime Pattern Analysis',
    description: 'Analysis shows 23% increase in theft-related incidents in the downtown area during evening hours (6-10 PM).',
    confidence: 87,
    type: 'pattern'
  },
  {
    title: 'Resource Allocation Recommendation',
    description: 'Based on historical data, recommend increasing patrol presence in the commercial district on weekends.',
    confidence: 92,
    type: 'recommendation'
  },
  {
    title: 'Predictive Alert',
    description: 'High probability of traffic incidents during rush hour on Highway 101 due to weather conditions.',
    confidence: 78,
    type: 'prediction'
  }
];

export const reportTypes = [
  'All Types',
  'Theft',
  'Traffic Accident',
  'Domestic Violence',
  'Vandalism',
  'Suspicious Activity',
  'Noise Complaint',
  'Drug Offense',
  'Missing Person'
];

export const statusOptions = [
  'All Status',
  'Under Investigation',
  'Resolved',
  'Closed'
];
