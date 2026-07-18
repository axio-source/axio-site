import { FadeInUp } from '../animations/FadeInUp'

const caminhos = [
  {
    numero: '01',
    titulo: 'ASSINOU O CHATGPT PRO TIME',
    texto: 'Virou brinquedo de escrever e-mail. A fatura chega todo mês. O resultado não.',
  },
  {
    numero: '02',
    titulo: 'MANDOU ALGUÉM "ESTUDAR IA"',
    texto:
      'A pessoa viu 40 vídeos no YouTube, montou nada, e a operação continua exatamente igual.',
  },
  {
    numero: '03',
    titulo: 'COMPROU CURSO DE PROMPT',
    texto: 'O truque funcionou na demo do guru. Na segunda-feira, no seu negócio, quebrou.',
  },
]

export function CaminhosSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Os caminhos que você já tentou"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Você já tentou</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-16">
            OS TRÊS CAMINHOS QUE
            <br />
            NÃO LEVARAM A NADA
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caminhos.map((c, i) => (
            <FadeInUp key={c.numero} delay={i * 0.1}>
              <div className="h-full bg-[#0a0a0a] border border-white/[0.07] p-8 flex flex-col gap-4">
                <span className="font-display text-6xl text-gold/25 leading-none" aria-hidden="true">
                  {c.numero}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                  {c.titulo}
                </h3>
                <p className="font-body text-ash leading-relaxed">{c.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <div className="mt-16 border-l-[3px] border-gold pl-6 md:pl-8 max-w-4xl">
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed">
              Enquanto isso, algum concorrente seu está resolvendo em minutos o que a sua equipe
              leva dias pra fazer. Ele não é mais inteligente que você. Ele só parou de tratar IA
              como mágica.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
