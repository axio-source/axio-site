import { FadeInUp } from '../animations/FadeInUp'

const exclusoes = [
  {
    lead: 'Não substitui o teste real de mídia.',
    texto: 'Só um teste de verdade estabelece conversão. O que a sala faz é decidir o que merece chegar até esse teste.',
  },
  {
    lead: 'Sem o histórico da sua conta, a sala não promete ganho nenhum.',
    texto: 'A primeira rodada é a linha de base. Tudo depois se compara a partir dela.',
  },
  {
    lead: 'O relatório não autoriza sua agência a prometer conversão pro cliente final dela.',
    texto: 'Se a promessa passar do que a sala mostrou, a conta é sua, não nossa.',
  },
  {
    lead: 'A sala não escreve a estratégia da sua conta nem substitui o julgamento do seu time.',
    texto: 'Ela devolve objeção, variação e recomendação. Quem decide continua sendo você.',
  },
]

// Bloco 13: o que a Sala Espelho não faz. Ao contrário do bloco 12, SEM
// accordion: lista sempre visível, é o bloco que sustenta a credibilidade do
// resto da página, ninguém pode precisar clicar pra ler.
export function NaoFazSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="O que a Sala Espelho não faz"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <p className="section-label">O que isto não é</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-14">
            Todo produto tem limite. Aqui está o da Sala Espelho.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <ul className="flex flex-col gap-6 mb-14">
            {exclusoes.map((e) => (
              <li key={e.lead} className="flex gap-4 items-start">
                <span className="mt-2 block w-2.5 h-2.5 bg-gold flex-shrink-0" aria-hidden="true" />
                <span className="font-body text-lg text-white/90 leading-relaxed">
                  <span className="font-semibold text-white">{e.lead}</span> {e.texto}
                </span>
              </li>
            ))}
          </ul>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="border-l-[3px] border-gold pl-6 md:pl-8">
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed">
              Fornecedor de tecnologia promete o que for preciso pra fechar a venda. Esta lista é o
              oposto disso: o limite escrito antes de você pagar, não descoberto depois.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
