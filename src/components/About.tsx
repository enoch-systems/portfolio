import Image from "next/image";
import { personalData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-3xl bg-slate-950/5 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">
                <Image
                  src="/myimage/enoch.png"
                  alt={personalData.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-6">
              About Me
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {personalData.bio}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-700">
                  <span className="font-semibold">Location:</span> {personalData.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700">
                  <span className="font-semibold">Timezone:</span> {personalData.timezone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-slate-700">
                  <span className="font-semibold">Experience:</span> {personalData.experience}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
