import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[rgba(15,23,42,0.9)] backdrop-blur-md z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-sky-400">RPA Developer</h1>
          <nav className="space-x-3 text-sm">
            <a href="#home" className="hover:text-sky-400">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Home */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center pt-28 min-h-[70vh] bg-gradient-to-br from-slate-800 to-[#0f172a] px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">
          Hi, I’m <span className="text-sky-400">Your Name</span>
        </h2>
        <p className="mt-3 text-base md:text-lg text-slate-300">
          RPA Developer | UiPath | Process Automation Enthusiast
        </p>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-3xl mx-auto my-10 bg-slate-800 rounded-2xl p-6"
      >
        <h2 className="text-xl text-sky-400 font-bold mb-3">About Me</h2>
        <p>
          I’m a passionate RPA Developer specialized in automating business
          processes using UiPath and other automation tools. I love creating
          efficient workflows, solving automation challenges, and building
          scalable digital solutions.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-3xl mx-auto my-10 px-4">
        <h2 className="text-xl text-sky-400 font-bold mb-3">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 text-center">
          <li className="bg-slate-800 rounded-lg py-2">UiPath</li>
          <li className="bg-slate-800 rounded-lg py-2">Power Automate</li>
          <li className="bg-slate-800 rounded-lg py-2">Python</li>
          <li className="bg-slate-800 rounded-lg py-2">SQL</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto my-10 px-4">
        <h2 className="text-xl text-sky-400 font-bold mb-3">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition">
            <h3 className="text-sky-400 font-semibold mb-1">
              Invoice Automation
            </h3>
            <p>
              Automated invoice processing using UiPath Orchestrator, reducing
              manual effort by 80%.
            </p>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition">
            <h3 className="text-sky-400 font-semibold mb-1">
              Email Data Extraction
            </h3>
            <p>
              Extracted structured data from client emails and generated reports
              automatically using UiPath.
            </p>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl hover:scale-105 transition">
            <h3 className="text-sky-400 font-semibold mb-1">
              ERP Data Entry Bot
            </h3>
            <p>
              Developed a bot to update ERP systems with order details in real
              time, minimizing errors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-3xl mx-auto my-10 px-4 text-center"
      >
        <h2 className="text-xl text-sky-400 font-bold mb-3">Contact</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:yourname@example.com"
            className="px-4 py-2 bg-sky-400 text-slate-900 rounded-full"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="px-4 py-2 bg-sky-400 text-slate-900 rounded-full"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourgithub"
            className="px-4 py-2 bg-sky-400 text-slate-900 rounded-full"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="text-center text-slate-400 py-6 text-sm">
        © 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}
