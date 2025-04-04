
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const SafetyMap = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lng: null });
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserLocation = () => {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLoading(false);
          toast.success('Location updated');
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoading(false);
          toast.error('Could not get your location');
        }
      );
    } else {
      setIsLoading(false);
      toast.error('Geolocation is not supported by your browser');
    }
  };

  return (
    <Card className="w-full h-[500px] bg-white/90 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <MapPin className="text-suraksha-blue" />
          Safety Map
        </CardTitle>
        <CardDescription>
          View safe routes and real-time safety alerts
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-[400px] bg-suraksha-lightGreen/50 flex items-center justify-center">
          {/* In a real app, we would integrate with a map service like Google Maps or Mapbox */}
          <div className="text-center px-4">
            <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
            <p className="text-muted-foreground mb-4">
              Map visualization would appear here with safety markers and routes
            </p>
            <Button onClick={fetchUserLocation} disabled={isLoading}>
              {isLoading ? 'Getting location...' : 'Update My Location'}
            </Button>
          </div>

          {/* Demo safety markers */}
          <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
            <div className="bg-suraksha-purple/80 p-2 rounded-full text-white">
              <Shield size={20} />
            </div>
            <span className="text-xs bg-white rounded px-2 py-1 mt-1 shadow">Safe Zone</span>
          </div>
          
          <div className="absolute bottom-1/3 right-1/3 flex flex-col items-center">
            <div className="bg-suraksha-orange/80 p-2 rounded-full text-white animate-pulse">
              <AlertTriangle size={20} />
            </div>
            <span className="text-xs bg-white rounded px-2 py-1 mt-1 shadow">Recent Alert</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyMap;
