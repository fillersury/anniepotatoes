import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
