import React, { useState } from 'react';
import TerminalBox from '../components/TerminalBox';

interface AttackType {
  id: string;
  name: string;
  description: string;
  examples: string[];
  indicators: string[];
  prevention: string[];
  commandLine: string[];
}

const attackTypes: AttackType[] = [
  {
    id: 'email-phishing',
    name: 'Email Phishing',
    description: 'The most common type of phishing attack where attackers send emails pretending to be from legitimate organizations to steal sensitive information or deploy malware.',
    examples: [
      'Emails claiming to be from a bank requesting account verification',
      'Messages about suspicious account activity requiring immediate action',
      'Fake invoice or payment notification emails',
      'Password reset requests you didn\'t initiate'
    ],
    indicators: [
      'Urgent or threatening language',
      'Grammar and spelling errors',
      'Generic greetings instead of your name',
      'Suspicious sender email address that doesn\'t match the organization',
      'Requests for personal information'
    ],
    prevention: [
      'Never click on suspicious links in emails',
      'Verify the sender\'s email address carefully',
      'Don\'t download attachments from unknown sources',
      'Contact the organization directly through official channels if unsure',
      'Use email filters and security software'
    ],
    commandLine: [
      '$ phishguard analyze --email-headers',
      'Analyzing email metadata...',
      'WARNING: Sender domain mismatch detected!',
      'WARNING: Email originated from suspicious IP range',
      'ALERT: Links in email body point to known phishing domains',
      'Result: HIGH RISK - 92% probability of phishing attempt'
    ]
  },
  {
    id: 'spear-phishing',
    name: 'Spear Phishing',
    description: 'A targeted form of phishing directed at specific individuals or organizations, using personalized information to appear more legitimate and convincing.',
    examples: [
      'Emails appearing to come from a colleague or supervisor',
      'Messages referencing specific projects you\'re working on',
      'Communications mentioning recent company events or news',
      'Requests from "executives" for urgent wire transfers or gift cards'
    ],
    indicators: [
      'Unusual requests from familiar contacts',
      'Slightly altered email addresses (e.g., john.doe@c0mpany.com vs. john.doe@company.com)',
      'Unexpected attachments from colleagues',
      'Requests to keep communication confidential',
      'Pressure to bypass normal procedures'
    ],
    prevention: [
      'Verify unusual requests through a different communication channel',
      'Implement multi-factor authentication',
      'Train employees to recognize social engineering tactics',
      'Establish clear procedures for financial requests',
      'Be cautious about what you share on social media'
    ],
    commandLine: [
      '$ phishguard inspect --deep-analysis',
      'Running contextual analysis...',
      'WARNING: Email claims to be from internal domain but headers show external origin',
      'ALERT: Message contains specific company information likely gathered from social media',
      'CAUTION: Urgent financial request bypassing company protocols',
      'Result: HIGH RISK - 96% probability of targeted spear phishing attack'
    ]
  },
  {
    id: 'whaling',
    name: 'Whaling',
    description: 'A highly targeted phishing attack aimed specifically at senior executives and high-profile targets, often with the goal of financial fraud or data breaches.',
    examples: [
      'Fake legal notices or subpoenas sent to executives',
      'Tax-related documents requiring immediate review',
      'Messages impersonating board members or business partners',
      'Fake acquisition or merger documents'
    ],
    indicators: [
      'High-value requests with significant urgency',
      'Impersonation of high-level executives or partners',
      'Professional language and formatting',
      'Exploitation of authority structures',
      'References to confidential business matters'
    ],
    prevention: [
      'Establish strict verification protocols for high-value transactions',
      'Create executive-specific security awareness training',
      'Implement strong email authentication protocols',
      'Limit public information about executive activities',
      'Use separate devices for sensitive business operations'
    ],
    commandLine: [
      '$ phishguard executive-protection --scan',
      'Analyzing high-value target communication...',
      'ALERT: Sender attempting to impersonate CEO from external domain',
      'WARNING: Message contains confidential information not publicly available',
      'CRITICAL: Request attempts to bypass financial controls',
      'Result: SEVERE RISK - Executive whaling attack detected with 98% confidence'
    ]
  },
  {
    id: 'smishing',
    name: 'Smishing (SMS Phishing)',
    description: 'Phishing attacks conducted via SMS or text messages, typically containing malicious links or requesting sensitive information.',
    examples: [
      'Text messages about suspicious bank account activity',
      'Package delivery notification texts with tracking links',
      'SMS alerts about account lockouts requiring immediate action',
      'Messages offering prizes or rewards with links to claim them'
    ],
    indicators: [
      'Unexpected texts from banks or services',
      'Messages from unknown or shortened numbers',
      'Shortened URLs in the message body',
      'Requests to call unknown numbers',
      'Time-sensitive language creating urgency'
    ],
    prevention: [
      'Never click links in suspicious text messages',
      'Don\'t reply to unknown numbers requesting information',
      'Contact companies directly using official numbers from their website',
      'Report suspicious text messages to your carrier',
      'Use SMS filtering applications if available'
    ],
    commandLine: [
      '$ phishguard mobile --sms-analysis',
      'Scanning SMS content...',
      'WARNING: Message contains shortened URL hiding actual destination',
      'ALERT: URL redirects to domain registered within last 24 hours',
      'CAUTION: Domain mimics financial institution but has no valid SSL certificate',
      'Result: HIGH RISK - SMS phishing attempt detected with 91% confidence'
    ]
  },
  {
    id: 'vishing',
    name: 'Vishing (Voice Phishing)',
    description: 'Phone-based phishing scams where attackers use social engineering over voice calls to trick victims into revealing sensitive information or making payments.',
    examples: [
      'Calls claiming to be from technical support about computer problems',
      'Callers impersonating government agencies threatening legal action',
      'Bank fraud department calls reporting suspicious transactions',
      'Charity solicitations following natural disasters'
    ],
    indicators: [
      'Callers creating pressure or urgency',
      'Requests for payment via gift cards or wire transfers',
      'Callers asking for personal or financial information',
      'Unknown numbers, especially with different area codes',
      'Robotic or scripted-sounding conversations'
    ],
    prevention: [
      'Never provide personal information to incoming callers',
      'Hang up and call the organization directly using their official number',
      'Be skeptical of caller ID as it can be spoofed',
      'Register for the Do Not Call Registry',
      'Use call blocking apps for suspicious numbers'
    ],
    commandLine: [
      '$ phishguard call-trace --analyze',
      'Analyzing reported call data...',
      'WARNING: Caller ID shows spoofed government agency number',
      'ALERT: Call originated from known scam operation center',
      'CAUTION: Script matches known social security scam pattern',
      'Result: HIGH RISK - 95% confidence in fraudulent vishing attempt'
    ]
  },
  {
    id: 'pharming',
    name: 'Pharming',
    description: 'A sophisticated attack that redirects users from legitimate websites to fraudulent ones by exploiting vulnerabilities in DNS servers or local host files.',
    examples: [
      'Being redirected to a fake banking website despite typing the correct URL',
      'Automatic redirects to login pages that look legitimate',
      'Website functionality that seems broken or different than usual',
      'SSL certificate warnings when visiting familiar sites'
    ],
    indicators: [
      'Website looks different than usual',
      'URL is slightly different from the legitimate site',
      'SSL certificate errors or missing https',
      'Login pages appearing when not requested',
      'Unusual performance or behavior of the website'
    ],
    prevention: [
      'Always verify the URL in your address bar',
      'Check for SSL certificates (lock icon) on sensitive websites',
      'Keep your router firmware and devices updated',
      'Use DNS security solutions',
      'Consider using a VPN for additional protection'
    ],
    commandLine: [
      '$ phishguard dns-check --security-scan',
      'Scanning DNS configuration...',
      'CRITICAL: DNS poisoning detected on local network',
      'ALERT: Routing table modifications identified',
      'WARNING: Hosts file contains malicious entries redirecting financial domains',
      'Result: SEVERE RISK - Active pharming attack detected with 99% confidence'
    ]
  }
];

