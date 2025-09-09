import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Software from "./pages/Software";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import React from "react";
import './index.css';
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 flex flex-col">
        <NavigationBar />
        <main className="flex-grow">
          <div className="bg-slate-950 animate-fadeIn min-h-full">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
