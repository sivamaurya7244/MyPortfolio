import React, { useState } from 'react';
import { LuGraduationCap, LuBriefcase, LuCpu, LuCircleCheck, LuAward, LuCompass, LuLayers } from "react-icons/lu";

export default function About() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section name="About" className="py-20 relative bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 mb-3">
            <LuCompass className="text-sm" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            A little about my background, the tools I use, and how I approach software development.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
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
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
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
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
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
              <div className="md:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I’m <strong className="text-slate-900 dark:text-white font-semibold">Siva Kant Maurya</strong>, a software engineer working across backend and frontend development. My main tools are <strong className="text-blue-700 dark:text-blue-300 font-semibold">ASP.NET Core, C#, and Angular</strong>.
                </p>
                <p>
                  I also work with <strong className="text-blue-700 dark:text-blue-300 font-semibold">SQL Server, Dapper, Redis, Docker, and Azure</strong>. I value readable code, clear interfaces, and making technical choices that fit the problem.
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h3 className="text-slate-900 dark:text-white font-bold text-base mb-3 flex items-center gap-2">
                    <LuAward className="text-blue-600 dark:text-blue-400" /> Core Engineering Strengths
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
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

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                  <span className="font-semibold text-slate-900 dark:text-white block mb-1">Currently open to opportunities</span>
                  Full-time software engineering roles and remote positions.
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
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        Enterprise Solutions
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2">Full Stack Software Developer</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Web Applications & API Systems</p>
                    </div>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400">2024 — Present</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">▹</span>
                      <span>Engineered enterprise web applications using .NET Core Web APIs and modern Angular interfaces.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">▹</span>
                      <span>Implemented Redis caching layers to optimize high-traffic read operations and maintain ultra-low latency.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">▹</span>
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
                  <LuLayers className="text-blue-600 dark:text-blue-400" /> Architectural Principles I Follow
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
                  <span className="text-base font-bold text-blue-600 dark:text-blue-400 font-mono">2025</span>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm uppercase tracking-wider font-bold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                  <LuAward /> My Engineering Mission
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-justify">
                  I aim to build useful, maintainable software with .NET and Angular. I focus on understanding the requirements, keeping code easy to work with, and making interfaces clear for the people who use them.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
