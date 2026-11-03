import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import {
  LuPrinter,
  LuMail,
  LuMapPin,
  LuBriefcase,
  LuGraduationCap,
  LuCircleCheck,
} from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn print:p-0 print:bg-transparent print:static print:block">
      <div
        id="printable-resume"
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-y-auto p-5 sm:p-8 print:p-0 print:border-none print:shadow-none print:max-h-none print:overflow-visible print:bg-white print:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar (HIDDEN DURING PRINT) */}
        <div className="no-print print:hidden flex justify-between items-center pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
              Curriculum Vitae Preview (A4 Optimized)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
              title="Print or Save as PDF"
            >
              <LuPrinter className="text-base" />
              <span>Save as PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <IoCloseSharp size={22} />
            </button>
          </div>
        </div>

        {/* ===================================================
            RESUME BODY (Compact A4 1-2 pages on print & screen)
            =================================================== */}
        <div className="space-y-4 print:space-y-3 text-left text-xs sm:text-sm leading-normal">
          {/* Header Section */}
          <div className="print-avoid-break pb-3 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-slate-900 tracking-tight">
                Siva Kant Maurya
              </h1>
              <p className="text-base font-semibold text-cyan-600 dark:text-cyan-400 print:text-cyan-700 mt-0.5">
                Full Stack .NET & Angular Developer
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 print:text-slate-600 mt-1">
                <span className="flex items-center gap-1">
                  <LuMapPin className="text-cyan-600 print:text-cyan-700" />{" "}
                  Prayagraj, UP, India
                </span>
                <span className="flex items-center gap-1">
                  <LuMail className="text-cyan-600 print:text-cyan-700" />{" "}
                  shivammaurya3659@gmail.com
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 print:text-emerald-700">
                  ⚡ Available for Hire
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              <a
                href="https://github.com/sivamaurya7244"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 print:bg-slate-100 text-slate-700 dark:text-slate-200 print:text-slate-800 text-xs font-mono border border-slate-200 dark:border-slate-700 print:border-slate-300"
              >
                <FaGithub /> github.com/sivamaurya7244
              </a>
              <a
                href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/40 print:bg-blue-50 text-blue-700 dark:text-blue-300 print:text-blue-800 text-xs font-mono border border-blue-200 dark:border-blue-900 print:border-blue-200"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="print-avoid-break">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200 print:text-slate-900 mb-1 flex items-center gap-1.5">
              <LuBriefcase className="text-cyan-600 print:text-cyan-700" />{" "}
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 print:text-slate-800 text-xs leading-relaxed text-justify">
              Results-oriented Full Stack Developer with hands-on experience
              building scalable enterprise web applications. Proficient in
              designing robust backends with{" "}
              <strong>ASP.NET Core / .NET 8</strong>, modern and responsive
              frontends using <strong>Angular (v16–v18)</strong>, accelerating
              data retrieval with <strong>Redis distributed caching</strong>,
              and streamlining containerized deployments using{" "}
              <strong>Docker</strong>. Strong foundation in relational database
              schema design with <strong>SQL Server</strong> and high-throughput
              query mapping via <strong>Dapper ORM</strong>. Committed to Clean
              Architecture, SOLID design principles, and maintainable code.
            </p>
          </div>

          {/* Technical Skills Matrix */}
          <div className="print-avoid-break">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200 print:text-slate-900 mb-1.5 flex items-center gap-1.5">
              <LuCircleCheck className="text-emerald-600 print:text-emerald-700" />{" "}
              Technical Skills & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-semibold text-cyan-700 dark:text-cyan-300 print:text-cyan-800 block mb-0.5">
                  Backend & Architecture:
                </span>
                <p className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  C#, ASP.NET Core, Web API, MVC, Clean Architecture, Repository
                  Pattern, Dapper ORM, ADO.NET, EF Core.
                </p>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-semibold text-rose-700 dark:text-rose-300 print:text-rose-800 block mb-0.5">
                  Frontend Development:
                </span>
                <p className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  Angular (v16+), TypeScript, RxJS, Reactive Forms, Components,
                  JavaScript (ES6+), HTML5, CSS3, Tailwind CSS.
                </p>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-semibold text-amber-700 dark:text-amber-300 print:text-amber-800 block mb-0.5">
                  DevOps & Caching:
                </span>
                <p className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  Redis (Distributed Cache, Session Store), Docker (Containers,
                  Docker Compose), Microsoft Azure, Git, GitHub.
                </p>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-semibold text-emerald-700 dark:text-emerald-300 print:text-emerald-800 block mb-0.5">
                  Databases & Tools:
                </span>
                <p className="text-slate-700 dark:text-slate-300 print:text-slate-800">
                  Microsoft SQL Server, T-SQL, Stored Procedures, Index Tuning,
                  Postman, Visual Studio, VS Code.
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="print-avoid-break">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200 print:text-slate-900 mb-1.5 flex items-center gap-1.5">
              <LuBriefcase className="text-cyan-600 print:text-cyan-700" />{" "}
              Professional Experience
            </h2>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900 text-xs sm:text-sm">
                    Full Stack Software Developer — Freelance & Solutions
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 print:text-cyan-700 font-semibold">
                    2024 — Present
                  </span>
                </div>
                <ul className="list-disc list-inside mt-1 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 space-y-0.5">
                  <li>
                    Architected dynamic enterprise applications using ASP.NET
                    Core Web APIs and modern Angular interfaces.
                  </li>
                  <li>
                    Integrated Redis distributed caching layer to reduce SQL
                    Server database read latency by 60%.
                  </li>
                  <li>
                    Containerized application microservices with Docker for
                    seamless development and deployment pipelines.
                  </li>
                  <li>
                    Designed optimized SQL Server stored procedures and utilized
                    Dapper ORM for high-throughput queries.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Featured Projects */}
          <div className="print-avoid-break">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200 print:text-slate-900 mb-1.5 flex items-center gap-1.5">
              <LuCircleCheck className="text-cyan-600 print:text-cyan-700" />{" "}
              Key Enterprise Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-slate-900 block">
                  NexusERP — Cloud Inventory System
                </span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 print:text-cyan-700 font-mono block">
                  Angular 18, .NET 8, Redis, Docker, SQL Server
                </span>
                <p className="mt-0.5 text-slate-700 dark:text-slate-300 print:text-slate-800 text-[11px]">
                  Enterprise stock management featuring JWT auth, Redis cache
                  for catalog lookups, and Docker deployment.
                </p>
              </div>

              <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300">
                <span className="font-bold text-slate-900 dark:text-white print:text-slate-900 block">
                  CloudStore — Microservices E-Commerce
                </span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 print:text-cyan-700 font-mono block">
                  .NET Core, Angular, Docker, Redis, Azure
                </span>
                <p className="mt-0.5 text-slate-700 dark:text-slate-300 print:text-slate-800 text-[11px]">
                  Modular microservices architecture with Redis cart caching,
                  Stripe integration, and Azure deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="print-avoid-break">
            <h2 className="text-xs uppercase tracking-wider font-bold text-slate-900 dark:text-slate-200 print:text-slate-900 mb-1 flex items-center gap-1.5">
              <LuGraduationCap className="text-emerald-600 print:text-emerald-700" />{" "}
              Education
            </h2>
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 print:bg-slate-50 border border-slate-200 dark:border-slate-700 print:border-slate-300 flex justify-between items-center text-xs">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 print:text-slate-600">
                  Kulbhasker Ashram P.G. College, Prayagraj
                </p>
              </div>
              <span className="font-mono font-semibold text-cyan-600 dark:text-cyan-400 print:text-cyan-700">
                Graduation: 2025
              </span>
            </div>
          </div>
        </div>

        {/* Footer actions (HIDDEN IN PRINT) */}
        <div className="no-print print:hidden mt-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
