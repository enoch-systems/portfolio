export default function LogoStrip() {
  const logos = [
    "Slack",
    "Amazon",
    "Logitech",
    "Google",
    "Facebook",
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-slate-200/80 bg-white/95 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10 px-6 lg:px-8">
        {logos.map((logo) => (
          <div key={logo} className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
