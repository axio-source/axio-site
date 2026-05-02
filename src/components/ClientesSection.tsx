import { FadeInUp } from './animations/FadeInUp'

const depoimentos = [
  {
    texto: 'A Axio mapeou onde estávamos perdendo receita e reestruturou nosso processo de atendimento. Conseguimos aumentar o ticket médio e eliminar os horários ociosos que drenavam a operação.',
    nome: 'Gestor',
    empresa: 'Espaço Pet Atibaia',
    segmento: 'Clínica Veterinária',
  },
  {
    texto: 'O processo de orçamentação consumia horas da equipe técnica toda semana. Com a Axio, automatizamos a parte repetitiva e a equipe voltou o foco para onde gera margem de verdade.',
    nome: 'Diretor',
    empresa: 'Secmil Engenharia',
    segmento: 'Engenharia Industrial',
  },
  {
    texto: 'Precisávamos escalar sem aumentar o custo fixo. A Axio identificou o gargalo operacional e estruturou a automação certa. Crescemos em AUM sem precisar crescer no time.',
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
