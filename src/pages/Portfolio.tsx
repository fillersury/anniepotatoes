import React, { useState, useEffect } from "react";
import PhotoCard from "../components/PhotoCard";
import closeup from "../assets/modeling_photos/closeup.jpg";
import cowboyShot from "../assets/modeling_photos/cowboy_shot.jpg";
import mediumFullShot from "../assets/modeling_photos/medium_full_shot.jpg";
import fullShot from "../assets/modeling_photos/full_shot.jpg";
import threeFourthMediumFullShot from "../assets/modeling_photos/3_4_medium_full_shot.jpg";
import side_medium_closeup from "../assets/modeling_photos/side_medium_closeup.jpg";
import medium_shot from "../assets/modeling_photos/medium_shot.jpg";
import backFullShot from "../assets/modeling_photos/back_full_shot.jpg";

import portfolioZip from "../assets/modeling_photos/annie_luo_portfolio.zip";

function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-screen min-h-screen bg-slate-200 dark:bg-slate-950 overflow-hidden p-4 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center">
        <a
          href={portfolioZip}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm lg:text-base text-white bg-cyan-900 hover:bg-cyan-800 px-4 sm:px-8 lg:px-12 my-5 py-2 rounded-xl inline-block text-center"
        >
          Download Digitals in Zip File
        </a>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <PhotoCard
            image={closeup}
            aspect="portrait"
          />
          <PhotoCard
            image={cowboyShot}
            aspect="portrait"
          />
          <PhotoCard
            image={mediumFullShot}
            aspect="portrait"
          />
          <PhotoCard
            image={fullShot}
            aspect="portrait"
          />
          <PhotoCard
            image={threeFourthMediumFullShot}
            aspect="portrait"
          />
          <PhotoCard
            image={side_medium_closeup}
            aspect="portrait"
          />
          <PhotoCard
            image={medium_shot}
            aspect="portrait"
          />
          <PhotoCard
            image={backFullShot}
            aspect="portrait"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
