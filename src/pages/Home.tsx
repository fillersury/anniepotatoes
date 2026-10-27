import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import HomeIntroSections from "../components/HomeIntroSections";
import ModelCarousel from "../components/ModelCarousel";
import SoftwareEngineerSection from "../components/SoftwareEngineerSection";

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

        {activeSection.title === "Hello" && <HomeIntroSections />}

        {activeSection.title === "Software Engineer" && <SoftwareEngineerSection />}

        {activeIndex === modelSectionIndex && <ModelCarousel />}

        {scrollPageCount > 1 && scrollPageIndex > 0 && (
          <button
            type="button"
            aria-label="Scroll to previous page"
            onClick={() => { setHoveredCaret(null); jumpToScrollPage(scrollPageIndex - 1); }}
            onMouseEnter={() => setHoveredCaret("up")}
            onMouseLeave={() => setHoveredCaret(null)}
            onFocus={() => setHoveredCaret("up")}
            onBlur={() => setHoveredCaret(null)}
            className={`fixed left-1/2 top-[calc(1.5rem+env(safe-area-inset-top))] z-50 flex min-h-10 min-w-10 -translate-x-1/2 items-center justify-center text-3xl font-bold leading-none transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:top-8 sm:text-4xl lg:text-5xl ${hoveredCaret === "up" ? "scale-150" : ""} ${isDarkCarouselPage || (activeSection.title === "Hello" && scrollPageIndex === 2) ? "text-[#F8E8EE]" : "text-[#6456C2]"}`}
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
            className={`fixed bottom-[calc(6.5rem+env(safe-area-inset-bottom))] left-1/2 z-50 flex min-h-10 min-w-10 -translate-x-1/2 rotate-180 items-center justify-center text-3xl font-bold leading-none transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current sm:bottom-28 sm:text-4xl lg:text-5xl ${hoveredCaret === "down" ? "scale-150" : ""} ${isDarkCarouselPage ? "text-[#F8E8EE]" : "text-[#6456C2]"}`}
          >
            ^
          </button>
        )}

        {createPortal(
          <nav
            aria-label="Choose a section"
            className="liquid-nav fixed bottom-[calc(1.75rem+env(safe-area-inset-bottom))] left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full p-1.5 sm:bottom-10"
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
