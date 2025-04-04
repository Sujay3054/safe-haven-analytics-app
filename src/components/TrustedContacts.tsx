
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, User, UserPlus, X, Check, Shield } from 'lucide-react';
import { toast } from 'sonner';

// Mock initial contacts
const initialContacts = [
  { id: 1, name: 'Priya Singh', phone: '+91 98765 43210', relation: 'Sister' },
  { id: 2, name: 'Neha Gupta', phone: '+91 87654 32109', relation: 'Friend' },
];

const TrustedContacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', phone: '', relation: '' });

  const handleAddContact = () => {
    // Basic validation
    if (!newContact.name || !newContact.phone) {
      toast.error('Please provide both name and phone number');
      return;
    }

    // In a real app, you would validate phone number format
    const id = Date.now();
    setContacts([...contacts, { id, ...newContact }]);
    setNewContact({ name: '', phone: '', relation: '' });
    setIsAdding(false);
    
    toast.success('Contact added successfully');
  };

  const handleRemoveContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
    toast.success('Contact removed');
  };

  const handleTestAlert = () => {
    toast.success('Test alert sent successfully', {
      description: 'Your trusted contacts would receive a test notification',
      duration: 5000,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="text-suraksha-purple" />
          Trusted Contacts
        </CardTitle>
        <CardDescription>
          These contacts will be notified in case of an emergency
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-suraksha-lightPurple flex items-center justify-center">
                  <User size={20} className="text-suraksha-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{contact.name}</h4>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{contact.phone}</p>
                  </div>
                  {contact.relation && (
                    <p className="text-xs mt-1 bg-suraksha-lightPurple/50 inline-block px-2 py-0.5 rounded-full">
                      {contact.relation}
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-destructive"
                onClick={() => handleRemoveContact(contact.id)}
              >
                <X size={18} />
              </Button>
            </div>
          ))}

          {isAdding ? (
            <div className="p-3 border border-dashed border-muted rounded-lg space-y-3">
              <Input
                placeholder="Contact Name"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
              <Input
                placeholder="Phone Number"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              />
              <Input
                placeholder="Relation (optional)"
                value={newContact.relation}
                onChange={(e) => setNewContact({ ...newContact, relation: e.target.value })}
              />
              <div className="flex gap-2 justify-end">
                <Button variant="ghost" size="sm" onClick={() => setIsAdding(false)}>
                  Cancel
                </Button>
                <Button variant="default" size="sm" onClick={handleAddContact}>
                  <Check size={16} className="mr-1" /> Save
                </Button>
              </div>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="w-full border-dashed text-muted-foreground"
              onClick={() => setIsAdding(true)}
            >
              <UserPlus size={16} className="mr-2" />
              Add Contact
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t pt-4">
        <Button variant="outline" onClick={handleTestAlert}>
          Send Test Alert
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrustedContacts;
