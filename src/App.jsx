import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const resumeUrl = new URL('../KesavaSaiVeerendra.pdf', import.meta.url).href;

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const skillGroups = [
  {
    title: 'Languages & Frameworks',
    items: ['Python', 'Java', 'HTML', 'CSS', 'React', 'Tailwind']
  },
  {
    title: 'Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Data Analysis']
  },
  {
    title: 'Tools & Cloud',
    items: ['Power BI', 'Power Automate', 'AWS S3', 'EC2', 'Git']
  }
];

const projects = [
  {
    title: 'Multi-Task Learning Dashboard',
    description: 'Built a multi-task learning research pipeline with TensorFlow and a Streamlit interface for training insights, task balancing, and gradient surgery monitoring.',
    tech: ['TensorFlow', 'Streamlit', 'Python'],
    repo: 'https://github.com/kesavakantipudi/Multi-Task-Learning-Model-with-Gradient-Surgery-using-TensorFlow-and-Streamlit'
  },
  {
    title: 'Speech-to-Intent Pipeline',
    description: 'Designed a real-time speech understanding system that converts audio input into structured intent using modern voice and natural language models.',
    tech: ['Python', 'NLP', 'AWS'],
    repo: 'https://github.com/kesavakantipudi/Production-Ready-Real-Time-Speech-to-Intent-Pipeline'
  },
  {
    title: 'Explainable Recommendation System',
    description: 'Created a recommendation engine with SHAP explanations to make feature contributions transparent for every prediction.',
    tech: ['Python', 'Machine Learning', 'Explainability'],
    repo: 'https://github.com/kesavakantipudi/Explainable-Recommendation-System-with-SHAP-Based-Feature-Attribution'
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 140]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-950">
            Kesava<span className="text-sky-600">.</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download
              className="hidden rounded-full border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 md:hidden"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="sr-only">Toggle menu</span>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden ${menuOpen ? 'opacity-100 visible' : 'pointer-events-none opacity-0 invisible'} absolute inset-x-0 top-full z-40 bg-white/95 px-4 pb-6 pt-4 shadow-2xl shadow-slate-900/10 transition-all duration-300`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={resumeUrl}
              download
              className="block rounded-2xl bg-slate-950 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-sky-700 via-cyan-600 to-slate-950 px-4 py-24 sm:px-6 lg:px-8">
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
                Hi, I’m <span className="text-cyan-200">Kesava Kantipudi</span>
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
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-soft">
                <div className="flex h-96 items-center justify-center rounded-[1.5rem] bg-slate-950/10">
                  <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-slate-900 text-6xl font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-slate-950/20">
                    KK
                  </div>
                </div>
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
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">About Me</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                I create polished applications for real business and research problems.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                I’m Kesava Sai Veerendra Kantipudi, an AI/ML engineering student currently pursuing B.Tech in Artificial Intelligence and Machine Learning at Aditya College of Engineering. I enjoy building intelligent systems, data dashboards, and user-friendly web applications that solve real-world challenges.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                My experience spans Python, Java, SQL, web development, Power BI, and AWS deployment. I enjoy learning new tools, solving problems creatively, and delivering projects that make data easier to understand.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="rounded-[1.75rem] bg-gradient-to-br from-sky-500 to-cyan-300 p-8 text-center text-white shadow-lg shadow-sky-500/20">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-white/10 text-4xl font-black uppercase tracking-[0.2em]">
                  KK
                </div>
                <p className="text-sm leading-7">
                  I blend AI research, frontend design, and cloud automation into polished, user-friendly applications.
                </p>
              </div>
              <div className="mt-6 space-y-4 text-slate-700">
                <p className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-medium">Location: Rajahmundry, Andhra Pradesh</p>
                <p className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-medium">Currently focused on AI, NLP, and frontend applications</p>
                <p className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-medium">Passionate about clean code, responsive design, and performance</p>
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
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Technologies I work with daily.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              I combine software engineering, AI modeling, and dashboard design to build reliable products with polished interfaces.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -4 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
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

        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Selected work with public repos.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Each project includes a GitHub link and a short summary of the technical stack and solution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                  <span className="text-xl">{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900"
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
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-soft">
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something great together.</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  I’m available for internships, freelance projects, and collaborations in web development, AI, and data automation. Reach out if you'd like to work together.
                </p>
              </div>
              <div className="space-y-4 rounded-[1.5rem] bg-slate-900/80 p-6">
                <a href="mailto:kantipudikesavasaiveerendra@gmail.com" className="block rounded-3xl border border-slate-700 bg-white/5 px-5 py-4 text-sm font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/10">
                  Email: kantipudikesavasaiveerendra@gmail.com
                </a>
                <a href="https://github.com/kesavakantipudi" target="_blank" rel="noreferrer" className="block rounded-3xl border border-slate-700 bg-white/5 px-5 py-4 text-sm font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/10">
                  GitHub: github.com/kesavakantipudi
                </a>
                <a href="https://www.linkedin.com/in/kesava-kantipudi-00550a291/" target="_blank" rel="noreferrer" className="block rounded-3xl border border-slate-700 bg-white/5 px-5 py-4 text-sm font-medium text-white transition hover:border-cyan-400 hover:bg-cyan-500/10">
                  LinkedIn: kesava-kantipudi
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200/70 bg-white py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-slate-500 sm:px-6">
          <p>© {new Date().getFullYear()} Kesava Kantipudi. Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
          <a href="#home" className="text-sky-600 hover:text-sky-800">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
