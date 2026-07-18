import { FadeInUp } from '../animations/FadeInUp'
import { MentoriaCTA } from './MentoriaCTA'

const tiers = [
  {
    nome: 'EM GRUPO',
    preco: 'R$ 6.000',
    detalhe: 'por pessoa, turma pequena',
    plano: 'Em Grupo',
    destaque: false,
    cta: 'QUERO ENTRAR NA TURMA',
    itens: [
      'Os 4 encontros ao vivo, em grupo',
      'Stack completo: assistente, motor de contexto, brand book, bibliotecas',
      'Implementação por exercícios guiados no seu negócio',
      'Gravação de todos os encontros',
    ],
  },
  {
    nome: 'INDIVIDUAL',
    preco: 'R$ 12.000',
    detalhe: 'os 4 encontros só seus',
    plano: 'Individual',
    destaque: true,
    cta: 'QUERO O INDIVIDUAL',
    itens: [
      'Tudo do Em Grupo, com os encontros 1:1, na sua agenda',
      'Implementação feita junto, processo por processo, no seu negócio real',
      'Meu WhatsApp direto durante toda a construção',
      'Prioridade de agenda nas 12 vagas',
    ],
  },
  {
    nome: 'NA EMPRESA',
    preco: 'R$ 60.000',
    detalhe: 'pra quem quer o time junto',
    plano: 'Na Empresa',
    destaque: false,
    cta: 'QUERO NA MINHA EMPRESA',
    itens: [
      'Eu dentro da sua operação, com o seu time',
      'Diagnóstico Receita e Tempo completo da Axio',
      'Processo crítico implantado pela Axio, rodando',
      'Time treinado pra operar sem consultor',
    ],
  },
]

export function TiersSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Investimento"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Investimento</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            TRÊS JEITOS DE IMPLANTAR
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-4xl mb-14">
            Tem empresário que prefere o caminho inteiro feito: eu entro com o time dele, faço o
            diagnóstico e deixo o processo rodando. Esse caminho existe, e custa R$ 60 mil. Os
            outros dois existem pra quem quer implantar com as próprias mãos, guiado por mim.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <FadeInUp key={t.nome} delay={i * 0.1} className="h-full">
              <div
                className={`relative h-full flex flex-col p-8 md:p-10 bg-black ${
                  t.destaque ? 'border-2 border-gold' : 'border border-white/[0.07]'
                }`}
              >
                {t.destaque && (
                  <span className="absolute -top-4 left-8 bg-gold text-black font-display text-sm tracking-widest px-4 py-1">
                    RECOMENDADO
                  </span>
                )}

                <h3 className="font-display text-3xl text-white mb-1">{t.nome}</h3>
                <p className="font-body text-xs text-ash tracking-[2px] uppercase mb-6">
                  {t.detalhe}
                </p>
                <p className={`font-display text-5xl md:text-6xl mb-8 ${t.destaque ? 'text-gold' : 'text-white'}`}>
                  {t.preco}
                </p>

                <ul className="flex flex-col gap-4 mb-10 flex-1">
                  {t.itens.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-display text-xl text-gold leading-none" aria-hidden="true">
                        +
                      </span>
                      <span className="font-body text-sm text-white/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <MentoriaCTA
                  plano={t.plano}
                  variant={t.destaque ? 'gold' : 'ghost'}
                  size="sm"
                  className="w-full"
                  aria-label={`Quero o plano ${t.plano}`}
                >
                  {t.cta}
                </MentoriaCTA>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.2}>
          <p className="font-body text-sm text-ash mt-10">
            Pix ou parcelado no cartão, fechado direto comigo, sem plataforma no meio. A garantia
            abaixo vale pros três planos.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
