
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, MapPin, Clock, UserCircle, Plus, Flag, Shield, Check } from 'lucide-react';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

// Mock alerts data
const recentAlerts = [
  {
    id: 1,
    type: 'harassment',
    location: 'Majnu Ka Tilla, Delhi',
    time: '2 hours ago',
    reportedBy: 'Anonymous',
    description: 'Group of men following women near the metro station.',
    severity: 'high',
  },
  {
    id: 2,
    type: 'unsafe',
    location: 'Hauz Khas Village',
    time: '5 hours ago',
    reportedBy: 'Deepika S.',
    description: 'Street lights not working on the main road, very dark.',
    severity: 'medium',
  },
  {
    id: 3,
    type: 'theft',
    location: 'Lajpat Nagar Market',
    time: '1 day ago',
    reportedBy: 'Ritu K.',
    description: 'Phone snatching incident near the market entrance.',
    severity: 'medium',
  },
  {
    id: 4,
    type: 'harassment',
    location: 'Karol Bagh Metro',
    time: '2 days ago',
    reportedBy: 'Anonymous',
    description: 'Verbal harassment at the ticket counter.',
    severity: 'low',
  },
];

// Verified safe areas
const safeAreas = [
  {
    id: 1,
    location: 'Select Citywalk Mall, Saket',
    features: 'Security, CCTV, Women\'s Helpdesk',
    verified: true,
  },
  {
    id: 2,
    location: 'Khan Market',
    features: 'Police Patrol, Well-lit Area',
    verified: true,
  },
  {
    id: 3,
    location: 'Cyber Hub, Gurgaon',
    features: 'Security, CCTV, 24/7 Surveillance',
    verified: true,
  },
];

const SafetyAlerts = () => {
  const [isReporting, setIsReporting] = useState(false);
  const [report, setReport] = useState({ description: '', type: 'harassment', location: '' });

  const handleReportSubmit = () => {
    // Validation
    if (!report.description || !report.location) {
      toast.error('Please provide both description and location');
      return;
    }

    // In a real app, submit to server
    toast.success('Alert reported successfully', {
      description: 'Thank you for helping keep the community safe.',
      duration: 5000,
    });
    
    setIsReporting(false);
    setReport({ description: '', type: 'harassment', location: '' });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-orange-100 text-orange-700';
      case 'low':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getAlertTypeIcon = (type: string) => {
    switch (type) {
      case 'harassment':
        return <AlertTriangle size={16} className="text-red-500" />;
      case 'unsafe':
        return <MapPin size={16} className="text-orange-500" />;
      case 'theft':
        return <Flag size={16} className="text-yellow-500" />;
      default:
        return <AlertTriangle size={16} />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="text-suraksha-orange" />
          Community Safety Alerts
        </CardTitle>
        <CardDescription>
          Recent safety alerts and verified safe areas reported by the community
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="alerts">Recent Alerts</TabsTrigger>
            <TabsTrigger value="safe">Safe Areas</TabsTrigger>
          </TabsList>
          <TabsContent value="alerts" className="mt-4 space-y-4">
            {isReporting ? (
              <div className="space-y-4 p-4 border border-dashed rounded-lg">
                <h3 className="font-medium">Report a Safety Concern</h3>
                <div className="grid gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Alert Type</label>
                    <div className="flex gap-2">
                      {['harassment', 'unsafe', 'theft'].map(type => (
                        <Button
                          key={type}
                          type="button"
                          variant={report.type === type ? "default" : "outline"}
                          size="sm"
                          onClick={() => setReport({ ...report, type })}
                          className="capitalize"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Location</label>
                    <input
                      className="w-full p-2 border rounded"
                      placeholder="Enter location"
                      value={report.location}
                      onChange={e => setReport({ ...report, location: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Description</label>
                    <Textarea
                      placeholder="Describe the incident or safety concern"
                      value={report.description}
                      onChange={e => setReport({ ...report, description: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end gap-2 mt-2">
                    <Button variant="ghost" onClick={() => setIsReporting(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleReportSubmit}>
                      Submit Report
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {recentAlerts.map(alert => (
                  <div key={alert.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1">
                        {getAlertTypeIcon(alert.type)}
                        <span className="font-medium capitalize">{alert.type}</span>
                      </div>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full", getSeverityColor(alert.severity))}>
                        {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{alert.description}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{alert.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UserCircle size={12} />
                        <span>{alert.reportedBy}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {!isReporting && (
              <Button 
                variant="outline" 
                className="w-full border-dashed"
                onClick={() => setIsReporting(true)}
              >
                <Plus size={16} className="mr-2" />
                Report Alert
              </Button>
            )}
          </TabsContent>
          <TabsContent value="safe" className="mt-4 space-y-4">
            {safeAreas.map(area => (
              <div key={area.id} className="border rounded-lg p-3 bg-green-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-green-600" />
                  <span className="font-medium">{area.location}</span>
                  {area.verified && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Check size={10} />
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{area.features}</p>
              </div>
            ))}
            <Button 
              variant="outline" 
              className="w-full border-dashed"
              onClick={() => toast.info('Feature coming soon!')}
            >
              <Plus size={16} className="mr-2" />
              Suggest Safe Area
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground text-center">
        Safety data is community-sourced and verified by moderators
      </CardFooter>
    </Card>
  );
};

export default SafetyAlerts;
