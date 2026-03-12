// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff41'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff41',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Matrix Rain Effect
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
const matrixArray = matrix.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 14, 39, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// 3D Card Tilt Effect - DISABLED (Cards stable rahenge)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-3d');
    
    // Tilt effect removed - cards ab stable rahenge
    // Sirf simple hover effect CSS mein hai
});

// Cursor Trail Effect - Smooth & Clean
const coords = { x: 0, y: 0 };
const circles = [];
const colors = ['#00ff41', '#00d9ff', '#ff006e'];

for (let i = 0; i < 12; i++) {
    const circle = document.createElement('div');
    circle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${colors[i % colors.length]};
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.5s ease;
        box-shadow: 0 0 10px ${colors[i % colors.length]};
    `;
    document.body.appendChild(circle);
    circles.push({ element: circle, x: 0, y: 0 });
}

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCursor() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach((circle, index) => {
        circle.element.style.left = x - 3 + 'px';
        circle.element.style.top = y - 3 + 'px';
        circle.element.style.opacity = (12 - index) / 24;
        circle.element.style.transform = `scale(${(12 - index) / 12})`;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.25;
        y += (nextCircle.y - y) * 0.25;
    });
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Glitch Effect on Hover
document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitch 0.3s infinite';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'glitch 3s infinite';
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic 3D Card Generation - DISABLED
function add3DEffect(selector) {
    // 3D tilt effect disabled - cards stable rahenge
}

// Observer disabled - no dynamic 3D effects
const observer = new MutationObserver(() => {
    // No 3D effects
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl + K to focus terminal input
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('terminal-input')?.focus();
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Easter Egg - Konami Code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
    
    const output = document.getElementById('terminal-output');
    const easterEgg = document.createElement('div');
    easterEgg.className = 'output-content';
    easterEgg.innerHTML = '<p class="success">🎉 KONAMI CODE ACTIVATED! You found the secret! 🎮</p>';
    output.appendChild(easterEgg);
}

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Console Easter Egg
console.log('%c🚀 Welcome to Vaibhav\'s Terminal Portfolio!', 'font-size: 20px; color: #00ff41; font-weight: bold; text-shadow: 0 0 10px #00ff41;');
console.log('%c💻 Built with passion and code', 'font-size: 14px; color: #00d9ff;');
console.log('%c🎮 Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #ff006e;');

// Performance Optimization
if (window.innerWidth < 768) {
    // Reduce particles on mobile
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 }
        }
    });
}
