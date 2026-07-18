import { FadeInUp } from '../animations/FadeInUp'

const ePraVoce = [
  'Você é dono de PME ou profissional liberal com operação rodando',
  'Quer IA trabalhando no negócio sem precisar virar técnico',
  'Tem 1 hora por semana durante 4 semanas',
  'Prefere fundamento que fica a truque que quebra',
]

const naoEPraVoce = [
  'Você procura renda extra com IA',
  'Quer que a IA resolva tudo sem você aparecer nos encontros',
  'Quer aprender a programar (existe caminho pra isso, e não é esse)',
  'Ainda acredita em prompt mágico',
]

export function ParaQuemSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Para quem é a mentoria"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Antes de continuar</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-16">
            ISSO NÃO É PRA
            <br />
            TODO MUNDO
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInUp delay={0.1}>
            <div className="h-full border border-gold/40 bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="font-display text-3xl text-gold mb-8">É PRA VOCÊ SE</h3>
              <ul className="flex flex-col gap-5">
                {ePraVoce.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-2xl text-gold leading-none" aria-hidden="true">
                      +
                    </span>
                    <span className="font-body text-white/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="h-full border border-white/[0.07] p-8 md:p-10">
              <h3 className="font-display text-3xl text-ash mb-8">NÃO É PRA VOCÊ SE</h3>
              <ul className="flex flex-col gap-5">
                {naoEPraVoce.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-2xl text-ash leading-none" aria-hidden="true">
                      ×
                    </span>
                    <span className="font-body text-ash leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
