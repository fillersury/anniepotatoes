import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const linkClass = (path: string) =>
    `block px-4 py-2 text-lg font-medium transition-colors duration-200 ${
      pathname === path
        ? "text-indigo-600 border-b-2 border-indigo-600"
        : "text-gray-700 hover:text-indigo-500"
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
    <nav className="bg-slate-950 shadow sticky top-0 z-50">
      <div className="max-w-7x1 mx-auto px-4 flex justify-between items-center h-16">
        <Link
          to="/"
          className="text-xl font-bold font-mono text-cyan-400 hover:text-indigo-800 transition-colors"
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
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
        >
          <div className="mt-16 flex flex-col space-y-2 px-6">
            <Link to="/" className={linkClass("/")} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/gallery" className={linkClass("/gallery")} onClick={() => setMobileMenuOpen(false)}>Compiled</Link>
            <Link to="/about" className={linkClass("/about")} onClick={() => setMobileMenuOpen(false)}>Created</Link>
            <Link to="/shop" className={linkClass("/shop")} onClick={() => setMobileMenuOpen(false)}>Captured</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;
