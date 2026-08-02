# Kesava Kantipudi Portfolio

A modern personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Overview

This website is a fully responsive developer portfolio that includes:
- **Hero**, **About**, **Skills**, **Projects**, and **Contact** sections
- **Parallax scrolling** effect in the hero section
- **On-scroll animations** for all major sections
- **6 featured projects** with GitHub links
- **Social media profiles** (Facebook, Twitter, Instagram, LinkedIn, GitHub)
- **Contact form** powered by a Discord webhook through a secure Vercel Function
- **Responsive design** for mobile, tablet, and desktop
- **Prefers-reduced-motion** support for accessibility
- **Font Awesome icons** for social and skill visualization

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Font Awesome 6.4.0
- Vercel Function (contact form → Discord webhook)

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
npm run build
```

The production build will be in the `dist/` folder.

## Project Details

- **Author:** Kesava Sai Veerendra Kantipudi
- **Email:** kantipudikesavasaiveerendra@gmail.com
- **GitHub:** https://github.com/kesavakantipudi
- **LinkedIn:** https://www.linkedin.com/in/kesava-kantipudi-00550a291/
- **Location:** Rajahmundry, Andhra Pradesh, India

## Featured Projects

1. **Multi-Task Learning with Gradient Surgery** - TensorFlow + Streamlit
2. **Speech-to-Intent Pipeline** - Real-time NLP processing
3. **Explainable Recommendation System** - SHAP-based transparency
4. **Multimodal RAG System** - Document and image analysis
5. **Sentiment Analysis Platform** - Real-time sentiment processing
6. **Variational Autoencoder Explorer** - Interactive VAE visualization

## Contact Form Setup

The contact form posts to a secure Vercel Function at `/api/contact`, which validates the
submission and forwards it to a Discord channel as an embed. The webhook URL is stored only in
an environment variable and is never exposed to the frontend.

To enable the contact form:

1. Create a Discord webhook for the channel you want notifications in:
   Server Settings → Integrations → Webhooks → New Webhook.
2. Copy the webhook URL and set it as the `DISCORD_WEBHOOK_URL` environment variable:

   - **Local development:** copy `.env.example` to `.env` and fill in the value.
   - **Vercel:** add `DISCORD_WEBHOOK_URL` under Project → Settings → Environment Variables
     for the production environment (and preview if desired), then redeploy.

```bash
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your_webhook_id/your_webhook_token
```

The function rejects requests that are not `POST`, contain an invalid JSON body, are missing
any required field (`name`, `email`, `subject`, `message`), or contain a malformed email with
an appropriate HTTP status code.

## Live Site

Deploy to Vercel or Netlify for free. Add the live URL here after deployment.

## Notes

- Profile images are stored in the `Images/` folder
- Resume (PDF) is stored as `KesavaSaiVeerendra.pdf`
- All project links point to public GitHub repositories
- Social media links can be updated in the `socialLinks` array in `src/App.jsx`

