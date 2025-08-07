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
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Financial{" "}
                <span className="bg-gradient-peacock bg-clip-text text-transparent animate-fade-in">
                  infrastructure
                </span>
                <br />
                to grow your{" "}
                <span className="relative">
                  revenue
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-peacock rounded-full animate-scale-in"></div>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join trusted chit funds with guaranteed returns. Save, invest, and grow your wealth with India's most reliable chit fund platform.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="peacock" 
                size="lg" 
                className="group"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Now via WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4" />
                Download App
                <Smartphone className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-xl p-4 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-scale-in">10,000+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Members</div>
                  <Shield className="w-5 h-5 text-primary mx-auto mt-2 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-xl p-4 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.2s' }}>₹50Cr+</div>
                  <div className="text-sm text-muted-foreground mt-1">Funds Managed</div>
                  <TrendingUp className="w-5 h-5 text-primary mx-auto mt-2 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-xl p-4 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-105">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-scale-in" style={{ animationDelay: '0.4s' }}>15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  <Zap className="w-5 h-5 text-primary mx-auto mt-2 group-hover:animate-bounce" />
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
                    <div className="w-12 h-12 bg-gradient-peacock rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                      <span className="text-white font-bold text-lg">SC</span>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Monthly Chit</div>
                      <div className="text-sm text-muted-foreground">₹10,000 plan</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Returns</div>
                    <div className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse">12-15%</div>
                  </div>
                </div>

                <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-4 border border-white/10 space-y-4">
                  <div className="flex justify-between items-center py-2 group hover:bg-white/5 rounded-lg px-3 transition-colors">
                    <span className="text-sm font-medium">Monthly Payment</span>
                    <span className="font-bold text-lg">₹10,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 group hover:bg-white/5 rounded-lg px-3 transition-colors">
                    <span className="text-sm font-medium">Duration</span>
                    <span className="font-bold text-lg">20 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2 group hover:bg-white/5 rounded-lg px-3 transition-colors">
                    <span className="text-sm font-medium">Total Investment</span>
                    <span className="font-bold text-lg">₹2,00,000</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center bg-gradient-card-glow rounded-xl p-4">
                      <span className="font-semibold text-lg">You can receive</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse">
                          ₹1,80,000+
                        </span>
                        <div className="text-xs text-muted-foreground">Potential Returns</div>
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