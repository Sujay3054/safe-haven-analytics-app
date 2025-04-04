
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Users, Bell, BarChart3, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import EmergencySOS from '@/components/EmergencySOS';

const Index = () => {
  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-phoenix-purple" />,
      title: 'Safety Analytics',
      description: 'Visualize threats and stay informed about safety trends in your area',
      link: '/dashboard'
    },
    {
      icon: <MapPin className="h-10 w-10 text-phoenix-blue" />,
      title: 'Safe Route Mapping',
      description: 'Navigate through safe paths and avoid high-risk areas',
      link: '/map'
    },
    {
      icon: <Users className="h-10 w-10 text-phoenix-pink" />,
      title: 'Trusted Contacts',
      description: 'Set up emergency contacts that will be alerted in critical situations',
      link: '/contacts'
    },
    {
      icon: <Bell className="h-10 w-10 text-phoenix-orange" />,
      title: 'Community Alerts',
      description: 'Get real-time notifications about safety incidents near you',
      link: '/alerts'
    },
  ];

  return (
    <Layout className="flex flex-col items-center">
      {/* Hero section */}
      <section className="flex flex-col items-center text-center max-w-3xl mx-auto pt-8 pb-16">
        <Shield className="h-16 w-16 text-phoenix-purple mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-phoenix-purple to-phoenix-blue bg-clip-text text-transparent mb-4">
          phoenix
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          The analytics-driven safety companion for women in India
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-phoenix-purple hover:bg-phoenix-purple/90">
            <Link to="/dashboard">
              Get Started
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">
              Learn More
            </Link>
          </Button>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow mb-4">{feature.description}</p>
                <Button asChild variant="ghost" className="group-hover:text-primary">
                  <Link to={feature.link} className="flex items-center gap-1">
                    Explore 
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats section */}
      <section className="w-full py-12 bg-white/50 rounded-lg my-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why phoenix Matters</h2>
          <p className="text-muted-foreground">Empowering women through technology and community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-phoenix-purple mb-2">87%</div>
            <p className="text-sm text-muted-foreground">Women feel safer using phoenix app</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-phoenix-blue mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Real-time alerts and monitoring</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-phoenix-orange mb-2">10k+</div>
            <p className="text-sm text-muted-foreground">Safe journeys facilitated daily</p>
          </div>
        </div>
      </section>

      {/* Emergency SOS button */}
      <EmergencySOS />
    </Layout>
  );
};

export default Index;

