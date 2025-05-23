import React, { useState } from 'react';
import { Link, Eye, Shield, AlertTriangle, Search, CheckCircle, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const UrlScanner: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    score: number;
    verdict: 'safe' | 'suspicious' | 'malicious';
    screenshot: string;
    details: Array<{
      type: string;
      description: string;
      severity: 'low' | 'medium' | 'high';
    }>;
  }>(null);

  const handleScan = () => {
    if (!url.trim()) return;
    
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsScanning(false);
      
      // Mock result based on URL content
      const isMalicious = url.includes('login') || 
                         url.includes('secure') ||
                         url.includes('verify');
      
      const isSuspicious = url.includes('account') || 
                          url.includes('update') ||
                          !url.startsWith('https');
      
      let score = 0;
      let verdict: 'safe' | 'suspicious' | 'malicious' = 'safe';
      let details = [];
      let screenshot = 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800';
      
      if (isMalicious) {
        score = Math.floor(Math.random() * 30) + 70; // 70-100
        verdict = 'malicious';
        details = [
          {
            type: 'Domain',
            description: 'URL uses a domain that mimics a legitimate service',
            severity: 'high' as const
          },
          {
            type: 'SSL',
            description: 'Missing or invalid SSL certificate',
            severity: 'high' as const
          },
          {
            type: 'Content',
            description: 'Page requests sensitive information',
            severity: 'high' as const
          }
        ];
      } else if (isSuspicious) {
        score = Math.floor(Math.random() * 30) + 40; // 40-70
        verdict = 'suspicious';
        details = [
          {
            type: 'URL Structure',
            description: 'Contains suspicious parameters or redirects',
            severity: 'medium' as const
          },
          {
            type: 'Visual',
            description: 'Page layout matches known phishing templates',
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
          },
          {
            type: 'Reputation',
            description: 'Domain has good historical reputation',
            severity: 'low' as const
          }
        ];
      }
      
      setScanResult({ score, verdict, details, screenshot });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link className="h-6 w-6 text-secondary-600" />
          <h1 className="text-2xl font-bold">URL Scanner</h1>
        </div>
      </div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="font-semibold text-lg mb-4">Analyze URL</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              placeholder="Enter URL to scan (e.g., https://example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <motion.button
              className="w-full md:w-auto inline-flex items-center px-4 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg"
              onClick={handleScan}
              disabled={isScanning || !url.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isScanning ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Scanning
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  Scan URL
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {!scanResult && !isScanning && (
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="max-w-md mx-auto">
            <Eye className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Enter a URL to analyze</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Our AI will check the URL for phishing indicators, analyze the website content, and capture a safe screenshot for verification.
            </p>
          </div>
        </motion.div>
      )}
      
      {isScanning && (
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 border-4 border-secondary-200 border-t-secondary-600 rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-lg font-medium mb-2">Scanning URL...</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Our Vision AI is analyzing the URL and safely rendering the page to detect phishing attempts.
            </p>
            <div className="mt-4 space-y-2">
              <div className="bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-secondary-500 h-full rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Checking domain reputation</span>
                <span>Analyzing visual content</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {scanResult && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h2 className="font-semibold text-lg">Website Preview</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Safely rendered by our secure browser</p>
            </div>
            <div className="relative">
              <img 
                src={scanResult.screenshot} 
                alt="Safe website preview" 
                className="w-full h-64 object-cover"
              />
              {scanResult.verdict !== 'safe' && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                  <AlertTriangle className="h-12 w-12 text-warning-500 mb-2" />
                  <p className="font-bold text-lg">Warning: Potential {scanResult.verdict} Website</p>
                  <p className="text-sm">This site may be attempting to steal information</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MonitorSmartphone className="h-5 w-5 text-slate-500" />
                <h3 className="font-medium">Visual Analysis</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Our Vision AI model has {scanResult.verdict === 'safe' ? 'not detected' : 'detected'} visual indicators of phishing such as fake logos, login forms, or suspicious layouts.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
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
                    {scanResult.verdict} URL
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Threat score: {scanResult.score}/100
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium text-sm uppercase text-slate-500 dark:text-slate-400 mb-2">Analysis Details</h3>
            <div className="space-y-3 mb-4">
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
            
            <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-secondary-800 dark:text-secondary-300">AI Model Insights</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The URL scanner uses a combination of Vision Transformers for visual analysis and LLM-based text classification to identify phishing attempts, even when they're designed to evade traditional detection methods.
              </p>
            </div>
            
            {scanResult.verdict !== 'safe' && (
              <div className="mt-4 space-y-2">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-danger-600 hover:bg-danger-700 text-white font-medium rounded-lg transition-colors">
                  <Shield className="h-4 w-4" />
                  <span>Block This Website</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors">
                  <span>Report False Positive</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default UrlScanner;