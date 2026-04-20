import Image from "next/image";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,_rgba(16,185,129,0.16),_transparent_18%),radial-gradient(circle_at_82%_20%,_rgba(236,72,153,0.16),_transparent_15%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
          <div className="relative z-20 flex flex-col items-center justify-center gap-8">
            <div className="relative mx-auto">
              <div className="relative w-[90vw] h-[90vw] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] xl:w-[600px] xl:h-[600px] max-w-[500px] max-h-[500px]">
                {/* Circular badge with text */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 540 540" aria-hidden="true">
                  <defs>
                    <path id="circlePath" d="M 270, 270 m -230, 0 a 230,230 0 1,1 460,0 a 230,230 0 1,1 -460,0" />
                  </defs>
                  <circle cx="270" cy="270" r="230" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                  <text className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] font-thin fill-slate-600" fontSize="2.0" fontWeight="100">
                    <textPath href="#circlePath" startOffset="0%">
                      APIs
                    </textPath>
                  </text>
                  <text className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] font-thin fill-slate-600" fontSize="2.0" fontWeight="100">
                    <textPath href="#circlePath" startOffset="20%">
                      System Design
                    </textPath>
                  </text>
                  <text className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] font-thin fill-slate-600" fontSize="2.0" fontWeight="100">
                    <textPath href="#circlePath" startOffset="40%">
                      Scalability
                    </textPath>
                  </text>
                  <text className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] font-thin fill-slate-600" fontSize="2.0" fontWeight="100">
                    <textPath href="#circlePath" startOffset="60%">
                      Data Modeling
                    </textPath>
                  </text>
                  <text className="text-[1.6rem] sm:text-[2.2rem] md:text-[2.5rem] font-thin fill-slate-600" fontSize="2.0" fontWeight="100">
                    <textPath href="#circlePath" startOffset="80%">
                      Architecture
                    </textPath>
                  </text>
                </svg>

                {/* Image container */}
                <div className="absolute inset-8 sm:inset-10 flex items-center justify-center">
                  <div className="relative w-[280px] h-[280px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] animate-fade-in-up rounded-full">
                    <div className="absolute -inset-2 bg-slate-950/5 blur-xl rounded-full" />
                    <div className="absolute inset-0 bg-white/90 ring-1 ring-slate-200 shadow-[0_30px_90px_rgba(15,23,42,0.12)] rounded-full" />
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src="/myimage/rada.png"
                        alt="Rada"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Enoch Chukwudi
              </h1>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-500">
                SOFTWARE ENGINEER // PRODUCT DESIGNER
              </p>
              <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
                Turning complexity into clean systems designed for scalability, structure, and performance
              </p>
              <div className="mt-8 mb-15 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-50"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
