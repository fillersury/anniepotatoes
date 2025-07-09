import React, { useState, useEffect } from "react";
import sevenSisters from "../assets/seven-sisters.jpg";
import crystalCove from "../assets/crystal-cove.jpg";
import newportBeach from "../assets/newport-beach.jpg";
import japan from "../assets/japan.jpg";
import tokyoSelfie from "../assets/tokyo-selfie.jpg";
import jiufen from "../assets/jiufen.jpg";
import taiwanTemple from "../assets/taiwan-temple.jpg";
import taiwanFood from "../assets/taiwan-food.jpg";

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
                backgroundImage: `url(${sevenSisters})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${crystalCove})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${japan})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-1 md:col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${tokyoSelfie})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${jiufen})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${newportBeach})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[150%] rounded-lg overflow-hidden col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${taiwanFood})`,
              }}
            ></div>
          </div>
          <div className="relative w-full h-0 pt-[66.66%] rounded-lg overflow-hidden col-span-2">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${taiwanTemple})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Captured;
