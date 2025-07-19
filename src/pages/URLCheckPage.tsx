import React from 'react';
import PhishingScanner from '../components/PhishingScanner';

const URLCheckPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Phishing URL Scanner
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Analyze any URL with our machine learning technology to identify potential phishing attempts.
          Get detailed risk analysis and safety recommendations instantly.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md">
        <PhishingScanner />
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            How Our Scanner Works
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold mr-2">1.</span>
              <span>We analyze URL structure for common phishing indicators such as IP addresses, URL shorteners, and suspicious TLDs</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold mr-2">2.</span>
              <span>Our machine learning models assess domain age, registration details, and reputation scores</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold mr-2">3.</span>
              <span>We check for lookalike domains that may be impersonating legitimate websites</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold mr-2">4.</span>
              <span>Results are provided with a detailed breakdown of risk factors and recommendations</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Tips for URL Safety
          </h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Always check the URL in your browser's address bar before entering sensitive information</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Look for HTTPS and a padlock icon, though these alone don't guarantee safety</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Be wary of URLs containing random characters, numbers, or unusual domain extensions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>Don't click on shortened URLs from untrusted sources without scanning them first</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span>When in doubt, go directly to the official website by typing the URL yourself</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default URLCheckPage;