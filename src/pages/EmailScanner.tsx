import React, { useState } from 'react';
import { Mail, Shield, AlertTriangle, Search, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const EmailScanner: React.FC = () => {
  const [emailContent, setEmailContent] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    score: number;
    verdict: 'safe' | 'suspicious' | 'malicious';
    details: Array<{
      type: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
    }>;
  }>(null);

  const handleScan = () => {
    if (!emailContent.trim()) return;
    
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsScanning(false);
      
      // Mock result
      const isMalicious = emailContent.toLowerCase().includes('urgent') || 
                         emailContent.toLowerCase().includes('password') ||
                         emailContent.toLowerCase().includes('bank');
      
      const isSuspicious = emailContent.toLowerCase().includes('click') || 
                          emailContent.toLowerCase().includes('link') ||
                          emailContent.toLowerCase().includes('verify');
      
      let score = 0;
      let verdict: 'safe' | 'suspicious' | 'malicious' = 'safe';
      let details = [];
      
      if (isMalicious) {
        score = Math.floor(Math.random() * 30) + 70; // 70-100
        verdict = 'malicious';
        details = [
          {
            type: 'Keyword',
            description: 'Contains urgent action keywords typical of phishing',
            severity: 'high' as const
          },
          {
            type: 'Intent',
            description: 'Email requests sensitive information',
            severity: 'high' as const
          },
          {
            type: 'Source',
            description: 'Sender domain is suspicious',
            severity: 'medium' as const
          }
        ];
      } else if (isSuspicious) {
        score = Math.floor(Math.random() * 30) + 40; // 40-70
        verdict = 'suspicious';
        details = [
          {
            type: 'Link',
            description: 'Contains potentially unsafe links',
            severity: 'medium' as const
          },
          {
            type: 'Content',
            description: 'Email contains unusual requests',
            severity: 'medium' as const
          }
        ];
      } else {
        score = Math.floor(Math.random() * 40); // 0-40
        verdict = 'safe';
        details = [
          {
            type: 'Analysis',
            description: 'No suspicious patterns detected',
            severity: 'low' as const
          }
        ];
      }
      
      setScanResult({ score, verdict, details });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold">Email Scanner</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="font-semibold text-lg mb-4">Analyze Email Content</h2>
          <div className="mb-4">
            <textarea
              className="w-full h-60 p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Paste email content here for analysis..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <motion.button
              className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg"
              onClick={handleScan}
              disabled={isScanning || !emailContent.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isScanning ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Analyzing
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Scan Email
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="font-semibold text-lg mb-4">Scan Results</h2>
          
          {!scanResult && !isScanning && (
            <div className="flex flex-col items-center justify-center h-60 text-center p-4">
              <Shield className="h-12 w-12 text-slate-300 dark:text-slate-600 mb-4" />
              <p className="text-slate-500 dark:text-slate-400">Enter email content and click scan to analyze for phishing threats</p>
            </div>
          )}
          
          {isScanning && (
            <div className="flex flex-col items-center justify-center h-60 text-center">
              <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
              <p className="text-slate-700 dark:text-slate-300 font-medium">Running AI analysis...</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Checking for suspicious patterns</p>
            </div>
          )}
          
          {scanResult && (
            <div className="h-full flex flex-col">
              <div className={`rounded-lg p-4 mb-4 ${
                scanResult.verdict === 'malicious' 
                  ? 'bg-danger-100 dark:bg-danger-900/30' 
                  : scanResult.verdict === 'suspicious' 
                  ? 'bg-warning-100 dark:bg-warning-900/30' 
                  : 'bg-success-100 dark:bg-success-900/30'
              }`}>
                <div className="flex items-center space-x-3">
                  {scanResult.verdict === 'malicious' ? (
                    <AlertTriangle className="h-6 w-6 text-danger-600 dark:text-danger-400" />
                  ) : scanResult.verdict === 'suspicious' ? (
                    <AlertTriangle className="h-6 w-6 text-warning-600 dark:text-warning-400" />
                  ) : (
                    <CheckCircle className="h-6 w-6 text-success-600 dark:text-success-400" />
                  )}
                  <div>
                    <h3 className={`font-semibold capitalize ${
                      scanResult.verdict === 'malicious' 
                        ? 'text-danger-800 dark:text-danger-300' 
                        : scanResult.verdict === 'suspicious' 
                        ? 'text-warning-800 dark:text-warning-300' 
                        : 'text-success-800 dark:text-success-300'
                    }`}>
                      {scanResult.verdict}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Threat score: {scanResult.score}/100
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-sm uppercase text-slate-500 dark:text-slate-400 mb-2">Details</h3>
                <div className="space-y-2">
                  {scanResult.details.map((detail, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{detail.type}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          detail.severity === 'high' 
                            ? 'bg-danger-100 text-danger-800 dark:bg-danger-900/50 dark:text-danger-300' 
                            : detail.severity === 'medium' 
                            ? 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300' 
                            : 'bg-slate-100 text-slate-800 dark:bg-slate-600 dark:text-slate-300'
                        }`}>
                          {detail.severity}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {scanResult.verdict !== 'safe' && (
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-800/40 text-primary-700 dark:text-primary-300 font-medium rounded-lg transition-colors">
                    <span>Take Action</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="font-semibold text-lg mb-4">Email Analysis Insights</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-medium">Vision AI Detection</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Scans email attachments and embedded images for visual phishing indicators like fake logos
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <Search className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-medium">Content Analysis</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Uses LLM to evaluate email text for manipulation tactics, urgency cues, and social engineering
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-medium">Link Safety</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Extracts and analyzes links against known phishing databases and suspicious URL patterns
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-primary-800 dark:text-primary-300">AI Model Insights</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The email scanner uses a transformer-based neural network trained on millions of phishing attempts. 
              It continuously improves through reinforcement learning from user feedback and new threat patterns.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmailScanner;