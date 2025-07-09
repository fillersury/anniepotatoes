import React, { useState, useEffect } from "react";
import * as images from "../assets";

function Captured() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-screen min-h-screen bg-slate-950 overflow-hidden p-4 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.sevenSisters1})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.crystalCove})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.japan})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.tokyoSelfie})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.jiufen})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.newportBeach})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.taiwanCapital})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images.taiwanTemple})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Captured;
