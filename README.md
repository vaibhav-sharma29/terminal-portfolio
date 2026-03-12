# 🚀 Terminal 3D Portfolio - Vaibhav Sharma

> An interactive terminal-style portfolio website with 3D effects, Matrix rain animation, and smooth user experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00ff41?style=for-the-badge)](https://vaibhav-sharma29.github.io/terminal-portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-vaibhav--sharma29-181717?style=for-the-badge&logo=github)](https://github.com/vaibhav-sharma29)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/vaibhavsharma-mern)

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red?style=flat-square)

---

## 📸 Preview

```
██╗   ██╗ █████╗ ██╗██████╗ ██╗  ██╗ █████╗ ██╗   ██╗    ███████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗ █████╗ 
██║   ██║██╔══██╗██║██╔══██╗██║  ██║██╔══██╗██║   ██║    ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║██╔══██╗
██║   ██║███████║██║██████╔╝███████║███████║██║   ██║    ███████╗███████║███████║██████╔╝██╔████╔██║███████║
╚██╗ ██╔╝██╔══██║██║██╔══██╗██╔══██║██╔══██║╚██╗ ██╔╝    ╚════██║██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║
 ╚████╔╝ ██║  ██║██║██████╔╝██║  ██║██║  ██║ ╚████╔╝     ███████║██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║
  ╚═══╝  ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝      ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
```

---

## ✨ Features

### 🖥️ **Terminal Interface**
- Interactive command-line portfolio experience
- Real-time command execution
- Command history with arrow key navigation
- Auto-complete with Tab key
- Smooth typing animations

### 🎨 **Visual Effects**
- **Matrix Rain Animation** - Animated background effect
- **Particle System** - Dynamic particle interactions
- **Smooth Cursor Trail** - Colorful mouse trail effect
- **Card Hover Effects** - Subtle animations
- **Multiple Themes** - Matrix Green, Cyberpunk, Blue

### 💬 **Contact System**
- Step-by-step contact form wizard
- Formspree integration (no backend needed)
- Direct email & phone links
- LinkedIn integration

### 📱 **Responsive Design**
- Fully responsive on all devices
- Mobile-optimized interface
- Touch-friendly buttons
- Adaptive particle count

### ⌨️ **Keyboard Shortcuts**
- `Enter` - Execute command
- `↑/↓` - Navigate command history
- `Tab` - Auto-complete command
- `Ctrl+K` - Focus terminal input
- `Esc` - Close modal

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling & Animations
- **JavaScript (ES6+)** - Interactivity

### Libraries
- **Particles.js** - Particle effects
- **Three.js** - 3D rendering
- **Font Awesome** - Icons
- **Formspree** - Contact form handling

### Tools
- **Git/GitHub** - Version control
- **VS Code** - Code editor
- **GitHub Pages** - Hosting

---

## 🚀 Quick Start

### Option 1: Direct Use
```bash
# Clone the repository
git clone https://github.com/vaibhav-sharma29/terminal-portfolio.git

# Open in browser
cd terminal-portfolio
open index.html
```

### Option 2: Live Server
```bash
# Using VS Code Live Server
1. Install Live Server extension
2. Right-click on index.html
3. Select "Open with Live Server"
```

---

## 📝 Available Commands

Type these commands in the terminal:

| Command | Description |
|---------|-------------|
| `about` | Learn about me |
| `skills` | View technical skills |
| `projects` | Browse featured projects |
| `contact` | Open contact form |
| `resume` | Download resume |
| `social` | Social media links |
| `clear` | Clear terminal |
| `help` | Show all commands |
| `theme` | Change color theme |
| `matrix` | Activate Matrix effect |
| `hack` | Try to hack (just for fun!) |

---

## ⚙️ Customization Guide

### 1. Update Personal Information

Edit `assets/js/commands.js`:

```javascript
// Update your details
function getAboutOutput() {
    return `
        <p>Hi! I'm <span class="highlight">Your Name</span>...</p>
        <p><span class="highlight">Email:</span> your@email.com</p>
        <p><span class="highlight">Phone:</span> +91 XXXXXXXXXX</p>
    `;
}
```

### 2. Add Your Projects

Edit `assets/js/commands.js` in `getProjectsOutput()` function:

```javascript
<div class="card-3d project-card">
    <h3 class="project-title">🚀 Your Project Name</h3>
    <p class="project-tech">Tech Stack</p>
    <p class="project-desc">Project description...</p>
    // Add your project details
</div>
```

### 3. Update Skills

Edit `assets/js/commands.js` in `getSkillsOutput()` function:

