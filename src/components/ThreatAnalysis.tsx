import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Search, Shield, AlertTriangle, CheckCircle, FileText, Link as LinkIcon, Hash } from 'lucide-react';

const ThreatAnalysis = () => {
  const [activeTab, setActiveTab] = useState('file');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState(null);

  const handleScan = async () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setScanResults({
        threat_level: 'safe',
        detections: 0,
        total_scans: 47,
        file_name: 'example_file.pdf',
        hash: 'a1b2c3d4e5f6...',
        scan_time: new Date().toISOString()
      });
      setIsScanning(false);
    }, 3000);
  };

  const ThreatLevelBadge = ({ level }) => {
    const variants = {
      safe: { variant: 'safe', icon: CheckCircle, text: 'Clean' },
      suspicious: { variant: 'warning', icon: AlertTriangle, text: 'Suspicious' },
      malicious: { variant: 'threat', icon: AlertTriangle, text: 'Malicious' }
    };
    
    const { variant, icon: Icon, text } = variants[level] || variants.safe;
    
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
        level === 'safe' ? 'bg-safe text-safe-foreground' :
        level === 'suspicious' ? 'bg-warning text-warning-foreground' :
        'bg-destructive text-destructive-foreground'
      }`}>
        <Icon className="w-4 h-4" />
        {text}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Analysis Interface */}
      <Card className="bg-gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Shield className="w-6 h-6 text-primary" />
            Threat Analysis Scanner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-secondary">
              <TabsTrigger value="file" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                File Scan
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                URL Analysis
              </TabsTrigger>
              <TabsTrigger value="hash" className="flex items-center gap-2">
                <Hash className="w-4 h-4" />
                Hash Lookup
              </TabsTrigger>
            </TabsList>

            <TabsContent value="file" className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Drop files here or click to browse
                </p>
                <p className="text-muted-foreground mb-4">
                  Upload files for malware analysis (Max 650 MB)
                </p>
                <Button variant="cyber" onClick={handleScan}>
                  <Upload className="w-4 h-4" />
                  Select Files
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="url" className="space-y-4">
              <div className="space-y-4">
                <Input 
                  placeholder="Enter URL to analyze (e.g., https://example.com)"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="cyber" onClick={handleScan} className="w-full">
                  <Search className="w-4 h-4" />
                  Analyze URL
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="hash" className="space-y-4">
              <div className="space-y-4">
                <Input 
                  placeholder="Enter file hash (MD5, SHA1, SHA256, SHA512)"
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
                <Button variant="cyber" onClick={handleScan} className="w-full">
                  <Hash className="w-4 h-4" />
                  Lookup Hash
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Scanning Progress */}
      {isScanning && (
        <Card className="bg-gradient-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-cyber animate-scan-pulse"></div>
              <div>
                <p className="font-medium text-foreground">Scanning in progress...</p>
                <p className="text-sm text-muted-foreground">Analyzing with 47+ security engines</p>
              </div>
            </div>
            <div className="mt-4 bg-secondary rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-cyber animate-threat-scan"></div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Scan Results */}
      {scanResults && !isScanning && (
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="text-foreground">Scan Results</span>
              <ThreatLevelBadge level={scanResults.threat_level} />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-safe">{scanResults.detections}</div>
                <div className="text-sm text-muted-foreground">Detections</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-primary">{scanResults.total_scans}</div>
                <div className="text-sm text-muted-foreground">Security Vendors</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Confidence</div>
              </div>
            </div>

            {/* File Details */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">File Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>
                  <span className="ml-2 text-foreground">{scanResults.file_name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Hash:</span>
                  <span className="ml-2 text-foreground font-mono">{scanResults.hash}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Scan Time:</span>
                  <span className="ml-2 text-foreground">{new Date(scanResults.scan_time).toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Status:</span>
                  <span className="ml-2 text-safe">No threats detected</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                Download Report
              </Button>
              <Button variant="outline" size="sm">
                Share Results
              </Button>
              <Button variant="outline" size="sm">
                Rescan
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ThreatAnalysis;