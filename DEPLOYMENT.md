# 🚀 Deployment Guide - Terminal Portfolio

## GitHub Pages Deployment (Recommended)

### Step 1: GitHub Repository Setup

1. **GitHub par jao aur naya repository banao:**
   - Repository name: `terminal-portfolio`
   - Public select karo
   - README mat add karo (already hai)

### Step 2: Local Git Setup

Terminal/CMD mein ye commands run karo:

```bash
cd "C:\Users\ak\OneDrive\Desktop\Terminal-3D-Portfolio"

# Git initialize
git init

# All files add karo
git add .

# First commit
git commit -m "Initial commit - Terminal Portfolio by Vaibhav Sharma"

# Main branch banao
git branch -M main

# GitHub repository connect karo (APNA USERNAME DAALO)
git remote add origin https://github.com/vaibhav-sharma29/terminal-portfolio.git

# Push karo
git push -u origin main
```

### Step 3: GitHub Pages Enable

1. GitHub repository mein jao
2. **Settings** tab click karo
3. Left sidebar mein **Pages** click karo
4. **Source** mein:
   - Branch: `main` select karo
   - Folder: `/ (root)` select karo
5. **Save** button click karo
6. 2-3 minutes wait karo

### Step 4: Live URL

Tumhara portfolio live ho jayega:
```
https://vaibhav-sharma29.github.io/terminal-portfolio/
```

---

## 🔄 Future Updates (Auto Deploy)

Jab bhi code change karo:

```bash
# Changes save karo
git add .

# Commit message likho
git commit -m "Updated projects section"

# Push karo
git push

# 1-2 minutes mein automatically live site update ho jayegi! ✅
```

---

## 🌐 Custom Domain (Optional)

Agar apna domain hai (example: vaibhavsharma.com):

1. GitHub Pages settings mein jao
2. **Custom domain** field mein domain daalo
3. DNS settings update karo:
   - Type: `CNAME`
   - Name: `www`
   - Value: `vaibhav-sharma29.github.io`

---

## 🆘 Common Issues

### Issue 1: "Permission denied"
```bash
# Solution: SSH key setup karo
ssh-keygen -t ed25519 -C "vaibhavkrish299@gmail.com"
# GitHub Settings → SSH Keys mein add karo
```

### Issue 2: "Repository not found"
```bash
# Solution: Remote URL check karo
git remote -v

# Galat hai to remove karo aur sahi add karo
git remote remove origin
git remote add origin https://github.com/vaibhav-sharma29/terminal-portfolio.git
```

### Issue 3: "Site not loading"
- 2-3 minutes wait karo
- Browser cache clear karo (Ctrl + Shift + Delete)
- GitHub Pages settings check karo

---

## 📊 Deployment Comparison

| Feature | GitHub Pages | Netlify | Vercel |
|---------|-------------|---------|--------|
| **Price** | FREE | FREE | FREE |
| **Auto Deploy** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes |
| **SSL Certificate** | ✅ Auto | ✅ Auto | ✅ Auto |
| **Build Time** | 1-2 min | 30 sec | 20 sec |
| **Best For** | Static sites | Any site | Next.js/React |

---

## 🎯 Recommended Workflow

1. **Local Development:**
   - Code changes karo
   - Browser mein test karo

2. **Git Commit:**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. **Push to GitHub:**
   ```bash
   git push
   ```

4. **Auto Deploy:**
   - GitHub automatically deploy karega
   - 1-2 minutes mein live!

---

## 📱 Share Your Portfolio

Live hone ke baad share karo:
- LinkedIn profile mein add karo
- Resume mein link daalo
- Email signature mein add karo
- Twitter/X par share karo

---

## 💡 Pro Tips

1. **Branch Strategy:**
   - `main` branch = Production (live site)
   - `dev` branch = Development (testing)

2. **Commit Messages:**
   - Clear aur descriptive likho
   - Example: "Added HealthHive project details"

3. **Regular Updates:**
   - Naye projects add karte raho
   - Skills update karte raho
   - Resume update karte raho

4. **Analytics:**
   - Google Analytics add karo
   - Visitors track kar sakte ho

---

## 🆘 Need Help?

- GitHub Docs: https://docs.github.com/pages
- Contact: vaibhavkrish299@gmail.com
- LinkedIn: https://linkedin.com/in/vaibhavsharma-mern

---

**Happy Deploying! 🚀**

Built with 💚 by Vaibhav Sharma
