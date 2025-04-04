
import React from 'react';
import Layout from '@/components/Layout';
import TrustedContacts from '@/components/TrustedContacts';
import EmergencySOS from '@/components/EmergencySOS';

const Contacts = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Trusted Contacts</h1>
        <p className="text-muted-foreground">Manage your emergency contacts who will be alerted when you need help</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrustedContacts />
        </div>
        
        <div>
          <div className="bg-white/90 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">How Trusted Contacts Work</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="bg-suraksha-lightPurple text-suraksha-purple rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <p className="text-sm">Add up to 5 friends or family members you trust</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-suraksha-lightPurple text-suraksha-purple rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <p className="text-sm">When you activate an SOS alert, they'll receive your exact location</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-suraksha-lightPurple text-suraksha-purple rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <p className="text-sm">They'll get updates every minute while your alert is active</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-suraksha-lightPurple text-suraksha-purple rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <p className="text-sm">Automated calls will be placed to emergency services if needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EmergencySOS />
    </Layout>
  );
};

export default Contacts;
