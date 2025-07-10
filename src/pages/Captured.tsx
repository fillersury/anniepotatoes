import React, { useState, useEffect } from "react";
import PhotoCard from "../components/PhotoCard";
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
      className={`relative w-screen min-h-screen bg-slate-200 dark:bg-slate-950 overflow-hidden p-4 transition-opacity duration-1000 ease-in-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <PhotoCard
            image={sevenSisters}
            aspect="portrait"
            title="Seven Sisters, UK"
            date="June 2025"
            story="Trained all the way to Eastbourne and hiked the chalk cliffs. It was both windy and magical. Wouldn't have traded this day for anything."
          />
          <PhotoCard
            image={crystalCove}
            aspect="landscape"
            title="Crystal Cove Beach, CA"
            date="June 2025"
            story="Small hike down to Crystal Cove, California. Watched the sunset and the rocky shores."
          />
          <PhotoCard
            image={japan}
            aspect="portrait"
            title="Kyoto, JP"
            date="October 2024"
            story="Took a day trip to Kyoto to see the beautiful temples: Kinkaku-ji and Fushimi Inari Taisha."
          />
          <PhotoCard
            image={tokyoSelfie}
            aspect="landscape"
            title="Shibuya Sky, JP"
            date="October 2024"
            story="Took transit to the Shibuya Sky at Shibuya Scramble Square. The skies were slightly cloudy that day but did not
              take away from the breaktaking view."
          />
          <PhotoCard
            image={jiufen}
            aspect="landscape"
            title="Jiufen, TW"
            date="September 2024"
            story="A day trip to JiuFen - the town nestled in the mountains that resembles Spirited Away. Beautiful views of the landscape."
          />
          <PhotoCard
            image={newportBeach}
            aspect="portrait"
            title="Jiufen, TW"
            date="June 2025"
            story="An entire day of puppy energy and Newport beach. The waves were strong this day and knocked us all over."
          />
          <PhotoCard
            image={taiwanFood}
            aspect="portrait"
            title="TaiPei, TW"
            date="September 2024"
            story="Strolling through TaiPei looking for food. Their food reminded of my mom's comfort Cantonese food."
          />
          <PhotoCard
            image={taiwanTemple}
            aspect="landscape"
            title="LongShan, TW"
            date="September 2024"
            story="Our first landmark in our Taipei trip. This was a beautifully intricate temple with lots of visitors. I bought a couple 
              lucky charms here."
          />
        </div>
      </div>
    </div>
  );
}

export default Captured;
