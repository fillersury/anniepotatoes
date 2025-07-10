import React, { useState } from "react";
import classNames from "classnames";

type PhotoCardProps = {
  image: string;
  aspect: "portrait" | "landscape";
  title: string;
  date: string;
  story: string;
};

export default function PhotoCard({ image, aspect, title, date, story }: PhotoCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const aspectRatio = aspect === "portrait" ? "pt-[150%]" : "pt-[66.66%]";

  return (
    <div
        className={classNames(
            "relative w-full rounded-lg overflow-visible group cursor-pointer",
            aspect === "portrait" ? "col-span-1" : "md:col-span-2"
        )}
        onClick={() => setIsFlipped(!isFlipped)}
        >
        <div
            className={classNames(
            "relative w-full h-0 transition-transform duration-700 transform-style-preserve-3d",
            aspectRatio,
            isFlipped ? "rotate-y-180 z-50" : "z-0"
            )}
        >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-lg flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{date}</p>
          <p className="text-sm block md:hidden lg:block">{story}</p>
        </div>
      </div>
    </div>
  );
}
