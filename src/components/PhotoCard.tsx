import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type PhotoCardProps = {
  image: string;
  aspect: "portrait" | "landscape";
};

export default function PhotoCard({ image, aspect }: PhotoCardProps) {
  const aspectRatio = aspect === "portrait" ? "pt-[150%]" : "pt-[66.66%]";
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // fade in only once
          }
        });
      },
      { threshold: 0.1 } // 10% visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "relative w-full rounded-lg overflow-visible transition-opacity duration-700",
        aspect === "portrait" ? "col-span-1" : "md:col-span-2",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={classNames(
          "relative w-full h-0 transform-style-preserve-3d",
          aspectRatio
        )}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
}
