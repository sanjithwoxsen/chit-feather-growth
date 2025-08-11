import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { ArrowRight, MessageCircle, Smartphone, Download, IndianRupee, TrendingUp, Shield, Zap, Coins } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-aurora bg-[length:240%_240%] animate-aurora-waves flex items-center overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        {/* Wave layers using existing gradient colors only */}
        <div className="gradient-wave" aria-hidden="true">
          <div className="wave top" />
          <div className="wave mid" />
          <div className="wave bot" />
        </div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-peacock rounded-full filter blur-xl animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-peacock-subtle rounded-full filter blur-xl animate-float-slow opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-card-glow rounded-full filter blur-2xl opacity-10 animate-pulse"></div>
        
        {/* Floating Financial Elements */}
        <div className="absolute bottom-32 right-1/4 animate-float-slow">
          <div className="w-16 h-16 bg-gradient-glass backdrop-blur-glass rounded-full flex items-center justify-center shadow-glass border border-white/20">
            <TrendingUp className="w-8 h-8 text-primary animate-coin-flip" />
          </div>
        </div>
        <div className="absolute top-1/2 right-16 animate-float">
          <div className="w-10 h-10 bg-gradient-glass backdrop-blur-glass rounded-full flex items-center justify-center shadow-glass border border-white/20">
            <Coins className="w-5 h-5 text-primary animate-money-flow" />
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-slide-up text-foreground">
                Smarter Chit Plans
                <br />
                <span className="text-foreground">Transparent. Trusted.</span>
              </h1>
              <p className="text-xl text-white max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Smarter plans for brighter futures.
              </p>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="ghost" 
                size="lg" 
                className="group bg-card text-foreground border border-border shadow-md hover:shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </Button>
              <Button variant="ghost" size="lg" className="group bg-transparent border border-white/70 text-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Get App
                <Smartphone className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group cursor-pointer">
                <div className="bg-card rounded-2xl p-4 border border-border shadow-md transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-extrabold text-foreground">10K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Members</div>
                  <Shield className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-card rounded-2xl p-4 border border-border shadow-md transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-extrabold text-foreground" style={{ animationDelay: '0.2s' }}>₹50Cr+</div>
                  <div className="text-xs text-muted-foreground mt-1">Funds</div>
                  <TrendingUp className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-card rounded-2xl p-4 border border-border shadow-md transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-extrabold text-foreground" style={{ animationDelay: '0.4s' }}>15+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years</div>
                  <Zap className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative bg-card rounded-3xl shadow-md p-8 border border-border transition-all duration-500 hover:scale-[1.02] group">
              {/* Glowing border effect */}
              
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-glass hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-foreground font-bold text-xl">SC</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl hover:text-primary transition-colors cursor-pointer">Smart Chit</div>
                      <div className="text-sm text-muted-foreground">₹10K Monthly</div>
                    </div>
                  </div>
                  <div className="text-right group cursor-pointer">
                    <div className="text-sm text-muted-foreground">Returns</div>
                    <div className="text-3xl font-extrabold text-foreground group-hover:scale-110 transition-all duration-300">15%</div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-5 border border-border space-y-4 hover:border-primary/40 transition-all duration-300">
                  <div className="flex justify-between items-center py-2 hover:bg-white/10 rounded-xl px-4 transition-all duration-300 cursor-pointer group">
                    <span className="text-sm font-medium">Monthly</span>
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">₹10K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 hover:bg-white/10 rounded-xl px-4 transition-all duration-300 cursor-pointer group">
                    <span className="text-sm font-medium">Duration</span>
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">20M</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center bg-card rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <span className="font-bold text-lg">You Get</span>
                      <div className="text-right">
                        <span className="text-2xl font-extrabold text-foreground group-hover:scale-110 transition-all duration-300">
                          ₹1.8L+
                        </span>
                        <div className="text-xs text-muted-foreground">Potential</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="w-full bg-card text-foreground border border-border shadow-md hover:shadow-lg">
                  <IndianRupee className="mr-2 h-5 w-5" />
                  Start This Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Enhanced Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-peacock rounded-full opacity-30 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-peacock-subtle rounded-full opacity-25 animate-float-slow"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full opacity-40 animate-bounce"></div>
            
            {/* Money flow animation */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-gradient-peacock opacity-60 animate-money-flow"></div>
          </div>
        </div>

        {/* Bottom Senthur logo with subtle warm glow */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <Logo className="w-16 h-16 logo-glow" aria-label="Senthur Chits Logo" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;