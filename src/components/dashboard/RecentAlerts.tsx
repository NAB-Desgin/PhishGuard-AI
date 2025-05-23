import React from 'react';
import { AlertCircle, Mail, Link, FileText, XCircle, AlertTriangle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'email',
    title: 'Suspicious Login Attempt Email',
    source: 'contact@paypa1-security.com',
    severity: 'high',
    timestamp: '10 min ago',
    status: 'blocked',
  },
  {
    id: 2,
    type: 'url',
    title: 'Malicious URL Detected',
    source: 'https://amaz0n-secure.com/login',
    severity: 'critical',
    timestamp: '25 min ago',
    status: 'blocked',
  },
  {
    id: 3,
    type: 'email',
    title: 'Potential Spear Phishing Attempt',
    source: 'hr-department@companys.net',
    severity: 'medium',
    timestamp: '1 hour ago',
    status: 'quarantined',
  },
  {
    id: 4,
    type: 'website',
    title: 'Fake Banking Website',
    source: 'wellsfarg0-secure.com',
    severity: 'high',
    timestamp: '2 hours ago',
    status: 'blocked',
  },
];

const RecentAlerts: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead>
            <tr>
              <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Type
              </th>
              <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Threat
              </th>
              <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Severity
              </th>
              <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3.5 px-4 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-transparent">
            {alerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-150">
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {alert.type === 'email' ? (
                      <Mail className="h-5 w-5 text-primary-500" />
                    ) : alert.type === 'url' ? (
                      <Link className="h-5 w-5 text-secondary-500" />
                    ) : (
                      <FileText className="h-5 w-5 text-warning-500" />
                    )}
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
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    alert.severity === 'critical'
                      ? 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-300'
                      : alert.severity === 'high'
                      ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300'
                      : 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300'
                  }`}>
                    {alert.severity === 'critical' ? (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    ) : alert.severity === 'high' ? (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    )}
                    {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    alert.status === 'blocked'
                      ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300'
                      : 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300'
                  }`}>
                    {alert.status === 'blocked' ? (
                      <XCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <Clock className="h-3 w-3 mr-1" />
                    )}
                    {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                  {alert.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentAlerts;