import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, MessageCircle } from "lucide-react";

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
    <section id="plans" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your{" "}
            <span className="bg-gradient-peacock bg-clip-text text-transparent">
              U-Chit Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible chit fund plans designed for every financial goal. Start small, dream big.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-peacock ${
                plan.popular 
                  ? 'border-primary shadow-glow bg-gradient-to-b from-background to-primary/5' 
                  : 'hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-peacock text-white text-center py-2 text-sm font-medium">
                  <Star className="inline-block w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="text-4xl mb-4">{plan.emoji}</div>
                <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                    {plan.amount}
                  </div>
                  <div className="text-muted-foreground">per month</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="bg-muted rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="font-semibold">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Amount</span>
                    <span className="font-semibold">{plan.totalAmount}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">You can receive</span>
                      <span className="text-lg font-bold text-primary">
                        {plan.canReceive}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.popular ? "peacock" : "outline"} 
                  className="w-full group"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Join via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom plan? We've got you covered.
          </p>
          <Button variant="outline" size="lg">
            Contact for Custom Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;