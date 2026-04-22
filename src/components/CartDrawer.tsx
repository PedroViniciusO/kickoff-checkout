import { useRef, useCallback } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { sanitizeTextForTransport } from "@/lib/security";
import type { CartItem } from "@/lib/cart-store";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}

const WHATSAPP_NUMBER = "5511999999999";
const MAX_CART_ITEM_QTY = 99;
const CHECKOUT_COOLDOWN_MS = 300;

function buildWhatsAppUrl(items: CartItem[], total: number): string {
  const lines = items.map((item) => {
    const quantity = Math.max(1, Math.min(MAX_CART_ITEM_QTY, item.quantity));
    const name = sanitizeTextForTransport(item.name);
    const subtotal = (item.price * quantity).toFixed(2).replace(".", ",");

    return `${quantity}x ${name} - R$ ${subtotal}`;
  });

  const message = `Olá! Gostaria de finalizar a compra dos seguintes itens:\n\n${lines.join("\n")}\n\nTotal: R$ ${total.toFixed(2).replace(".", ",")}\n\nAguardo instruções para pagamento!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function CartDrawer({
  open,
  onClose,
  items,
  total,
  onUpdateQuantity,
  onRemove,
}: CartDrawerProps) {
  const isEmpty = items.length === 0;
  const lastCheckout = useRef(0);

  const handleCheckout = useCallback(() => {
    if (isEmpty) return;

    const now = Date.now();
    if (now - lastCheckout.current <= CHECKOUT_COOLDOWN_MS) return;
    lastCheckout.current = now;

    const url = buildWhatsAppUrl(items, total);
    window.open(url, "_blank", "noopener,noreferrer");
  }, [items, total, isEmpty]);

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-md p-0">
        <SheetHeader className="p-6 pb-0">
          <SheetTitle className="text-xl font-extrabold">Seu Carrinho</SheetTitle>
          <SheetDescription>
            {isEmpty ? "Nenhum item adicionado" : `${items.length} item(s) no carrinho`}
          </SheetDescription>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 bg-secondary/60 rounded-lg p-3"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">
                  {item.name}
                </p>
                <p className="text-sm font-bold text-primary mt-0.5">
                  R$ {item.price.toFixed(2).replace(".", ",")}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="h-7 w-7 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-colors"
                    aria-label="Diminuir quantidade"
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => {
                      if (item.quantity < MAX_CART_ITEM_QTY) {
                        onUpdateQuantity(item.id, item.quantity + 1);
                      }
                    }}
                    disabled={item.quantity >= MAX_CART_ITEM_QTY}
                    className="h-7 w-7 rounded-md bg-muted flex items-center justify-center hover:bg-border transition-colors disabled:opacity-50"
                    aria-label="Aumentar quantidade"
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="self-start p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                aria-label="Remover item"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-foreground">Total</span>
            <span className="text-xl font-extrabold text-primary">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
          </div>
          {!isEmpty && (
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full text-base py-6"
              onClick={handleCheckout}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Finalizar pelo WhatsApp
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
