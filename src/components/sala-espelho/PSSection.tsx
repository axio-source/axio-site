import { FadeInUp } from '../animations/FadeInUp'

// Bloco 15: P.S. Fecha a leitura, sem CTA próprio. Precisa carregar sozinho a
// razão (preço fundador, bloco 10) e a capacidade real, pra quem pulou direto
// pro fim. Marcador lateral no molde de FinalSection.tsx do precedente.
export function PSSection() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Considerações finais"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <FadeInUp>
          <div className="border-l-[3px] border-gold pl-6">
            <p className="font-body text-base md:text-lg text-white/85 leading-relaxed">
              <span className="font-semibold text-white">P.S.</span> O preço de hoje é preço
              fundador, não desconto. A Sala Espelho é candidata a virar SaaS, e as primeiras
              agências que entrarem viram os casos do produto, no preço de hoje. Quando o SaaS
              abrir, o preço de mercado sobe. Isso não é o único limite: montar o elenco de uma
              agência é trabalho de curadoria, feito à mão, agência por agência. Por isso
              calibramos só uma Sala Mestra por trimestre e três Salas Próprias por mês. Fechada a
              agenda do mês, a próxima conversa fica para o mês seguinte.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="border-l-[3px] border-gold pl-6">
            <p className="font-body text-base md:text-lg text-white/85 leading-relaxed">
              <span className="font-semibold text-white">P.P.S.</span> Se ainda não tem certeza,
              comece pela Visita. O que você pagar nela não se perde: vira crédito direto na Sala
              Própria, se decidir subir depois.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
