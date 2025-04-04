
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import { MapPin, Bell, AlertTriangle, Shield } from 'lucide-react';

// Mock data for analytics
const incidentData = [
  { time: '6 AM', incidents: 12 },
  { time: '9 AM', incidents: 19 },
  { time: '12 PM', incidents: 15 },
  { time: '3 PM', incidents: 22 },
  { time: '6 PM', incidents: 38 },
  { time: '9 PM', incidents: 45 },
  { time: '12 AM', incidents: 32 },
  { time: '3 AM', incidents: 19 }
];

const safetyScore = 78;
const safetyTips = [
  "Stay in well-lit areas when walking at night",
  "Share your location with trusted contacts",
  "Use the emergency SOS feature when feeling unsafe",
  "Report suspicious activity to help the community"
];

const AnalyticsDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <AlertTriangle className="text-suraksha-orange" />
            Incident Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={incidentData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                  formatter={(value) => [`${value} incidents`, 'Count']}
                />
                <Bar dataKey="incidents" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="text-suraksha-purple" />
            Your Safety Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center">
            <div className="relative h-36 w-36 flex items-center justify-center">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5DEFF"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="10"
                  strokeDasharray={`${safetyScore * 2.83} 283`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute text-2xl font-bold">{safetyScore}%</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Based on your activity and location safety
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="text-suraksha-blue" />
            High Alert Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center justify-between p-2 rounded-md bg-red-50">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <span>Kamla Nagar</span>
              </div>
              <span className="text-sm text-red-600">Very High</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-md bg-orange-50">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                <span>Laxmi Nagar</span>
              </div>
              <span className="text-sm text-orange-600">High</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-md bg-yellow-50">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span>Rajouri Garden</span>
              </div>
              <span className="text-sm text-yellow-600">Moderate</span>
            </li>
            <li className="flex items-center justify-between p-2 rounded-md bg-green-50">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Connaught Place</span>
              </div>
              <span className="text-sm text-green-600">Low</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="text-suraksha-orange" />
            Safety Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-suraksha-lightPurple flex items-center justify-center flex-shrink-0">
                  <span className="text-suraksha-purple text-xs font-medium">{index + 1}</span>
                </div>
                <p className="text-sm">{tip}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
