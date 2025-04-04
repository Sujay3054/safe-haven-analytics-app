
import React from 'react';
import Layout from '@/components/Layout';
import SafetyAlerts from '@/components/SafetyAlerts';
import EmergencySOS from '@/components/EmergencySOS';
import { safetyTips } from '@/utils/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info } from 'lucide-react';

const Alerts = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Community Safety Alerts</h1>
        <p className="text-muted-foreground">Stay informed about safety incidents and help keep your community safe</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SafetyAlerts />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info size={18} className="text-suraksha-blue" />
                Safety Tips
              </CardTitle>
              <CardDescription>
                Expert advice to stay safe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mt-2">
                {safetyTips.slice(0, 5).map((tip, index) => (
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
          
          <Card className="bg-red-50 border-red-100">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={18} className="text-red-500" />
                <h3 className="font-medium">Report Responsibly</h3>
              </div>
              <p className="text-sm text-gray-700">
                Please ensure all safety alerts are accurate and verified. False reports may lead to unnecessary panic and are punishable by law.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <EmergencySOS />
    </Layout>
  );
};

export default Alerts;
