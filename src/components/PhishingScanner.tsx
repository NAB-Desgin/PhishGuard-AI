import React, { useState } from 'react';
import { AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import TerminalBox from './TerminalBox';

// Mock ML analysis function
const analyzeURL = (url: string): Promise<{ 
  score: number; 
  indicators: { name: string; found: boolean; risk: 'high' | 'medium' | 'low' }[] 
}> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // This is a simplified mock of ML analysis
      // In a real app, this would call a backend API
      
      // Define common phishing indicators
      const indicators = [
        { name: 'Suspicious TLD', found: /\.(xyz|tk|ml|ga|cf|gq)$/.test(url), risk: 'medium' as const },
        { name: 'Misspelled domain', found: url.includes('paypl') || url.includes('amaz0n'), risk: 'high' as const },
        { name: 'Excessive subdomains', found: (url.match(/\./g) || []).length > 3, risk: 'medium' as const },
        { name: 'URL shortener', found: /bit\.ly|tinyurl|goo\.gl/.test(url), risk: 'medium' as const },
        { name: 'Special characters', found: /[^a-zA-Z0-9-.]/.test(url.replace(/(http(s)?:\/\/)|(www\.)/g, '')), risk: 'high' as const },
        { name: 'IP address in URL', found: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(url), risk: 'high' as const },
        { name: 'Brand name in subdomain', found: /apple|google|microsoft|paypal|amazon|netflix|facebook/.test(url) && !url.includes('.com'), risk: 'high' as const }
      ];
      
      // Calculate risk score based on indicators
      let baseScore = 20; // Start with a base score
      
      indicators.forEach(indicator => {
        if (indicator.found) {
          switch (indicator.risk) {
            case 'high': baseScore += 20; break;
            case 'medium': baseScore += 10; break;
            case 'low': baseScore += 5; break;
          }
        }
      });
      
      // Cap at 100%
      const score = Math.min(Math.max(baseScore, 0), 100);
      
      resolve({ score, indicators });
    }, 1500);
  });
};

const PhishingScanner: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{ 
    score: number; 
    indicators: { name: string; found: boolean; risk: 'high' | 'medium' | 'low' }[] 
  } | null>(null);
  const [error, setError] = useState('');
  const [scanHistory, setScanHistory] = useState<string[]>([]);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate URL format
    if (!url) {
      setError('Please enter a URL');
      return;
    }
    
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(url)) {
      setError('Please enter a valid URL');
      return;
    }
    
    setError('');
    setIsScanning(true);
    setScanResult(null);
    
    try {
      // Add to scan history
      setScanHistory(prev => [...prev, url]);
      
      // Call the mock ML analysis function
      const result = await analyzeURL(url);
      setScanResult(result);
    } catch (err) {
      setError('An error occurred during scanning');
      console.error(err);
    } finally {
      setIsScanning(false);
    }
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return { text: 'Low Risk', color: 'text-green-500', icon: <CheckCircle className="w-6 h-6 mr-2" /> };
    if (score < 70) return { text: 'Medium Risk', color: 'text-yellow-500', icon: <AlertTriangle className="w-6 h-6 mr-2" /> };
    return { text: 'High Risk', color: 'text-red-500', icon: <AlertTriangle className="w-6 h-6 mr-2" /> };
  };

  const getTerminalOutput = () => {
    if (isScanning) {
      return (
        <div className="animate-pulse">
          <p>Scanning {url}...</p>
          <p>Analyzing domain structure...</p>
          <p>Checking for known phishing patterns...</p>
          <p>Evaluating security certificates...</p>
          <p>Running ML classification algorithm...</p>
        </div>
      );
    }
    
    if (scanResult) {
      const riskLevel = getRiskLevel(scanResult.score);
      
      return (
        <div>
          <p className="text-white">Analysis complete for: {url}</p>
          <div className="my-4">
            <div className={`text-xl font-bold flex items-center ${riskLevel.color}`}>
              {riskLevel.icon} {riskLevel.text} ({scanResult.score}%)
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5 mt-2">
              <div 
                className={`h-2.5 rounded-full ${
                  scanResult.score < 30 ? 'bg-green-500' : 
                  scanResult.score < 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${scanResult.score}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-white mb-2">Detected Indicators:</p>
            <ul className="space-y-2">
              {scanResult.indicators.map((indicator, index) => (
                <li key={index} className="flex items-start">
                  <span className={`mr-2 ${
                    indicator.found ? 
                      (indicator.risk === 'high' ? 'text-red-500' : 
                       indicator.risk === 'medium' ? 'text-yellow-500' : 'text-orange-500')
                      : 'text-green-500'
                  }`}>
                    {indicator.found ? '✗' : '✓'}
                  </span>
                  <span>
                    {indicator.name} {indicator.found && `(${indicator.risk} risk)`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 p-3 border border-gray-700 rounded bg-gray-900">
            <p className="text-cyan-400 font-semibold">Recommendation:</p>
            {scanResult.score >= 70 ? (
              <p className="text-red-400">This URL shows strong indicators of a phishing attempt. DO NOT proceed to this website.</p>
            ) : scanResult.score >= 30 ? (
              <p className="text-yellow-400">This URL has some suspicious characteristics. Proceed with caution and do not enter sensitive information.</p>
            ) : (
              <p className="text-green-400">This URL appears to be legitimate, but always remain vigilant when sharing sensitive information online.</p>
            )}
          </div>
        </div>
      );
    }
    
    return (
      <div>
        <p>Enter a URL to scan for phishing indicators.</p>
        <p>PhishGuard will analyze the URL using machine learning algorithms to determine the likelihood of it being a phishing attempt.</p>
        {scanHistory.length > 0 && (
          <div className="mt-4">
            <p className="text-white">Recent scans:</p>
            <ul className="list-disc pl-5 mt-2">
              {scanHistory.map((item, index) => (
                <li key={index} className="text-gray-400">
                  <button 
                    className="hover:text-cyan-400 transition-colors text-left"
                    onClick={() => {
                      setUrl(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleScan} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL to check (e.g., https://example.com)"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
              disabled={isScanning}
            />
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={isScanning}
            className={`px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-md transition-colors flex items-center justify-center ${isScanning ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isScanning ? (
              <>
                <span className="animate-spin mr-2">⌛</span>
                Scanning...
              </>
            ) : (
              <>
                <Shield className="w-5 h-5 mr-2" />
                Scan URL
              </>
            )}
          </button>
        </div>
      </form>
      
      <TerminalBox>
        {getTerminalOutput()}
      </TerminalBox>
    </div>
  );
};

export default PhishingScanner;