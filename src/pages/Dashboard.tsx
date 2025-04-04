
import React from 'react';
import Layout from '@/components/Layout';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import EmergencySOS from '@/components/EmergencySOS';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { emergencyNumbers } from '@/utils/mockData';
import { Phone } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Safety Analytics Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {emergencyNumbers.map((service, index) => (
          <Card key={index}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm text-muted-foreground">{service.name}</p>
                <p className="text-xl font-bold">{service.number}</p>
              </div>
              <Phone className="h-8 w-8 p-1.5 bg-primary/10 text-primary rounded-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      <AnalyticsDashboard />
      <EmergencySOS />
    </Layout>
  );
};

export default Dashboard;
