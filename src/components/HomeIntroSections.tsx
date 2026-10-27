function HomeIntroSections() {
  return (
    <>
      <section className="relative flex min-h-screen snap-start snap-always items-center bg-[#F8E8EE] px-7 py-24 text-[#23519F] sm:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-2xl text-center font-mono">
          <p className="text-xs uppercase tracking-[0.22em] text-[#A83F6B]">About me</p>
          <p className="mt-5 text-xl leading-tight text-[#6456C2] sm:text-2xl">A curious creative working across technology, art, and image-making.</p>
          <p className="mx-auto mt-6 max-w-xl text-sm normal-case leading-relaxed text-[#23519F] sm:text-base">I like making things that feel thoughtful, useful, and a little unexpected. My work moves between code, visual expression, and collaboration.</p>
        </div>
      </section>

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
    </>
  );
}

export default HomeIntroSections;
