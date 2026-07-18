import { FadeInUp } from '../animations/FadeInUp'

const encontros = [
  {
    numero: '01',
    titulo: 'FUNDAMENTO E PRIMEIRA ENTREGA',
    texto:
      'Você entende o que está comprando por dentro, instala o essencial e sai do primeiro encontro com uma tarefa real do seu negócio feita. No dia um.',
  },
  {
    numero: '02',
    titulo: 'A IA APRENDE O SEU NEGÓCIO',
    texto:
      'Montamos seu assistente próprio com o Motor de Contexto: seu tom, suas regras, seus clientes. Acaba a resposta genérica.',
  },
  {
    numero: '03',
    titulo: 'PROCESSO RODANDO',
    texto:
      'Escolhemos um processo repetitivo de verdade da sua operação e deixamos automatizado, com você no controle de cada aprovação.',
  },
  {
    numero: '04',
    titulo: 'AUDITORIA E CONTINUAÇÃO',
    texto:
      'Cortamos o desperdício da conta de IA, revisamos tudo que foi implantado e você recebe o plano escrito dos próximos 90 dias.',
  },
]

export function EncontrosSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Como funcionam os 4 encontros"
    >
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <p className="section-label">Como funciona</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-6">
            4 ENCONTROS. 1 HORA CADA.
          </h2>
          <p className="font-body text-lg text-ash leading-relaxed max-w-3xl mb-14">
            Isso cabe na agenda de quem toca empresa. E cada encontro termina com alguma coisa
            implantada, não com dever de casa teórico.
          </p>
        </FadeInUp>

        <div className="flex flex-col">
          {encontros.map((e, i) => (
            <FadeInUp key={e.numero} delay={i * 0.08}>
              <div className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 border-b border-white/[0.07]">
                <span className="font-display text-5xl md:text-6xl text-gold/30 leading-none" aria-hidden="true">
                  {e.numero}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-2">
                    {e.titulo}
                  </h3>
                  <p className="font-body text-ash leading-relaxed max-w-3xl">{e.texto}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
