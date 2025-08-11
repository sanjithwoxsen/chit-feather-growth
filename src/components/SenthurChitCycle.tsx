import React, { useEffect, useState } from "react";

const labels = [
  "Enroll",
  "Monthly Pay",
  "Auction",
  "Payout",
];

const SenthurChitCycle: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % labels.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-glow-warm animate-slide-up mb-4">
        Senthur Chit Cycle
      </h2>
      <div className="relative w-72 h-72">
        {/* Wavy aurora halo (keeps brand gradient, waves like iPhone wallpaper) */}
        <div className="absolute inset-0 rounded-full bg-gradient-aurora bg-[length:240%_240%] animate-aurora-waves opacity-25" />

        {/* Cycle stroke with subtle gradient */}
        <svg viewBox="0 0 240 240" className="absolute inset-0">
          <defs>
            <linearGradient id="cycleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.55" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="95" fill="none" stroke="url(#cycleStroke)" strokeWidth="14" strokeLinecap="round" strokeDasharray="42 28" />

          {/* Subtle pulsing arrows to guide flow */}
          {[45, 135, 225, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 120 + 85 * Math.cos(rad);
            const y = 120 + 85 * Math.sin(rad);
            const rotate = angle + 90;
            return (
              <g key={i} transform={`translate(${x}, ${y}) rotate(${rotate})`}>
                <polygon points="0,0 -6,-10 6,-10" fill="hsl(var(--foreground) / 0.45)" className="animate-pulse" />
              </g>
            );
          })}
        </svg>

        {/* Orbiting indicator with warm halo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[190px] h-[190px] rounded-full">
            <div className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite]">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground" />
              <span
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full blur-md"
                style={{ background: "hsl(var(--glow-warm) / 0.25)" }}
              />
            </div>
          </div>
        </div>

        {/* Soft particles orbiting */}
        <div className="absolute inset-0">
          {[0, 120, 240].map((start, i) => (
            <div key={i} className="absolute inset-0 animate-[spin_16s_linear_infinite]" style={{ animationDelay: `${i * 0.8}s` }}>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "hsl(var(--glow-warm) / 0.5)" }} />
            </div>
          ))}
        </div>

        {labels.map((label, idx) => {
          const count = labels.length;
          const angle = (idx * 360) / count - 90; // start at top, evenly spaced
          const r = 95; // align nodes with the stroke radius
          const rad = (angle * Math.PI) / 180;
          const x = 120 + r * Math.cos(rad);
          const y = 120 + r * Math.sin(rad);
          const isActive = active === idx;
          return (
            <div
              key={label}
              className={`absolute flex flex-col items-center transition-transform transition-opacity duration-500 ${isActive ? "scale-110 opacity-100" : "scale-100 opacity-90"}`}
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              <div className={`w-3.5 h-3.5 rounded-full bg-card border ${isActive ? "border-[hsl(var(--glow-warm))]" : "border-border"}`} />
              <span
                className={`mt-2 text-xs font-semibold px-2 py-1 rounded-full shadow-sm bg-card text-foreground ${isActive ? "ring-1 ring-[hsl(var(--glow-warm)/0.5)]" : "opacity-80"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SenthurChitCycle;
