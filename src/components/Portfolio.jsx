import React, { useState } from 'react';
import { LuFolderGit2, LuExternalLink, LuGithub, LuLayers, LuInfo } from "react-icons/lu";

export default function Portfolio({ onSelectProject }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "NexusERP — Inventory & Resource Hub",
      subtitle: "Enterprise Resource Planning & Stock System",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", ".NET 8 Web API", "Redis Cache", "SQL Server", "Docker"],
      description: "Full-scale enterprise ERP application featuring real-time inventory tracking, multi-tier JWT security, and automated reporting.",
      longDescription: "NexusERP is designed to tackle high-volume inventory operations with minimal latency. Built with ASP.NET Core 8 Web API using Clean Architecture and an Angular single-page frontend. Redis is utilized for caching frequently queried product catalogs and session tokens, reducing SQL Server read load by over 60%.",
      features: [
        "Distributed Redis caching for sub-15ms catalog response time",
        "Role-based access control (RBAC) with JWT authentication",
        "Automated stock threshold alerting and audit logging",
        "Containerized with Docker & Docker Compose for rapid onboarding"
      ],
      architecture: "ASP.NET Core Web API + Clean Architecture + Angular Reactive Forms + Redis In-Memory + SQL Server with Dapper ORM.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-rose-500/10 to-cyan-500/10 dark:from-rose-500/20 dark:to-cyan-500/20"
    },
    {
      id: 2,
      title: "CloudStore — Microservices E-Commerce",
      subtitle: "Scalable Containerized Shopping Platform",
      category: "cloud",
      categoryLabel: "Cloud & Microservices",
      tags: [".NET Core", "Angular", "Docker", "Redis", "Azure"],
      description: "Cloud-native shopping platform with decoupled microservices, distributed Redis cart management, and Dockerized deployments.",
      longDescription: "An enterprise-grade eCommerce solution architected with modular microservices. Cart states and active sessions are stored in an in-memory Redis cluster for lightning-fast checkouts. The entire solution is containerized using Docker and prepped for deployment on Microsoft Azure.",
      features: [
        "Independent microservices for Catalog, Cart, Orders, and Identity",
        "Redis Pub/Sub and session caching for real-time cart persistence",
        "Docker multi-stage builds ensuring minimal image footprint",
        "Azure Blob Storage integration for product asset management"
      ],
      architecture: "ASP.NET Core Microservices + Redis Distributed Cache + Angular UI + Azure Cloud + Docker Compose.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-sky-500/10 to-indigo-500/10 dark:from-sky-500/20 dark:to-indigo-500/20"
    },
    {
      id: 3,
      title: "PulseFlow — Agile Sprint & Kanban Board",
      subtitle: "Real-time Collaboration & Project Suite",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", ".NET Web API", "SQL Server", "Dapper ORM", "SignalR"],
      description: "Interactive project management tool with live drag-and-drop Kanban boards, team notifications, and high-throughput data access.",
      longDescription: "PulseFlow streamlines team sprint cycles with intuitive drag-and-drop boards. Implemented using Angular for reactive frontend interactions, coupled with ASP.NET Core. Database access is supercharged with Dapper ORM for maximum throughput on SQL Server queries.",
      features: [
        "Fluid drag-and-drop task workflow with reactive Angular UI",
        "High-performance SQL Server queries powered by Dapper Micro-ORM",
        "Sprint velocity charts and team burndown analytics",
        "Granular task assignments with activity histories"
      ],
      architecture: "Angular + ASP.NET Core Web API + Dapper ORM + SQL Server + SignalR Realtime.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20"
    },
    {
      id: 4,
      title: "FinVault — Financial Analytics Engine",
      subtitle: "Multi-Currency Expense & Budgeting System",
      category: "backend",
      categoryLabel: "Backend & Analytics",
      tags: [".NET Core", "Angular", "SQL Server", "Dapper", "Redis"],
      description: "Financial tracking and audit application with analytical charts, automated reconciliation reports, and Excel/PDF exports.",
      longDescription: "FinVault provides businesses and individuals with a high-fidelity financial ledger. Featuring cryptographic security for sensitive financial records, Redis cache for rapid currency exchange rate conversions, and stored procedure optimizations on SQL Server.",
      features: [
        "Optimized SQL Server stored procedures for multi-table financial reconciliations",
        "Redis caching for live currency rates and user dashboard snapshots",
        "Export engine for financial reports in PDF and Excel formats",
        "Detailed audit trails for all ledger modifications"
      ],
      architecture: "ASP.NET Core API + Angular + Redis + SQL Server T-SQL Stored Procedures.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20"
    },
    {
      id: 5,
      title: "DevSnippet — Code Knowledge Repository",
      subtitle: "Developer Productivity & Snippet Hub",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", "C# Web API", "Docker", "Redis", "Azure"],
      description: "Cloud-hosted snippet manager allowing engineering teams to store, tag, syntax-highlight, and share reusable code modules.",
      longDescription: "A developer-first knowledge system designed to prevent code reinvention. Features full-text search, language categorization, Redis caching for trending snippets, and Docker container support for isolated code execution.",
      features: [
        "Tag-based search with Redis full-text search caching",
        "Syntax highlighting for C#, TypeScript, SQL, Docker, and Python",
        "Docker container setup for reproducible team deployment",
        "Public and private snippet visibility permissions"
      ],
      architecture: "Angular Frontend + C# ASP.NET Core API + Docker Containers + Redis Cache.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20"
    },
    {
      id: 6,
      title: "CareSync — Healthcare & Clinic Portal",
      subtitle: "Doctor Scheduling & Patient Appointment Management",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", "ASP.NET Core", "SQL Server", "JWT Auth"],
      description: "Digital health platform streamlining clinic bookings, doctor consultation shifts, and digital medical history management.",
      longDescription: "CareSync empowers clinics to automate appointment scheduling and avoid double-bookings. Built with Angular reactive forms, ASP.NET Core Web API, and SQL Server with relational integrity constraints.",
      features: [
        "Real-time slot availability checking and instant booking confirmation",
        "Role-tailored dashboards for Doctors, Patients, and Clinic Staff",
        "Automated notification triggers for upcoming appointments",
        "Secure health records with encrypted patient IDs"
      ],
      architecture: "Angular Single Page Application + ASP.NET Core Backend + SQL Server Relational Database.",
      githubUrl: "https://github.com/sivamaurya7244",
      liveUrl: "https://github.com/sivamaurya7244",
      accent: "from-rose-500/10 to-amber-500/10 dark:from-rose-500/20 dark:to-amber-500/20"
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section name="Portfolio" className="py-20 relative bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 mb-3">
            <LuFolderGit2 className="text-sm" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portfolio & Projects
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            Enterprise applications and full-stack solutions built with .NET Core, Angular, Docker, Redis, and SQL Server.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { key: "all", label: "All Projects" },
            { key: "fullstack", label: "Full Stack (.NET + Angular)" },
            { key: "cloud", label: "Cloud & Microservices (Docker/Redis)" },
            { key: "backend", label: "Backend & Databases" }
          ].map(btn => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === btn.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 shadow-md dark:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-500/10"
            >
              {/* Card Top Header Banner */}
              <div className={`p-5 bg-gradient-to-br ${project.accent} border-b border-slate-200 dark:border-slate-800 relative`}>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 bg-white/90 dark:bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                    {project.categoryLabel}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-1.5 rounded-lg bg-white/80 dark:bg-slate-950/60 hover:bg-white dark:hover:bg-slate-950 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer"
                    title="View details"
                  >
                    <LuInfo size={18} />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{project.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 dark:text-slate-500 block mb-2 tracking-wider">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-900/60">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center gap-1 transition cursor-pointer"
                >
                  <LuLayers /> Architecture Details
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition cursor-pointer"
                  >
                    <LuGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition cursor-pointer shadow-sm"
                  >
                    <LuExternalLink />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub CTA Banner */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            Want to explore all my repositories and open-source code?
          </p>
          <a
            href="https://github.com/sivamaurya7244"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition shadow-sm hover:shadow-cyan-500/10"
          >
            <LuGithub className="text-lg" />
            <span>Explore More on GitHub @sivamaurya7244</span>
          </a>
        </div>

      </div>
    </section>
  );
}
