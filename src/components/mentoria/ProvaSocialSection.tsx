import { FadeInUp } from '../animations/FadeInUp'

// Depoimentos verbatim de oferta-paga/01_oferta/prova-social.md (fonte única).
// Alessandro: liberado com nome. Líder técnico: sem nome de empresa (restrição do depoente).
const depoimentos = [
  {
    texto:
      'Nossa conversa me abriu vários insights. [...] Vi que eu poderia desativar alguns servidores MCP que estavam só consumindo token sem usar. Além de ter quebrado mais os subagentes, que já deu uma queda fenomenal no uso de tokens.',
    autor: 'Alessandro Sales',
    cargo: 'Desenvolvedor',
  },
  {
    texto:
      'O método apresentado pelo Rodrigo serviu como base para estruturarmos uma abordagem mais sólida de desenvolvimento assistido por IA. [...] Observamos uma melhora relevante na qualidade das entregas, maior consistência entre as implementações, redução de retrabalho e um uso mais eficiente de tokens.',
    autor: 'Líder técnico',
    cargo: 'Empresa de tecnologia (nome sob reserva)',
  },
]

const casos = [
  {
    area: 'INDÚSTRIA PESADA',
    texto:
      'Orçamento de maquinário que levava dias passou a sair em minutos, com um sistema construído sob o método.',
  },
  {
    area: 'CARREIRA',
    texto:
      'Um time de desenvolvimento reestruturou do zero a forma de usar IA. Quem liderou a mudança saiu de tech lead a arquiteto de software.',
  },
  {
    area: 'CUSTO',
    texto:
      'Um empreendedor largou o plano mais caro de IA, ficou com o mais barato e o resultado melhorou.',
  },
]

export function ProvaSocialSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Prova social"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Prova</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            APROVADO POR QUEM
            <br />
            MAIS DESCONFIA
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mb-14">
            Você não vai ver depoimento de empresário emocionado aqui. Quem testou esse método
            primeiro foi o público mais difícil que existe: desenvolvedores. Gente técnica,
            cética, alérgica a guru. Se passou no teste deles, é porque é fundamento, não truque.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {depoimentos.map((d, i) => (
            <FadeInUp key={d.autor} delay={i * 0.1}>
              <figure className="h-full bg-[#0a0a0a] border border-white/[0.07] p-8 flex flex-col justify-between gap-6">
                <blockquote>
                  <span className="font-display text-6xl text-gold/30 leading-none block mb-4" aria-hidden="true">
                    &quot;
                  </span>
                  <p className="font-body text-white/85 leading-relaxed">{d.texto}</p>
                </blockquote>
                <figcaption>
                  <p className="font-display text-xl text-white tracking-wide">{d.autor}</p>
                  <p className="font-body text-sm text-ash">{d.cargo}</p>
                </figcaption>
              </figure>
            </FadeInUp>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {casos.map((c, i) => (
            <FadeInUp key={c.area} delay={i * 0.08}>
              <div className="h-full border border-white/[0.07] p-8">
                <p className="font-body text-[11px] font-semibold tracking-[3px] text-gold uppercase mb-4">
                  {c.area}
                </p>
                <p className="font-body text-ash leading-relaxed">{c.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-3xl">
            Os primeiros donos de empresa formados pelo IA Implantada entram nesta seção. A
            próxima história pode ser a da sua empresa.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
