import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiAngular, SiDotnet, SiDocker, SiRedis } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { LuFileText, LuArrowRight, LuLayers, LuCpu, LuDatabase, LuServer } from "react-icons/lu";
import { ReactTyped } from "react-typed";
import { Link } from 'react-scroll';
import coder from "../../public/coder1.jpg";

export default function Home({ onOpenResume }) {
  return (
    <section name="Home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-6 text-left order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Available for Full-time Roles & Projects</span>
            </div>

            {/* Main Greeting & Typed Headline */}
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-300">
                Welcome to my digital workspace 👋
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 bg-clip-text text-transparent">
                  Siva Kant Maurya
                </span>
              </h1>
              <div className="text-xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 h-10 flex items-center">
                <span className="text-slate-500 dark:text-slate-400 mr-2">I build with</span>
                <ReactTyped
                  className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 dark:from-red-500 dark:via-rose-400 dark:to-amber-400 bg-clip-text text-transparent font-extrabold"
                  strings={[
                    "Angular 18+ Applications",
                    ".NET Core & C# Web APIs",
                    "Redis High-Speed Caching",
                    "Dockerized Microservices",
                    "SQL Server & Dapper ORM"
                  ]}
                  typeSpeed={50}
                  backSpeed={40}
                  backDelay={1800}
                  loop={true}
                />
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-justify max-w-2xl">
              I am a passionate and results-driven <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Full Stack .NET & Angular Developer</strong> with 
              hands-on experience architecting high-performance web applications. I specialize in building robust, 
              scalable backends with <strong className="text-purple-700 dark:text-purple-300 font-semibold">ASP.NET Core</strong>, modern and responsive interfaces with <strong className="text-rose-600 dark:text-rose-400 font-semibold">Angular</strong>, 
              accelerating data throughput with <strong className="text-red-600 dark:text-red-400 font-semibold">Redis caching</strong>, and streamlining deployments with <strong className="text-sky-600 dark:text-sky-400 font-semibold">Docker containers</strong>. 
              Driven by clean architecture, maintainability, and measurable impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View My Work</span>
                <LuArrowRight className="text-base" />
              </Link>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 font-semibold text-sm transition-all transform hover:-translate-y-0.5 cursor-pointer shadow-sm dark:shadow-md"
              >
                <LuFileText className="text-cyan-600 dark:text-cyan-400 text-base" />
                <span>Resume / CV</span>
              </button>

              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-800 text-sm font-semibold transition cursor-pointer"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Socials & Tech Stack Row */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Social Channels */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Connect With Me
                </span>
                <ul className="flex items-center space-x-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition-all hover:scale-105 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/sivamaurya7244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white hover:border-slate-400 transition-all hover:scale-105 shadow-sm"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shivam_maurya7244?igsh=b2twYTByZzIxa3cy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-400 transition-all hover:scale-105 shadow-sm"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/15z3FQichX/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 hover:border-blue-400 transition-all hover:scale-105 shadow-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-lg" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Core Technologies Working On */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Core Technologies
                </span>
                <div className="flex items-center space-x-2.5">
                  {/* Angular */}
                  <div 
                    title="Angular 18+" 
                    className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-700/50 flex items-center justify-center text-rose-600 dark:text-rose-500 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <SiAngular className="text-xl" />
                  </div>

                  {/* .NET */}
                  <div 
                    title=".NET Core / C#" 
                    className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-700/50 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <SiDotnet className="text-2xl" />
                  </div>

                  {/* Docker */}
                  <div 
                    title="Docker Containers" 
                    className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-700/50 flex items-center justify-center text-sky-600 dark:text-sky-400 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <SiDocker className="text-xl" />
                  </div>

                  {/* Redis */}
                  <div 
                    title="Redis In-Memory Cache" 
                    className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-700/50 flex items-center justify-center text-red-600 dark:text-red-500 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <SiRedis className="text-xl" />
                  </div>

                  {/* SQL Server */}
                  <div 
                    title="Microsoft SQL Server" 
                    className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 flex items-center justify-center text-amber-600 dark:text-amber-500 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <DiMsqlServer className="text-2xl" />
                  </div>

                  {/* Azure */}
                  <div 
                    title="Microsoft Azure" 
                    className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-700/50 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:scale-110 duration-200 cursor-pointer shadow-sm"
                  >
                    <VscAzure className="text-xl" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Profile Photo Column with Glow Badges */}
          <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer decorative gradient rings */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-600 to-rose-500 opacity-50 dark:opacity-60 blur-xl group-hover:opacity-85 transition duration-500 animate-pulse-glow"></div>
              
              {/* Image Wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                <img
                  src={coder}
                  alt="Siva Kant Maurya - Full Stack .NET and Angular Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 duration-500 transition-transform"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-3 -left-4 sm:top-4 sm:-left-6 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transform group-hover:-translate-y-1 transition duration-300">
                <span className="p-1 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400">
                  <SiAngular />
                </span>
                <span>Angular + .NET 8</span>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3 -right-2 sm:bottom-4 sm:-right-6 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transform group-hover:translate-y-1 transition duration-300">
                <span className="p-1 rounded-md bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400">
                  <SiDocker />
                </span>
                <span>Docker & Redis Ready</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition">
            <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <LuCpu className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Architecture</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Full Stack .NET</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">C#, ASP.NET Core & Angular</p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition">
            <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 mb-1">
              <LuServer className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Cache Layer</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Redis Cache</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sub-millisecond data retrieval</p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition">
            <div className="flex items-center space-x-2 text-sky-600 dark:text-sky-400 mb-1">
              <LuLayers className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">DevOps</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Docker & Compose</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Isolated, repeatable containers</p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition">
            <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 mb-1">
              <LuDatabase className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Databases</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">SQL Server & Dapper</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">High-throughput queries & schema</p>
          </div>
        </div>

      </div>
    </section>
  );
}
