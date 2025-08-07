import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, MessageCircle, Sparkles, Shield, TrendingUp } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      emoji: "🏠",
      title: "Home Builder",
      amount: "₹5,000",
      duration: "20 months",
      totalAmount: "₹1,00,000",
      canReceive: "₹90,000+",
      features: [
        "Perfect for home down payment",
        "Flexible payment schedule",
        "Early withdrawal options",
        "24/7 customer support"
      ],
      popular: false
    },
    {
      emoji: "💰",
      title: "Wealth Builder",
      amount: "₹10,000",
      duration: "20 months",
      totalAmount: "₹2,00,000",
      canReceive: "₹1,80,000+",
      features: [
        "High returns guaranteed",
        "Premium member benefits",
        "Priority customer service",
        "Investment advisory",
        "Insurance coverage"
      ],
      popular: true
    },
    {
      emoji: "🚗",
      title: "Dream Achiever",
      amount: "₹15,000",
      duration: "24 months",
      totalAmount: "₹3,60,000",
      canReceive: "₹3,20,000+",
      features: [
        "For major purchases",
        "Extended payment period",
        "Bonus incentives",
        "Exclusive member events"
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-peacock rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-peacock-subtle rounded-full filter blur-3xl opacity-10 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center bg-gradient-glass backdrop-blur-glass rounded-full px-6 py-2 border border-white/20 mb-6 shadow-glass">
            <Sparkles className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium text-primary">Choose Your Investment Plan</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-peacock bg-clip-text text-transparent animate-glow-pulse">
              U-Chit Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Flexible chit fund plans designed for every financial goal. Start small, dream big.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-[1.02] group cursor-pointer animate-scale-in ${
                plan.popular 
                  ? 'bg-gradient-glass backdrop-blur-glass border-primary/50 shadow-glow hover:shadow-float' 
                  : 'bg-gradient-glass backdrop-blur-glass border-white/20 shadow-glass hover:shadow-glow hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-peacock rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm"></div>
              
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-peacock text-white text-center py-3 text-sm font-semibold rounded-t-xl shadow-glow">
                  <Star className="inline-block w-4 h-4 mr-2 animate-pulse" />
                  Most Popular Choice
                  <Sparkles className="inline-block w-4 h-4 ml-2 animate-pulse" />
                </div>
              )}

              <CardHeader className={`text-center relative z-10 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{plan.emoji}</div>
                <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{plan.title}</CardTitle>
                <div className="space-y-3">
                  <div className="text-4xl font-bold bg-gradient-peacock bg-clip-text text-transparent group-hover:animate-glow-pulse">
                    {plan.amount}
                  </div>
                  <div className="text-muted-foreground font-medium">per month</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="bg-gradient-glass backdrop-blur-glass rounded-xl p-5 space-y-4 border border-white/10 group-hover:border-primary/20 transition-colors">
                  <div className="flex justify-between items-center py-2 hover:bg-white/5 rounded-lg px-3 transition-colors">
                    <span className="text-sm font-medium text-muted-foreground">Duration</span>
                    <span className="font-bold">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 hover:bg-white/5 rounded-lg px-3 transition-colors">
                    <span className="text-sm font-medium text-muted-foreground">Total Investment</span>
                    <span className="font-bold">{plan.totalAmount}</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center bg-gradient-card-glow rounded-lg p-3">
                      <span className="font-semibold">You can receive</span>
                      <span className="text-xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                        {plan.canReceive}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors group/feature">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover/feature:animate-bounce" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "peacock" : "outline"} 
                  className="w-full group/btn hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                  Join via WhatsApp
                  {plan.popular && <TrendingUp className="ml-2 h-4 w-4 group-hover/btn:animate-float" />}
                </Button>
              </CardContent>

              {/* Floating decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-peacock rounded-full opacity-30 group-hover:animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full opacity-40 group-hover:animate-pulse"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up">
          <div className="bg-gradient-glass backdrop-blur-glass rounded-2xl p-8 border border-white/20 shadow-glass hover:shadow-glow transition-all duration-500 max-w-md mx-auto group">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-bounce" />
            <p className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
              Need a custom plan? We've got you covered.
            </p>
            <Button variant="outline" size="lg" className="group-hover:shadow-glow hover:scale-105 transition-all duration-300">
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact for Custom Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;