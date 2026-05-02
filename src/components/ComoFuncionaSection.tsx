import { FadeInUp } from './animations/FadeInUp'

const eixos = [
  {
    numero: '01',
    titulo: 'RECEITA',
    corpo: 'Identificamos exatamente onde sua empresa está deixando dinheiro na mesa e estruturamos o processo para capturar essa receita sem depender de volume ou de sorte.',
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
    corpo: 'Cada hora que sua equipe gasta em tarefa repetitiva é uma hora que não foi investida em crescimento. Mapeamos, automatizamos e devolvemos esse tempo.',
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
                <p className="font-body text-ash text-base md:text-lg leading-relaxed">
                  {eixo.corpo}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
