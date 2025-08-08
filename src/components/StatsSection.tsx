import { Handshake, Users, Sparkles, Headphones, ShieldCheck, FileMinus2 } from "lucide-react";

const features = [
  { icon: Handshake, value: "33+", label: "Years in Trust" },
  { icon: Users, value: "3000+", label: "Happy Subscribers" },
  { icon: Sparkles, value: "AI-enabled", label: "Chit Fund" },
  { icon: Headphones, value: "24/7", label: "Digital Support" },
  { icon: ShieldCheck, value: "100%", label: "Transparent" },
  { icon: FileMinus2, value: "Less", label: "Documentation" },
];

const StatsSection = () => {
  return (
    <section className="pt-10 md:pt-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Feature ribbon from reference image */}
        <div className="rounded-3xl bg-white shadow-glass border border-border/60 px-4 sm:px-6 md:px-10 py-6 md:py-7 -mt-16 md:-mt-24 relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-aurora text-white flex items-center justify-center shadow-peacock">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-lg md:text-xl font-extrabold tracking-tight">{f.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{f.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
