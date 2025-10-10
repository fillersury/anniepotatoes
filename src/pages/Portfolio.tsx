import React, { useState, useEffect } from "react";
import PhotoCard from "../components/PhotoCard";
import closeupBikini from "../assets/modeling_photos/closeup_bikini.jpg";
import closeupSmileBikini from "../assets/modeling_photos/closeup_smile_bikini.jpg";
import threeFourthCloseupBikini from "../assets/modeling_photos/3_4_closeup_bikini.jpg";
import tightMediumShotBikini from "../assets/modeling_photos/tight_medium_shot_bikini.jpg";
import mediumFullShotBikini from "../assets/modeling_photos/medium_full_shot_bikini.jpg";
import profileMediumFullShotBikini from "../assets/modeling_photos/profile_medium_full_shot_bikini.jpg";
import fullShotBikini from "../assets/modeling_photos/full_shot_bikini.jpg";
import threeFourthFullShotBikini from "../assets/modeling_photos/3_4_full_shot_bikini.jpg";

import fullShotBasic from "../assets/modeling_photos/full_shot_basic.jpg";
import profileFullShotBasic from "../assets/modeling_photos/profile_full_shot_basic.jpg";
import profileFullShotBasic2 from "../assets/modeling_photos/profile_full_shot_basic_2.jpg";
import backMediumShotBikini from "../assets/modeling_photos/back_medium_shot_bikini.jpg";

import test1 from "../assets/modeling_photos/test_1.jpg";
import test2 from "../assets/modeling_photos/test_2.jpg";
import test3 from "../assets/modeling_photos/test_3.jpg";
import test4 from "../assets/modeling_photos/test_4.jpg";
import test5 from "../assets/modeling_photos/test_5.jpg";
import test6 from "../assets/modeling_photos/test_6.jpg";
import test7 from "../assets/modeling_photos/test_7.jpg";
import test8 from "../assets/modeling_photos/test_8.jpg";
import test9 from "../assets/modeling_photos/test_9.jpg";
import test10 from "../assets/modeling_photos/test_10.jpg";
import test11 from "../assets/modeling_photos/test_11.jpg";
import test12 from "../assets/modeling_photos/test_12.jpg";

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
          Download Digitals in Zip File
        </a>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <PhotoCard
            image={closeupSmileBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={threeFourthCloseupBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={closeupBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={tightMediumShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={mediumFullShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={profileMediumFullShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={fullShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={threeFourthFullShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={fullShotBasic}
            aspect="portrait"
          />
          <PhotoCard
            image={profileFullShotBasic}
            aspect="portrait"
          />
          <PhotoCard
            image={profileFullShotBasic2}
            aspect="portrait"
          />
          <PhotoCard
            image={backMediumShotBikini}
            aspect="portrait"
          />
          <PhotoCard
            image={test1}
            aspect="portrait"
          />
          <PhotoCard
            image={test2}
            aspect="portrait"
          />
          <PhotoCard
            image={test3}
            aspect="portrait"
          />
          <PhotoCard
            image={test4}
            aspect="portrait"
          />
          <PhotoCard
            image={test5}
            aspect="portrait"
          />
          <PhotoCard
            image={test6}
            aspect="portrait"
          />
          <PhotoCard
            image={test7}
            aspect="portrait"
          />
          <PhotoCard
            image={test8}
            aspect="portrait"
          />
          <PhotoCard
            image={test9}
            aspect="portrait"
          />
          <PhotoCard
            image={test10}
            aspect="portrait"
          />
          <PhotoCard
            image={test11}
            aspect="portrait"
          />
          <PhotoCard
            image={test12}
            aspect="portrait"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
