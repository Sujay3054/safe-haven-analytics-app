
import React from 'react';
import Layout from '@/components/Layout';
import SafetyMap from '@/components/SafetyMap';
import EmergencySOS from '@/components/EmergencySOS';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { highRiskAreas } from '@/utils/mockData';

const Map = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Safety Map</h1>
            <p className="text-muted-foreground">View safe routes and safety alerts around you</p>
          </div>
          
          <SafetyMap />
        </div>
        
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="text-suraksha-orange" size={18} />
                High Risk Areas
              </CardTitle>
              <CardDescription>
                Areas with recent safety incidents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mt-2">
                {highRiskAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-2 rounded-md text-sm"
                    style={{
                      backgroundColor: 
                        area.risk === 'very-high' ? 'rgba(254, 226, 226, 0.7)' :
                        area.risk === 'high' ? 'rgba(254, 243, 199, 0.7)' :
                        'rgba(236, 253, 245, 0.7)'
                    }}
                  >
                    <div>
                      <div className="font-medium">
                        {area.name}, {area.city}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {area.incidentCount} incidents reported
                      </div>
                    </div>
                    <div 
                      className="text-xs px-2 py-0.5 rounded-full capitalize"
                      style={{
                        backgroundColor: 
                          area.risk === 'very-high' ? 'rgba(239, 68, 68, 0.2)' :
                          area.risk === 'high' ? 'rgba(245, 158, 11, 0.2)' :
                          'rgba(16, 185, 129, 0.2)',
                        color:
                          area.risk === 'very-high' ? 'rgb(185, 28, 28)' :
                          area.risk === 'high' ? 'rgb(180, 83, 9)' :
                          'rgb(6, 95, 70)'
                      }}
                    >
                      {area.risk.replace('-', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <EmergencySOS />
    </Layout>
  );
};

export default Map;
