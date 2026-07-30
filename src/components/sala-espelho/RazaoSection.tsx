import { FadeInUp } from '../animations/FadeInUp'

// Bloco 10: razão do porquê. Bloco de argumento único, sem grid nem card.
// Tom sem pedido de desculpas: o argumento é a lógica do preço, não a
// ausência de prova real hoje (isso é assunto do bloco 6, com selo de ficção).
export function RazaoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Por que agora"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <p className="section-label">Por que agora</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-10">
            O preço de hoje é o preço de quem chega primeiro.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed">
            A Sala Espelho é candidata a virar SaaS. Hoje a Axio ainda calibra cada elenco à mão,
            agência por agência. As primeiras agências entram no preço fundador e, em troca, viram
            os casos reais que provam que a sala funciona fora do papel. Quando o SaaS abrir, o
            preço de mercado sobe para quem chegar depois. Não é desconto. É ordem de chegada.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
