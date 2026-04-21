import type { Product } from "./cart-store";

export const products: Product[] = [
  // Brasileirão
  { id: "bra-1", name: "Camisa Flamengo I 24/25", price: 149.90, image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop", category: "brasileirao" },
  { id: "bra-2", name: "Camisa Corinthians II 24/25", price: 139.90, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop", category: "brasileirao" },
  { id: "bra-3", name: "Camisa Palmeiras I 24/25", price: 149.90, image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=400&fit=crop", category: "brasileirao" },
  { id: "bra-4", name: "Camisa São Paulo III 24/25", price: 129.90, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", category: "brasileirao" },
  // Seleções
  { id: "sel-1", name: "Camisa Brasil I 24/25", price: 179.90, image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop", category: "selecoes" },
  { id: "sel-2", name: "Camisa Argentina I 24/25", price: 169.90, image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop", category: "selecoes" },
  { id: "sel-3", name: "Camisa Alemanha I 24/25", price: 159.90, image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=400&fit=crop", category: "selecoes" },
  { id: "sel-4", name: "Camisa França II 24/25", price: 169.90, image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop", category: "selecoes" },
  // Ligas Europeias
  { id: "eur-1", name: "Camisa Real Madrid I 24/25", price: 189.90, image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop", category: "europeias" },
  { id: "eur-2", name: "Camisa Barcelona II 24/25", price: 189.90, image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=400&fit=crop", category: "europeias" },
  { id: "eur-3", name: "Camisa PSG I 24/25", price: 179.90, image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=400&h=400&fit=crop", category: "europeias" },
  { id: "eur-4", name: "Camisa Milan III 24/25", price: 169.90, image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop", category: "europeias" },
  // Retrô
  { id: "ret-1", name: "Camisa Brasil 1970 Retrô", price: 199.90, image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=400&fit=crop", category: "retro" },
  { id: "ret-2", name: "Camisa Argentina 1986 Retrô", price: 199.90, image: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=400&h=400&fit=crop", category: "retro" },
  { id: "ret-3", name: "Camisa Itália 1982 Retrô", price: 189.90, image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=400&fit=crop", category: "retro" },
  { id: "ret-4", name: "Camisa Santos 1962 Retrô", price: 179.90, image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=400&fit=crop", category: "retro" },
];

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "brasileirao", label: "Brasileirão" },
  { id: "selecoes", label: "Seleções" },
  { id: "europeias", label: "Ligas Europeias" },
  { id: "retro", label: "Retrô" },
];
