import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#0a0f0c]">
      {/* Gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(34,197,94,0.25) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(16,185,129,0.18) 0%, transparent 50%), linear-gradient(135deg, #04110a 0%, #0a1f15 50%, #04110a 100%)",
        }}
      />

      {/* Diagonal sport stripes */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ffffff 0 2px, transparent 2px 26px)",
        }}
      />

      {/* Geometric grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Accent glow shapes */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold tracking-[0.25em] uppercase">
          Coleção Premium 25/26
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] uppercase">
          Vista a{" "}
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
            paixão
          </span>{" "}
          pelo seu time com qualidade premium
        </h1>
        <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto">
          As melhores camisas do futebol mundial com entrega rápida e preço justo.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button
            variant="hero"
            size="lg"
            className="px-10 py-6 text-base uppercase tracking-wider shadow-[0_10px_40px_-10px_rgba(34,197,94,0.7)]"
            onClick={scrollToProducts}
          >
            Ver Camisas
          </Button>
        </div>

        {/* Trust row */}
        <div className="mt-14 flex items-center justify-center gap-8 sm:gap-12 text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-widest">
          <span>Entrega Rápida</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Qualidade Premium</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>Preço Justo</span>
        </div>
      </div>

      {/* Bottom fade to page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
