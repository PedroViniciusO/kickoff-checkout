import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

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
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-lg">
          Vista a paixão pelo seu time com qualidade premium
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/85 max-w-xl mx-auto">
          As melhores camisas do futebol mundial com entrega rápida e preço justo.
        </p>
        <Button
          variant="hero"
          size="lg"
          className="mt-8 px-10 py-6 text-lg"
          onClick={scrollToProducts}
        >
          Ver Lançamentos
        </Button>
      </div>
    </section>
  );
}
