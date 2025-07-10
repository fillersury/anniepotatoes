import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="font-mono">© {new Date().getFullYear()} anniepotatoes. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="mailto:annieluo.gobucks@gmail.com" className="font-mono text-cyan-400 hover:text-indigo-800">Email</a>
          <a href="https://instagram.com/anniepotatoes" target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-400 hover:text-indigo-800">Instagram</a>
          <a href="https://github.com/fillersury" target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-400 hover:text-indigo-800">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
