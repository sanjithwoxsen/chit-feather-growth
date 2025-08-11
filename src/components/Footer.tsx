import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/e6e76de3-b5f5-47f6-8dbf-176a71b9ee62.png" 
                alt="Senthur Chits Logo" 
                className="h-8 w-8 filter brightness-0 invert"
              />
              <span className="text-xl font-bold">Senthur Chits</span>
            </div>
            <div className="pt-2">
              <Logo className="h-10 w-10 logo-glow" aria-label="Senthur Chits Logo" />
            </div>
            <p className="text-background/80 max-w-xs">
              India's most trusted chit fund platform helping thousands achieve their financial goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-background/80 hover:text-background transition-colors">About Us</a>
              <a href="#plans" className="block text-background/80 hover:text-background transition-colors">Our Plans</a>
              <a href="#calculator" className="block text-background/80 hover:text-background transition-colors">Calculator</a>
              <a href="#how-it-works" className="block text-background/80 hover:text-background transition-colors">How it Works</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Help Center</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Terms & Conditions</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="block text-background/80 hover:text-background transition-colors">FAQs</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80">info@senthurchits.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-background/60 mt-1" />
                <span className="text-background/80">123 Main Street, Chennai, Tamil Nadu 600001</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">
              Join Senthur Chits—
              <span className="relative">
                the best way to grow your wealth.
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-peacock rounded-full animate-scale-in"></div>
              </span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-transparent border-background text-background hover:bg-background hover:text-foreground">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Now
              </Button>
              <Button size="lg" className="bg-gradient-peacock text-white hover:shadow-glow">
                Download App
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Senthur Chits. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-background/60">RBI Compliant</span>
              <span className="text-background/60">Government Registered</span>
              <span className="text-background/60">Secured Platform</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;