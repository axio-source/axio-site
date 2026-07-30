import { FadeInUp } from '../animations/FadeInUp'

// Bloco 11: garantia. Caixa única, sem concorrência visual, molde exato de
// GarantiaSection.tsx do precedente mentoria. O corpo é cópia literal da
// OFERTA-11 seção 6: não parafrasear, não resumir, não ajustar pontuação.
export function GarantiaSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Garantia"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <div className="border-2 border-gold bg-[#0a0a0a] p-10 md:p-16 text-center">
            <p className="font-body text-[11px] font-semibold tracking-[3.5px] text-gold uppercase mb-6">
              O risco é da Axio.
            </p>
            <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
              Garantia
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              Se na primeira peça o painel não apontar nenhuma objeção que sua equipe ainda não
              tinha visto, você não paga.
            </p>
            <p className="font-body text-base text-ash leading-relaxed">
              Vale nas três portas: Visita, Sala Própria e Sala Mestra.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
