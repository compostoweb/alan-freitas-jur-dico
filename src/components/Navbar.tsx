import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-alan-freitas.png";

const menuItems = [
  { label: "Início", href: "#hero" },
  { label: "Por que escolher", href: "#why-choose" },
  { label: "Avaliações", href: "#testimonials" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // altura do navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img src={logo} alt="Alan Freitas Advogado" className="h-10 w-auto" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button asChild size="sm" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
                Agendar Consulta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
                    Agendar Consulta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
