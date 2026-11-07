import React, { useState, useEffect } from 'react';
import pic from '../../public/photo.avif';
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import { LuSun, LuMoon, LuFileText, LuSparkles } from "react-icons/lu";

export default function Navbar({ onOpenResume, darkMode, setDarkMode }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home", target: "Home" },
    { id: 2, text: "About", target: "About" },
    { id: 3, text: "Skills", target: "Experiance" },
    { id: 4, text: "Projects", target: "Portfolio" },
    { id: 5, text: "Contact", target: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/20 border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-white/75 dark:bg-slate-950/75 backdrop-blur-lg border-b border-slate-200/60 dark:border-slate-800/50"
      }`}
    >
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 flex justify-between items-center">
        {/* Brand Profile Logo */}
        <Link
          to="Home"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative">
            <img
              src={pic}
              className="h-11 w-11 rounded-full object-cover object-[center_0%] ring-2 ring-blue-500/50 group-hover:ring-blue-400 transition-all shadow-sm"
              alt="Siva Kant Maurya"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-950 rounded-full animate-pulse"></span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Siva<span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded">
                .NET + Angular
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Full Stack Software Developer</p>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                  className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3 pl-4 border-l border-slate-200 dark:border-slate-800">
            {/* Dark/Light toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 transition cursor-pointer"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {darkMode ? <LuSun size={18} /> : <LuMoon size={18} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/80 text-xs font-semibold transition cursor-pointer"
            >
              <LuFileText className="text-blue-600 dark:text-blue-400 text-sm" />
              <span>Resume</span>
            </button>

            {/* Hire Me CTA */}
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400 text-white dark:text-slate-950 text-xs font-semibold shadow-sm transition cursor-pointer"
            >
              <LuSparkles />
              <span>Hire Me</span>
            </Link>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle Theme"
          >
            {darkMode ? <LuSun size={18} /> : <LuMoon size={18} />}
          </button>
          
          <button
            onClick={() => setMenu(!menu)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menu ? <IoCloseSharp size={22} /> : <TiThMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menu && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 transition-all animate-fadeIn shadow-xl">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={() => setMenu(false)}
                  to={item.target}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-base py-1 transition cursor-pointer"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMenu(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold"
            >
              <LuFileText className="text-blue-600 dark:text-blue-400" />
              <span>View & Download Resume</span>
            </button>
            <Link
              onClick={() => setMenu(false)}
              to="Contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-blue-700 dark:bg-blue-500 text-white dark:text-slate-950 text-sm font-semibold shadow-sm text-center"
            >
              <LuSparkles />
              <span>Let's Connect</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
