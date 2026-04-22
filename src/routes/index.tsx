import { createFileRoute } from "@tanstack/react-router";
import { useState, useSyncExternalStore } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { Footer } from "@/components/Footer";
import { cartStore } from "@/lib/cart-store";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "LV Store — Camisas de Futebol Premium" },
      { name: "description", content: "As melhores camisas de futebol do Brasil e do mundo. Brasileirão, Seleções, Ligas Europeias e Retrô. Compre pelo WhatsApp!" },
      { property: "og:title", content: "LV Store — Camisas de Futebol Premium" },
      { property: "og:description", content: "As melhores camisas de futebol do Brasil e do mundo. Compre pelo WhatsApp!" },
    ],
  }),
});

function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("todos");

  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getSnapshot);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const filtered =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={count} />

      <main>
        <HeroSection />

        {/* Products */}
        <section id="produtos" className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-foreground mb-2">
            Nossas Camisas
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Escolha a camisa do seu time favorito
          </p>

          <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={cartStore.addItem}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        onUpdateQuantity={cartStore.updateQuantity}
        onRemove={cartStore.removeItem}
      />
    </div>
  );
}
