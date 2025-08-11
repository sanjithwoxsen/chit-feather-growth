import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detach and transform menu bar when user starts scrolling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-glass backdrop-blur-glass border-b border-white/20 shadow-glass">
      {/* Desktop menu bar: attached until scroll, then floating curved pill */}
      <div
        className={`${isScrolled
          ? "fixed top-4 left-1/2 -translate-x-1/2 w-[min(92%,1000px)] rounded-full bg-gradient-glass backdrop-blur-glass border border-white/40 shadow-glass px-6 py-3"
          : "container mx-auto px-4 py-4"
        } transition-all duration-500 ease-out hidden md:flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" aria-label="Senthur Chits logo" />
          <span className="text-xl font-extrabold tracking-tight text-[hsl(var(--ink))]">
            <span className="bg-gradient-peacock bg-clip-text text-transparent">Senthur</span> Chits
          </span>
          <span className="h-6 w-px bg-border/70 mx-3" aria-hidden="true"></span>
          <nav className="flex items-center gap-6">
            <a href="#how-it-works" className={`${isScrolled ? "text-[hsl(var(--ink))]" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              How it Works
            </a>
            <a href="#plans" className={`${isScrolled ? "text-[hsl(var(--ink))]" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              Plans
            </a>
            <a href="#calculator" className={`${isScrolled ? "text-[hsl(var(--ink))]" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              Calculator
            </a>
            <a href="#about" className={`${isScrolled ? "text-[hsl(var(--ink))]" : "text-muted-foreground"} hover:text-primary transition-colors`}>
              About
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className={`${isScrolled ? "text-[hsl(var(--ink))] border-border" : ""}`}>
            Sign In
          </Button>
          <Button variant="aurora" size="sm">
            Join Now
          </Button>
        </div>
      </div>

      {/* Mobile header (attached). The floating pill behavior is desktop-only. */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-2">
          <Logo className="h-8 w-8" aria-label="Senthur Chits logo" />
          <span className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-peacock bg-clip-text text-transparent">Senthur</span> Chits
          </span>
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
              <Button variant="aurora" size="sm">
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