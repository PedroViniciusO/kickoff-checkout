import { Instagram, Facebook, Twitter, MessageCircle, ShieldCheck, Lock, Truck } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="LV Store" className="h-8 w-8 rounded-full object-cover" />
              <span className="font-extrabold text-lg">LV Store</span>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              As melhores camisas de futebol do Brasil e do mundo com qualidade premium e entrega rápida.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>contato@lvstore.com.br</li>
              <li>(11) 99999-9999</li>
              <li className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-whatsapp" />
                WhatsApp disponível
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">Segurança</h4>
            <div className="space-y-2 text-sm text-background/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Site 100% Seguro
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" /> Dados Protegidos
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" /> Entrega para todo Brasil
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm mb-3 uppercase tracking-wider">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/50">
          © 2025 LV Store. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
