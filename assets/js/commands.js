// Command Outputs

function getAboutOutput() {
    return `
        <div class="card-3d">
            <h2 class="project-title">👨‍💻 About Me</h2>
            <br>
            <p>Hi! I'm <span class="highlight">Vaibhav Sharma</span>, an AI Full Stack Developer and MERN Stack Developer from Kanpur, Uttar Pradesh, India.</p>
            <br>
            <p>🚀 I specialize in building full-stack applications using React, Node.js, Express.js, and MongoDB.</p>
            <br>
            <p>💡 Passionate about creating innovative solutions and learning new technologies.</p>
            <br>
            <p>🎯 Currently building new projects using MERN stack and exploring AI integration in web applications.</p>
            <br>
            <p><span class="highlight">Location:</span> Kanpur, Uttar Pradesh, India</p>
            <p><span class="highlight">Email:</span> vaibhavkrish299@gmail.com</p>
            <p><span class="highlight">Phone:</span> +91 9214178185</p>
        </div>
    `;
}

function getSkillsOutput() {
    return `
        <div class="card-3d">
            <h2 class="project-title">💻 Technical Skills</h2>
            <br>
            <p><span class="highlight">Programming Languages:</span></p>
            <p>  → JavaScript (ES6+), HTML5, CSS3, C</p>
            <br>
            <p><span class="highlight">Frontend:</span></p>
            <p>  → React.js, Tailwind CSS, Bootstrap</p>
            <br>
            <p><span class="highlight">Backend:</span></p>
            <p>  → Node.js, Express.js, RESTful APIs</p>
            <br>
            <p><span class="highlight">Databases:</span></p>
            <p>  → MongoDB, SQL</p>
            <br>
            <p><span class="highlight">Tools:</span></p>
            <p>  → Git/GitHub, VS Code</p>
        </div>
    `;
}

function getProjectsOutput() {
    return `
        <h2 class="project-title">🚀 Featured Projects</h2>
        <br>
        
        <div class="card-3d project-card">
            <h3 class="project-title">🏛️ HealthHive - Smart Symptom & Wellness Assistant</h3>
            <p class="project-tech">JavaScript • HTML5 • CSS3</p>
            <br>
            <p class="project-desc">A smart symptom and wellness assistant that helps users check symptoms, calculate BMI & calories, access nutrition info, get first-aid guidance, view emergency help, calculate AI-based health scores, and find the nearest hospitals—all in one place.</p>
            <br>
            <p><span class="highlight">Key Features:</span></p>
            <p>  ✅ Symptom checker</p>
            <p>  ✅ BMI & calorie calculator</p>
            <p>  ✅ Nutrition information</p>
            <p>  ✅ First-aid guidance</p>
            <p>  ✅ Emergency help & nearest hospitals</p>
            <p>  ✅ AI-based health score</p>
            <br>
            <div class="project-links">
                <a href="https://github.com/vaibhav-sharma29" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
        
        <div class="card-3d project-card">
            <h3 class="project-title">🎮 Tic Tac Toe Game</h3>
            <p class="project-tech">JavaScript • HTML5 • CSS3</p>
            <br>
            <p class="project-desc">Interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. Features 2-player mode and dynamic board.</p>
            <br>
            <p><span class="highlight">Key Features:</span></p>
            <p>  ✅ 2-player gameplay</p>
            <p>  ✅ Dynamic game board</p>
            <p>  ✅ Win detection</p>
            <p>  ✅ Clean UI design</p>
            <br>
            <div class="project-links">
                <a href="https://github.com/vaibhav-sharma29" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
        
        <div class="card-3d project-card">
            <h3 class="project-title">🏫 School Management System</h3>
            <p class="project-tech">C Language</p>
            <br>
            <p class="project-desc">A practice school project built using C language for managing school operations and student records.</p>
            <br>
            <p><span class="highlight">Key Features:</span></p>
            <p>  ✅ Student record management</p>
            <p>  ✅ Basic CRUD operations</p>
            <p>  ✅ File handling</p>
            <p>  ✅ Console-based interface</p>
            <br>
            <div class="project-links">
                <a href="https://github.com/vaibhav-sharma29" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
        
        <br>
        <p class="tip">💡 Want to see more? Type 'social' to connect with me!</p>
    `;
}

function getResumeOutput() {
    return `
        <div class="card-3d">
            <h2 class="project-title">📄 Resume</h2>
            <br>
            <p>Download my complete resume to learn more about my experience and qualifications.</p>
            <br>
            <div class="project-links">
                <a href="assets/images/resume.jpg" download="Vaibhav_Sharma_Resume.jpg" class="project-link">
                    <i class="fas fa-download"></i> Download Resume
                </a>
                <a href="https://linkedin.com/in/vaibhavsharma-mern" target="_blank" class="project-link">
                    <i class="fab fa-linkedin"></i> View LinkedIn
                </a>
            </div>
        </div>
    `;
}

function getSocialOutput() {
    return `
        <div class="card-3d">
            <h2 class="project-title">🌐 Connect With Me</h2>
            <br>
            <p>Let's connect on social media and collaborate!</p>
            <br>
            <div class="project-links">
                <a href="https://linkedin.com/in/vaibhavsharma-mern" target="_blank" class="project-link">
                    <i class="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/vaibhav-sharma29" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="mailto:vaibhavkrish299@gmail.com" class="project-link">
                    <i class="fas fa-envelope"></i> Email
                </a>
                <a href="tel:+919214178185" class="project-link">
                    <i class="fas fa-phone"></i> Call Me
                </a>
            </div>
            <br>
            <p class="tip">💡 Type 'contact' to send me a message directly!</p>
        </div>
    `;
}

function getHelpOutput() {
    return `
        <div class="card-3d">
            <h2 class="project-title">❓ Available Commands</h2>
            <br>
            <p><span class="highlight">Navigation Commands:</span></p>
            <p>  → <span class="command-hint">about</span> - Learn about me and my background</p>
            <p>  → <span class="command-hint">skills</span> - View my technical skills and expertise</p>
            <p>  → <span class="command-hint">projects</span> - Browse my featured projects</p>
            <p>  → <span class="command-hint">contact</span> - Open contact form wizard</p>
            <p>  → <span class="command-hint">resume</span> - Download my resume</p>
            <p>  → <span class="command-hint">social</span> - Social media links</p>
            <br>
            <p><span class="highlight">Utility Commands:</span></p>
            <p>  → <span class="command-hint">clear</span> - Clear the terminal screen</p>
            <p>  → <span class="command-hint">help</span> - Show this help menu</p>
            <p>  → <span class="command-hint">theme</span> - Cycle through color themes</p>
            <br>
            <p><span class="highlight">Fun Commands:</span></p>
            <p>  → <span class="command-hint">matrix</span> - Enter the Matrix 🎮</p>
            <p>  → <span class="command-hint">hack</span> - Try to hack the system 😉</p>
            <br>
            <p class="tip">💡 Pro Tips:</p>
            <p>  • Press ↑/↓ arrows for command history</p>
            <p>  • Press Tab for autocomplete</p>
            <p>  • Click quick action buttons below</p>
            <p>  • Type commands or click suggestions</p>
        </div>
    `;
}
