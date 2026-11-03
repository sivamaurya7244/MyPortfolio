import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { LuExternalLink, LuGithub, LuLayers, LuCircleCheck, LuCpu } from "react-icons/lu";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-y-auto p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-2">
              {project.categoryLabel || "Full Stack Application"}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer"
            aria-label="Close modal"
          >
            <IoCloseSharp size={22} />
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="my-4">
          <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-2">
            Technology Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags && project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* In-depth Overview */}
        <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <LuLayers className="text-cyan-600 dark:text-cyan-400" /> System Architecture & Overview
            </h3>
            <p className="leading-relaxed text-justify">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <LuCircleCheck className="text-emerald-600 dark:text-emerald-400" /> Key Engineering Highlights
              </h3>
              <ul className="space-y-1.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                    <span className="text-emerald-500 mt-1">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Insights */}
          {project.architecture && (
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
              <div className="flex items-center gap-1.5 text-cyan-800 dark:text-cyan-300 font-semibold mb-1">
                <LuCpu /> Architecture & Performance
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs md:text-sm font-semibold transition cursor-pointer"
              >
                <LuGithub /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs md:text-sm font-semibold shadow-md transition cursor-pointer"
              >
                <LuExternalLink /> Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs md:text-sm transition cursor-pointer font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
