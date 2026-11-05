import React, { useState } from 'react';
import { LuFolderGit2, LuGithub, LuArrowUpRight } from "react-icons/lu";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Inventory Management",
      subtitle: "Stock and product workflows",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", ".NET 8 Web API", "Redis Cache", "SQL Server", "Docker"],
      description: "An inventory management application for tracking products, stock movements, and access by user role.",
      githubUrl: "https://github.com/sivamaurya7244",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      subtitle: "Catalog, cart, and order workflows",
      category: "cloud",
      categoryLabel: "Cloud & Microservices",
      tags: [".NET Core", "Angular", "Docker", "Redis", "Azure"],
      description: "An e-commerce application organized around separate catalog, cart, order, and identity services.",
      githubUrl: "https://github.com/sivamaurya7244",
    },
    {
      id: 3,
      title: "Sprint & Kanban Board",
      subtitle: "Task planning and team workflows",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", ".NET Web API", "SQL Server", "Dapper ORM", "SignalR"],
      description: "A sprint planning tool with Kanban boards, task assignments, and activity history.",
      githubUrl: "https://github.com/sivamaurya7244",
    },
    {
      id: 4,
      title: "Finance Tracker",
      subtitle: "Transactions, budgets, and reports",
      category: "backend",
      categoryLabel: "Backend & Analytics",
      tags: [".NET Core", "Angular", "SQL Server", "Dapper", "Redis"],
      description: "A finance application for recording transactions, reviewing budgets, and generating reports.",
      githubUrl: "https://github.com/sivamaurya7244",
    },
    {
      id: 5,
      title: "Code Snippet Library",
      subtitle: "Save and organize reusable examples",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", "C# Web API", "Docker", "Redis", "Azure"],
      description: "A code snippet library for organizing, tagging, and finding reusable examples.",
      githubUrl: "https://github.com/sivamaurya7244",
    },
    {
      id: 6,
      title: "Clinic Appointment Portal",
      subtitle: "Appointment and patient workflows",
      category: "fullstack",
      categoryLabel: "Full Stack",
      tags: ["Angular", "ASP.NET Core", "SQL Server", "JWT Auth"],
      description: "A clinic scheduling portal for managing appointments, staff views, and patient records.",
      githubUrl: "https://github.com/sivamaurya7244",
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
            <span>Selected Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
            Project summaries are intentionally high-level because the work is internal.
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
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Top Header Banner */}
              <div className="p-5 bg-slate-50 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 relative">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-medium tracking-wide text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                    {project.categoryLabel} · Internal
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-4 leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{project.subtitle}</p>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <div className="ml-auto flex items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 text-xs font-semibold transition cursor-pointer"
                    aria-label={`Open GitHub profile for ${project.title}`}
                  >
                    <LuGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub CTA Banner */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
            Public code and learning projects
          </p>
          <a
            href="https://github.com/sivamaurya7244"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium text-sm transition"
          >
            <LuGithub className="text-lg" />
            <span>GitHub profile</span>
            <LuArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  );
}
