import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import codeImg from "../assets/code-bg.jpg";
import artImg from "../assets/art-bg.jpg";
import modelImg from "../assets/model-bg.jpg";

const sections = [
  { title: "Compiled", imageUrl: codeImg, path: "/compiled" },
  { title: "Created", imageUrl: artImg, path: "/created" },
  { title: "Captured", imageUrl: modelImg, path: "/captured" },
];

function Home() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(true); // start faded out for fade-in effect

  useEffect(() => {
    // fade-in after mount
    const timeout = setTimeout(() => setIsFading(false), 50); // slight delay for smooth effect
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (path: string) => {
    setIsFading(true); // fade out on click
    setTimeout(() => {
      navigate(path);
    }, 700); // match duration-700 animation duration
  };

  return (
    <div className="relative w-screen h-screen bg-slate-200 dark:bg-slate-950 overflow-hidden">
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full transition-opacity duration-700 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {sections.map(({ title, imageUrl, path }) => (
          <div
            key={title}
            onClick={() => handleClick(path)}
            className="relative cursor-pointer rounded-lg text-white flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!isFading && (
              <div className="bg-black bg-opacity-50 px-4 py-2 rounded">
                <h2 className="font-mono text-2xl font-bold">{title}</h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
