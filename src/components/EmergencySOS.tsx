
import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const EmergencySOS = () => {
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [position, setPosition] = useState({ latitude: null, longitude: null });

  const handleSOSClick = () => {
    if (isActive) {
      setIsActive(false);
      toast.info('SOS alert canceled');
      return;
    }

    setIsActive(true);
    let count = 3;
    setCountdown(count);
    
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(timer);
        sendSOSAlert();
      }
    }, 1000);
  };

  const sendSOSAlert = () => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          
          // In a real app, send this data to a server and notify contacts
          toast.success('Emergency alert sent with your location!', {
            description: 'Your trusted contacts have been notified.',
            duration: 5000,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          toast.error('Could not get your location', {
            description: 'Emergency alert sent without location data.',
          });
        }
      );
    } else {
      toast.error('Geolocation is not supported by your browser');
    }
  };

  const cancelSOS = () => {
    setIsActive(false);
    toast.info('SOS alert canceled');
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-20 flex flex-col items-center">
      {isActive && countdown > 0 && (
        <div className="mb-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-destructive font-semibold">Sending SOS in {countdown}...</span>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={cancelSOS}>
              <X size={16} />
            </Button>
          </div>
        </div>
      )}
      
      <button
        onClick={handleSOSClick}
        className={cn(
          "sos-button",
          isActive && "animate-pulse"
        )}
      >
        <Phone size={32} />
      </button>
    </div>
  );
};

export default EmergencySOS;
