import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp } from "lucide-react";

const CalculatorSection = () => {
  const [monthlyAmount, setMonthlyAmount] = useState([5000]);
  const [duration, setDuration] = useState([20]);

  const totalInvestment = monthlyAmount[0] * duration[0];
  const expectedReturn = Math.floor(totalInvestment * 0.9); // 10% discount typically
  const savings = totalInvestment - expectedReturn;
  const monthlyReturn = Math.floor(expectedReturn / duration[0]);

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your{" "}
            <span className="bg-gradient-peacock bg-clip-text text-transparent">
              Returns
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use our interactive calculator to see how much you can save and earn with our chit fund plans
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-primary/20 shadow-peacock">
            <CardHeader className="bg-gradient-aurora bg-[length:240%_240%] animate-aurora text-white py-8">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <Calculator className="h-6 w-6" />
                <span>Chit Fund Calculator</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Input Controls */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-lg font-semibold flex items-center justify-between">
                      Monthly Amount
                      <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                        ₹{monthlyAmount[0].toLocaleString()}
                      </span>
                    </label>
                    <Slider
                      value={monthlyAmount}
                      onValueChange={setMonthlyAmount}
                      max={50000}
                      min={1000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>₹1,000</span>
                      <span>₹50,000</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-lg font-semibold flex items-center justify-between">
                      Duration (Months)
                      <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                        {duration[0]}
                      </span>
                    </label>
                    <Slider
                      value={duration}
                      onValueChange={setDuration}
                      max={36}
                      min={12}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>12 months</span>
                      <span>36 months</span>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-lg">How it works:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pay monthly amount for the selected duration</li>
                      <li>• Receive lump sum when your number is called</li>
                      <li>• Typical discount ranges from 10-15%</li>
                      <li>• Early birds get better discounts</li>
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <SenthurChitCycle />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Investment</span>
                        <span className="text-xl font-bold">
                          ₹{totalInvestment.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">You Can Receive</span>
                        <span className="text-2xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
                          ₹{expectedReturn.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Your Savings</span>
                        <span className="text-xl font-bold text-primary">
                          ₹{savings.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="bg-card rounded-lg p-4 border border-border">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Effective Monthly Return</span>
                        <span className="text-lg font-semibold">
                          ₹{monthlyReturn.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6">
                    <Button variant="peacock" size="lg" className="w-full">
                      Start This Plan
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Get Detailed Projection
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    * Returns are indicative and may vary based on market conditions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;