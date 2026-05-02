import { FadeInUp } from "./animations/FadeInUp";
import { Button } from "./ui/Button";

const WHATSAPP_NUMBER = "12981764882";
const WA_HREF = `https://wa.me/55${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Axio%20e%20gostaria%20de%20conversar.`;

export function CTAFinalSection() {
  return (
    <section
      className="py-40 px-6 md:px-10 bg-surface border-t border-black"
      aria-label="Chamada para ação"
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <div
            className="w-px h-16 bg-gold mx-auto mb-12"
            aria-hidden="true"
          />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-white mb-4">
            SE VOCÊ CHEGOU ATÉ AQUI,
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-gold mb-10">
            SUA EMPRESA TEM MAIS A FATURAR.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <p className="font-body text-lg md:text-xl text-ash mb-14 leading-relaxed max-w-xl mx-auto">
            Uma conversa com a Axio muda o que você está olhando.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <Button
            variant="gold"
            size="lg"
            href={WA_HREF}
            external
          >
            FALAR COM A AXIO
          </Button>
        </FadeInUp>
      </div>
    </section>
  );
}
