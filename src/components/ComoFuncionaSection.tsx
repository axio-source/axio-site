import { FadeInUp } from './animations/FadeInUp'

const eixos = [
  {
    numero: '01',
    titulo: 'RECEITA',
    corpo: 'Mapeamos onde a receita está escapando. Proposta mal precificada, etapa que trava no processo comercial, segmento que você não está atendendo direito. Depois entramos e reestruturamos o que está bloqueando o crescimento.',
    bullets: [
      'Análise de precificação e ticket médio',
      'Revisão das etapas do processo comercial',
      'Identificação de segmentos não explorados',
      'Reestruturação da oferta e do pitch de vendas',
    ],
    resultado: 'Crescimento de receita sem aumentar o custo de aquisição.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 mb-6" aria-hidden="true">
        <path d="M8 36 L24 12 L40 36" stroke="#FFC000" strokeWidth="2" />
        <path d="M32 20 L42 10" stroke="#FFC000" strokeWidth="2" />
        <path d="M36 10 L42 10 L42 16" stroke="#FFC000" strokeWidth="2" />
      </svg>
    ),
  },
  {
    numero: '02',
    titulo: 'TEMPO',
    corpo: 'Identificamos onde o tempo da sua equipe está sendo gasto em tarefas que não precisam de um ser humano. Automatizamos o que é repetitivo. As horas que sobram voltam para o que importa de verdade.',
    bullets: [
      'Mapeamento de tarefas repetitivas por setor',
      'Automação de processos operacionais',
      'Redução de retrabalho e erros manuais',
      'Integração entre ferramentas já usadas pelo time',
    ],
    resultado: 'Mais horas disponíveis por semana sem contratar ninguém novo.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 mb-6" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="#FFC000" strokeWidth="2" />
        <path d="M24 14 L24 24 L32 28" stroke="#FFC000" strokeWidth="2" strokeLinecap="square" />
      </svg>
    ),
  },
]

export function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      className="py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Como funciona"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Metodologia</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-20">
            COMO FUNCIONA
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07]">
          {eixos.map((eixo, i) => (
            <FadeInUp key={eixo.numero} delay={i * 0.15}>
              <div className="relative overflow-hidden bg-black group p-10 md:p-14 h-full flex flex-col transition-colors duration-300 hover:bg-[#111]">

                {/* Gold sweep vertical esquerda */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                {/* Gold line inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left" />

                {eixo.icon}
                <span className="font-body text-xs text-ash tracking-widest mb-3">{eixo.numero}</span>
                <h3 className="font-display text-4xl md:text-5xl text-gold mb-5 transition-colors duration-300">
                  {eixo.titulo}
                </h3>
                <p className="font-body text-ash text-base md:text-lg leading-relaxed mb-8">
                  {eixo.corpo}
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {eixo.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 font-body text-sm text-ash leading-relaxed">
                      <span className="mt-[5px] w-[5px] h-[5px] flex-shrink-0 bg-gold" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-white/[0.07]">
                  <p className="font-body text-sm text-white leading-relaxed">
                    <span className="text-gold font-semibold">Resultado: </span>
                    {eixo.resultado}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
