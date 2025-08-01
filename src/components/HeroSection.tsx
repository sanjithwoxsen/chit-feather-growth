import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Smartphone, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Financial{" "}
                <br />
                infrastructure{" "}
                <br />
                to grow your{" "}
                <span className="text-white">revenue</span>
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

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Members</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">₹50Cr+</div>
                <div className="text-sm text-muted-foreground">Funds Managed</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-peacock rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">SC</span>
                    </div>
                    <div>
                      <div className="font-semibold">Monthly Chit</div>
                      <div className="text-sm text-muted-foreground">₹10,000 plan</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Returns</div>
                    <div className="text-lg font-bold text-primary">12-15%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Monthly Payment</span>
                    <span className="font-semibold">₹10,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Duration</span>
                    <span className="font-semibold">20 months</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm">Total Amount</span>
                    <span className="font-semibold">₹2,00,000</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">You can receive</span>
                      <span className="text-xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                        ₹1,80,000+
                      </span>
                    </div>
                  </div>
                </div>

                <Button variant="peacock" className="w-full">
                  Start This Plan
                </Button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-peacock rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;