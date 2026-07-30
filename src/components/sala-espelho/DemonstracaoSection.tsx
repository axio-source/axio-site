import { FadeInUp } from '../animations/FadeInUp'
import { PainelDemonstrativo } from './PainelDemonstrativo'

// Bloco 6, demonstração interativa. Peça central da landing (o wireframe é
// explícito: se este componente sair medio, o resto da página não salva).
// Casca de texto (selo, eyebrow, headline, subtítulo) é copy aprovada de
// `interno/landing/01_copy/bloco-06-demonstracao-casca.md`, usada
// literalmente. O conteúdo do painel em si (personas, variações, score)
// vem do caso Bússola e mora em `PainelDemonstrativo.tsx` e seus filhos.
export function DemonstracaoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Demonstração interativa do painel"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">O painel em ação</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            ENTRE NA SALA E VEJA O MECANISMO RODANDO.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mb-12">
            Conheça a Agência Bússola: um caso construído do zero pra mostrar a sala rodando de ponta a ponta, com a
            mesma peça, as mesmas personas e o mesmo score que você vai ver na sua primeira rodada real.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.08}>
          <div className="border border-white/[0.07] border-l-[3px] border-l-ash bg-[#0a0a0a] p-6 md:p-8 mb-12 md:mb-16">
            <p className="font-body text-[11px] text-ash uppercase tracking-[2px] mb-1">
              Peça original, caso demonstrativo
            </p>
            <p className="font-body text-xs text-ash/80 mb-5">Agência Bússola (fictícia), página de vendas</p>

            <p className="font-body italic text-lg md:text-xl text-white/90 leading-snug mb-3">
              &ldquo;Escale seu negócio ao próximo nível com nosso método proprietário de growth&rdquo;
            </p>
            <p className="font-body text-sm md:text-base text-white/60 leading-relaxed mb-4">
              Somos uma agência data-driven full-funnel que entrega performance omnichannel com tráfego pago de alta
              conversão e otimização contínua de ROI.
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                'Gestão de mídia programática com inteligência de dados',
                'Funil de aquisição validado por metodologias ágeis',
                'Dashboards em tempo real com KPIs acionáveis',
              ].map((item) => (
                <li key={item} className="font-body text-sm text-white/50 leading-relaxed">
                  · {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInUp>

        {/* Sem FadeInUp aqui de propósito: ver nota em PainelDemonstrativo.tsx
            sobre por que um transform ancestral quebraria o selo sticky. */}
        <PainelDemonstrativo />
      </div>
    </section>
  )
}
