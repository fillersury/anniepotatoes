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
import closeupBikiniDownload from "../assets/modeling_photos/closeup_bikini_high_quality.jpg";
import closeupSmileBikiniDownload from "../assets/modeling_photos/closeup_smile_bikini_high_quality.jpg";
import threeFourthCloseupBikiniDownload from "../assets/modeling_photos/3_4_closeup_bikini_high_quality.jpg";
import tightMediumShotBikiniDownload from "../assets/modeling_photos/tight_medium_shot_bikini_high_quality.jpg";
import mediumFullShotBikiniDownload from "../assets/modeling_photos/medium_full_shot_bikini_high_quality.jpg";
import profileMediumFullShotBikiniDownload from "../assets/modeling_photos/profile_medium_full_shot_bikini_high_quality.jpg";
import fullShotBikiniDownload from "../assets/modeling_photos/full_shot_bikini_high_quality.jpg";
import threeFourthFullShotBikiniDownload from "../assets/modeling_photos/3_4_full_shot_bikini_high_quality.jpg";
import fullShotBasicDownload from "../assets/modeling_photos/full_shot_basic_high_quality.jpg";
import profileFullShotBasicDownload from "../assets/modeling_photos/profile_full_shot_basic_high_quality.jpg";
import profileFullShotBasic2Download from "../assets/modeling_photos/profile_full_shot_basic_2_high_quality.jpg";
import backMediumShotBikiniDownload from "../assets/modeling_photos/back_medium_shot_bikini_high_quality.jpg";

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
import test1Download from "../assets/modeling_photos/test_1_high_quality.jpg";
import test2Download from "../assets/modeling_photos/test_2_high_quality.jpg";
import test3Download from "../assets/modeling_photos/test_3_high_quality.jpg";
import test4Download from "../assets/modeling_photos/test_4_high_quality.jpg";
import test5Download from "../assets/modeling_photos/test_5_high_quality.jpg";
import test6Download from "../assets/modeling_photos/test_6_high_quality.jpg";
import test7Download from "../assets/modeling_photos/test_7_high_quality.jpg";
import test8Download from "../assets/modeling_photos/test_8_high_quality.jpg";
import test9Download from "../assets/modeling_photos/test_9_high_quality.jpg";
import test10Download from "../assets/modeling_photos/test_10_high_quality.jpg";
import test11Download from "../assets/modeling_photos/test_11_high_quality.jpg";
import test12Download from "../assets/modeling_photos/test_12_high_quality.jpg";

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
          <PhotoCard
            image={closeupSmileBikini}
            aspect="portrait"
            downloadUrl={closeupSmileBikiniDownload}
          />
          <PhotoCard
            image={threeFourthCloseupBikini}
            aspect="portrait"
            downloadUrl={threeFourthCloseupBikiniDownload}
          />
          <PhotoCard
            image={closeupBikini}
            aspect="portrait"
            downloadUrl={closeupBikiniDownload}
          />
          <PhotoCard
            image={tightMediumShotBikini}
            aspect="portrait"
            downloadUrl={tightMediumShotBikiniDownload}
          />
          <PhotoCard
            image={mediumFullShotBikini}
            aspect="portrait"
            downloadUrl={mediumFullShotBikiniDownload}
          />
          <PhotoCard
            image={profileMediumFullShotBikini}
            aspect="portrait"
            downloadUrl={profileMediumFullShotBikiniDownload}
          />
          <PhotoCard
            image={fullShotBikini}
            aspect="portrait"
            downloadUrl={fullShotBikiniDownload}
          />
          <PhotoCard
            image={threeFourthFullShotBikini}
            aspect="portrait"
            downloadUrl={threeFourthFullShotBikiniDownload}
          />
          <PhotoCard
            image={fullShotBasic}
            aspect="portrait"
            downloadUrl={fullShotBasicDownload}
          />
          <PhotoCard
            image={profileFullShotBasic}
            aspect="portrait"
            downloadUrl={profileFullShotBasicDownload}
          />
          <PhotoCard
            image={profileFullShotBasic2}
            aspect="portrait"
            downloadUrl={profileFullShotBasic2Download}
          />
          <PhotoCard
            image={backMediumShotBikini}
            aspect="portrait"
            downloadUrl={backMediumShotBikiniDownload}
          />
          <PhotoCard
            image={test1}
            aspect="portrait"
            downloadUrl={test1Download}
          />
          <PhotoCard
            image={test2}
            aspect="portrait"
            downloadUrl={test2Download}
          />
          <PhotoCard
            image={test3}
            aspect="portrait"
            downloadUrl={test3Download}
          />
          <PhotoCard
            image={test4}
            aspect="portrait"
            downloadUrl={test4Download}
          />
          <PhotoCard
            image={test5}
            aspect="portrait"
            downloadUrl={test5Download}
          />
          <PhotoCard
            image={test6}
            aspect="portrait"
            downloadUrl={test6Download}
          />
          <PhotoCard
            image={test7}
            aspect="portrait"
            downloadUrl={test7Download}
          />
          <PhotoCard
            image={test8}
            aspect="portrait"
            downloadUrl={test8Download}
          />
          <PhotoCard
            image={test9}
            aspect="portrait"
            downloadUrl={test9Download}
          />
          <PhotoCard
            image={test10}
            aspect="portrait"
            downloadUrl={test10Download}
          />
          <PhotoCard
            image={test11}
            aspect="portrait"
            downloadUrl={test11Download}
          />
          <PhotoCard
            image={test12}
            aspect="portrait"
            downloadUrl={test12Download}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
