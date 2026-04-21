import { Button } from "@/components/ui/button";
import { categories } from "@/lib/products";

interface CategoryFilterProps {
  active: string;
  onSelect: (id: string) => void;
}

export function CategoryFilter({ active, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <Button
          key={cat.id}
          variant={active === cat.id ? "categoryActive" : "category"}
          size="sm"
          className="rounded-full px-5"
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
}
