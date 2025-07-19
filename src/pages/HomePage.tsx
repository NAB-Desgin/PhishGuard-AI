import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Info, Lock } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-800 to-blue-900 dark:from-gray-900 dark:to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Protect Yourself From Phishing Attacks
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                PhishGuard uses advanced machine learning algorithms to identify and 
                block suspicious websites before they can steal your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/url-check"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Check a URL
                </Link>
                <Link
                  to="/attack-types"
                  className="bg-white text-cyan-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Info className="mr-2 h-5 w-5" />
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-cyan-500 rounded-lg rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                      <AlertTriangle size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">Phishing Alert</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Suspicious site detected</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4">
                    The site <span className="text-red-500 font-mono">paypa1.com/secure-login</span> has been 
                    identified as a potential phishing attempt.
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                  <p className="text-right text-sm mt-1 text-red-600 font-bold">Risk: 89%</p>
                  <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-md font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How PhishGuard Protects You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our comprehensive approach to phishing detection combines multiple technologies
              to keep you safe online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                ML-Powered Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our machine learning models analyze URLs and web content in real-time
                to identify even the most sophisticated phishing attempts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Comprehensive Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We check domain reputation, SSL certificates, website content, and
                other factors to provide accurate risk assessments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Educational Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn about different types of phishing attacks and how to protect
                yourself with our extensive knowledge base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Stay Protected?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Create an account to access advanced features, save your scan history, and 
            receive alerts about the latest phishing techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Create Free Account
            </Link>
            <Link
              to="/url-check"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Try URL Scanner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;