import Image from "next/image";

function CornerLines({
  className,
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  const transform = `${flipX ? "scaleX(-1) " : ""}${flipY ? "scaleY(-1)" : ""}`.trim();

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ transform: transform || undefined }}
    >
      <path
        d="M290 10C210 10 150 70 150 150"
        stroke="rgba(46,217,199,0.14)"
        strokeWidth="1.5"
      />
      <path
        d="M290 30C220 30 170 80 170 150"
        stroke="rgba(46,217,199,0.11)"
        strokeWidth="1.5"
      />
      <path
        d="M290 50C232 50 192 92 192 150"
        stroke="rgba(46,217,199,0.09)"
        strokeWidth="1.5"
      />
      <path
        d="M290 70C244 70 214 104 214 150"
        stroke="rgba(46,217,199,0.07)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GlowOrb({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(46,217,199,0.95),rgba(46,217,199,0.72)_42%,rgba(46,217,199,0.28)_68%,rgba(46,217,199,0)_82%)] ${className ?? ""}`}
    />
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-white"
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.82 2.67 4.82 6.14V21h-4v-5.54c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92V21h-4Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-[46%] bottom-0 bg-[#031D59]" />
      <CornerLines className="absolute right-0 top-0 h-64 w-64 opacity-90" />
      <CornerLines
        className="absolute bottom-0 left-0 h-72 w-72 opacity-70"
        flipX
        flipY
      />

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-14 pt-6">
        <div className="relative mt-2 flex h-[390px] w-full max-w-[560px] items-start justify-center sm:h-[450px]">
          <GlowOrb className="bottom-[170px] h-[150px] w-[150px] opacity-60 sm:bottom-[205px] sm:h-[180px] sm:w-[180px]" />
          <GlowOrb className="bottom-[78px] h-[185px] w-[185px] opacity-92 sm:bottom-[105px] sm:h-[220px] sm:w-[220px]" />
          <GlowOrb className="bottom-[-18px] h-[200px] w-[200px] opacity-82 sm:bottom-[4px] sm:h-[235px] sm:w-[235px]" />
          <GlowOrb className="bottom-[-116px] h-[210px] w-[210px] opacity-72 sm:bottom-[-92px] sm:h-[245px] sm:w-[245px]" />

          <div className="relative z-20 mt-6 h-[212px] w-[212px] overflow-hidden rounded-full sm:h-[252px] sm:w-[252px]">
            <Image
              src="/images/profile-photo.jpeg"
              alt="Portrait of Analicia L."
              fill
              priority
              className="object-cover grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,21,74,0.08),rgba(46,217,199,0.22))]" />
            <div className="absolute inset-0 ring-1 ring-white/10" />
            
          </div>
        </div>

        <div className="mt-3 max-w-3xl text-center">
          <h1 className="text-[clamp(3rem,8vw,5.2rem)] font-light leading-none tracking-tight text-white">
            Hi, I'm Analicia
          </h1>

          <p className="mt-4 text-[0.95rem] font-medium uppercase tracking-[0.28em] text-[#2ED9C7] sm:text-[1.15rem]">
            Product Manager
          </p>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            I build 0–1 product concepts, guided workflows, and AI-shaped
            systems that make complexity clearer, more usable, and easier to
            move through.
          </p>
        </div>
      </section>

      <section className="relative z-10 w-full bg-[#062769]">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-12 md:grid-cols-3">
            <article className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
                Product Strategy
              </p>
              <p className="text-lg leading-8 text-white/86">
                I work from the points where a system asks more of people than it
                should, then define what would make that experience more coherent
                and usable.
              </p>
            </article>

            <article className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
                Guided Workflows
              </p>
              <p className="text-lg leading-8 text-white/86">
                My work tends to begin where information fragments, next steps are
                unclear, and ordinary tasks become more difficult than they need
                to be.
              </p>
            </article>

            <article className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
                AI-Supported Building
              </p>
              <p className="text-lg leading-8 text-white/86">
                I use AI as part of the build process, but not in place of product
                judgment. The work still has to hold its logic, shape, and
                usefulness.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2 md:items-start">
          <div className="w-full max-w-[32rem] space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
              Everyday Clarity Lab
            </p>

            <p className="text-[clamp(1.35rem,3vw,2rem)] font-light leading-[1.35] text-white">
              My creative and AI building space for shaping ideas into practical
              systems.
            </p>

            <p className="text-base leading-8 text-white/72 sm:text-lg">
              It is where I test product concepts, shape workflows, and refine
              the structures that sit underneath clear, usable experiences.
            </p>

            <div className="pt-3">
              <a
                href="/labs"
                className="inline-flex items-center rounded-full border border-[#2ED9C7]/45 bg-[#2ED9C7]/12 px-10 py-4 text-lg font-semibold tracking-[0.01em] text-white transition hover:border-[#2ED9C7] hover:bg-[#2ED9C7]/22"
              >
                Explore the Lab
              </a>
            </div>
          </div>

          <div className="w-full max-w-[32rem] space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
              How I Work
            </p>

            <div className="space-y-4">
              <div className="w-full border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#2ED9C7]">01</p>
                  <p className="text-xl font-medium text-white">Start</p>
                </div>
                <p className="mt-3 text-base leading-8 text-white/72">
                  with the human moment
                </p>
              </div>

              <div className="w-full border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#2ED9C7]">02</p>
                  <p className="text-xl font-medium text-white">Shape</p>
                </div>
                <p className="mt-3 text-base leading-8 text-white/72">
                  the workflow and where it breaks
                </p>
              </div>

              <div className="w-full border-t border-white/10 pt-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#2ED9C7]">03</p>
                  <p className="text-xl font-medium text-white">Add</p>
                </div>
                <p className="mt-3 text-base leading-8 text-white/72">
                  structure, guardrails, and guidance
                </p>
              </div>

              <div className="w-full border-t border-b border-white/10 pt-4 pb-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-[#2ED9C7]">04</p>
                  <p className="text-xl font-medium text-white">Build</p>
                </div>
                <p className="mt-3 text-base leading-8 text-white/72">
                  the first usable version
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">
              Let&apos;s Talk!
            </p>

            <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              I am always open to connect with people in product and tech, learn
              more about product solutioning, consulting, speaking
              opportunities, and discuss navigating this rewarding career path.
            </p>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/analicial-0q7e6/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/18 px-6 py-4 text-base font-medium text-white/90 transition hover:border-[#2ED9C7]/50 hover:text-white"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
