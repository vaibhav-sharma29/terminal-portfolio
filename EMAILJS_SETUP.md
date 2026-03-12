# 📧 EmailJS Setup Guide (Hindi)

## ✅ Contact Form Ko Working Banao (5 Minutes)

### Step 1: EmailJS Account Banao

1. Website kholo: https://www.emailjs.com/
2. **"Sign Up"** click karo
3. Email se sign up karo (FREE - 200 emails/month)
4. Email verify karo

---

### Step 2: Email Service Add Karo

1. Dashboard mein **"Email Services"** par jao
2. **"Add New Service"** button click karo
3. **Gmail** select karo
4. **"Connect Account"** click karo
5. Apna Gmail account connect karo
6. **Service ID** copy karo (Example: `service_abc123`)

---

### Step 3: Email Template Banao

1. **"Email Templates"** section mein jao
2. **"Create New Template"** click karo
3. Template name: `contact_form`
4. Template content mein ye paste karo:

```
Subject: New Contact from Portfolio - {{user_name}}

Hello Vaibhav,

You have received a new message from your portfolio:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}

---
Sent from your Terminal Portfolio Contact Form
```

5. **Save** button click karo
6. **Template ID** copy karo (Example: `template_xyz789`)

---

### Step 4: Public Key Copy Karo

1. **"Account"** menu mein jao
2. **"General"** tab select karo
3. **"Public Key"** copy karo (Example: `abcXYZ123456`)

---

### Step 5: Code Mein Keys Paste Karo

#### File 1: `assets/js/terminal.js`

Line 82 ke paas ye line dhundo:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace karo:
```javascript
emailjs.init('abcXYZ123456'); // Apna Public Key yahan
```

Line 84 ke paas ye line dhundo:
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
```

Replace karo:
```javascript
emailjs.sendForm('service_abc123', 'template_xyz789', form)
//                 ↑ Service ID    ↑ Template ID
```

#### File 2: `assets/js/main.js`

Line 5 ke paas:
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace karo:
```javascript
emailjs.init('abcXYZ123456'); // Same Public Key
```

---

### ✅ Test Karo!

1. `index.html` file browser mein kholo
2. Terminal mein `contact` type karo ya Contact button click karo
3. Form fill karo:
   - Name: Test User
   - Email: test@example.com
   - Message: Testing contact form
4. **Send Message** click karo
5. Success message aana chahiye! ✅
6. **Apna Gmail check karo** - email aaya hoga! 📧

---

## 🎯 Kya Milega?

Jab koi aapke portfolio se message bhejega:

```
Subject: New Contact from Portfolio - John Doe

Hello Vaibhav,

You have received a new message from your portfolio:

Name: John Doe
Email: john@example.com

Message:
Hi Vaibhav, I want to hire you for a project!

---
Sent from your Terminal Portfolio Contact Form
```

---

## 🔥 Auto-Reply Setup (Optional)

Agar chahte ho ki user ko bhi confirmation email jaye:

1. EmailJS dashboard mein jao
2. Template edit karo
3. **"Auto-Reply"** enable karo
4. Auto-reply template:

```
Subject: Thanks for contacting me!

Hi {{user_name}},

Thank you for reaching out! I have received your message and will get back to you within 24 hours.

Best regards,
Vaibhav Sharma
AI Full Stack Developer

Email: vaibhavkrish299@gmail.com
Phone: +91 9214178185
```

---

## 🆘 Problems?

### Error: "EmailJS is not defined"
**Solution:** Check karo `index.html` mein ye line hai ya nahi:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Email nahi aa raha
**Check karo:**
1. Service ID, Template ID, Public Key sahi hai?
2. EmailJS dashboard → **"Logs"** check karo
3. Gmail **Spam folder** check karo
4. EmailJS account verify hai?

### "Failed to send message"
**Check karo:**
1. Internet connection
2. Browser console mein error dekho (F12 press karo)
3. EmailJS free limit (200/month) cross to nahi ho gaya?

---

## 💡 Pro Tips

1. **Custom Domain Email:**
   - EmailJS mein custom domain email bhi add kar sakte ho
   - Gmail ke alawa Outlook, Yahoo bhi use kar sakte ho

2. **Email Notifications:**
   - Mobile app install karo instant notifications ke liye
   - EmailJS dashboard mein notification settings customize karo

3. **Spam Protection:**
   - reCAPTCHA add karo (optional)
   - Rate limiting enable karo

4. **Analytics:**
   - EmailJS dashboard mein dekh sakte ho:
     - Kitne emails aaye
     - Success/failure rate
     - Monthly usage

---

## 🎯 Alternative Options

Agar EmailJS setup nahi karna chahte:

### Option 1: Formspree (Easiest)
1. https://formspree.io par jao
2. Email verify karo
3. Form endpoint copy karo
4. HTML mein form action update karo

### Option 2: Direct mailto Link
```html
<a href="mailto:vaibhavkrish299@gmail.com?subject=Portfolio Contact&body=Hi Vaibhav,">
    Email Me
</a>
```

---

## ✅ Setup Complete!

Ab aapka contact form fully working hai! 🎉

Koi problem ho to:
- EmailJS documentation: https://www.emailjs.com/docs/
- Ya mujhe contact karo: vaibhavkrish299@gmail.com

**Happy Coding! 💚**
