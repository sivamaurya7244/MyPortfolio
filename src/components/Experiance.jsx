import React, { useState } from "react";
import html from "/html.png";
import java from "/java.png";
import javaScript from "/javascript.png";
import Detnet from "/Microsoft_.NET_logo.png";
import sqlServer from "/sqlServer.png";
import css from "/css.jpg";
import dapper from "/dapper.jpg";
import Azure from "/Azure.jpeg";
import angularSvg from "/angular.svg";
import dockerSvg from "/docker.svg";
import redisSvg from "/redis.svg";

import { LuLayers, LuSparkles } from "react-icons/lu";

export default function Experiance() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skills = [
    {
      id: 1,
      title: "Angular",
      category: "frontend",
      image: angularSvg,
      level: "Proficient",
      description: "SPA Development, Components, TypeScript & Reactive Forms",
    },
    {
      id: 2,
      title: ".NET Core / C#",
      category: "backend",
      image: Detnet,
      level: "Advanced",
      description: "ASP.NET Core, Web APIs, MVC & Clean Architecture",
    },
    {
      id: 3,
      title: "Docker",
      category: "devops",
      image: dockerSvg,
      level: "Proficient",
      description: "Containerization, Multi-Stage Builds & Docker Compose",
    },
    {
      id: 4,
      title: "Redis",
      category: "database",
      image: redisSvg,
      level: "Proficient",
      description: "Distributed In-Memory Caching & Session Management",
    },
    {
      id: 5,
      title: "SQL Server",
      category: "database",
      image: sqlServer,
      level: "Advanced",
      description: "T-SQL, Stored Procedures, Indexing & Query Optimization",
    },
    {
      id: 6,
      title: "Dapper ORM",
      category: "backend",
      image: dapper,
      level: "Advanced",
      description: "High-performance Micro-ORM & Custom SQL Mapping",
    },
    {
      id: 7,
      title: "Microsoft Azure",
      category: "devops",
      image: Azure,
      level: "Intermediate",
      description: "Azure App Service, Azure SQL, Blob Storage & CI/CD",
    },
    {
      id: 8,
      title: "JavaScript",
      category: "frontend",
      image: javaScript,
      level: "Advanced",
      description: "ES6+, Async/Await, DOM manipulation & API integration",
    },
    {
      id: 9,
      title: "HTML5",
      category: "frontend",
      image: html,
      level: "Expert",
      description: "Semantic markup, modern web accessibility & SEO",
    },
    {
      id: 10,
      title: "CSS3",
      category: "frontend",
      image: css,
      level: "Advanced",
      description: "Responsive layouts, Flexbox, Grid & Modern Styling",
    },
    {
      id: 11,
      title: "Java",
      category: "backend",
      image: java,
      level: "Academic",
      description: "Core OOP concepts, Data Structures & Algorithm foundations",
    },
  ];

  const categories = [
    { key: "all", label: "All Skills" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend & APIs" },
    { key: "database", label: "Databases & Cache" },
    { key: "devops", label: "Cloud & DevOps" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <section
      name="Experiance"
      className="py-20 relative bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 mb-3">
            <LuLayers className="text-sm" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Experience
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            Technologies and tools I use across frontend, backend, data, and
            deployment work.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 md:gap-6">
          {filteredSkills.map(({ id, title, image, level, description }) => (
            <div
              key={id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Level Badge */}
              <span className="absolute top-3 right-3 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700">
                {level}
              </span>

              {/* Icon / Image with Glow Frame */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 dark:bg-slate-950 p-3 flex items-center justify-center border border-slate-200 dark:border-slate-700/60 group-hover:border-cyan-500/50 shadow-inner group-hover:scale-105 transition-all duration-300 mt-2">
                <img
                  src={image}
                  alt={title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mt-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                {description}
              </p>

              {/* Bottom active accent line */}
              <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-700 group-hover:w-16 group-hover:bg-cyan-500 rounded-full mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Highlights */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
              <LuSparkles className="text-xl" />
            </span>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Looking for a specific skill set?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Open to quick technical discussions and architectural deep
                dives.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/sivamaurya7244"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition"
          >
            Visit GitHub Profile ➔
          </a>
        </div>
      </div>
    </section>
  );
}
