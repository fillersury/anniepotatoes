import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import { FaSun, FaMoon } from "react-icons/fa";

function NavigationBar() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useDarkMode();

  const linkClass = (path: string) =>
    `block px-4 py-2 text-lg font-bold transition-colors duration-200 ${
      pathname === path
        ? "text-cyan-900 dark:text-cyan-400 border-b-2 border-cyan-900 dark:border-cyan-400"
        : "hover:text-cyan-900 text-gray-500 dark:text-gray-500 dark:hover:text-cyan-500"
    }`;

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-slate-200 dark:bg-slate-950 shadow sticky top-0 z-50">
      <div className="max-w-7x1 mx-auto px-4 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-xl font-bold font-mono text-cyan-900 dark:text-cyan-400 hover:text-indigo-800 transition-colors"
        >
          anniepotatoes
        </Link>

        {/* Hamburger button */}
        <button
          className="inline-flex items-center justify-center p-2 rounded-md text-cyan-700 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {!mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Slide-out menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-slate-200 dark:bg-slate-950 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col`}
      >
        <div className="mt-16 flex flex-col space-y-2 px-6 font-mono uppercase tracking-wide text-lg">
          <Link to="/" className={linkClass("/")} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/compiled" className={linkClass("/compiled")} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/created" className={linkClass("/created")} onClick={() => setMobileMenuOpen(false)}>Created</Link>
          <Link to="/captured" className={linkClass("/captured")} onClick={() => setMobileMenuOpen(false)}>Captured</Link>
          <Link to="/contact" className={linkClass("/contact")} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        {/* Push to bottom */}
        <div className="mt-auto px-6 pb-6 flex justify-end">
          <button
            onClick={toggleTheme}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
                        ${theme === "dark" ? "bg-cyan-800" : "bg-slate-400"}`}
            aria-label="Toggle dark mode"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center
                          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
            >
              {theme === "dark" ? (
                <FaMoon className="text-indigo-800 text-sm" />
              ) : (
                <FaSun className="text-yellow-500 text-sm" />
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
