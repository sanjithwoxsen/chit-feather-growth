import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Star, Trophy, Crown, MessageCircle } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      badge: { label: "Hot Pick", Icon: Flame, className: "text-orange-500" },
      title: "Easy Saver",
      amount: "₹ 10,000",
      duration: "25 months",
      save: "Save 4,000 / month",
    },
    {
      badge: { label: "Best Seller Pick", Icon: Star, className: "text-yellow-500" },
      title: "Family Saver",
      amount: "₹ 1,50,000",
      duration: "25 months",
      save: "Save 6,000 / month",
    },
    {
      badge: { label: "Most Rewarding", Icon: Trophy, className: "text-sky-500" },
      title: "Smart Saver",
      amount: "₹ 5,00,000",
      duration: "25 months",
      save: "Save 12,000 / month",
    },
    {
      badge: { label: "Elite Choice", Icon: Crown, className: "text-amber-600" },
      title: "Elite Saver",
      amount: "₹ 10,000",
      duration: "25 months",
      save: "Save 4,000 / month",
    },
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Light gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-10 w-56 h-56 bg-gradient-aurora rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-gradient-peacock-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-peacock bg-clip-text text-transparent">Chit Plans</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">Smarter plans for brighter futures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="relative overflow-hidden bg-white border border-border/70 shadow-glass hover:shadow-float transition-all duration-300 hover:scale-[1.02] rounded-3xl">
              {/* badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 backdrop-blur-sm px-3 py-1 text-xs font-semibold">
                <plan.badge.Icon className={`h-4 w-4 ${plan.badge.className}`} />
                <span className="text-foreground">{plan.badge.label}</span>
              </div>

              <CardHeader className="pt-10 text-center">
                <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center pb-6">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{plan.amount}</div>
                <div className="text-sm text-muted-foreground">{plan.duration}</div>
                <div className="text-sm text-muted-foreground">{plan.save}</div>
                <Button variant="aurora" className="mt-4 w-full rounded-2xl">
                  <MessageCircle className="mr-2 h-4 w-4" /> Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
