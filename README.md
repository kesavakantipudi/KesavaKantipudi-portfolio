# Kesava Kantipudi Portfolio

A modern personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Overview

This website is a fully responsive developer portfolio that includes:
- **Hero**, **About**, **Skills**, **Projects**, and **Contact** sections
- **Parallax scrolling** effect in the hero section
- **On-scroll animations** for all major sections
- **6 featured projects** with GitHub links
- **Social media profiles** (Facebook, Twitter, Instagram, LinkedIn, GitHub)
- **Contact form** powered by Formspree
- **Responsive design** for mobile, tablet, and desktop
- **Prefers-reduced-motion** support for accessibility
- **Font Awesome icons** for social and skill visualization

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Font Awesome 6.4.0
- Formspree (for contact form)

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

To enable the contact form:

1. Visit [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Update the form action in `src/App.jsx` (line ~335):

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

## Live Site

Deploy to Vercel or Netlify for free. Add the live URL here after deployment.

## Notes

- Profile images are stored in the `Images/` folder
- Resume (PDF) is stored as `KesavaSaiVeerendra.pdf`
- All project links point to public GitHub repositories
- Social media links can be updated in the `socialLinks` array in `src/App.jsx`

