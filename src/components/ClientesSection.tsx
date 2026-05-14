import { FadeInUp } from './animations/FadeInUp'

const depoimentos = [
  {
    texto: 'Cuidar da financeira sempre foi fazer conta no escuro. Faturamento entrava, conta saía, fornecedor, contador, mas a foto real do negócio nunca ficava clara. Estava crescendo ou só estava ocupada? A Axio construiu um painel com as métricas que importam: retenção, rentabilidade por atendimento, custo por cliente novo, margem real. Hoje sei exatamente o que está gerando resultado e onde estou perdendo sem perceber. Parei de administrar no chute.',
    nome: 'Gestora',
    empresa: 'Espaço Pet Atibaia',
    segmento: 'Clínica Veterinária',
  },
  {
    texto: 'Cada orçamento levava entre 6 e 12 horas da nossa equipe técnica. Para a Petrobras, estimamos mais de duas semanas de trabalho. O prazo deles era duas semanas. Perdemos a oportunidade antes mesmo de apresentar uma proposta. A Axio construiu um sistema que identifica equivalentes para sensores em segundos. Hoje o sistema faz em minutos o que travava a equipe por dias.',
    nome: 'Diretor',
    empresa: 'Secmil Engenharia',
    segmento: 'Engenharia Industrial',
  },
  {
    texto: 'Depois de cada reunião com cliente, alguém da equipe precisava atualizar o CRM, registrar o que foi discutido e identificar o que acompanhar. Feito na correria, fica incompleto. Deixado para depois, não volta. A Axio construiu um agente que lê a transcrição da reunião, atualiza o CRM e gera um relatório com os pontos que importam para o próximo contato. Nenhuma informação se perde. O follow-up começa exatamente de onde a conversa parou.',
    nome: 'Sócio',
    empresa: 'Equity Capital',
    segmento: 'Gestão Patrimonial',
  },
]

export function ClientesSection() {
  return (
    <section
      id="clientes"
      className="py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Clientes"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Prova social</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-20">
            QUEM CONFIA <span className="text-gold">NA AXIO</span>
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07]">
          {depoimentos.map((d, i) => (
            <FadeInUp key={d.empresa} delay={i * 0.12}>
              <figure className="relative overflow-hidden bg-black group p-8 md:p-10 h-full flex flex-col transition-colors duration-300 hover:bg-[#111]">

                {/* Gold sweep esquerda */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                {/* Gold line inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-left" />

                <span className="font-display text-6xl text-gold leading-none mb-4 block" aria-hidden="true">"</span>

                <blockquote className="font-body text-white/80 text-base leading-relaxed flex-1 mb-8">
                  {d.texto}
                </blockquote>

                <figcaption>
                  <div className="w-8 h-px bg-gold mb-4" aria-hidden="true" />
                  <p className="font-display text-lg text-white">{d.nome}</p>
                  <p className="font-body text-sm text-ash">{d.empresa}</p>
                  <span className="inline-block mt-3 px-3 py-1 border border-white/[0.07] font-body text-xs text-ash tracking-widest uppercase">
                    {d.segmento}
                  </span>
                </figcaption>
              </figure>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
