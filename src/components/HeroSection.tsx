import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Smartphone, Download, DollarSign, TrendingUp, Shield, Zap, Coins } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-peacock rounded-full filter blur-xl animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-peacock-subtle rounded-full filter blur-xl animate-float-slow opacity-15"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-card-glow rounded-full filter blur-2xl opacity-10 animate-pulse"></div>
        
        {/* Floating Financial Elements */}
        <div className="absolute top-32 left-1/4 animate-float">
          <div className="w-12 h-12 bg-gradient-glass backdrop-blur-glass rounded-full flex items-center justify-center shadow-glass border border-white/20">
            <DollarSign className="w-6 h-6 text-primary animate-glow-pulse" />
          </div>
        </div>
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
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-slide-up">
                Smart{" "}
                <span className="bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse">
                  Chit
                </span>
                <br />
                Funds{" "}
                <span className="relative group">
                  <span className="bg-gradient-peacock bg-clip-text text-transparent">Platform</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-peacock rounded-full animate-scale-in group-hover:h-2 transition-all duration-300"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Trusted chit funds with guaranteed returns. Grow your wealth smartly.
              </p>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                variant="peacock" 
                size="lg" 
                className="group hover:animate-glow-pulse"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Join Now
                <ArrowRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg" className="group hover:text-primary">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get App
                <Smartphone className="ml-2 h-5 w-5 group-hover:animate-float" />
              </Button>
            </div>

            {/* Interactive Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse">10K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Members</div>
                  <Shield className="w-4 h-4 text-primary mx-auto mt-2 group-hover:animate-coin-flip" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse" style={{ animationDelay: '0.2s' }}>₹50Cr+</div>
                  <div className="text-xs text-muted-foreground mt-1">Funds</div>
                  <TrendingUp className="w-4 h-4 text-primary mx-auto mt-2 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse" style={{ animationDelay: '0.4s' }}>15+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years</div>
                  <Zap className="w-4 h-4 text-primary mx-auto mt-2 group-hover:animate-float" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl shadow-float p-8 border border-white/20 hover:shadow-glow transition-all duration-500 hover:scale-[1.02] group">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-peacock rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-peacock rounded-full flex items-center justify-center shadow-glow animate-glow-pulse hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-white font-bold text-xl">SC</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl hover:text-primary transition-colors cursor-pointer">Smart Chit</div>
                      <div className="text-sm text-muted-foreground">₹10K Monthly</div>
                    </div>
                  </div>
                  <div className="text-right group cursor-pointer">
                    <div className="text-sm text-muted-foreground">Returns</div>
                    <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse group-hover:scale-110 transition-all duration-300">15%</div>
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-5 border border-white/20 space-y-4 hover:border-primary/40 transition-all duration-300">
                  <div className="flex justify-between items-center py-2 hover:bg-white/10 rounded-xl px-4 transition-all duration-300 cursor-pointer group">
                    <span className="text-sm font-medium">Monthly</span>
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">₹10K</span>
                  </div>
                  <div className="flex justify-between items-center py-2 hover:bg-white/10 rounded-xl px-4 transition-all duration-300 cursor-pointer group">
                    <span className="text-sm font-medium">Duration</span>
                    <span className="font-bold text-lg group-hover:text-primary transition-colors">20M</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center bg-gradient-card-glow rounded-xl p-4 hover:scale-105 transition-all duration-300 cursor-pointer group">
                      <span className="font-bold text-lg">You Get</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse group-hover:scale-110 transition-all duration-300">
                          ₹1.8L+
                        </span>
                        <div className="text-xs text-muted-foreground">Potential</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="peacock" className="w-full group hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <DollarSign className="mr-2 h-5 w-5 group-hover:animate-coin-flip" />
                  Start This Plan
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Enhanced Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-peacock rounded-full opacity-30 animate-float shadow-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-peacock-subtle rounded-full opacity-25 animate-float-slow shadow-glow"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-primary rounded-full opacity-40 animate-bounce"></div>
            
            {/* Money flow animation */}
            <div className="absolute top-4 left-4 w-6 h-6 rounded-full bg-gradient-peacock opacity-60 animate-money-flow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;