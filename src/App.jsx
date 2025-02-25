import { useRef, useEffect, useState } from "react";
import graffitiVideo from "./assets/graffiti.mp4";
import "./App.css";

function App() {
  const [isFading, setIsFading] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handleVideoLoop = () => {
      setIsFading(true); // Start fade effect

      setTimeout(() => {
        setIsFading(false); // Remove fade effect after transition
      }, 1000); // Duration of fade effect
    };

    if (videoRef1.current) {
      videoRef1.current.addEventListener("ended", handleVideoLoop);
    }
    if (videoRef2.current) {
      videoRef2.current.addEventListener("ended", handleVideoLoop);
    }

    return () => {
      if (videoRef1.current) {
        videoRef1.current.removeEventListener("ended", handleVideoLoop);
      }
      if (videoRef2.current) {
        videoRef2.current.removeEventListener("ended", handleVideoLoop);
      }
    };
  }, []);

  return (
    <div className="app-container">
      <div className="video-background">
        {/* First video */}
        <video ref={videoRef1} autoPlay loop muted playsInline preload="auto" className={`video ${isFading ? "fade-out" : "fade-in"}`}>
          <source src={graffitiVideo} type="video/mp4" />
        </video>

        {/* Second video (used for crossfade effect) */}
        <video ref={videoRef2} autoPlay loop muted playsInline preload="auto" className={`video ${isFading ? "fade-in" : "fade-out"}`}>
          <source src={graffitiVideo} type="video/mp4" />
        </video>
      </div>

      <main>
        <div className="card">
          <button>Enter</button>
        </div>
      </main>
    </div>
  );
}

export default App;
