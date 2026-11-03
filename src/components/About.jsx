import React, { useState } from 'react';
import { LuGraduationCap, LuBriefcase, LuCpu, LuCircleCheck, LuAward, LuCompass, LuLayers } from "react-icons/lu";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section name="About" className="py-20 relative bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 mb-3">
            <LuCompass className="text-sm" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            Bridging robust backend engineering with responsive frontend craftsmanship. 
            Here is a deep dive into my journey, technical principles, and academic background.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <LuCpu />
              <span>Overview & Story</span>
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "experience"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <LuBriefcase />
              <span>Experience & Pillars</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "education"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <LuGraduationCap />
              <span>Education & Values</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          {/* TAB 1: Overview & Story */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-fadeIn">
              <div className="md:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-justify text-sm sm:text-base leading-relaxed">
                <p>
                  Hello! I'm <strong className="text-slate-900 dark:text-white font-semibold">Siva Kant Maurya</strong>, a dedicated 
                  Full Stack Developer focused on building modern, high-performance web solutions. 
                  My core expertise lies in architecting solid backend services with <strong className="text-purple-700 dark:text-purple-400 font-semibold">ASP.NET Core & C#</strong>, 
                  combined with dynamic, scalable single-page applications using <strong className="text-rose-600 dark:text-rose-400 font-semibold">Angular (v16–v18)</strong>.
                </p>
                <p>
                  I believe that true engineering excellence is found at the intersection of clean code, responsive UX, 
                  and resilient architecture. By integrating <strong className="text-red-600 dark:text-red-400 font-semibold">Redis distributed caching</strong>, I dramatically reduce database latency, 
                  and by leveraging <strong className="text-sky-600 dark:text-sky-400 font-semibold">Docker containerization</strong>, I ensure seamless deployment consistency across all environments.
                </p>
                <p>
                  Whether designing complex relational data models in <strong className="text-amber-700 dark:text-amber-400 font-semibold">SQL Server</strong>, implementing lightning-fast data mapping with <strong className="text-cyan-700 dark:text-cyan-400 font-semibold">Dapper ORM</strong>, 
                  or orchestrating cloud deployments with <strong className="text-blue-700 dark:text-blue-400 font-semibold">Microsoft Azure</strong>, I deliver systems that scale effortlessly.
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h3 className="text-slate-900 dark:text-white font-bold text-base mb-3 flex items-center gap-2">
                    <LuAward className="text-cyan-600 dark:text-cyan-400" /> Core Engineering Strengths
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>Clean Architecture & Repository Pattern</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      <span>Angular Reactive Forms & RxJS Pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span>Redis In-Memory Distributed Caching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                      <span>Docker Containerization & Compose</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>SQL Server Performance Tuning & Dapper</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-slate-900 border border-cyan-200 dark:border-cyan-800/40 text-xs text-cyan-900 dark:text-cyan-200">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">🚀 Fast-Track Availability:</span>
                  Open to full-time developer positions, remote roles, and high-impact enterprise contracts.
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Experience & Pillars */}
          {activeTab === "experience" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Experience Card 1 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                        Enterprise Solutions
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">Full Stack Software Developer</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Web Applications & API Systems</p>
                    </div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">2024 — Present</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">▹</span>
                      <span>Engineered enterprise web applications using .NET Core Web APIs and modern Angular interfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">▹</span>
                      <span>Implemented Redis caching layers to optimize high-traffic read operations and maintain ultra-low latency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-600 dark:text-cyan-400 mt-0.5">▹</span>
                      <span>Containerized workloads using Docker for environment consistency across staging and production.</span>
                    </li>
                  </ul>
                </div>

                {/* Experience Card 2 */}
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                        Independent Contracting
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">Freelance Full Stack Engineer</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Custom Software Architecture</p>
                    </div>
                    <span className="text-xs font-mono text-purple-600 dark:text-purple-400">Ongoing</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-0.5">▹</span>
                      <span>Delivered bespoke solutions using ASP.NET Core, Angular, SQL Server, and Dapper ORM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-0.5">▹</span>
                      <span>Integrated RESTful endpoints with Postman automation and token-based JWT security.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400 mt-0.5">▹</span>
                      <span>Collaborated closely with stakeholders to translate business requirements into responsive software.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Architecture Pillars */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-slate-300 mb-4 flex items-center gap-2">
                  <LuLayers className="text-cyan-600 dark:text-cyan-400" /> Architectural Principles I Follow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">1. Clean & Decoupled</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Strict separation of concerns via domain-driven models, services, and repositories.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">2. Cache-First Strategy</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Smart Redis caching for catalog data and frequent lookups to safeguard SQL Server.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">3. Containerized Portability</div>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">Docker multi-stage builds guaranteeing reproducible deployments anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Education & Values */}
          {activeTab === "education" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-2">
                    <LuGraduationCap /> Formal Education
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">Kulbhasker Ashram P.G. College, Prayagraj</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Comprehensive coursework in Computer Science, Data Structures, OOP, Database Systems & Software Engineering.</p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-mono">Completion Year</span>
                  <span className="text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">2025</span>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/30 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm uppercase tracking-wider font-bold text-cyan-700 dark:text-cyan-400 mb-2 flex items-center gap-2">
                  <LuAward /> My Engineering Mission
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                  My mission is to build robust, scalable, and maintainable software solutions using modern 
                  .NET Core and Angular technologies that solve real-world business challenges. I combine clean 
                  architecture, optimized backend logic, responsive modern UX, and cloud-ready containerization 
                  to deliver high-performance applications that stand the test of time.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
