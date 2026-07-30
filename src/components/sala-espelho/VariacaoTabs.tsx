'use client'

import { useRef, useState } from 'react'

interface Variacao {
  id: string
  label: string
  descritor: string
  headline: React.ReactNode
  subhead: string
  corpo: string[]
  bullets?: string[]
  prova: string
  oferta: string
  cta: string
}

// Dado do caso Bússola, `interno/exemplo/agencia-bussola/03-variacoes.md`.
// Travessões de pontuação do original foram trocados por vírgula ou ponto
// (guardrail de zero travessão vale pra qualquer texto renderizado nesta
// página). Notas internas de produção entre colchetes (política de garantia
// a confirmar, etc.) foram removidas do texto voltado ao leitor. O único
// colchete mantido é o da V2, porque ali o próprio caso não tem o número
// real do case, e inventar um violaria o guardrail de não inventar dado.
const variacoes: Variacao[] = [
  {
    id: 'dor',
    label: 'Dor',
    descritor: 'Abre pela dor de perder cliente.',
    headline: 'Cansado de não saber se o mês que vem vai encher?',
    subhead:
      'A gente traz clientes pro seu negócio de forma previsível, com anúncio no Google e no Instagram. Você vê exatamente quantos chegaram e quanto custou cada um.',
    corpo: [
      'Você já impulsionou post e ficou sem saber se veio alguém? Já viu a agenda lotar num mês e esvaziar no outro, sem controle? A maioria dos donos de negócio de serviço vive nessa montanha russa: depende de indicação e torce pra dar certo.',
      'Dá pra parar de torcer. Em vez de gastar pra descobrir depois se funcionou, a gente monta uma máquina de clientes que você acompanha de perto: quantos contatos entraram, de onde vieram, quanto custou cada um. Sem palavra complicada, sem relatório de alcance que não paga conta. Contato de verdade, gente querendo comprar.',
    ],
    prova:
      'Espaço reservado pra prova real: quantos agendamentos a mais uma clínica parecida conseguiu em 30 dias. Ainda não preenchido neste caso demonstrativo.',
    oferta:
      'Gestão de tráfego a partir de R$ 1.997 por mês. Os primeiros resultados aparecem em 30 dias, e se não aparecerem, a gente senta com você e ajusta.',
    cta: 'Quero uma agenda mais previsível. Falar com a Bússola no WhatsApp.',
  },
  {
    id: 'prova',
    label: 'Prova',
    descritor: 'Abre pela prova de que funciona.',
    headline: (
      <>
        Como um escritório de contabilidade daqui passou a receber{' '}
        <span className="text-ash italic">[caso real a confirmar]</span> reuniões com empresas de
        verdade por mês
      </>
    ),
    subhead:
      'Não é sobre volume de contato. É sobre trazer o cliente certo, já filtrado, pro seu negócio, e provar isso com número.',
    corpo: [
      'A maioria das agências promete performance e entrega uma enxurrada de curioso que não fecha. A gente trabalha ao contrário: antes de qualquer real gasto, a gente define quem é o cliente que vale pra você e monta a campanha pra atrair esse perfil, e filtrar o resto.',
      'Como funciona na prática: segmentamos o anúncio pra chegar em quem tem o perfil e a verba do seu serviço, e usamos perguntas de triagem pra separar quem está só pesquisando de quem está pronto pra fechar. Você recebe contato qualificado, não lista de curioso. E acompanha tudo: custo por contato, por reunião, por cliente fechado.',
    ],
    prova:
      'Espaço reservado pra um ou dois cases reais com número: segmento parecido, resultado, período. Esta variação depende diretamente dessa prova pra funcionar.',
    oferta:
      'Gestão de tráfego a partir de R$ 1.997 por mês, com relatório que mostra o que importa: quantos contatos qualificados entraram e quanto custou cada um. Primeiros resultados em 30 dias.',
    cta: 'Ver como qualificamos os contatos. Falar com a Bússola.',
  },
  {
    id: 'oferta',
    label: 'Oferta',
    descritor: 'Abre pela oferta direta.',
    headline: 'Anúncios que trazem cliente em 30 dias, e você começa sem se enrolar.',
    subhead:
      'Gestão de tráfego no Google e no Instagram pra pequenas e médias empresas de serviço. A partir de R$ 1.997 por mês, com resultado que aparece no primeiro mês.',
    corpo: ['Nada de contrato longo e complicado pra depois descobrir se funciona. A proposta é direta.'],
    bullets: [
      'Você diz que cliente quer atrair. A gente monta e roda os anúncios.',
      'Em 30 dias você já vê os primeiros contatos chegando.',
      'Você acompanha num painel simples: quantos vieram, de onde, quanto custou cada um.',
      'Sem palavra difícil. A gente explica cada passo como se você nunca tivesse feito isso, porque a maioria dos nossos clientes nunca fez mesmo.',
    ],
    prova:
      'Espaço reservado pra um case curto de negócio local parecido, ideal uma loja ou comércio, mais um depoimento real. Ainda não preenchido neste caso demonstrativo.',
    oferta: 'Plano de gestão de tráfego a partir de R$ 1.997 por mês. Comece pequeno, veja o resultado, cresça depois.',
    cta: 'Começar com a Bússola. Falar no WhatsApp.',
  },
]

