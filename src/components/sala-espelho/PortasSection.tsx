import { FadeInUp } from '../animations/FadeInUp'
import { SalaEspelhoCTA, type Porta } from './SalaEspelhoCTA'

interface CardPorta {
  nome: string
  preco: string
  selo?: string
  destaque: boolean
  resumo: string
  itens?: string[]
  paragrafos?: string[]
  nota?: string
  porta: Porta
  ctaLabel: string
}

// Ordem fixa em qualquer largura de tela: Sala Mestra, Sala Própria, Visita.
// NUNCA reordenar em mobile (nem "mostrar o mais vendido primeiro"): o efeito
// de âncora do preço mais alto só funciona se ele for visto antes da Sala
// Própria. A Sala Própria é o card destaque (selo Recomendada) mesmo vindo
// em segundo lugar na ordem de leitura.
const portas: CardPorta[] = [
  {
    nome: 'Sala Mestra',
    preco: 'R$70.793',
    destaque: false,
    resumo:
      'Tudo da Sala Própria, e a sala vira linha de receita da sua agência, não só uso interno.',
    itens: [
      'Elenco calibrado para até 8 nichos da sua carteira.',
      'A Axio roda 20 peças da sua carteira ao seu lado, no primeiro trimestre.',
      '5 auditorias de prospect aplicadas, com o pitch montado em cima do relatório.',
      '12 meses da atualização de elenco inclusos.',
      'Licença de revenda: você vende o relatório aos seus clientes como produto seu.',
    ],
    nota: 'Uma Sala Mestra por trimestre. É o limite real do que conseguimos calibrar direito, não um truque de vendas.',
    porta: 'Sala Mestra',
    ctaLabel: 'Agendar a Sala Mestra',
  },
  {
    nome: 'Sala Própria',
    selo: 'Recomendada',
    preco: 'R$12.873',
    destaque: true,
    resumo:
      'A sala instalada dentro da sua agência. Uso ilimitado, em toda a carteira, para sempre, com a marca da sua agência no relatório.',
    itens: [
      'Elenco calibrado para o nicho principal da sua carteira: personas com dossiê de 1200 a 1500 palavras cada, metade fit, metade não fit.',
      'Peça testada, quantas quiser: feedback por persona, contagem de quem compraria, três variações reescritas e o score dizendo qual rodar.',
      'Relatório white-label, self-contained, com a marca da sua agência, pronto para apresentar ao cliente dela.',
      'Treino do seu time para operar sozinho, sem depender da Axio.',
      'De bônus, o playbook de auditoria de prospect.',
    ],
    nota: 'R$12.873 são 10,8 Visitas. Se a sua carteira tem 15 contas, você ultrapassa 11 peças testadas ainda no primeiro trimestre. Da 11ª peça em diante, a sala é de graça, ilimitada e para sempre.',
    porta: 'Sala Própria',
    ctaLabel: 'Agendar a Sala Própria',
  },
  {
    nome: 'Visita',
    preco: 'R$1.197 por peça',
    destaque: false,
    resumo:
      'Sua agência entra na sala uma vez, como convidada. A Axio roda a peça, você recebe o relatório pronto: feedback do painel, contagem de quem compraria, três variações reescritas e o score de qual rodar.',
    paragrafos: [
      'De propósito, pequena: sem elenco calibrado para a sua carteira, sem treino do seu time, sem uso ilimitado. É o teste, não o sistema inteiro.',
      'O que você paga aqui não se perde. Vira crédito direto na Sala Própria, se você decidir subir depois.',
    ],
    porta: 'Visita',
    ctaLabel: 'Comprar a Visita',
  },
]

// Bloco 9: três portas + preço. Uma única família de ação (falar com a Axio
// sobre aquela porta), instanciada três vezes. Molde de TiersSection.tsx.
export function PortasSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Investimento"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Investimento</p>
          <h2 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            Escolha como você entra na sala.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mb-14">
            Três portas, preço exato em cada uma, nada aqui é sob consulta. A Sala Mestra mostra
            até onde isso pode ir. A Sala Própria é para quem vai rodar peça depois peça, na
            carteira inteira, para sempre. A Visita é para quem quer ver o painel reagir a uma peça
            sua antes de decidir o resto. O preço de cada porta está no card dela.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {portas.map((p, i) => (
            <FadeInUp key={p.nome} delay={i * 0.1} className="h-full">
              <div
                className={`relative h-full flex flex-col p-8 md:p-10 bg-black ${
                  p.destaque ? 'border-2 border-gold' : 'border border-white/[0.07]'
                }`}
              >
                {p.selo && (
                  <span className="absolute -top-4 left-8 bg-gold text-black font-display uppercase text-sm tracking-widest px-4 py-1">
                    {p.selo}
                  </span>
                )}

                <h3 className="font-display uppercase text-3xl text-white mb-1">{p.nome}</h3>
                <p
                  className={`font-display text-4xl md:text-5xl mb-6 ${
                    p.destaque ? 'text-gold' : 'text-white'
                  }`}
                >
                  {p.preco}
                </p>

                <p className="font-body text-white/85 leading-relaxed mb-6">{p.resumo}</p>

                {p.itens && (
                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {p.itens.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="font-display text-lg text-gold leading-none" aria-hidden="true">
                          +
                        </span>
                        <span className="font-body text-sm text-white/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {p.paragrafos && (
                  <div className="flex flex-col gap-4 mb-6 flex-1">
                    {p.paragrafos.map((par) => (
                      <p key={par} className="font-body text-sm text-white/80 leading-relaxed">
                        {par}
                      </p>
                    ))}
                  </div>
                )}

                {p.nota && (
                  <p className="font-body text-xs text-ash leading-relaxed mb-6">{p.nota}</p>
                )}

                <SalaEspelhoCTA
                  porta={p.porta}
                  variant={p.destaque ? 'gold' : 'ghost'}
                  size="sm"
                  className="w-full mt-auto"
                  aria-label={p.ctaLabel}
                >
                  {p.ctaLabel}
                </SalaEspelhoCTA>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <p className="font-body text-sm text-ash mt-10">
            Pagamento combinado direto na conversa do WhatsApp. Sem checkout na página. A garantia
            vale nas três portas: Visita, Sala Própria e Sala Mestra.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
