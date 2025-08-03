import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ThreatAnalysis from '@/components/ThreatAnalysis';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <ThreatAnalysis />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 ThreatHound Security Platform. Advanced threat analysis and detection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
