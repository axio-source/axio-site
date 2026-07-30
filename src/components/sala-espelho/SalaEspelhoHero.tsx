import { FadeInUp } from '../animations/FadeInUp'

// Bloco 1: headline + subheadline. Sem CTA de propósito, este bloco só existe
// pra fazer o bloco 2 ser lido. Fundo reaproveita hero-grid / hero-glow de
// globals.css, já usados em MentoriaHero, sem gradiente em superfície.
export function SalaEspelhoHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 pt-28 pb-16"
      aria-label="Sala Espelho"
    >
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="absolute hero-glow" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <FadeInUp>
          <p className="font-body text-[11px] font-semibold tracking-[3.5px] text-gold uppercase mb-6">
            Sala Espelho
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="font-display uppercase text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-white mb-8 max-w-4xl">
            Sua agência descobre o que os clientes do seu cliente{' '}
            <br />
            vão pensar da campanha, antes de <span className="text-gold">a verba subir</span>.
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
            O painel reage no mesmo dia, antes de você gastar.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
