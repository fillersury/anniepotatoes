function SoftwareEngineerSection() {
  return (
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
            ["Smooth page transitions", "Custom fade-in and fade-out animations create a seamless browsing flow."],
            ["Scroll-based animation", "Content responds to movement with subtle transitions that add energy without overwhelming the work."],
            ["Animated title effects", "Motion in the page headers gives the experience a modern, memorable introduction."],
            ["Responsive by design", "The layout adapts across mobile, tablet, and desktop so the work stays accessible everywhere."],
          ].map(([title, description]) => (
            <article key={title} className="border-t border-[#23519F]/25 pt-5 first:border-t-0 first:pt-0">
              <h3 className="font-mono text-lg font-bold uppercase tracking-[0.08em] text-[#6456C2]">{title}</h3>
              <p className="mt-3 font-mono text-sm normal-case leading-relaxed text-[#23519F]">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-[#23519F]/25 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#A83F6B]">Built for every screen</p>
          <p className="mt-3 font-mono text-sm normal-case leading-relaxed text-[#23519F] sm:text-base">Responsive layouts, interaction details, and visual hierarchy work together across phone, tablet, and desktop.</p>
        </div>
      </div>
    </section>
  );
}

export default SoftwareEngineerSection;
