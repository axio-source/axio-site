import { FadeInUp } from '../animations/FadeInUp'

const herois = [
  {
    tag: 'Anti-churn',
    titulo: 'A carteira que você já tem',
    texto:
      'Mata o criativo perdedor antes de o dinheiro do cliente tocar nele. Se a sala rejeitar a peça, ela nunca vira campanha, e o criativo perdedor não chega a queimar a verba do cliente. É proteger o que já é seu antes que o próximo flop apareça.',
  },
  {
    tag: 'Auditoria de prospect',
    titulo: 'A carteira que você quer',
    texto:
      'Roda a copy atual de um prospect pela sala antes da reunião. Você chega com o painel na mão: o que os clientes dele pensam dos anúncios de hoje, e três jeitos melhores de dizer a mesma coisa. É o pé na porta que nenhuma outra agência tem.',
  },
]

// Bloco 8: os dois heróis. Peso visual idêntico entre os dois cards, mesma
// ordem em mobile e desktop (anti-churn primeiro, auditoria de prospect
// depois), mesma altura relativa. Sem CTA.
export function HeroisSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Dois problemas, uma sala"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Dois problemas, uma sala</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-16 max-w-4xl">
            A mesma sala resolve duas dores da agência: a carteira que você já tem e a carteira que
            você quer.
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {herois.map((h, i) => (
            <FadeInUp key={h.tag} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col gap-4 border border-white/[0.07] bg-black p-8 md:p-10">
                <span className="font-body text-xs font-semibold tracking-[2px] text-gold uppercase">
                  {h.tag}
                </span>
                <h3 className="font-display uppercase text-2xl md:text-3xl text-white leading-tight">
                  {h.titulo}
                </h3>
                <p className="font-body text-white/80 leading-relaxed">{h.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
