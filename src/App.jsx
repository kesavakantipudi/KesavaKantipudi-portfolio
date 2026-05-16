import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilePhoto from '../Images/image.png';
import img1 from '../Images/23MH1A4224 (1).png';
import img2 from '../Images/image.png';
import img3 from '../Images/MY DR IMG.png';

const resumeUrl = new URL('../KesavaSaiVeerendra.pdf', import.meta.url).href;

const carouselImages = [img1, img2, img3];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: 'fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=100084996735613', label: 'Facebook' },
  { icon: 'fa-twitter', url: 'https://x.com/Kesava_choudary', label: 'Twitter' },
  { icon: 'fa-instagram', url: 'https://www.instagram.com/tech_with_kesava/', label: 'Instagram' },
  { icon: 'fa-youtube', url: 'https://www.youtube.com/@Tech_With_Kesava', label: 'YouTube' },
  { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/kesava-kantipudi-00550a291/', label: 'LinkedIn' },
  { icon: 'fa-github', url: 'https://github.com/kesavakantipudi/', label: 'GitHub' }
];

const skillGroups = [
  {
    title: 'Programming & Databases',
    items: ['Python', 'Java', 'SQL', 'C', 'HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Data Analytics & Tools',
    items: ['Excel', 'Power BI', 'SharePoint', 'Power Automate']
  },
  {
    title: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'NLP', 'Sentiment Analysis', 'Computer Vision']
  },
  {
    title: 'AWS & Cloud',
    items: ['S3', 'EC2', 'IAM', 'Rekognition', 'Transcribe', 'Lex', 'Translate']
  }
];

