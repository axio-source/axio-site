import { FadeInUp } from '../animations/FadeInUp'

const passos = [
  {
    numero: '1',
    titulo: 'MAPEAR',
    texto: 'Onde o seu negócio perde tempo e dinheiro hoje. Processo por processo, sem achismo.',
  },
  {
    numero: '2',
    titulo: 'ESTRUTURAR',
    texto: 'A IA aprende o seu negócio: seu tom, suas regras, seus clientes, seus arquivos.',
  },
  {
    numero: '3',
    titulo: 'IMPLANTAR',
    texto: 'Agentes e automações entram nos processos reais da operação, com você no controle.',
  },
  {
    numero: '4',
    titulo: 'RODAR SOZINHO',
    texto: 'Medido, documentado e seu. Sem mensalidade escondida, sem depender de consultor.',
  },
]

export function MecanismoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="O método PACD"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">A virada</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] text-white mb-4">
            NEM MONSTRO,
            <br />
            NEM MÁGICA.
          </h2>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-gold leading-tight mb-10">
            IA É FERRAMENTA. E FERRAMENTA SEM MÉTODO NÃO ENTREGA.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mb-16">
            O que separa a empresa onde IA vira lucro da empresa onde IA vira fatura tem nome:
            <strong className="text-white"> método PACD</strong>. O mesmo método que reestruturou
            a forma como um time inteiro de desenvolvimento usava IA e promoveu quem liderou a
            mudança. Não depende de ferramenta. Não depende de moda. E depois de implantado, não
            depende de mim.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passos.map((p, i) => (
            <FadeInUp key={p.numero} delay={i * 0.08}>
              <div className="h-full border border-white/[0.07] bg-black p-8 flex flex-col gap-3">
                <span className="font-display text-5xl text-gold leading-none" aria-hidden="true">
                  {p.numero}
                </span>
                <h3 className="font-display text-2xl text-white">{p.titulo}</h3>
                <p className="font-body text-sm text-ash leading-relaxed">{p.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
