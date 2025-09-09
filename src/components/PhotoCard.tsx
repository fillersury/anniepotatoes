import classNames from "classnames";

type PhotoCardProps = {
  image: string;
  aspect: "portrait" | "landscape";
};

export default function PhotoCard({ image, aspect }: PhotoCardProps) {
  const aspectRatio = aspect === "portrait" ? "pt-[150%]" : "pt-[66.66%]";

  return (
    <div
        className={classNames(
            "relative w-full rounded-lg overflow-visible",
            aspect === "portrait" ? "col-span-1" : "md:col-span-2"
        )}
        >
        <div
            className={classNames(
            "relative w-full h-0 transition-transform duration-700 transform-style-preserve-3d",
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
