import { useEffect, useState } from "react";

type ModelPhoto = {
  src: string;
  alt: string;
};

const modelPortfolioBaseUrl = "https://portfolio.anniepotatoes.me/test_shoots";

const fallbackModelPortfolio: ModelPhoto[] = Array.from({ length: 41 }, (_, index) => {
  const photoNumber = index + 1;
  return {
    src: `${modelPortfolioBaseUrl}/test_${photoNumber}.jpg`,
    alt: `Portrait ${photoNumber} from Annie Luo's model portfolio`,
  };
});

function shuffle<T>(items: T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function ModelCarousel() {
  const [modelPortfolio, setModelPortfolio] = useState<ModelPhoto[]>(fallbackModelPortfolio);
  const [modelOrder, setModelOrder] = useState(() => shuffle(fallbackModelPortfolio));

  useEffect(() => {
    const controller = new AbortController();

    fetch(`${modelPortfolioBaseUrl}/model-portfolio.json`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);
        return response.json() as Promise<unknown>;
      })
      .then((manifest) => {
        if (!Array.isArray(manifest)) throw new Error("Manifest must be an array");

        const photos = manifest.flatMap((entry) => {
          if (!entry || typeof entry !== "object" || !("file" in entry) || typeof entry.file !== "string") return [];
          if (!/^test_\d+\.jpg$/.test(entry.file)) return [];

          return [{
            src: `${modelPortfolioBaseUrl}/${entry.file}`,
            alt: "alt" in entry && typeof entry.alt === "string" ? entry.alt : "Model portfolio portrait",
          }];
        });

        if (photos.length > 0) setModelPortfolio(photos);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Using the fallback model portfolio because the manifest could not be loaded.", error);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    setModelOrder(shuffle(modelPortfolio));
  }, [modelPortfolio]);

  return (
    <>
      <div className="model-carousel film-roll relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 snap-start snap-always items-center bg-[#1B1920] px-7 py-24 sm:px-12 lg:px-16">
        <div className="model-track-viewport mx-auto -translate-y-6 max-w-xl overflow-hidden lg:max-w-4xl lg:-translate-y-8 xl:max-w-5xl 2xl:max-w-6xl">
          <div className="model-gallery-grid">
            {[...modelOrder, ...modelOrder].map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={index < modelOrder.length ? image.alt : ""}
                aria-hidden={index >= modelOrder.length ? "true" : undefined}
                loading={index < modelOrder.length ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                className="model-gallery-image aspect-[4/5] object-cover object-center"
              />
            ))}
          </div>
        </div>
      </div>
      <section className="model-details relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 snap-start snap-always items-center bg-[#F8E8EE] px-6 py-12 text-[#23519F] sm:px-10 sm:py-24 md:px-14 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-4xl">
          <div className="mb-6 flex flex-col gap-2 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#A83F6B]">Model profile</p>
              <h2 className="mt-2 font-mono text-4xl font-bold uppercase tracking-[0.08em] text-[#6456C2] sm:mt-3 sm:text-6xl">Annie Luo</h2>
            </div>
            <a
              href="https://www.instagram.com/anniepotatoes/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.18em] text-[#23519F] underline decoration-[#D98AA7] underline-offset-4 transition-colors hover:text-[#6456C2]"
            >
              View Instagram →
            </a>
          </div>
          <dl className="grid grid-cols-1 border-t border-[#23519F]/25 sm:grid-cols-2">
            {[
              ["Height", "5'6\" / 168 cm"],
              ["Bust", "29.5\" / 75 cm"],
              ["Waist", "22.5\" / 57 cm"],
              ["Hips", "34.5\" / 88 cm"],
              ["Shoe", "US 7.5 / EU 38.5"],
              ["Hair", "Black"],
              ["Eyes", "Brown"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b border-[#23519F]/25 py-3 sm:gap-6 sm:px-5 sm:py-5 first:sm:pl-0 even:sm:pr-0">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-[#A83F6B]">{label}</dt>
                <dd className="text-right font-mono text-sm uppercase tracking-[0.08em] text-[#23519F]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

export default ModelCarousel;
