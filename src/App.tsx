import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Created from "./pages/Created";
import Compiled from "./pages/Compiled";
import Captured from "./pages/Captured";
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
          {/* Fade-in wrapper */}
          <div className="bg-slate-950 animate-fadeIn min-h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compiled" element={<Compiled />} />
              <Route path="/created" element={<Created />} />
              <Route path="/captured" element={<Captured />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