const projects = [
  {
    title: 'Multi-Task Learning with Gradient Surgery',
    description: 'TensorFlow multi-task learning with PCGrad training. Shared backbone with gradient surgery to reduce task conflict. Streamlit dashboard for monitoring metrics.',
    tech: ['TensorFlow', 'Streamlit', 'Deep Learning'],
    repo: 'https://github.com/kesavakantipudi/Multi-Task-Learning-Model-with-Gradient-Surgery-using-TensorFlow-and-Streamlit'
  },
  {
    title: 'Speech-to-Intent Pipeline',
    description: 'Production-ready real-time speech understanding system that converts audio input into structured intents using modern voice and NLP models.',
    tech: ['Python', 'NLP', 'AWS'],
    repo: 'https://github.com/kesavakantipudi/Production-Ready-Real-Time-Speech-to-Intent-Pipeline'
  },
  {
    title: 'Explainable Recommendation System',
    description: 'Recommendation engine with SHAP-based feature attribution to make model predictions transparent and interpretable for every user.',
    tech: ['Python', 'Machine Learning', 'SHAP'],
    repo: 'https://github.com/kesavakantipudi/Explainable-Recommendation-System-with-SHAP-Based-Feature-Attribution'
  },
  {
    title: 'Multimodal RAG System',
    description: 'Retrieval-Augmented Generation system that processes both documents and images, combining text and visual understanding for comprehensive analysis.',
    tech: ['Python', 'RAG', 'LLMs'],
    repo: 'https://github.com/kesavakantipudi/Multimodal-RAG-System-for-Document-and-Image-Analysis'
  },
  {
    title: 'Sentiment Analysis Platform',
    description: 'End-to-end sentiment analysis platform with real-time processing, visualization, and batch analysis capabilities for social media and review data.',
    tech: ['Python', 'NLP', 'Web Dashboard'],
    repo: 'https://github.com/kesavakantipudi/Sentiment_Analysis_Platform'
  },
  {
    title: 'Variational Autoencoder Explorer',
    description: 'PyTorch-based VAE with controllable latent space explorer. Interactive dashboard for understanding and generating data with controllable parameters.',
    tech: ['PyTorch', 'VAE', 'Visualization'],
    repo: 'https://github.com/kesavakantipudi/Variational-Autoencoder-with-a-Controllable-Latent-Space-Explorer-using-PyTorch'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 140]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-40 flex items-center justify-center h-14 w-14 rounded-full transition-all duration-300 shadow-lg ${
          isDark 
            ? 'bg-sky-600 hover:bg-sky-700 text-white' 
            : 'bg-slate-950 hover:bg-slate-800 text-yellow-300'
        }`}
        aria-label="Toggle dark mode"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? (
          <i className="fas fa-sun text-xl" />
        ) : (
          <i className="fas fa-moon text-xl" />
        )}
      </button>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-950/95 backdrop-blur-md' : 'border-slate-200/70 bg-white/95 backdrop-blur-md'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-950'}`}>
            Kesava<span className="text-sky-600">.</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-sm font-medium transition hover:text-sky-600 ${isDark ? 'text-slate-300 hover:text-slate-100' : 'text-slate-700 hover:text-slate-950'}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download
              className={`hidden rounded-full border px-4 py-2 text-sm font-semibold transition md:inline-flex ${isDark ? 'border-sky-600 bg-sky-600 text-white hover:bg-sky-700' : 'border-slate-200 bg-slate-950 text-white hover:bg-slate-800'}`}
            >
              Resume
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-slate-100 md:hidden ${isDark ? 'border-slate-700 bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-100'}`}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="sr-only">Toggle menu</span>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${menuOpen ? 'opacity-100 visible' : 'pointer-events-none opacity-0 invisible'} absolute inset-x-0 top-full z-40 px-4 pb-6 pt-4 shadow-2xl shadow-slate-900/10 transition-all duration-300 ${isDark ? 'bg-slate-900/95' : 'bg-white/95'}`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-2xl border px-4 py-3 text-base font-medium transition hover:bg-opacity-80 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-200' : 'border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-800'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${isDark ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-slate-950 text-white hover:bg-slate-800'}`}
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="home" className={`relative overflow-hidden px-4 py-24 transition-colors duration-300 sm:px-6 lg:px-8 ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950' : 'bg-gradient-to-br from-sky-700 via-cyan-600 to-slate-950'}`}>
          <motion.div style={{ y: parallaxY }} className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl" />
            <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-sky-400/30 blur-3xl" />
          </motion.div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200 ring-1 ring-white/20">
                AI / ML Developer
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I'm <span className="text-cyan-200">Kesava Kantipudi</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                I build modern, responsive web experiences and intelligent AI solutions using React, Python, machine learning, and cloud automation.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  View My Work
                </a>
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="absolute inset-x-0 top-0 h-full rounded-[2rem] bg-white/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/20 bg-white/10 p-2 shadow-lg">
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Kesava Kantipudi"
                  className="h-96 w-full rounded-[1.75rem] object-contain sm:h-[28rem] transition-all duration-500"
                />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`mx-auto max-w-6xl px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-950' : 'bg-white'}`}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">About Me</p>
              <h2 className={`mt-4 text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>
                I create polished applications for real business and research problems.
              </h2>
              <p className={`mt-6 max-w-2xl text-base leading-8 transition-colors duration-300 sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                I'm Kesava Sai Veerendra Kantipudi, an AI/ML engineering student currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Aditya College of Engineering. I enjoy building intelligent systems, data dashboards, and user-friendly web applications that solve real-world challenges.
              </p>
              <p className={`mt-4 max-w-2xl text-base leading-8 transition-colors duration-300 sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                My experience spans Python, Java, SQL, web development, Power BI, and AWS deployment. I enjoy learning new tools, solving problems creatively, and delivering projects that make data easier to understand.
              </p>
            </div>

            <div className={`rounded-[2rem] border p-6 transition-colors duration-300 shadow-soft ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <div className={`overflow-hidden rounded-[1.75rem] border-2 transition-colors duration-300 shadow-md ${isDark ? 'border-slate-700 bg-slate-800' : 'border-slate-300 bg-slate-100'}`}>
                <img src={profilePhoto} alt="Kesava in casual portrait" className="h-full w-full object-contain" />
              </div>
              <div className="mt-6 flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition hover:bg-sky-600 hover:text-white hover:border-sky-600 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}
                  >
                    <i className={`fab ${social.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Skills</p>
              <h2 className={`mt-4 text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>Technologies I work with daily.</h2>
            </div>
            <p className={`max-w-xl text-sm leading-7 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              I combine software engineering, AI modeling, and dashboard design to build reliable products with polished interfaces.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -4 }}
                className={`rounded-[2rem] border p-6 transition-colors duration-300 shadow-soft ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}
              >
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-950'}`}>{group.title}</h3>
                <ul className={`mt-5 space-y-3 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section id="projects" className={`mx-auto max-w-6xl px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Projects</p>
            <h2 className={`mt-4 text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${isDark ? 'text-white' : 'text-slate-950'}`}>Featured Projects & Research</h2>
            <p className={`mt-4 max-w-2xl text-sm leading-7 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              A collection of my recent work spanning machine learning, NLP, data analysis, and web development. All projects are available on GitHub.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group rounded-[2rem] border p-6 transition hover:shadow-lg hover:border-sky-300 shadow-soft ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-3xl text-xl font-bold transition-colors duration-300 ${isDark ? 'bg-sky-900 text-sky-300' : 'bg-sky-100 text-sky-700'}`}>
                  {index + 1}
                </div>
                <h3 className={`mt-6 text-lg font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-slate-950'}`}>{project.title}</h3>
                <p className={`mt-4 text-sm leading-7 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 ${isDark ? 'border-slate-700 bg-slate-800 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition ${isDark ? 'text-sky-400 hover:text-sky-300' : 'text-sky-700 hover:text-sky-900'}`}
                >
                  View Repository ↗
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`mx-auto max-w-6xl px-4 py-20 transition-colors duration-300 sm:px-6 lg:px-8`}
        >
          <div className={`rounded-[2rem] border p-8 shadow-soft transition-colors duration-300 sm:p-10 ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-950'}`}>
            <div className="grid gap-12 md:grid-cols-2">
              <div className={`transition-colors duration-300 ${isDark ? 'text-slate-100' : 'text-white'}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
                <h2 className={`mt-4 text-3xl font-semibold tracking-tight transition-colors duration-300 sm:text-4xl ${isDark ? 'text-white' : 'text-white'}`}>Let's build something amazing together.</h2>
                <p className={`mt-6 max-w-xl text-base leading-7 transition-colors duration-300 ${isDark ? 'text-slate-400' : 'text-slate-300'}`}>
                  I'm available for internships, freelance projects, and collaborations. Whether it's AI, data analytics, or frontend development—let's connect and create something impactful.
                </p>
                <div className="mt-10 space-y-4">
                  <a href="mailto:kantipudikesavasaiveerendra@gmail.com" className={`flex items-center gap-3 transition hover:text-white ${isDark ? 'text-slate-300' : 'text-slate-200'}`}>
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${isDark ? 'bg-white/10' : 'bg-white/10'}`}>✉</span>
                    kantipudikesavasaiveerendra@gmail.com
                  </a>
                  <p className={`flex items-center gap-3 transition-colors duration-300 ${isDark ? 'text-slate-300' : 'text-slate-200'}`}>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">📍</span>
                    Rajahmundry, Andhra Pradesh, India
                  </p>
                </div>
                <div className="mt-8 flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-sky-600 ${isDark ? 'bg-white/10' : 'bg-white/10'}`}
                    >
                      <i className={`fab ${social.icon} text-sm`} />
                    </a>
                  ))}
                </div>
              </div>

              <div className={`rounded-[1.5rem] border p-8 backdrop-blur-sm transition-colors duration-300 ${isDark ? 'border-white/10 bg-white/5' : 'border-white/20 bg-white/10'}`}>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${isDark ? 'text-white' : 'text-white'}`}>Send Me a Message</h3>
                <form action="https://formspree.io/f/mdkzdov" method="POST" className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Kesava"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:bg-white/10 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:bg-white/10 focus:border-sky-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={4}
                      required
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-slate-400 transition focus:bg-white/10 focus:border-sky-400 focus:outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-95"
                  >
                    Send Message
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-400">
                  Powered by <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">Formspree</a>
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className={`border-t py-6 transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200/70 bg-white'}`}>
        <div className={`mx-auto flex max-w-6xl items-center justify-between px-4 text-sm transition-colors duration-300 sm:px-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          <p>© {new Date().getFullYear()} Kesava Kantipudi. Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
          <a href="#home" className={`transition hover:text-sky-500 ${isDark ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-800'}`}>Back to top</a>
        </div>
      </footer>
    </div>
  );
}
