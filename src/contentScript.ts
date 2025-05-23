// Monitor for suspicious form submissions
document.addEventListener('submit', (event) => {
  const form = event.target as HTMLFormElement;
  const passwordFields = form.querySelectorAll('input[type="password"]');
  const emailFields = form.querySelectorAll('input[type="email"]');
  
  if (passwordFields.length > 0 || emailFields.length > 0) {
    chrome.runtime.sendMessage({
      type: 'FORM_SUBMISSION_DETECTED',
      url: window.location.href,
      timestamp: new Date().toISOString(),
      hasPasswordField: passwordFields.length > 0,
      hasEmailField: emailFields.length > 0
    });
  }
});

// Scan page content for phishing indicators
const scanPage = () => {
  const pageText = document.body.innerText.toLowerCase();
  const suspiciousTerms = [
    'urgent',
    'verify your account',
    'limited time',
    'update your information',
    'suspicious activity'
  ];
  
  const foundTerms = suspiciousTerms.filter(term => 
    pageText.includes(term)
  );
  
  if (foundTerms.length > 0) {
    chrome.runtime.sendMessage({
      type: 'SUSPICIOUS_CONTENT_DETECTED',
      url: window.location.href,
      timestamp: new Date().toISOString(),
      terms: foundTerms
    });
  }
};

// Run scan when page loads
scanPage();

// Listen for dynamic content changes
const observer = new MutationObserver(scanPage);
observer.observe(document.body, {
  childList: true,
  subtree: true
});