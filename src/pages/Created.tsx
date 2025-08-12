import React, { useState, useEffect } from "react";
import smoothTransitions from "../assets/smooth-transitions.gif";
import scrollAnimation from "../assets/scroll-animation.gif";
import titleAnimation from "../assets/title-animation.gif";
import phoneResponsive from "../assets/phone-responsive.png";
import tabletResponsive from "../assets/ipad-responsive.png"

function Created() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger fade-in after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-screen bg-slate-200 dark:bg-slate-950 overflow-hidden p-4 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 gap-4 items-stretch">
        <div className="p-2 md:p-10 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-center py-1">
            UI/UX Portfolio Website
          </h1>
          <h2 className="text-sm sm:text-base text-center italic">Live Site: <a 
                  href="https://stephanieluo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  stephanieluo.com
                </a>
          </h2>
          <h3 className="text-xs sm:text-base m-3 md:m-10 text-center">A fully responsive and highly interactive portfolio site built to showcase UI/UX design work. The site blends elegant visual design with smooth animations to deliver a polished and engaging user experience.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            <div className="m-2 lg:m-5 p-1 md:p-5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white col-span-1">
              <h4 className="text-base sm:text-xl font-bold font-mono text-indigo-800 dark:text-indigo-300 text-left p-2 sm:p-5">Smooth Page Transitions</h4>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch p-1 sm:p-5">
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <p className="text-xs sm:text-sm text-left">Custom fade-in and fade-out animations between page navigations for a seamless browsing flow.</p>
                </div>
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <img
                    src={smoothTransitions}
                    alt="smooth transitions"
                    className="relative rounded-lg col-span-1 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="m-2 lg:m-5 p-1 md:p-5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white col-span-1">
              <h4 className="text-base sm:text-xl font-bold font-mono text-indigo-800 dark:text-indigo-300 dark: text-left p-2 sm:p-5">Scroll-Based Animation</h4>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch p-1 sm:p-5">
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <p className="text-xs sm:text-sm text-left">Components slide in/out as users scroll, enhancing engagement without overwhelming the content.</p>
                </div>
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <img
                    src={scrollAnimation}
                    alt="scroll animations"
                    className="relative rounded-lg col-span-1 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="m-2 lg:m-5 p-1 md:p-5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white col-span-1">
              <h4 className="text-base sm:text-xl font-bold font-mono text-indigo-800 dark:text-indigo-300 text-left p-2 sm:p-5">Animated Title Effect</h4>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch p-1 sm:p-5">
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <p className="text-xs sm:text-sm text-left">Typing animation in page headers for a dynamic, modern feel.</p>
                </div>
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <img
                    src={titleAnimation}
                    alt="title animation"
                    className="relative rounded-lg col-span-1 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="m-2 lg:m-5 p-1 md:p-5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white col-span-1">
              <h4 className="text-base sm:text-xl font-bold font-mono text-indigo-800 dark:text-indigo-300 text-left p-2 sm:p-5">Fully Responsive Layout</h4>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 items-stretch p-1 sm:p-5">
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-2 xl:col-span-1">
                  <p className="text-xs sm:text-sm text-left">Optimized for mobile, tablet, and desktop.</p>
                </div>
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <img
                    src={tabletResponsive}
                    alt="tablet responsive layout"
                    className="relative rounded-lg col-span-1 w-full object-cover"
                  />
                </div>
                <div className="p-2 sm:p-5 rounded-lg text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1">
                  <img
                    src={phoneResponsive}
                    alt="phone responsive layout"
                    className="relative rounded-lg col-span-1 w-full object-cover scale-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Created;
