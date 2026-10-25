import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import modelOne from "../assets/modeling_photos/test_1.jpg";
import modelFour from "../assets/modeling_photos/test_4.jpg";
import modelSeven from "../assets/modeling_photos/test_7.jpg";
import modelTen from "../assets/modeling_photos/test_10.jpg";
import smoothTransitions from "../assets/smooth-transitions.gif";
import scrollAnimation from "../assets/scroll-animation.gif";
import titleAnimation from "../assets/title-animation.gif";
import phoneResponsive from "../assets/phone-responsive.png";
import tabletResponsive from "../assets/ipad-responsive.png";

const modelPortfolio = [
  { src: modelOne, alt: "Portrait from Annie Luo's model portfolio" },
  { src: modelFour, alt: "Portrait from Annie Luo's model portfolio" },
  { src: modelSeven, alt: "Portrait from Annie Luo's model portfolio" },
  { src: modelTen, alt: "Portrait from Annie Luo's model portfolio" },
];

function shuffle<T>(items: T[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

const sections = [
  {
    title: "Hello",
    navLabel: "Home",
  },
  {
    title: "Software Engineer",
  },
  {
    title: "Artist",
  },
  {
    title: "Model",
  },
];

const modelSectionIndex = sections.findIndex((section) => section.title === "Model");

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [modelOrder] = useState(() => shuffle(modelPortfolio));
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [scrollPageIndex, setScrollPageIndex] = useState(0);
  const [hoveredCaret, setHoveredCaret] = useState<"up" | "down" | null>(null);
  const interactionLock = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionScrollPositions = useRef<Record<number, number>>({});

  useEffect(() => {
    const timeout = setTimeout(() => setIsFading(false), 50);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    const timeout = setTimeout(() => setIsAnimating(false), 260);
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      scrollContainerRef.current?.scrollTo({
        top: sectionScrollPositions.current[activeIndex] ?? 0,
        behavior: "auto",
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  const selectSlide = (index: number) => {
    if (index === activeIndex) return;

    sectionScrollPositions.current[activeIndex] = scrollContainerRef.current?.scrollTop ?? 0;

    setSlideDirection((index - activeIndex + sections.length) % sections.length === 1 ? "next" : "prev");
    setActiveIndex(index);
    setIsAnimating(true);
  };

  const navigateRelative = (direction: number) => {
    if (interactionLock.current) return;
    interactionLock.current = true;
    selectSlide((activeIndex + direction + sections.length) % sections.length);
    setTimeout(() => {
      interactionLock.current = false;
    }, 280);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const touch = event.changedTouches[0];
    const distanceX = touch.clientX - touchStart.current.x;
    const distanceY = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(distanceX) < 50 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
    navigateRelative(distanceX < 0 ? 1 : -1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.isContentEditable || ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(target?.tagName ?? "")) return;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") navigateRelative(1);
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") navigateRelative(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, isAnimating]);

  const activeSection = sections[activeIndex];
  const isLandingPage = activeSection.title === "Hello";
  const activeHeading = isLandingPage ? "ANNIEPOTATOES" : activeSection.title;
  const scrollPageCount = isLandingPage || activeSection.title === "Model" ? 3 : activeSection.title === "Software Engineer" ? 2 : 1;
  const isDarkCarouselPage = activeSection.title === "Model" && scrollPageIndex === 1;

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setScrollPageIndex(Math.min(scrollPageCount - 1, Math.round(container.scrollTop / container.clientHeight)));
  };

  const jumpToScrollPage = (pageIndex: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ top: pageIndex * container.clientHeight, behavior: "smooth" });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" ref={scrollContainerRef} onScroll={handleScroll} aria-label="Annie Luo portfolio" className="relative h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-auto bg-[#F8E8EE] text-[#23519F] dark:bg-[#F8E8EE] dark:text-[#23519F]">
      <div
        className={`relative mx-auto block min-h-screen w-full transition-opacity duration-500 lg:px-8 xl:px-14 2xl:px-20 ${isFading ? "opacity-0" : "opacity-100"}`}
      >
        <p aria-live="polite" className="sr-only">Showing {activeSection.navLabel ?? activeSection.title} section</p>
        <div
          className="panel-stage relative min-h-screen w-full snap-start snap-always overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="header-lockup pointer-events-none absolute inset-0 z-50 flex w-full -translate-y-[8vh] flex-col items-center justify-center px-7 font-mono uppercase sm:-translate-y-[7vh] sm:px-12 lg:-translate-y-[6vh] lg:px-16">
            {!isLandingPage && <span className="w-full text-center text-lg font-bold tracking-[0.18em] text-[#23519F] sm:text-xl">ANNIEPOTATOES</span>}
            <h1 key={activeHeading} className={`section-title ${isLandingPage ? "landing-title" : ""} block w-full max-w-full pt-2 text-center text-[clamp(2.5rem,10vw,10rem)] font-black leading-[0.9] tracking-[0.06em] text-[#6456C2] ${isAnimating ? `slide-panel-${slideDirection}` : ""}`}>{activeHeading}</h1>
            {isLandingPage && (
              <p className="mt-6 w-full max-w-2xl text-center font-mono text-sm normal-case leading-relaxed tracking-normal text-[#23519F] sm:text-base">I’m Annie, a NYC-based software engineer, artist, and model. I build thoughtful digital experiences and explore the world through technology, art, and image-making.</p>
            )}
          </div>
          <section
            key={activeSection.title}
            className={`panel-content absolute inset-0 flex min-h-screen flex-col justify-end bg-[#F8E8EE] px-7 pb-28 text-[#23519F] sm:px-12 sm:pb-32 lg:min-h-0 lg:px-16 lg:pb-36 ${isAnimating ? `slide-panel-${slideDirection}` : ""}`}
          />

        </div>

        {activeSection.title === "Hello" && (
          <section className="relative flex min-h-screen snap-start snap-always items-center bg-[#F8E8EE] px-7 py-24 text-[#23519F] sm:px-12 lg:px-24">
            <div className="mx-auto w-full max-w-2xl text-center font-mono">
              <p className="text-xs uppercase tracking-[0.22em] text-[#A83F6B]">About me</p>
              <p className="mt-5 text-xl leading-tight text-[#6456C2] sm:text-2xl">A curious creative working across technology, art, and image-making.</p>
              <p className="mx-auto mt-6 max-w-xl text-sm normal-case leading-relaxed text-[#23519F] sm:text-base">I like making things that feel thoughtful, useful, and a little unexpected. My work moves between code, visual expression, and collaboration.</p>
            </div>
          </section>
        )}

        {activeSection.title === "Hello" && (
          <section className="relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 snap-start snap-always items-center justify-center bg-[#6456C2] px-7 py-24 text-[#F8E8EE] sm:px-12">
            <div className="text-center font-mono">
              <p className="text-xs uppercase tracking-[0.22em] text-[#F8E8EE]">Contact</p>
              <h2 className="mt-5 text-3xl font-bold tracking-[0.04em] sm:text-5xl">Let’s make something thoughtful.</h2>
              <a
                href="mailto:anniecluo1998@gmail.com"
                className="mt-8 inline-block text-sm uppercase tracking-[0.16em] underline decoration-[#D98AA7] underline-offset-8 transition-colors hover:text-white sm:text-base"
              >
                Email me →
              </a>
            </div>
          </section>
        )}

        {activeSection.title === "Software Engineer" && (
          <section className="relative left-1/2 w-screen -translate-x-1/2 snap-start snap-always bg-[#F8E8EE] px-6 pb-40 pt-16 text-[#23519F] sm:px-10 sm:pb-48 sm:pt-24 md:px-14 lg:px-20 xl:px-24">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col gap-5 border-b border-[#23519F]/25 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#A83F6B]">Selected build</p>
                  <h2 className="mt-3 font-mono text-3xl font-bold uppercase tracking-[0.04em] text-[#6456C2] sm:text-5xl">UI/UX portfolio website</h2>
                </div>
                <a
                  href="https://stephanieluo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.16em] text-[#23519F] underline decoration-[#D98AA7] underline-offset-4 transition-colors hover:text-[#6456C2]"
                >
                  Visit live site →
                </a>
              </div>
              <p className="mt-8 max-w-3xl font-mono text-base normal-case leading-relaxed text-[#23519F] sm:text-lg">A responsive portfolio experience built to showcase UI/UX work through thoughtful visual design, smooth motion, and a clear browsing flow.</p>
              <div className="mt-10 grid border-y border-[#23519F]/25 sm:grid-cols-3">
                {[
                  ["Responsive UI", "Layouts that adapt gracefully across devices."],
                  ["Design systems", "Reusable patterns that keep the experience cohesive."],
                  ["Case-study flow", "Clear storytelling that makes the work easy to explore."],
                ].map(([title, description]) => (
                  <div key={title} className="border-b border-[#23519F]/25 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#6456C2]">{title}</h3>
                    <p className="mt-2 font-mono text-xs normal-case leading-relaxed text-[#23519F]">{description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
                {[
                  ["Smooth page transitions", "Custom fade-in and fade-out animations create a seamless browsing flow.", smoothTransitions],
                  ["Scroll-based animation", "Content responds to movement with subtle transitions that add energy without overwhelming the work.", scrollAnimation],
                  ["Animated title effects", "Motion in the page headers gives the experience a modern, memorable introduction.", titleAnimation],
                  ["Responsive by design", "The layout adapts across mobile, tablet, and desktop so the work stays accessible everywhere.", tabletResponsive],
                ].map(([title, description, image]) => (
                  <article key={title} className="border-t border-[#23519F]/25 pt-5 first:border-t-0 first:pt-0">
                    <h3 className="font-mono text-lg font-bold uppercase tracking-[0.08em] text-[#6456C2]">{title}</h3>
                    <p className="mt-3 font-mono text-sm normal-case leading-relaxed text-[#23519F]">{description}</p>
                    <img src={image} alt={title} loading="lazy" className="mt-5 aspect-[16/10] w-full object-cover object-center" />
                  </article>
                ))}
              </div>
              <div className="mt-12 grid gap-8 border-t border-[#23519F]/25 pt-8 sm:grid-cols-2 sm:items-center">
                <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#A83F6B]">Built for every screen</p>
                  <p className="mt-3 font-mono text-sm normal-case leading-relaxed text-[#23519F] sm:text-base">Responsive layouts, interaction details, and visual hierarchy work together across phone, tablet, and desktop.</p>
                </div>
                <div className="flex items-end justify-center gap-4 sm:justify-end">
                  <img src={tabletResponsive} alt="Tablet responsive layout" loading="lazy" className="max-h-52 w-auto object-contain" />
                  <img src={phoneResponsive} alt="Phone responsive layout" loading="lazy" className="max-h-44 w-auto object-contain" />
                </div>
              </div>
            </div>
          </section>
        )}

        {activeIndex === modelSectionIndex && (
          <>
            <div
              className="model-carousel film-roll relative left-1/2 flex min-h-screen w-screen -translate-x-1/2 snap-start snap-always items-center bg-[#1B1920] px-7 py-24 sm:px-12 lg:px-16"
            >
              <button
                type="button"
                aria-controls="model-gallery-track"
                aria-pressed={isCarouselPaused}
                aria-label={isCarouselPaused ? "Play model photo carousel" : "Pause model photo carousel"}
                onClick={() => setIsCarouselPaused((paused) => !paused)}
                className="absolute right-7 top-7 z-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[#F8E8EE] underline decoration-[#D98AA7] underline-offset-4 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F8E8EE] sm:right-12 sm:top-10"
              >
                {isCarouselPaused ? "Play" : "Pause"} motion
              </button>
              <div className="model-track-viewport mx-auto -translate-y-6 max-w-xl overflow-hidden lg:max-w-4xl lg:-translate-y-8 xl:max-w-5xl 2xl:max-w-6xl">
                <div id="model-gallery-track" className={`model-gallery-grid ${isCarouselPaused ? "is-paused" : ""}`}>
                  {[...modelOrder, ...modelOrder].map((image, index) => {
                    return (
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
                    );
                  })}
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
        )}

        {scrollPageCount > 1 && scrollPageIndex > 0 && (
          <button
            type="button"
            aria-label="Scroll to previous page"
            onClick={() => { setHoveredCaret(null); jumpToScrollPage(scrollPageIndex - 1); }}
            onMouseEnter={() => setHoveredCaret("up")}
            onMouseLeave={() => setHoveredCaret(null)}
            onFocus={() => setHoveredCaret("up")}
            onBlur={() => setHoveredCaret(null)}
            className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 text-3xl font-bold leading-none transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:top-8 sm:text-4xl lg:text-5xl ${hoveredCaret === "up" ? "scale-150" : ""} ${isDarkCarouselPage || (activeSection.title === "Hello" && scrollPageIndex === 2) ? "text-[#F8E8EE]" : "text-[#6456C2]"}`}
          >
            ^
          </button>
        )}

        {scrollPageCount > 1 && scrollPageIndex < scrollPageCount - 1 && (
          <button
            type="button"
            aria-label="Scroll to next page"
            onClick={() => { setHoveredCaret(null); jumpToScrollPage(scrollPageIndex + 1); }}
            onMouseEnter={() => setHoveredCaret("down")}
            onMouseLeave={() => setHoveredCaret(null)}
            onFocus={() => setHoveredCaret("down")}
            onBlur={() => setHoveredCaret(null)}
            className={`fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rotate-180 text-3xl font-bold leading-none transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:bottom-28 sm:text-4xl lg:text-5xl ${hoveredCaret === "down" ? "scale-150" : ""} ${isDarkCarouselPage ? "text-[#F8E8EE]" : "text-[#6456C2]"}`}
          >
            ^
          </button>
        )}

        {createPortal(
          <nav
            aria-label="Choose a section"
            className="liquid-nav fixed bottom-7 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full p-1.5 sm:bottom-10"
          >
            {sections.map((section, index) => (
              <button
                key={section.title}
                type="button"
                onClick={() => selectSlide(index)}
                aria-current={index === activeIndex ? "page" : undefined}
                className={`liquid-nav-button relative rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#23519F] sm:px-5 sm:text-xs ${index === activeIndex ? "bg-[#6456C2]/90 text-white shadow-lg shadow-[#6456C2]/20 backdrop-blur-md" : isDarkCarouselPage ? "text-white/90 hover:bg-white/15 hover:text-white" : "text-[#23519F] hover:bg-[#D98AA7]/35 hover:text-[#6456C2]"}`}
              >
                {section.navLabel ?? (section.title === "Software Engineer" ? "Software" : section.title)}
              </button>
            ))}
          </nav>,
          document.body,
        )}

      </div>
      </main>
    </>
  );
}

export default Home;
