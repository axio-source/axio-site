import { FadeInUp } from '../animations/FadeInUp'

// Bloco 4: inimigo nomeado. Sem grid, sem cards, leitura direta. O inimigo é
// o comportamento (gastar pra descobrir), nunca uma marca ou outra agência.
export function InimigoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="O verdadeiro culpado"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <p className="section-label">O verdadeiro culpado</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-10">
            Não é falta de sorte. É <span className="text-gold">gastar para descobrir</span>.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="flex flex-col gap-5">
            <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed">
              O mercado inteiro roda do mesmo jeito. Escreve, publica, gasta, descobre. A ordem
              está errada: você gasta a verba do cliente pra só depois saber se a peça funcionava.
            </p>
            <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed">
              Essa conta de aprendizado sai do bolso do cliente, com o dinheiro dele. Quando o
              resultado não vem, a fatura de reputação chega no nome de vocês.
            </p>
            <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed">
              Existe uma ordem melhor: ouvir antes de gastar.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
