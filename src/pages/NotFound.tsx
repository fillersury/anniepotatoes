import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-950 text-slate-800 dark:text-white p-4">
        <span className="text-6xl mb-4 animate-bounce">🤖</span>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
            to="/"
            className="px-6 py-3 bg-cyan-800 text-white rounded hover:bg-indigo-700 transition"
        >
            Take Me Home
        </Link>
    </div>
  );
}
