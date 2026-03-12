// Terminal State
let commandHistory = [];
let historyIndex = -1;
let currentStep = 1;

// Available Commands
const commands = [
    'about', 'skills', 'projects', 'contact', 'resume', 
    'social', 'clear', 'help', 'matrix', 'theme', 'hack'
];

// Start Terminal
function startTerminal() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('terminal-body').style.display = 'block';
    document.getElementById('terminal-input').focus();
}

// Execute Command
function executeCommand(cmd) {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    
    cmd = cmd || input.value.trim().toLowerCase();
    
    if (!cmd) return;
    
    // Add to history
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;
    
    // Display command
    const commandLine = document.createElement('div');
    commandLine.className = 'output-line';
    commandLine.innerHTML = `<span class="prompt">vaibhav@portfolio:~$</span> <span class="command">${cmd}</span>`;
    output.appendChild(commandLine);
    
    // Execute command
    const result = document.createElement('div');
    result.className = 'output-content';
    result.innerHTML = getCommandOutput(cmd);
    output.appendChild(result);
    
    // Clear input
    input.value = '';
    
    // Scroll to show the new result from its heading
    setTimeout(() => {
        result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
}

// Get Command Output
function getCommandOutput(cmd) {
    const parts = cmd.split(' ');
    const mainCmd = parts[0];
    
    switch(mainCmd) {
        case 'about':
            return getAboutOutput();
        case 'skills':
            return getSkillsOutput();
        case 'projects':
            return getProjectsOutput();
        case 'contact':
            openContactModal();
            return '<p class="success">✅ Opening contact form...</p>';
        case 'resume':
            return getResumeOutput();
        case 'social':
            return getSocialOutput();
        case 'clear':
            setTimeout(() => {
                document.getElementById('terminal-output').innerHTML = '';
            }, 100);
            return '<p class="success">Clearing terminal...</p>';
        case 'help':
            return getHelpOutput();
        case 'matrix':
            activateMatrix();
            return '<p class="success">🎮 Entering the Matrix...</p>';
        case 'theme':
            cycleTheme();
            return '<p class="success">🎨 Theme changed!</p>';
        case 'hack':
            return '<p class="error">⚠️ Access Denied! Nice try though 😉</p>';
        default:
            return `<p class="error">❌ Command not found: '${cmd}'</p>
                    <p class="tip">💡 Type 'help' to see available commands</p>`;
    }
}

// Input Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    
    if (input) {
        // Enter key
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                // Hide suggestions when enter is pressed
                document.getElementById('suggestions').classList.remove('active');
                executeCommand();
            }
            // Arrow up - previous command
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    input.value = commandHistory[historyIndex];
                }
            }
            // Arrow down - next command
            else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    input.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    input.value = '';
                }
            }
            // Tab - autocomplete
            else if (e.key === 'Tab') {
                e.preventDefault();
                autocomplete(input);
            }
        });
        
        // Show suggestions
        input.addEventListener('input', () => {
            showSuggestions(input.value);
        });
    }
});

// Autocomplete
function autocomplete(input) {
    const value = input.value.toLowerCase();
    const matches = commands.filter(cmd => cmd.startsWith(value));
    
    if (matches.length === 1) {
        input.value = matches[0];
    }
}

// Show Suggestions
function showSuggestions(value) {
    const suggestions = document.getElementById('suggestions');
    
    if (!value) {
        suggestions.classList.remove('active');
        return;
    }
    
    const matches = commands.filter(cmd => cmd.startsWith(value.toLowerCase()));
    
    if (matches.length > 0 && value.length > 0) {
        suggestions.innerHTML = matches.map(cmd => 
            `<div class="suggestion-item" onclick="selectSuggestion('${cmd}')">${cmd}</div>`
        ).join('');
        suggestions.classList.add('active');
    } else {
        suggestions.classList.remove('active');
    }
}

// Select Suggestion
function selectSuggestion(cmd) {
    const input = document.getElementById('terminal-input');
    input.value = cmd;
    document.getElementById('suggestions').classList.remove('active');
    input.focus();
    // Auto execute command after selection
    executeCommand(cmd);
}

// Contact Modal Functions
function openContactModal() {
    document.getElementById('contact-modal').classList.add('active');
    currentStep = 1;
}

function closeModal() {
    document.getElementById('contact-modal').classList.remove('active');
}

function nextStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(s => s.classList.remove('active'));
    steps[step - 1].classList.add('active');
    currentStep = step;
}

// Contact Form Submit - Formspree (No Gmail API issues)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.btn-submit');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            const formData = new FormData(form);
            
            try {
                // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
                const response = await fetch('https://formspree.io/f/xbdzyyje', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    alert('✅ Message sent successfully! I will get back to you soon. 🚀');
                    form.reset();
                    closeModal();
                    nextStep(1);
                } else {
                    throw new Error('Failed');
                }
            } catch (error) {
                alert('❌ Failed to send. Email me: vaibhavkrish299@gmail.com');
                console.error('Error:', error);
            }
            
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.disabled = false;
        });
    }
});

// Theme Toggle
let currentTheme = 0;
const themes = ['matrix', 'cyberpunk', 'blue'];

function toggleTheme() {
    cycleTheme();
}

function cycleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.className = themes[currentTheme];
}

// Matrix Effect
function activateMatrix() {
    const canvas = document.getElementById('matrix-canvas');
    canvas.style.opacity = '1';
    
    setTimeout(() => {
        canvas.style.opacity = '0.3';
    }, 5000);
}

// Typing Animation
const typingTexts = [
    'AI Full Stack Developer',
    'MERN Stack Developer',
    'Problem Solver',
    'Tech Enthusiast'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
}

// Start typing animation
setTimeout(typeText, 1000);

// Animated Loading Bars with Percentage
function animateLoadingBar(barNumber, delay) {
    setTimeout(() => {
        const progressBar = document.querySelector(`[data-progress="${barNumber}"]`);
        const percentElement = document.getElementById(`percent${barNumber}`);
        
        if (!progressBar || !percentElement) return;
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = progress + '%';
            percentElement.textContent = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                
                // Show ready message after all bars complete
                if (barNumber === 3) {
                    setTimeout(() => {
                        const readyMsg = document.getElementById('ready-msg');
                        if (readyMsg) {
                            readyMsg.style.opacity = '1';
                            readyMsg.style.transition = 'opacity 0.5s';
                        }
                    }, 300);
                }
            }
        }, 30); // Speed control - 30ms per update
    }, delay);
}

// Start loading animations on page load
window.addEventListener('DOMContentLoaded', () => {
    animateLoadingBar(1, 500);   // First bar starts after 0.5s
    animateLoadingBar(2, 2000);  // Second bar starts after 2s
    animateLoadingBar(3, 3500);  // Third bar starts after 3.5s
});

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-overlay').classList.add('hidden');
    }, 2000);
});

// Click outside modal to close
window.addEventListener('click', (e) => {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
        closeModal();
    }
});
