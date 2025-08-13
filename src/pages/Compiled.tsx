import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import profilePic from "../assets/profile-pic.jpg";
import { Link } from "react-router-dom";

function Compiled() {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        <img
          src={profilePic}
          alt="Profile"
          className="relative rounded-lg col-span-1 w-full h-full object-cover"
        />
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-10 md:col-span-1 hidden md:block lg:hidden">
          <h3 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 mb-2">
            Credentials
          </h3>
          <p className="text-sm">
            <strong>Full-Stack Software Engineer</strong>
          </p>
          <ul className="text-sm mt-2 space-y-1">
            <li>💻 4+ years building modern web apps in <span className="text-indigo-800 dark:text-indigo-300">React.js</span> & <span className="text-indigo-800 dark:text-indigo-300">C#.NET</span> with cross-functional teams</li>
            <li>🧠 Skilled in TypeScript/JavaScript, Python, SQL, MongoDB, microservices, & event-driven architecture</li>
            <li>🚀 Built & deployed scalable microservices and frontend SPAs</li>
            <li>🔍 Passionate about clean design, thoughtful UX, and performant code</li>
            <li>🌆 Based in NYC | Available for freelance opportunities</li>
          </ul>
        </div>
        <div className="p-10 rounded-lg bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col justify-center h-full col-span-1 md:col-span-2">
          <h1 className="text-2xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-center py-1">Websites for Businesses & Personal Use</h1>
          <h2 className="text-lg text-center"><i>I build fast, scalable, and beautiful web applications for businesses and personal use.</i></h2>
          <h3 className="text-base text-center">Let's bring your idea to life!</h3>
          <div className="flex justify-center my-5">
            <Link
              to="/contact"
              className="bg-indigo-400 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 px-4 py-2 rounded transition font-bold text-black hover:text-white"
            >
              Get a Free Consultation Today
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10">
            <div className="p-5 col-span-1">
              <h4 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-left mb-4">Services</h4>
              <table className="w-full text-base table-auto border-collapse border-4 border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-inherit">
                <tbody>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400 w-48">Personal Portfolios</td>
                    <td className="px-4 py-2">Designers, UX/UI, photographers, models, actors</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Small Business Sites</td>
                    <td className="px-4 py-2">Restaurants, local shops, consultants</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Resume / CV Sites</td>
                    <td className="px-4 py-2">Polished, professional, and mobile-friendly</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Event & Wedding Pages</td>
                    <td className="px-4 py-2">RSVPs, image galleries, schedules</td>
                  </tr>
                  <tr className="border-b border-slate-400">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Blog or Content Sites</td>
                    <td className="px-4 py-2">Static or CMS-backed (Jekyll, WordPress, Ghost)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-5 col-span-1">
              <h4 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-left">Optional UX/UI Design Services</h4>
              <p className="p-5 text-base">Collaborate with a dedicated designer for a polished, user-friendly interface. I work closely with an experienced UI/UX designer to ensure your site not only works beautifully, but looks beautiful too.</p>
              <p className="px-5 text-base">View her portfolio at <a 
                  href="https://stephanieluo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline"
                >
                  stephanieluo.com
                </a>
              </p>
            </div>
            <div className="p-5 col-span-1 lg:col-span-2">
              <h4 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 text-left mb-4">Pricing</h4>
              <div className="m-5">
              <table className="w-full text-base table-auto border-collapse border-4 border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-inherit">
                <tbody>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400 w-48">Flexible Pricing</td>
                    <td className="px-4 py-2">Options for one-time builds or ongoing support</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">No overhead</td>
                    <td className="px-4 py-2">You only pay for what you need — no bloated agency rates</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Scalable</td>
                    <td className="px-4 py-2">Start small, grow later without rebuilding from scratch</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Personalized Approach</td>
                    <td className="px-4 py-2">I work directly with you — no middlemen</td>
                  </tr>
                  <tr className="border-b border-slate-400 dark:border-slate-700">
                    <td className="font-bold px-4 py-2 align-top text-indigo-800 dark:text-indigo-400">Design-to-Code Workflow</td>
                    <td className="px-4 py-2">Can work from your existing designs or create new ones from scratch</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-10 col-span-1 block md:hidden lg:block">
          <h3 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 mb-2">
            Credentials
          </h3>
          <p className="text-sm">
            <strong>Full-Stack Software Engineer</strong>
          </p>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>💻 4+ years building modern web apps in <span className="text-indigo-800 dark:text-indigo-300">React.js</span> & <span className="text-indigo-800 dark:text-indigo-300">C#.NET</span> with cross-functional teams</li>
            <li>🧠 Skilled in TypeScript/JavaScript, Python, SQL, MongoDB, microservices, & event-driven architecture</li>
            <li>🚀 Built & deployed scalable microservices and frontend SPAs</li>
            <li>🔍 Passionate about clean design, thoughtful UX, and performant code</li>
            <li>🌆 Based in NYC | Available for freelance opportunities</li>
          </ul>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 flex flex-col justify-center col-span-1">
          <h3 className="text-xl font-bold font-mono text-indigo-800 dark:text-indigo-400 mb-2 text-center">
            Tech Stack
          </h3>
          <ul className="p-4 list-inside text-sm space-y-1">
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Frontend:</span> React, TypeScript/Javascript, Tailwind CSS, HTML</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Backend:</span> C#.Net, Python, Java</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Databases:</span> SQL Server, MongoDB, DocumentDB</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">Architecture & Cloud:</span> Microservices, Event-Driven Design, AWS Cloud Services</li>
            <li><span className="text-indigo-800 dark:text-indigo-300 font-semibold">DevOps:</span> Docker, CI/CD Pipelines</li>
          </ul>
        </div>
        <div className="relative rounded-lg bg-slate-300 text-slate-900 dark:bg-slate-900 dark:text-white p-6 flex flex-col justify-center col-span-1 text-center cursor-pointer hover:bg-indigo-700 transition-colors">
          <a 
            href="https://github.com/fillersury/anniepotatoes" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center space-y-2"
          >
            <FaGithub className="text-4xl text-indigo-900 dark:text-indigo-400" />
            <span
              title="Click to view my GitHub repository"
              className="font-mono font-semibold text-indigo-900 dark:text-indigo-300"
            >View My GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Compiled;
