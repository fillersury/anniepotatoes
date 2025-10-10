import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Download } from "lucide-react"; // optional icon

type PhotoCardProps = {
  image: string;        // low- or mid-res display image
  downloadUrl: string;  // high-res image for download
  aspect: "portrait" | "landscape";
};

export default function PhotoCard({ image, downloadUrl, aspect }: PhotoCardProps) {
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "relative w-full rounded-lg overflow-visible transition-opacity duration-700 group",
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
        {/* Image */}
        <div
          className="absolute inset-0 backface-hidden bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Hover overlay with download button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={downloadUrl}
            download
            className="text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition"
            title="Download high-quality photo"
          >
            <Download className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
