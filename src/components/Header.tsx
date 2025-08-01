import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/e6e76de3-b5f5-47f6-8dbf-176a71b9ee62.png" 
            alt="Senthur Chits Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-bold bg-gradient-peacock bg-clip-text text-transparent">
            Senthur Chits
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
            How it Works
          </a>
          <a href="#plans" className="text-muted-foreground hover:text-primary transition-colors">
            Plans
          </a>
          <a href="#calculator" className="text-muted-foreground hover:text-primary transition-colors">
            Calculator
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="peacock" size="sm">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#how-it-works" className="block text-muted-foreground hover:text-primary">
              How it Works
            </a>
            <a href="#plans" className="block text-muted-foreground hover:text-primary">
              Plans
            </a>
            <a href="#calculator" className="block text-muted-foreground hover:text-primary">
              Calculator
            </a>
            <a href="#about" className="block text-muted-foreground hover:text-primary">
              About
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button variant="peacock" size="sm">
                Join Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;