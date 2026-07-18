import { FadeInUp } from '../animations/FadeInUp'
import { MentoriaCTA } from './MentoriaCTA'

const credenciais = [
  '8 anos BTG Pactual e Londres',
  '19 processos de investimento automatizados',
  'Certificações Anthropic',
]

export function MentoriaHero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-10 pt-28 pb-16"
      aria-label="Mentoria IA Implantada"
    >
      <div className="absolute inset-0 hero-grid" aria-hidden="true" />
      <div className="absolute hero-glow" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <FadeInUp>
          <p className="font-body text-[11px] font-semibold tracking-[3.5px] text-gold uppercase mb-6">
            Mentoria IA Implantada
          </p>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <p className="font-body text-xs md:text-sm text-ash tracking-[2px] uppercase mb-8 max-w-2xl">
            Para donos de empresa e profissionais liberais que já faturam e não têm tempo pra
            virar &quot;expert em IA&quot;
          </p>
        </FadeInUp>

        <FadeInUp delay={0.16}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-white mb-8">
            SUA EMPRESA RODANDO COM IA EM 4 ENCONTROS.
            <br />
            <span className="text-gold">OU EU TRABALHO DE GRAÇA ATÉ RODAR.</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.24}>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
            Não é curso. Não é aula gravada. Você senta comigo 4 vezes e sai com assistente
            próprio treinado no seu negócio, processo automatizado e a conta de IA menor do que
            entrou. Implantado, funcionando, seu.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.32}>
          <div className="flex flex-col items-center gap-4">
            <MentoriaCTA size="xl" aria-label="Quero minha vaga na mentoria">
              QUERO MINHA VAGA
            </MentoriaCTA>
            <p className="font-body text-sm text-ash">
              A conversa é comigo, não com vendedor. Se não for pra você, eu mesmo te falo.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <div className="mt-14 pt-6 border-t border-white/[0.07] flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {credenciais.map((c) => (
              <span
                key={c}
                className="font-body text-[11px] text-ash tracking-[2px] uppercase"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
