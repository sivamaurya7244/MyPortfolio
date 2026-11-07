import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { LuLayers } from 'react-icons/lu';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-800 shadow-2xl dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 bg-slate-50 px-5 py-5 dark:border-slate-800 dark:bg-slate-900/70 sm:px-6">
          <div>
            <span className="mb-2 inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
              {project.categoryLabel} · Internal project
            </span>
            <h2 id="project-dialog-title" className="text-xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close architecture details"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <IoCloseSharp size={20} />
          </button>
        </header>

        <div className="space-y-6 px-5 py-6 sm:px-6">
          <div>
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <LuLayers className="text-blue-700 dark:text-blue-400" /> Architecture overview
            </h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.architecture}</p>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Technology stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <p className="border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
            Internal project. This summary describes the high-level structure and omits private implementation details.
          </p>
        </div>
      </section>
    </div>
  );
}
