import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Globe, FileText } from 'lucide-react';
import heroImage from '@/assets/hero-threat-analysis.jpg';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cybersecurity Analysis" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Advanced
              <span className="block bg-gradient-cyber bg-clip-text text-transparent">
                Threat Analysis
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze files, URLs, and hashes with 47+ security engines. 
              Detect malware, suspicious activities, and cyber threats in real-time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" className="text-lg px-8">
              <Shield className="w-5 h-5" />
              Start Analysis
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Demo
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center shadow-glow">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">File Scanning</h3>
              <p className="text-muted-foreground">
                Upload and analyze files up to 650MB with comprehensive malware detection
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center shadow-glow">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">URL Analysis</h3>
              <p className="text-muted-foreground">
                Scan websites and URLs for phishing, malware, and suspicious content
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="mx-auto w-12 h-12 bg-gradient-cyber rounded-lg flex items-center justify-center shadow-glow">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Real-time Results</h3>
              <p className="text-muted-foreground">
                Get instant threat intelligence with detailed security reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;