import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      const onScroll = () => setIsFloating(window.scrollY > window.innerHeight * 0.6);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        setIsFloating(!entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`z-50 ${
        isFloating
          ? "fixed top-4 left-0 right-0 flex justify-center pointer-events-none"
          : "absolute top-0 left-0 right-0 pointer-events-none"
      }`}
    >
      <div
        className={`${
          isFloating ? "menubar-floating" : "container mx-auto px-4 py-4"
        } pointer-events-auto flex items-center justify-between transition-all duration-500`}
      >
        <div className="flex items-center space-x-2">
          <Logo className="h-8 w-8" aria-label="Senthur Chits logo" />
          <span className="text-xl font-extrabold tracking-tight text-foreground">Senthur Chits</span>
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
          <Button variant="default" size="sm">
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden ${isFloating ? "fixed top-16 left-0 right-0" : ""} bg-background border-t border-border pointer-events-auto`}>
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
              <Button variant="outline" size="sm">Sign In</Button>
              <Button variant="default" size="sm">Join Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;