import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.png";

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBanner}
        alt="Torcida vibrando no estádio"
        width={1920}
        height={896}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-white/30 bg-white/10 backdrop-blur-sm rounded-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase">
            Premium Collection 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="relative">
          <span className="font-sport block text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.85] tracking-tighter italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            Vista a paixão
          </span>
          <span className="font-sport block text-5xl sm:text-7xl md:text-8xl text-white uppercase leading-[0.85] tracking-tighter italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            pelo seu time
          </span>
          <span className="font-sport relative inline-block mt-4 px-4 py-2 bg-primary text-primary-foreground text-2xl sm:text-3xl md:text-5xl uppercase leading-none tracking-tight skew-x-[-12deg] shadow-lg">
            <span className="inline-block skew-x-[12deg]">com qualidade premium</span>
          </span>
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed tracking-wide drop-shadow-md">
          As melhores camisas do futebol mundial com{" "}
          <span className="text-white font-semibold">entrega rápida</span> e preço justo.
        </p>

        <Button
          variant="hero"
          size="lg"
          className="mt-8 px-10 py-6 text-lg font-sport tracking-widest uppercase"
          onClick={scrollToProducts}
        >
          Ver Camisas
        </Button>
      </div>
    </section>
  );
}
