import { FadeInUp } from '../animations/FadeInUp'

// Bloco 3: agitação da dor. Leitura emocional, sem CTA. O destaque final é o
// elemento dominante do bloco (maior peso visual), no molde da caixa de
// fechamento de CaminhosSection.tsx. Nenhum número de perda foi inventado.
export function AgitacaoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="A cena que você conhece"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInUp>
          <p className="section-label">A cena que você conhece</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-10">
            22h: o WhatsApp do cliente perguntando por que a campanha não vendeu.
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="flex flex-col gap-5 mb-12">
            <p className="font-body text-lg text-white/85 leading-relaxed">
              A campanha sobe. O criativo já passou por todo mundo que precisava aprovar. Ninguém
              vê problema.
            </p>
            <p className="font-body text-lg text-white/85 leading-relaxed">
              Duas semanas depois, o resultado não vem. Chega a reunião. A única resposta que você
              tem é &quot;vamos testar outro ângulo&quot;.
            </p>
            <p className="font-body text-lg text-white/85 leading-relaxed">
              No mês seguinte, o cliente cancela. Ninguém da sua equipe viu a objeção chegando.
              Porque ninguém ouviu o público antes de gastar a verba dele.
            </p>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="border-l-[3px] border-gold pl-6 md:pl-8">
            <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed">
              O medo real não é escrever uma copy ruim. É ficar sem resposta na reunião de
              resultado.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
