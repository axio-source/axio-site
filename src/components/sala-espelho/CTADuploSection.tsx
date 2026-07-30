import { FadeInUp } from '../animations/FadeInUp'
import { SalaEspelhoCTA, type Porta } from './SalaEspelhoCTA'

interface BotaoCTA {
  porta: Porta
  label: string
}

// Ordem invertida de propósito em relação ao bloco 9 (Sala Mestra, Sala
// Própria, Visita): o bloco 9 ancora, este bloco fecha. Não é inconsistência.
const botoes: BotaoCTA[] = [
  { porta: 'Visita', label: 'Comprar a Visita' },
  { porta: 'Sala Própria', label: 'Agendar a Sala Própria' },
  { porta: 'Sala Mestra', label: 'Agendar a Sala Mestra' },
]

// Bloco 14: CTA duplo. Único bloco da página em que o CTA é, de propósito,
// o elemento visualmente mais forte: os três botões saem no gold sólido.
export function CTADuploSection() {
  return (
    <section
      className="py-24 md:py-36 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Escolha sua porta de entrada"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeInUp>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-14 max-w-3xl">
            Você já viu como a sala funciona. Falta só escolher por onde entrar.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 mb-10 w-full">
            {botoes.map((b) => (
              <SalaEspelhoCTA
                key={b.porta}
                porta={b.porta}
                variant="gold"
                size="lg"
                className="w-full sm:w-auto"
                aria-label={b.label}
              >
                {b.label}
              </SalaEspelhoCTA>
            ))}
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="font-body text-sm text-ash max-w-xl">
            Quem responde é a Axio, direto no WhatsApp. Sem checkout, sem formulário, sem vendedor
            de plantão. Você fala com quem vai calibrar a sua sala.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
