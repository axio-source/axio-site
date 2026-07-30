import { FadeInUp } from '../animations/FadeInUp'

const pilares = [
  {
    titulo: 'Um dossiê, não uma linha',
    texto:
      'Cada persona carrega de 1200 a 1500 palavras de história, contexto e objeção antes mesmo de ler a sua peça. Esse peso é o que transforma a reação dela num motivo de verdade pra dizer não.',
  },
  {
    titulo: 'Metade do elenco existe pra dizer não',
    texto:
      'Se todo mundo comprasse, o teste não valeria nada. Metade das personas é construída pra recusar, pra filtrar quem não é o seu cliente, não pra te agradar.',
  },
  {
    titulo: 'O score é receita da casa',
    texto:
      'Por trás dele está uma matriz de critérios com peso, construída pela Axio, que decide qual variação merece rodar primeiro.',
  },
]

// Bloco 7: a diferença. Explica o porquê por trás do que o bloco 6 mostrou, sem
// descrever de novo personas, variações ou score. Os 3 pilares têm o mesmo
// peso tipográfico, nenhum pode ler como bônus dos outros dois. Sem CTA.
export function DiferencaSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Por que isso não é genérico"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Por que isso não é genérico</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-6 max-w-4xl">
            A diferença não está no comando. Está no elenco.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-16">
            Um comando genérico lê a sua peça e devolve elogio educado. A sala lê a mesma peça e
            devolve objeção com nome e motivo.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((p, i) => (
            <FadeInUp key={p.titulo} delay={i * 0.1}>
              <div className="h-full bg-[#0a0a0a] border border-white/[0.07] p-8 flex flex-col gap-4">
                <h3 className="font-display text-2xl text-white leading-tight">{p.titulo}</h3>
                <p className="font-body text-ash leading-relaxed">{p.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
