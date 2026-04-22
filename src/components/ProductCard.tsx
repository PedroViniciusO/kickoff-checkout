import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDebounceClick } from "@/hooks/use-debounce-click";
import type { Product } from "@/lib/cart-store";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const handleAdd = useDebounceClick(() => onAdd(product), 250);

  return (
    <div className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-semibold text-sm text-card-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <div className="flex items-end justify-between gap-2">
          <div>
            <span className="text-xs text-muted-foreground line-through">
              R$ {(product.price * 1.3).toFixed(2).replace(".", ",")}
            </span>
            <p className="text-lg font-extrabold text-primary">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>
          </div>
          <Button
            variant="default"
            size="sm"
            className="shrink-0"
            onClick={handleAdd}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