```javascript
<p><span class="highlight">Your Skill Category:</span></p>
<p>  → Skill 1, Skill 2, Skill 3</p>
```

### 4. Setup Contact Form

1. Go to [Formspree.io](https://formspree.io)
2. Create free account
3. Get your form endpoint
4. Update in `assets/js/terminal.js` (Line 207):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 5. Add Your Resume

1. Place your resume image in `assets/images/`
2. Name it `resume.jpg` or `resume.png`
3. Update extension in `assets/js/commands.js` if needed

### 6. Change Theme Colors

Edit `assets/css/style.css`:

```css
:root {
    --primary: #00ff41;      /* Matrix Green */
    --secondary: #00d9ff;    /* Cyan */
    --accent: #ff006e;       /* Pink */
}
```

### 7. Update Social Links

Edit `assets/js/commands.js` in `getSocialOutput()` function:

```javascript
<a href="https://linkedin.com/in/your-profile" target="_blank" class="project-link">
    <i class="fab fa-linkedin"></i> LinkedIn
</a>
```

---

## 🌐 Deployment

### GitHub Pages (Recommended)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git branch -M main
git remote add origin https://github.com/yourusername/terminal-portfolio.git
git push -u origin main

# Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch → Save
```

Your site will be live at: `https://yourusername.github.io/terminal-portfolio/`

### Auto Updates
```bash
# Whenever you make changes:
git add .
git commit -m "Updated projects"
git push

# Site automatically updates in 1-2 minutes! ✅
```

### Other Options
- **Netlify**: Drag & drop deployment
- **Vercel**: One-click deploy
- **Any static hosting**: Upload files via FTP

---

## 📂 Project Structure

```
Terminal-3D-Portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # All styles & animations
│   ├── js/
│   │   ├── terminal.js     # Terminal logic & functionality
│   │   ├── commands.js     # Command outputs & content
│   │   ├── 3d-effects.js   # 3D effects & animations
│   │   └── main.js         # Initialization
│   └── images/
│       └── resume.jpg      # Your resume image
├── README.md               # Documentation
├── DEPLOYMENT.md           # Deployment guide
└── .gitignore              # Git ignore file
```

---

## 🎯 Browser Support

| Browser | Support |
|---------|--------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Browsers | ✅ Full |

---

## 💡 Features Breakdown

### Terminal Functionality
- ✅ Command execution
- ✅ Command history (↑/↓ arrows)
- ✅ Auto-complete (Tab key)
- ✅ Command suggestions
- ✅ Error handling
- ✅ Clear command

### Visual Effects
- ✅ Matrix rain animation
- ✅ Particle system
- ✅ Cursor trail effect
- ✅ Card hover effects
- ✅ Smooth scrolling
- ✅ Loading animation
- ✅ Theme switching

### User Experience
- ✅ Responsive design
- ✅ Mobile-friendly
- ✅ Quick action buttons
- ✅ Keyboard shortcuts
- ✅ Smooth animations
- ✅ Fast loading

---

## 🐛 Troubleshooting

### Contact form not working?
- Check Formspree configuration
- Verify form endpoint URL
- Check browser console for errors

### Effects not smooth?
- Reduce particle count in `3d-effects.js`
- Disable cursor trail on low-end devices

### Commands not working?
- Check browser console (F12)
- Ensure all JS files are loaded
- Clear browser cache (Ctrl + Shift + Delete)

---

## 📧 Contact

**Vaibhav Sharma**
- 📧 Email: vaibhavkrish299@gmail.com
- 📱 Phone: +91 9214178185
- 💼 LinkedIn: [linkedin.com/in/vaibhavsharma-mern](https://linkedin.com/in/vaibhavsharma-mern)
- 🐙 GitHub: [github.com/vaibhav-sharma29](https://github.com/vaibhav-sharma29)

---

## 📄 License

Free to use and customize for personal and commercial projects!

---

## 🌟 Show Your Support

If you like this portfolio, give it a ⭐ on GitHub!

---

## 🙏 Acknowledgments

- Particles.js for particle effects
- Three.js for 3D rendering
- Font Awesome for icons
- Formspree for contact form handling
- GitHub Pages for hosting

---

**Built with 💚 by Vaibhav Sharma**

*Enjoy your terminal portfolio! 🎉*

---

### 🔗 Quick Links

- [Live Demo](https://vaibhav-sharma29.github.io/terminal-portfolio/)
- [Deployment Guide](DEPLOYMENT.md)
- [Report Bug](https://github.com/vaibhav-sharma29/terminal-portfolio/issues)
- [Request Feature](https://github.com/vaibhav-sharma29/terminal-portfolio/issues)

---

**Last Updated:** January 2025
