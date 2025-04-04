
// Safety analytics data
export const safetyAnalytics = {
  incidents: {
    daily: [12, 15, 8, 10, 14, 18, 22],
    weekly: [78, 92, 84, 105, 120, 98, 112],
    monthly: [320, 380, 420, 390, 360, 410, 450],
  },
  threatTypes: [
    { type: 'Harassment', count: 42, percentage: 35 },
    { type: 'Unsafe Areas', count: 36, percentage: 30 },
    { type: 'Theft', count: 24, percentage: 20 },
    { type: 'Other', count: 18, percentage: 15 },
  ],
  timeOfDay: [
    { time: '6 AM - 12 PM', incidents: 18 },
    { time: '12 PM - 6 PM', incidents: 26 },
    { time: '6 PM - 12 AM', incidents: 45 },
    { time: '12 AM - 6 AM', incidents: 31 },
  ],
  historicalTrends: [
    { month: 'Jan', incidents: 78 },
    { month: 'Feb', incidents: 82 },
    { month: 'Mar', incidents: 76 },
    { month: 'Apr', incidents: 84 },
    { month: 'May', incidents: 90 },
    { month: 'Jun', incidents: 88 },
  ],
};

// High-risk areas in India
export const highRiskAreas = [
  { 
    name: 'Kamla Nagar', 
    city: 'Delhi', 
    risk: 'very-high', 
    incidentCount: 32,
    lat: 28.6696, 
    lng: 77.2055 
  },
  { 
    name: 'Laxmi Nagar', 
    city: 'Delhi', 
    risk: 'high', 
    incidentCount: 28,
    lat: 28.6260, 
    lng: 77.2754 
  },
  { 
    name: 'Rajouri Garden', 
    city: 'Delhi', 
    risk: 'moderate', 
    incidentCount: 21,
    lat: 28.6488, 
    lng: 77.1210 
  },
  { 
    name: 'Gandhi Nagar', 
    city: 'Mumbai', 
    risk: 'high', 
    incidentCount: 26,
    lat: 19.0760, 
    lng: 72.8777 
  },
  { 
    name: 'Koramangala', 
    city: 'Bangalore', 
    risk: 'moderate', 
    incidentCount: 19,
    lat: 12.9352, 
    lng: 77.6245 
  },
];

// Safety tips
export const safetyTips = [
  "Share your location with trusted contacts when traveling",
  "Use the SOS feature if you feel threatened",
  "Avoid poorly lit areas at night",
  "Keep emergency contacts easily accessible",
  "Be aware of your surroundings at all times",
  "Trust your instincts if something doesn't feel right",
  "Use authorized public transport, especially at night",
  "Report suspicious activity to help the community",
];

// Emergency service numbers for India
export const emergencyNumbers = [
  { name: 'Women Helpline', number: '1091' },
  { name: 'Police', number: '100' },
  { name: 'Ambulance', number: '108' },
  { name: 'Domestic Violence Helpline', number: '181' },
];
