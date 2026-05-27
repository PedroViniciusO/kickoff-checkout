import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[88vh] w-full flex items-center overflow-hidden bg-[#05080a]">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 75% 30%, rgba(34,197,94,0.28) 0%, transparent 60%), radial-gradient(ellipse 70% 70% at 15% 90%, rgba(16,185,129,0.18) 0%, transparent 55%), linear-gradient(160deg, #04110a 0%, #06120d 40%, #03090a 100%)",
        }}
      />

      {/* Stadium spotlight beams */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 200deg at 80% 0%, transparent 0deg, rgba(34,197,94,0.10) 18deg, transparent 36deg, transparent 360deg)",
        }}
      />

      {/* Diagonal speed stripes */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 60px)",
        }}
      />

      {/* Field grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 70% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* Giant outline number — sport editorial */}
      <div
        aria-hidden
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-black text-transparent hidden md:block"
        style={{
          fontSize: "clamp(20rem, 38vw, 44rem)",
          WebkitTextStroke: "2px rgba(34,197,94,0.18)",
        }}
      >
        10
      </div>

      {/* Accent glows */}
      <div className="absolute -top-40 -left-32 w-[460px] h-[460px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-48 right-1/4 w-[520px] h-[520px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <div className="max-w-3xl">
          {/* Tag line with accent bar */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              Football Collection
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] uppercase">
            Vista a{" "}
            <span className="italic bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
              paixão
            </span>
            <br />
            pelo seu time
            <br />
            <span className="text-white/60">com qualidade</span>{" "}
            <span className="text-white">premium</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-white/60 max-w-xl leading-relaxed">
            Camisas oficiais e versões dos maiores clubes do mundo. Entrega rápida,
            qualidade garantida e o melhor preço do mercado.
          </p>

          <div className="mt-10 flex items-center gap-5 flex-wrap">
            <Button
              variant="hero"
              size="lg"
              className="group px-9 py-6 text-base uppercase tracking-wider rounded-full shadow-[0_10px_40px_-10px_rgba(34,197,94,0.7)]"
              onClick={scrollToProducts}
            >
              Comprar agora
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <button
              onClick={scrollToProducts}
              className="text-white/80 hover:text-white text-sm uppercase tracking-[0.2em] font-bold border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              Ver coleção
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">500+</div>
              <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-1">
                Modelos
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">48h</div>
              <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-1">
                Entrega
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mt-1">
                Qualidade
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
