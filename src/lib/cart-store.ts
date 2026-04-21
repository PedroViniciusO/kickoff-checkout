import { useState, useCallback } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

let listeners: Array<() => void> = [];
let cartItems: CartItem[] = [];

function emitChange() {
  for (const listener of listeners) listener();
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return cartItems;
  },
  addItem(product: Product) {
    const existing = cartItems.find((i) => i.id === product.id);
    if (existing) {
      cartItems = cartItems.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      cartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    emitChange();
  },
  removeItem(id: string) {
    cartItems = cartItems.filter((i) => i.id !== id);
    emitChange();
  },
  updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      cartItems = cartItems.filter((i) => i.id !== id);
    } else {
      cartItems = cartItems.map((i) =>
        i.id === id ? { ...i, quantity } : i
      );
    }
    emitChange();
  },
  getTotal() {
    return cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
  getCount() {
    return cartItems.reduce((sum, i) => sum + i.quantity, 0);
  },
};

export function useCart() {
  const [, setTick] = useState(0);
  const forceUpdate = useCallback(() => setTick((t) => t + 1), []);

  // We use useState + subscribe pattern for SSR safety
  if (typeof window !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useState(() => {
      const unsub = cartStore.subscribe(forceUpdate);
      return unsub;
    });
  }

  return {
    items: cartStore.getSnapshot(),
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    total: cartStore.getTotal(),
    count: cartStore.getCount(),
  };
}
