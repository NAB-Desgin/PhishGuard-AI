chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  try {
    const url = new URL(details.url);
    
    // Basic phishing checks
    const suspiciousPatterns = [
      'login',
      'signin',
      'account',
      'verify',
      'secure',
      'update'
    ];
    
    const isDomainSuspicious = suspiciousPatterns.some(pattern => 
      url.hostname.toLowerCase().includes(pattern)
    );
    
    if (isDomainSuspicious) {
      // Send alert to popup
      chrome.runtime.sendMessage({
        type: 'SUSPICIOUS_URL_DETECTED',
        url: details.url,
        timestamp: new Date().toISOString()
      });
      
      // Store detection in history
      const history = await chrome.storage.local.get('detectionHistory');
      const updatedHistory = {
        detectionHistory: [
          ...(history.detectionHistory || []),
          {
            url: details.url,
            timestamp: new Date().toISOString(),
            type: 'suspicious_url'
          }
        ].slice(-100) // Keep last 100 entries
      };
      
      await chrome.storage.local.set(updatedHistory);
    }
  } catch (error) {
    console.error('Error in navigation listener:', error);
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'SCAN_PAGE') {
    // Implement page scanning logic
    sendResponse({ success: true });
  }
});