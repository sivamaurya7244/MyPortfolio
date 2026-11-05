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
    <section name="Home" className="relative isolate overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20 dark:bg-slate-950">
      {/* Ambient background glows */}
      <div className="absolute top-12 right-0 w-[32rem] h-[32rem] bg-cyan-500/[0.08] rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
          
          {/* Left Content Column */}
          <div className="w-full lg:w-3/5 space-y-6 text-left order-2 lg:order-1">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-slate-900/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/80 shadow-sm shadow-emerald-950/5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & Projects</span>
            </div>

            {/* Main Greeting & Typed Headline */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-slate-500 dark:text-slate-400">
                Welcome to my digital workspace 👋
              </h2>
              <h1 className="text-[2.45rem] sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-[-0.045em] leading-[1.08]">
                Hi, I'm{" "}
                <span className="text-cyan-700 dark:text-cyan-300">
                  Siva Kant Maurya
                </span>
              </h1>
              <div className="flex flex-wrap items-baseline gap-x-2 text-lg sm:text-3xl font-bold text-slate-800 dark:text-slate-200 min-h-14 sm:min-h-10 leading-tight">
                <span className="w-full text-slate-500 dark:text-slate-400 sm:w-auto">I build with</span>
                <ReactTyped
                  className="inline-block max-w-full text-cyan-700 dark:text-cyan-300 font-extrabold"
                  strings={[
                    "Angular 18+ Applications",
                    ".NET Core & C# Web APIs",
                    "Redis High-Speed Caching",
                    "Dockerized Microservices",
                    "SQL Server & Dapper ORM"
                  ]}
                  typeSpeed={40}
                  backSpeed={30}
                  backDelay={1800}
                  loop={true}
                />
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-relaxed max-w-2xl">
              I’m a <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Software Engineer</strong> focused on full-stack web development. I build APIs with <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">ASP.NET Core and C#</strong>, create interfaces with <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">Angular</strong>, and work with SQL Server, Redis, and Docker.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                to="Portfolio"
                smooth={true}
                duration={500}
                offset={-80}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-700 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-900/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
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
            <div className="relative group pt-7 pb-1 sm:pt-0 sm:pb-0">
              {/* Outer decorative gradient rings */}
              <div className="absolute -inset-2 rounded-full bg-cyan-500/40 opacity-50 dark:opacity-60 blur-2xl group-hover:opacity-80 transition duration-500"></div>
              
              {/* Image Wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900">
                <img
                  src={coder}
                  alt="Siva Kant Maurya - Full Stack .NET and Angular Developer"
                  className="w-full h-full object-cover object-[center_0%] group-hover:scale-[1.03] duration-500 transition-transform"
                />
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:top-4 sm:left-0 sm:translate-x-0 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transform group-hover:-translate-y-1 transition duration-300 whitespace-nowrap">
                <span className="p-1 rounded-md bg-rose-100 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400">
                  <SiAngular />
                </span>
                <span>Angular + .NET 8</span>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="relative mx-auto mt-3 w-fit sm:mt-0 sm:absolute sm:-bottom-3 sm:-right-6 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xl flex items-center space-x-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transform group-hover:translate-y-1 transition duration-300">
                <span className="p-1 rounded-md bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400">
                  <SiDocker />
                </span>
                <span>Docker & Redis Ready</span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:-translate-y-1 hover:border-cyan-300 dark:hover:border-cyan-800 transition duration-300">
            <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-1">
              <LuCpu className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Architecture</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Full Stack .NET</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">C#, ASP.NET Core & Angular</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-800 transition duration-300">
            <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-400 mb-1">
              <LuServer className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">Cache Layer</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Redis Cache</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Sub-millisecond data retrieval</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:-translate-y-1 hover:border-sky-300 dark:hover:border-sky-800 transition duration-300">
            <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-400 mb-1">
              <LuLayers className="text-lg" />
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400">DevOps</span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">Docker & Compose</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Isolated, repeatable containers</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:-translate-y-1 hover:border-amber-300 dark:hover:border-amber-800 transition duration-300">
            <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-400 mb-1">
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
