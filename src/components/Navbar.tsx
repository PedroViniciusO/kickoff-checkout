import { useState } from "react";
import { ShoppingCart, Search, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/lib/cart-store";

interface NavbarProps {
  onCartOpen: () => void;
  cartCount: number;
}

export function Navbar({ onCartOpen, cartCount }: NavbarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <Shirt className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-extrabold tracking-tight text-foreground hidden sm:inline">
            FutStore
          </span>
        </a>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar camisas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary text-foreground placeholder:text-muted-foreground text-sm border-none outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
            />
          </div>
        </div>

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
    </header>
  );
}
