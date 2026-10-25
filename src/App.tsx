import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Software from "./pages/Software";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import React from "react";
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-[#F8E8EE] flex flex-col dark:bg-[#F8E8EE]">
        <main className="flex-grow">
          <div className="bg-[#F8E8EE] animate-fadeIn min-h-full dark:bg-[#F8E8EE]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/software" element={<Software />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
