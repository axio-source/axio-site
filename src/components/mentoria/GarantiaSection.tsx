import { FadeInUp } from '../animations/FadeInUp'

export function GarantiaSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Garantia de implementação"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <div className="border-2 border-gold bg-[#0a0a0a] p-10 md:p-16 text-center">
            <p className="font-body text-[11px] font-semibold tracking-[3.5px] text-gold uppercase mb-6">
              O risco é meu
            </p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
              GARANTIA DE
              <br />
              IMPLEMENTAÇÃO
            </h2>
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              Se ao final dos 4 encontros a IA não estiver rodando com método no seu negócio, eu
              continuo trabalhando com você, sem pagar um real a mais, até estar. Simples assim.
            </p>
            <p className="font-body text-base text-ash leading-relaxed">
              Sem letra miúda. A única condição é você aparecer nos 4 encontros.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
