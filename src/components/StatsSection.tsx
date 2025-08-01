import { TrendingUp, Users, Shield, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Members",
      description: "Growing community"
    },
    {
      icon: TrendingUp,
      number: "₹50Cr+",
      label: "Funds Managed",
      description: "Secure investments"
    },
    {
      icon: Shield,
      number: "15+",
      label: "Years Experience",
      description: "Trusted platform"
    },
    {
      icon: Award,
      number: "99.8%",
      label: "Success Rate",
      description: "Guaranteed returns"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by thousands across{" "}
            <span className="bg-gradient-peacock bg-clip-text text-transparent">
              India
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join India's most reliable chit fund platform with proven track record and guaranteed returns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-peacock rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-peacock transition-shadow duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-peacock rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary animate-fade-in">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground">RBI COMPLIANT</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground">GOVERNMENT REGISTERED</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground">SECURED TRANSACTIONS</div>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-sm font-medium text-muted-foreground">INSURANCE COVERED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;