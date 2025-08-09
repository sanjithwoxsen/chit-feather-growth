import React from "react";

const labels = [
  { text: "Enroll", angle: 0 },
  { text: "Monthly Pay", angle: 90 },
  { text: "Auction", angle: 180 },
  { text: "Payout", angle: 270 },
];

const SenthurChitCycle: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-aurora bg-[length:240%_240%] animate-aurora opacity-30" />
        <svg viewBox="0 0 240 240" className="absolute inset-0">
          <defs>
            <linearGradient id="cycleStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--foreground))" stopOpacity="0.15" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle cx="120" cy="120" r="95" fill="none" stroke="url(#cycleStroke)" strokeWidth="16" strokeLinecap="round" strokeDasharray="40 30" />
        </svg>

        {/* Moving indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[190px] h-[190px] rounded-full border border-white/30">
            <div className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite]">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>

        {/* Static nodes */}
        {labels.map(({ text, angle }) => {
          const r = 105;
          const rad = (angle * Math.PI) / 180;
          const x = 120 + r * Math.cos(rad);
          const y = 120 + r * Math.sin(rad);
          return (
            <div
              key={text}
              className="absolute flex flex-col items-center"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-4 h-4 rounded-full bg-white border border-white/60 shadow-[0_6px_20px_rgba(0,0,0,0.25)]" />
              <span className="mt-2 text-xs font-semibold text-foreground bg-white/80 backdrop-blur-sm rounded-full px-2 py-1">
                {text}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Senthur Chit Cycle</p>
    </div>
  );
};

export default SenthurChitCycle;
