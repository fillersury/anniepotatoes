import React, { useState, useEffect } from "react";
import PhotoCard from "../components/PhotoCard";

const CDN_URL = import.meta.env.VITE_CDN_URL;

export const photoUrl = (path: string) =>
  `${CDN_URL}/${path}.jpg`;

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
          href="https://annie-modeling-digitals-portfolio.s3.us-east-1.amazonaws.com/annie_luo_digitals.zip"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm lg:text-base text-white bg-cyan-900 hover:bg-cyan-800 px-4 sm:px-8 lg:px-12 my-5 py-2 rounded-xl inline-block text-center"
        >
          Download All Digitals in Zip File
        </a>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* <PhotoCard
            image={photoUrl('digitals/closeup_smile_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/closeup_smile_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/3_4_closeup_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/3_4_closeup_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/closeup_bikini')}
            aspect="portrait" 
            downloadUrl={photoUrl('digitals/closeup_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/tight_medium_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/tight_medium_shot_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/medium_full_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/medium_full_shot_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/profile_medium_full_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/profile_medium_full_shot_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/full_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/full_shot_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/3_4_full_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/3_4_full_shot_bikini')}
          />
          <PhotoCard
            image={photoUrl('digitals/full_shot_basic')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/full_shot_basic')}
          />
          <PhotoCard
            image={photoUrl('digitals/full_shot_basic_2')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/full_shot_basic_2')}
          />
          <PhotoCard
            image={photoUrl('digitals/back_medium_shot_bikini')}
            aspect="portrait"
            downloadUrl={photoUrl('digitals/back_medium_shot_bikini')}
          /> */}
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R1783')}
            aspect="landscape"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R1783')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R1773')}
            aspect="landscape"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R1773')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R2068')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R2068')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R2398')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R2398')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R2568')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R2568')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R1787')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R1787')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2361')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2361')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2426')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2426')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2455')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2455')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2502')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2502')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2004')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2004')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2040')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2040')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2070')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2070')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2075')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2075')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2139')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2139')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2181')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2181')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2199')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2199')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/_CNO2273')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/_CNO2273')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R1439')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R1439')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R1647')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R1647')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R2843')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R2843')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R2989')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R2989')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R3004')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R3004')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R3039')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R3039')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-A7R3197')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-A7R3197')}
          />
          <PhotoCard
            image={photoUrl('test_shoots/260417-ANNIE-pola-03')}
            aspect="portrait"
            downloadUrl={photoUrl('test_shoots/260417-ANNIE-pola-03')}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
