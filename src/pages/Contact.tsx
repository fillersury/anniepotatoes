// src/components/Contact.tsx
import React, { useState, useEffect } from "react";

export default function Contact() {
//   const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
    // Trigger fade-in after component mounts
    setIsLoaded(true);
    }, []);

    return (
        <div
        className={`relative w-screen h-screen bg-slate-200 dark:bg-slate-950 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
        }`}
        >
        <h1 className="text-slate-900 dark:text-white mb-8 text-2xl font-semibold">Page Coming Soon!</h1>
        <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
            <span
                key={i}
                data-testid="bounce-dot"
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
    // <div className="max-w-xl mx-auto p-6 text-slate-800 dark:text-white">
    //     <h2 className="text-3xl font-bold mb-4 font-mono">Contact Me</h2>
    //     {status === "sent" ? (
    //     <p className="text-green-500">Thanks! Your message has been sent.</p>
    //     ) : (
    //         <form
    //             action="https://formspree.io/f/YOUR_FORM_ID"
    //             method="POST"
    //             onSubmit={() => setStatus("submitting")}
    //             className="space-y-4"
    //         >
    //             <div>
    //                 <label className="block mb-1 font-medium">Name</label>
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     required
    //                     className="w-full rounded-lg p-2 bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //                 />
    //             </div>
    //             <div>
    //                 <label className="block mb-1 font-medium">Email</label>
    //                 <input
    //                 type="email"
    //                 name="email"
    //                 required
    //                 className="w-full rounded-lg p-2 bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //                 />
    //             </div>
    //             <div>
    //                 <label className="block mb-1 font-medium">Message</label>
    //                 <textarea
    //                     name="message"
    //                     rows={5}
    //                     required
    //                     className="w-full rounded-lg p-2 bg-slate-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //                 ></textarea>
    //             </div>
    //             <button
    //                 type="submit"
    //                 disabled={status === "submitting"}
    //                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition disabled:opacity-50"
    //                 >
    //                 {status === "submitting" ? "Sending..." : "Send"}
    //             </button>
    //         </form>
    //     )}
    // </div>
  );
}
