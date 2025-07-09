import React, { useState, useEffect } from "react";

function Captured() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-screen h-screen bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-white mb-8 text-2xl font-semibold">Captured Page Coming Soon!</h1>
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`w-4 h-4 bg-indigo-400 rounded-full animate-bounce`}
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: "1.2s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Captured;
