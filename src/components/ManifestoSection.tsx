import { FadeInUp } from './animations/FadeInUp'

export function ManifestoSection() {
  return (
    <section className="py-32 px-6 md:px-10 bg-black" aria-label="Manifesto">
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <div className="w-12 h-px bg-gold mb-12" aria-hidden="true" />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-10">
            ESFORÇO NÃO{' '}
            <span className="text-gold">É O PROBLEMA.</span>
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-body text-lg md:text-xl text-ash leading-relaxed max-w-2xl">
            PMEs que chegam até aqui não têm problema de dedicação. Têm problema de foco:
            estão trabalhando duro no lugar errado.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.32}>
          <p className="font-body text-lg md:text-xl text-ash leading-relaxed max-w-2xl mt-6">
            O resultado é sempre o mesmo. Receita travada, equipe que não executa sem
            supervisão, e um dono que virou o maior gargalo do próprio negócio.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.44}>
          <p className="font-body text-lg md:text-xl text-ash leading-relaxed max-w-2xl mt-6">
            A Axio existe para quebrar esse ciclo. Não com conselho. Com implementação.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
