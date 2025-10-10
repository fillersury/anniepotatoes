import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Download, Loader2 } from "lucide-react"; // add spinner icon

type PhotoCardProps = {
  image: string;        // low- or mid-res display image
  downloadUrl: string;  // high-res image for download
  aspect: "portrait" | "landscape";
};

export default function PhotoCard({ image, downloadUrl, aspect }: PhotoCardProps) {
  const aspectRatio = aspect === "portrait" ? "pt-[150%]" : "pt-[66.66%]";
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(false);

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

  // Handle download with a loading state
  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadUrl.split("/").pop() || "photo.jpg";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
      alert("Download failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleDownload}
            disabled={loading}
            className={classNames(
              "text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 p-3 rounded-full transition flex items-center justify-center",
              loading && "cursor-not-allowed opacity-80"
            )}
            title="Download high-quality photo"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Download className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