export function VariacaoTabs() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  function focusTab(index: number) {
    const next = (index + variacoes.length) % variacoes.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      focusTab(index + 1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      focusTab(index - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusTab(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusTab(variacoes.length - 1)
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Variações reescritas da peça"
        className="flex w-full md:inline-flex md:w-auto border-b border-white/[0.07]"
      >
        {variacoes.map((v, i) => (
          <button
            key={v.id}
            ref={(el) => {
              tabRefs.current[i] = el
            }}
            role="tab"
            id={`tab-${v.id}`}
            aria-selected={active === i}
            aria-controls={`painel-${v.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`flex-1 md:flex-none min-h-[44px] px-4 md:px-8 py-3 font-display uppercase tracking-[2px] text-sm md:text-base border-b-2 -mb-px transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
              active === i ? 'border-gold text-gold' : 'border-transparent text-ash hover:text-white'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {variacoes.map((v, i) => (
        <div
          key={v.id}
          role="tabpanel"
          id={`painel-${v.id}`}
          aria-labelledby={`tab-${v.id}`}
          hidden={active !== i}
          tabIndex={0}
          className="pt-6 md:pt-8"
        >
          <p className="font-body text-xs text-ash uppercase tracking-[1.5px] mb-4">{v.descritor}</p>

          <h4 className="font-display text-2xl md:text-3xl text-white leading-tight mb-4">{v.headline}</h4>
          <p className="font-body text-base md:text-lg text-white/85 leading-relaxed mb-5">{v.subhead}</p>

          <div className="flex flex-col gap-4 mb-5">
            {v.corpo.map((p, idx) => (
              <p key={idx} className="font-body text-sm md:text-base text-white/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {v.bullets && (
            <ul className="flex flex-col gap-2 mb-5">
              {v.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="font-display text-gold leading-none mt-1" aria-hidden="true">
                    +
                  </span>
                  <span className="font-body text-sm md:text-base text-white/70 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="border-l-2 border-white/15 pl-4 mb-5">
            <p className="font-body text-[11px] uppercase tracking-[1.5px] text-ash mb-1">Prova</p>
            <p className="font-body text-sm text-white/60 italic leading-relaxed">{v.prova}</p>
          </div>

          <p className="font-body text-sm md:text-base text-white/80 leading-relaxed mb-5">{v.oferta}</p>

          <div className="inline-block border border-white/20 px-4 py-2">
            <p className="font-body text-[11px] uppercase tracking-[1.5px] text-ash mb-1">CTA sugerido</p>
            <p className="font-body text-sm text-white">{v.cta}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
