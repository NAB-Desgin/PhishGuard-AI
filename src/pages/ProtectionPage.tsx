import React from 'react';
import { Shield, Lock, AlertTriangle, Eye, UserCheck, Database } from 'lucide-react';
import TerminalBox from '../components/TerminalBox';

const ProtectionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Phishing Protection Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn how to protect yourself and your organization from phishing attacks
          with these essential security practices and tools.
        </p>
      </div>
      
      {/* Potential Damage Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Potential Damage From Phishing Attacks
        </h2>
        
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800 dark:text-red-300">
                Phishing attacks can have severe consequences
              </h3>
              <p className="mt-2 text-red-700 dark:text-red-200">
                Understanding the potential damage can help prioritize security measures and response plans.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="mr-2 h-5 w-5 text-red-500" />
              Data Breaches
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Phishing attacks can lead to unauthorized access to sensitive data, including:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Personal identifiable information (PII)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Financial records and account details</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Intellectual property and trade secrets</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Healthcare records and protected health information</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="mr-2 h-5 w-5 text-red-500" />
              Financial Loss
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Direct and indirect financial damages can include:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Fraudulent wire transfers and transactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Ransomware payments and system recovery costs</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Regulatory fines and legal settlements</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Business downtime and lost productivity</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="mr-2 h-5 w-5 text-red-500" />
              Reputational Damage
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Long-lasting impacts to reputation can result in:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Loss of customer trust and business relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Negative media coverage and public perception</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Diminished brand value and competitive disadvantage</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Reduced stock price for publicly traded companies</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <UserCheck className="mr-2 h-5 w-5 text-red-500" />
              Operational Disruption
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Business operations can be severely impacted through:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>System outages and network compromise</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Data corruption or deletion</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Account lockouts and credential reset requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Extensive time required for incident investigation and remediation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Protection Measures */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          Essential Protection Measures
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Individual Protection */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              For Individuals
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Education and Awareness</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Learn to identify suspicious emails, messages, and websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Stay informed about current phishing techniques and trends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Verify requests for sensitive information through alternative channels</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technical Safeguards</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use multi-factor authentication (MFA) whenever possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Keep all devices, browsers, and applications updated</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Install reputable anti-malware and anti-phishing software</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use a password manager to create and store strong, unique passwords</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Best Practices</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Hover over links before clicking to preview the destination URL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Type URLs directly instead of clicking links when dealing with sensitive accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Be cautious about information shared on social media that could be used in targeted attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regularly check accounts for suspicious activity</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Organization Protection */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              For Organizations
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technical Controls</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Implement email filtering and anti-phishing technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Deploy DNS filtering to block access to known malicious domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use DMARC, SPF, and DKIM to prevent email spoofing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Require multi-factor authentication for all users, especially for remote access</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Employee Training</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Conduct regular phishing awareness training for all employees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Run simulated phishing campaigns to test awareness and provide targeted training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Create clear procedures for reporting suspicious messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Develop role-specific training for high-risk positions (executives, finance, HR)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Policies and Procedures</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Establish verification procedures for sensitive requests (wire transfers, data access)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Create and test an incident response plan for phishing attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Implement least privilege access controls to minimize damage from compromised accounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Regularly back up critical data and test restoration procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Tools */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          PhishGuard Protection Command Line
        </h2>
        
        <TerminalBox title="phishguard@security:~$ phishguard --show-protection-tools">
          <div className="text-green-400">Scanning for available security tools...</div>
          <div className="text-green-400 mt-2">Discovered protection tools:</div>
          <div className="mt-2">
            <div className="text-cyan-400">1. Email Protection</div>
            <div className="text-gray-400 ml-4">- Email filtering and anti-spam services</div>
            <div className="text-gray-400 ml-4">- DMARC/SPF/DKIM implementation tools</div>
            <div className="text-gray-400 ml-4">- Suspicious attachment sandboxing</div>
          </div>
          <div className="mt-2">
            <div className="text-cyan-400">2. Web Browsing Safety</div>
            <div className="text-gray-400 ml-4">- PhishGuard URL scanning extension</div>
            <div className="text-gray-400 ml-4">- DNS filtering services</div>
            <div className="text-gray-400 ml-4">- Safe browsing integration</div>
          </div>
          <div className="mt-2">
            <div className="text-cyan-400">3. Authentication Security</div>
            <div className="text-gray-400 ml-4">- Multi-factor authentication (MFA) solutions</div>
            <div className="text-gray-400 ml-4">- Hardware security keys</div>
            <div className="text-gray-400 ml-4">- Password managers</div>
          </div>
          <div className="mt-2">
            <div className="text-cyan-400">4. Security Awareness</div>
            <div className="text-gray-400 ml-4">- Phishing simulation platforms</div>
            <div className="text-gray-400 ml-4">- Security training modules</div>
            <div className="text-gray-400 ml-4">- Reporting tools for suspicious messages</div>
          </div>
          <div className="mt-4 text-yellow-400">
            Run 'phishguard --deploy [tool-name]' to implement specific protection tools.
          </div>
          <div className="mt-6 text-green-400">
            Would you like to install the PhishGuard browser extension for real-time protection? [Y/n]_
          </div>
        </TerminalBox>
      </section>
    </div>
  );
};

export default ProtectionPage;