import React from 'react';
import { HelpCircle, Shield, AlertTriangle, Mail, Link, Book, CheckCircle, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Help: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <HelpCircle className="h-6 w-6 text-primary-600" />
          <h1 className="text-2xl font-bold">Help & Resources</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-lg font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Enable Protection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Activate real-time scanning for maximum security against phishing threats.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-secondary-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Email Scanning</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Learn how to scan suspicious emails and identify potential threats.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Link className="h-5 w-5 text-warning-600 mt-0.5" />
              <div>
                <h3 className="font-medium">URL Protection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Understand how our URL scanner protects you from malicious websites.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-lg font-semibold mb-4">Common Threats</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-danger-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Phishing Tactics</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Learn about common phishing techniques and how to identify them.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Book className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Best Practices</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Security guidelines to keep your information safe online.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-success-600 mt-0.5" />
              <div>
                <h3 className="font-medium">Safety Checklist</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Step-by-step guide to verify suspicious communications.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <h2 className="text-lg font-semibold mb-4">Phishing Prevention Guide</h2>
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium mb-2">1. Check the Sender</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Verify the email address carefully</li>
              <li>Look for slight misspellings in domain names</li>
              <li>Be cautious of unexpected emails from known contacts</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium mb-2">2. Examine URLs</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Hover over links before clicking</li>
              <li>Check for HTTPS and valid certificates</li>
              <li>Be wary of URLs with unusual characters or numbers</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium mb-2">3. Protect Your Information</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Never share passwords or sensitive data via email</li>
              <li>Use unique passwords for different accounts</li>
              <li>Enable two-factor authentication when possible</li>
            </ul>
          </div>
          
          <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <h3 className="font-medium mb-2">4. Trust Your Instincts</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
              <li>Be skeptical of urgent or threatening messages</li>
              <li>Don't trust unexpected prize notifications</li>
              <li>When in doubt, verify through official channels</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-primary-50 dark:bg-primary-900/20 rounded-xl shadow-sm p-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <Coffee className="h-6 w-6 text-primary-600" />
          <h2 className="text-lg font-semibold">Need More Help?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-white dark:bg-slate-800 rounded-lg text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-1">Documentation</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Browse our detailed guides and tutorials
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-slate-800 rounded-lg text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-1">Support</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Contact our technical support team
            </p>
          </button>
          <button className="p-4 bg-white dark:bg-slate-800 rounded-lg text-left hover:shadow-md transition-shadow">
            <h3 className="font-medium mb-1">Community</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Join our security community forum
            </p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Help;