const AttackTypesPage: React.FC = () => {
  const [selectedAttack, setSelectedAttack] = useState<AttackType>(attackTypes[0]);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Common Phishing Attack Types
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn about the different types of phishing attacks to better protect yourself 
          and your organization from these evolving threats.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
              <h2 className="font-bold text-gray-900 dark:text-white">Attack Types</h2>
            </div>
            <ul>
              {attackTypes.map((attack) => (
                <li key={attack.id}>
                  <button
                    onClick={() => setSelectedAttack(attack)}
                    className={`w-full text-left px-4 py-3 transition-colors border-l-4 ${
                      selectedAttack.id === attack.id
                        ? 'border-cyan-600 dark:border-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300'
                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {attack.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedAttack.name}
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedAttack.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Common Examples
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {selectedAttack.examples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Warning Signs
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {selectedAttack.indicators.map((indicator, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-500 mr-2">⚠</span>
                      <span>{indicator}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Prevention Methods
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {selectedAttack.prevention.map((prevention, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{prevention}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                PhishGuard Detection
              </h3>
              <TerminalBox title={`phishguard@system:~$ detect ${selectedAttack.id}`}>
                {selectedAttack.commandLine.map((line, index) => (
                  <div key={index} className={
                    line.includes('WARNING') ? 'text-yellow-400' :
                    line.includes('ALERT') ? 'text-orange-400' :
                    line.includes('CRITICAL') ? 'text-red-400' :
                    line.includes('CAUTION') ? 'text-yellow-300' :
                    line.includes('Result:') ? 'text-cyan-400 font-bold' :
                    'text-green-400'
                  }>
                    {line}
                  </div>
                ))}
              </TerminalBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackTypesPage;