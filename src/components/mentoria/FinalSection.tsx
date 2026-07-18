import { FadeInUp } from '../animations/FadeInUp'
import { MentoriaCTA } from './MentoriaCTA'

const recap = [
  '4 encontros de 1 hora, ao vivo, comigo',
  'Assistente próprio, processo automatizado e conta de IA auditada',
  'Garantia de Implementação: continuo de graça até rodar',
  '12 vagas simultâneas. A conversa é comigo, não com vendedor',
]

export function FinalSection() {
  return (
    <section
      className="py-24 md:py-36 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Chamada final"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeInUp>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-white mb-4">
            VOCÊ ROLOU ATÉ AQUI.
          </h2>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-gold leading-tight mb-12">
            ENTÃO RECAPITULANDO.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <ul className="flex flex-col gap-4 mb-12 text-left">
            {recap.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="mt-2 block w-2.5 h-2.5 bg-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-lg md:text-xl text-white/90 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <MentoriaCTA size="xl" aria-label="Quero minha vaga na mentoria">
            QUERO MINHA VAGA
          </MentoriaCTA>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="mt-20 flex flex-col gap-8 text-left max-w-2xl">
            <div className="border-l-[3px] border-gold pl-6">
              <p className="font-body text-base text-ash leading-relaxed">
                <span className="font-semibold text-white">P.S.</span> Pra quem pula direto pro
                fim: eu implanto IA no seu negócio em 4 encontros, com garantia de implementação.
                O botão acima abre uma conversa comigo no WhatsApp, não um robô de vendas.
              </p>
            </div>
            <div className="border-l-[3px] border-gold pl-6">
              <p className="font-body text-base text-ash leading-relaxed">
                <span className="font-semibold text-white">P.P.S.</span> Se você fechou esta
                página três vezes esta semana, o adiamento já custou mais que a mentoria. Você só
                ainda não viu essa fatura.
              </p>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
