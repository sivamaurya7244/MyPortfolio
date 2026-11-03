import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { LuArrowUp, LuHeart } from "react-icons/lu";
import { Link } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 relative transition-colors">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Left: Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                Siva<span className="text-cyan-600 dark:text-cyan-400">.dev</span>
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                Full Stack
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm">
              Specialized in .NET Core Web APIs, Angular Single Page Applications, Docker, Redis, and SQL Server.
            </p>
          </div>

          {/* Center: Quick Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <li>
              <Link to="Home" smooth={true} duration={500} offset={-80} className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={500} offset={-80} className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition">
                About
              </Link>
            </li>
            <li>
              <Link to="Experiance" smooth={true} duration={500} offset={-80} className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to="Portfolio" smooth={true} duration={500} offset={-80} className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="Contact" smooth={true} duration={500} offset={-80} className="hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right: Social Channels & Back to Top */}
          <div className="flex items-center space-x-4">
            <ul className="flex items-center space-x-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-base" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sivamaurya7244"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-base" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shivam_maurya7244?igsh=b2twYTByZzIxa3cy"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-base" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/15z3FQichX/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-base" />
                </a>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition cursor-pointer"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <LuArrowUp className="text-base" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Siva Kant Maurya. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted with</span>
            <LuHeart className="text-rose-500 fill-rose-500" />
            <span>for high-performance software engineering</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
