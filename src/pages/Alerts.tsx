import React, { useState } from 'react';
import { Bell, Filter, Mail, Link, Globe, CheckCircle, Clock, XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface Alert {
  id: number;
  type: 'email' | 'url' | 'website';
  title: string;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: string;
  status: 'pending' | 'blocked' | 'quarantined' | 'resolved';
  responseType: 'automatic' | 'manual';
  details: string;
}

const Alerts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'resolved'>('all');
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  
  const alerts: Alert[] = [
    {
      id: 1,
      type: 'email',
      title: 'Suspicious Login Attempt Email',
      source: 'contact@paypa1-security.com',
      severity: 'high',
      timestamp: '10 min ago',
      status: 'blocked',
      responseType: 'automatic',
      details: 'The email contained multiple phishing indicators including urgent language, suspicious sender domain, and requests for sensitive login information.',
    },
    {
      id: 2,
      type: 'url',
      title: 'Malicious URL Detected',
      source: 'https://amaz0n-secure.com/login',
      severity: 'critical',
      timestamp: '25 min ago',
      status: 'blocked',
      responseType: 'automatic',
      details: 'This URL was identified as a phishing site mimicking Amazon. It contains a deceptive domain name and requests login credentials. Visual analysis shows Amazon-like branding with suspicious form elements.',
    },
    {
      id: 3,
      type: 'email',
      title: 'Potential Spear Phishing Attempt',
      source: 'hr-department@companys.net',
      severity: 'medium',
      timestamp: '1 hour ago',
      status: 'quarantined',
      responseType: 'automatic',
      details: 'This email appears to be targeted at specific employees, impersonating the HR department. It contains a suspicious attachment and requests employee verification information.',
    },
    {
      id: 4,
      type: 'website',
      title: 'Fake Banking Website',
      source: 'wellsfarg0-secure.com',
      severity: 'high',
      timestamp: '2 hours ago',
      status: 'blocked',
      responseType: 'automatic',
      details: 'Vision AI detected this as a clone of Wells Fargo banking website with minor visual differences. The site collects banking credentials and contains suspicious JavaScript for data exfiltration.',
    },
    {
      id: 5,
      type: 'email',
      title: 'Suspicious Attachment',
      source: 'invoice@suppliers-billing.com',
      severity: 'medium',
      timestamp: '3 hours ago',
      status: 'pending',
      responseType: 'manual',
      details: 'Email contains a suspicious attachment with an uncommon file extension. The sender domain was recently registered and doesn\'t match known supplier communication patterns.',
    },
    {
      id: 6,
      type: 'url',
      title: 'Suspicious OAuth Request',
      source: 'https://docs-googie.com/auth',
      severity: 'high',
      timestamp: '5 hours ago',
      status: 'blocked',
      responseType: 'automatic',
      details: 'This URL mimics Google Docs but requests excessive permissions through OAuth. The domain uses a typosquatting technique to appear legitimate at first glance.',
    },
    {
      id: 7,
      type: 'website',
      title: 'Cryptocurrency Scam',
      source: 'tesIa-bitcoin.com',
      severity: 'medium',
      timestamp: '8 hours ago',
      status: 'blocked',
      responseType: 'automatic',
      details: 'This website impersonates Tesla with a cryptocurrency investment scam. Visual analysis shows unauthorized use of company branding and suspicious payment collection methods.',
    },
    {
      id: 8,
      type: 'email',
      title: 'CEO Fraud Attempt',
      source: 'ceo@company-finance.org',
      severity: 'critical',
      timestamp: '12 hours ago',
      status: 'quarantined',
      responseType: 'automatic',
      details: 'This email impersonates the CEO and requests an urgent wire transfer. Language analysis detected unusual phrasing and urgency indicators inconsistent with legitimate executive communications.',
    },
    {
      id: 9,
      type: 'url',
      title: 'Fake COVID Information',
      source: 'https://vaccine-appointment.net',
      severity: 'medium',
      timestamp: '1 day ago',
      status: 'resolved',
      responseType: 'manual',
      details: 'This URL leads to a fake COVID-19 vaccine appointment website that collects personal and health information. The site was flagged for collecting excessive personal data without proper security measures.',
    },
    {
      id: 10,
      type: 'email',
      title: 'Prize Notification Scam',
      source: 'winner@lottery-international.com',
      severity: 'low',
      timestamp: '2 days ago',
      status: 'resolved',
      responseType: 'automatic',
      details: 'Classic lottery scam email stating the recipient has won a large sum of money. Contains multiple grammar issues and requests banking information for "prize transfer".',
    },
  ];

  const filteredAlerts = alerts.filter((alert) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'pending') return alert.status === 'pending' || alert.status === 'quarantined';
    if (activeTab === 'resolved') return alert.status === 'resolved' || alert.status === 'blocked';
    return true;
  });

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-danger-100 text-danger-800 dark:bg-danger-900/50 dark:text-danger-300';
      case 'high':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300';
      case 'medium':
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/50 dark:text-secondary-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'blocked':
        return 'bg-success-100 text-success-800 dark:bg-success-900/50 dark:text-success-300';
      case 'quarantined':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900/50 dark:text-warning-300';
      case 'pending':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
      default:
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'blocked':
        return <XCircle className="h-3 w-3 mr-1" />;
      case 'quarantined':
        return <Clock className="h-3 w-3 mr-1" />;
      case 'pending':
        return <Clock className="h-3 w-3 mr-1" />;
      default:
        return <CheckCircle className="h-3 w-3 mr-1" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="h-5 w-5 text-primary-500" />;
      case 'url':
        return <Link className="h-5 w-5 text-secondary-500" />;
      default:
        return <Globe className="h-5 w-5 text-warning-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bell className="h-6 w-6 text-warning-500" />
          <h1 className="text-2xl font-bold">Security Alerts</h1>
        </div>
        <div className="flex space-x-2">
          <motion.button
            className="inline-flex items-center px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="h-4 w-4 mr-1.5 text-slate-500" />
            Filter
          </motion.button>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-slate-200 dark:border-slate-700">
          <nav className="flex" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'all'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              All Alerts
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'pending'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('resolved')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'resolved'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              Resolved
            </button>
          </nav>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Threat
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Severity
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Response
                </th>
                <th className="py-3 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-transparent">
              {filteredAlerts.map((alert) => (
                <motion.tr 
                  key={alert.id} 
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150 cursor-pointer"
                  onClick={() => setSelectedAlert(alert)}
                  whileHover={{ backgroundColor: 'rgba(241, 245, 249, 0.5)' }}
                >
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getTypeIcon(alert.type)}
                    </div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {alert.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate max-w-[200px]">
                        {alert.source}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityClass(alert.severity)}`}>
                      {alert.severity === 'critical' ? (
                        <AlertTriangle className="h-3 w-3 mr-1" />
                      ) : alert.severity === 'high' ? (
                        <AlertTriangle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 mr-1" />
                      )}
                      {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(alert.status)}`}>
                      {getStatusIcon(alert.status)}
                      {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      alert.responseType === 'automatic' 
                        ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' 
                        : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {alert.responseType.charAt(0).toUpperCase() + alert.responseType.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                    {alert.timestamp}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {selectedAlert && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedAlert(null)}
        >
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {getTypeIcon(selectedAlert.type)}
                  <h2 className="text-xl font-bold">{selectedAlert.title}</h2>
                </div>
                <button 
                  onClick={() => setSelectedAlert(null)}
                  className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400"
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Source</p>
                  <p className="mt-1 font-mono text-sm">{selectedAlert.source}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Detected</p>
                  <p className="mt-1">{selectedAlert.timestamp}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Severity</p>
                  <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityClass(selectedAlert.severity)}`}>
                    {selectedAlert.severity.charAt(0).toUpperCase() + selectedAlert.severity.slice(1)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Status</p>
                  <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(selectedAlert.status)}`}>
                    {getStatusIcon(selectedAlert.status)}
                    {selectedAlert.status.charAt(0).toUpperCase() + selectedAlert.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Details</p>
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{selectedAlert.details}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {selectedAlert.status === 'pending' && (
                  <>
                    <button className="flex-1 py-2 px-4 bg-danger-600 hover:bg-danger-700 text-white font-medium rounded-lg">
                      Block Threat
                    </button>
                    <button className="flex-1 py-2 px-4 bg-success-600 hover:bg-success-700 text-white font-medium rounded-lg">
                      Mark as Safe
                    </button>
                  </>
                )}
                {selectedAlert.status === 'quarantined' && (
                  <>
                    <button className="flex-1 py-2 px-4 bg-danger-600 hover:bg-danger-700 text-white font-medium rounded-lg">
                      Block Permanently
                    </button>
                    <button className="flex-1 py-2 px-4 bg-success-600 hover:bg-success-700 text-white font-medium rounded-lg">
                      Release from Quarantine
                    </button>
                  </>
                )}
                {(selectedAlert.status === 'blocked' || selectedAlert.status === 'resolved') && (
                  <button className="flex-1 py-2 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg">
                    View Full Report
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Alerts;