import React, { useState } from "react";

interface FadeInImageProps {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({
  src,
  alt = "",
  className = "",
  aspectRatio = "pt-[66.66%]",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-0 ${aspectRatio} rounded-lg overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default FadeInImage;
