import { FadeInUp } from '../animations/FadeInUp'

const ePraVoce = [
  'Você administra verba de terceiros no Meta ou no Google, não a sua própria.',
  'Sua carteira tem de 8 a 40 contas, cada uma pagando fee todo mês.',
  'Você ou o head de criação ainda revisa a peça pessoalmente antes de ela subir.',
  'Cada cliente da carteira é uma conta recorrente, não uma venda única.',
]

const naoEPraVoce = [
  'Você vende para o seu próprio negócio, sem carteira de clientes.',
  'Você é social media e cuida só do orgânico, sem verba paga na mão.',
  'Você é freelancer e não roda verba de terceiros.',
]

// Bloco 2: callout do avatar. Auto identificação, sem CTA. Lista "é pra você"
// vem sempre primeiro (mobile e desktop) e carrega mais peso que a negativa,
// no molde de ParaQuemSection.tsx do precedente mentoria.
export function AvatarSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Para quem é a Sala Espelho"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Antes de continuar</p>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-16">
            Isto é para quem gere verba dos outros.
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInUp delay={0.1}>
            <div className="h-full border border-gold/40 bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="font-display uppercase text-3xl text-gold mb-8">É pra você se:</h3>
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
              <h3 className="font-display uppercase text-3xl text-ash mb-8">Não é pra você se:</h3>
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
