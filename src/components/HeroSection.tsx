import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Smartphone, Download, IndianRupee, TrendingUp, Shield, Zap, Coins } from "lucide-react";
import Logo from "@/components/Logo";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Wavy Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-[200%] h-[60%] opacity-70" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(218 84% 43%)" />
              <stop offset="50%" stopColor="hsl(192 78% 47%)" />
              <stop offset="100%" stopColor="hsl(102 78% 52%)" />
            </linearGradient>
          </defs>
          <g className="animate-wave">
            <path fill="url(#heroWave)" fillOpacity="0.22" d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          </g>
        </svg>
        <svg className="absolute top-0 right-0 w-[200%] h-[50%] opacity-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <g className="animate-wave-slow">
            <path fill="url(#heroWave)" fillOpacity="0.18" d="M0,64L60,85.3C120,107,240,149,360,165.3C480,181,600,171,720,165.3C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
          </g>
        </svg>
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
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent">10K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Members</div>
                  <Shield className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>₹50Cr+</div>
                  <div className="text-xs text-muted-foreground mt-1">Funds</div>
                  <TrendingUp className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/30 shadow-glass transition-all duration-500 hover:scale-110 hover:rotate-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>15+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years</div>
                  <Zap className="w-4 h-4 text-primary mx-auto mt-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative bg-gradient-glass backdrop-blur-glass rounded-3xl shadow-float p-8 border border-white/20 transition-all duration-500 hover:scale-[1.02] group">
              {/* Glowing border effect */}
              
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gradient-peacock rounded-full flex items-center justify-center shadow-glass hover:scale-110 transition-all duration-300 cursor-pointer">
                      <span className="text-white font-bold text-xl">SC</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl hover:text-primary transition-colors cursor-pointer">Smart Chit</div>
                      <div className="text-sm text-muted-foreground">₹10K Monthly</div>
                    </div>
                  </div>
                  <div className="text-right group cursor-pointer">
                    <div className="text-sm text-muted-foreground">Returns</div>
                    <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent group-hover:scale-110 transition-all duration-300">15%</div>
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
                        <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent group-hover:scale-110 transition-all duration-300">
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
      </div>
    </section>
  );
};

export default HeroSection;