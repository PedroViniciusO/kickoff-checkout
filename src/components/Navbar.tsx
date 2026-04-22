import { ShoppingCart, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onCartOpen: () => void;
  cartCount: number;
}

export function Navbar({ onCartOpen, cartCount }: NavbarProps) {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="LV Store" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl font-extrabold tracking-tight text-foreground hidden sm:inline">
            LV Store
          </span>
        </a>

        <div className="flex items-center gap-1">
          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Alternar tema">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative" onClick={onCartOpen}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
