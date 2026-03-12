// Main Initialization
console.log('Terminal Portfolio Initialized');

// No EmailJS needed - Using Formspree instead

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Focus terminal input when terminal is active
    const terminalBody = document.getElementById('terminal-body');
    if (terminalBody && terminalBody.style.display !== 'none') {
        document.getElementById('terminal-input')?.focus();
    }
});
