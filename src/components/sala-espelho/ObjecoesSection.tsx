'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeInUp } from '../animations/FadeInUp'

const objecoes = [
  {
    pergunta: '"Isso aí é só um comando genérico de IA. Eu faço de graça no ChatGPT."',
    resposta:
      'A resposta mora no elenco, não num comando qualquer. Cada persona carrega um dossiê de 1200 a 1500 palavras, e metade delas foi construída pra dizer não. Peça pro ChatGPT fingir ser seu cliente e ele devolve elogio educado. A sala devolve objeção, com nome e com motivo.',
  },
  {
    pergunta: 'Como uma IA vai saber o que o meu público pensa?',
    resposta:
      'Concordamos. A sala também não pergunta pra uma IA genérica: o elenco é calibrado pro nicho da sua carteira, e metade dele existe só pra reprovar a peça.',
  },
  {
    pergunta: 'Já uso IA pra revisar copy. Pra que pagar por mais uma?',
    resposta:
      'Continue usando. Só que ela não entrega um relatório com a marca da sua agência, pronto pra mostrar ao seu cliente, com três variações escritas e a recomendação de qual rodar.',
  },
  {
    pergunta: 'Meu time já revisa a copy antes de subir.',
    resposta:
      'Seu time está dentro da bolha do cliente. Todo mundo ali quer que a peça funcione. Metade do elenco da sala foi montada pra fazer o contrário: procurar motivo pra não comprar.',
  },
  {
    pergunta: 'Isso aí me garante que a campanha vai converter mais?',
    resposta:
      'Não garante, e não vendemos essa garantia. O que a sala devolve é sinal relativo entre as variações testadas, mais a objeção que a sua equipe ainda não tinha visto. Quem estabelece conversão é o teste real de mídia. A sala decide o que merece esse teste.',
  },
  {
    pergunta: 'R$12.873 é caro.',
    resposta:
      'São 10,8 Visitas. É menos do que o fee de um mês de um único cliente da sua carteira. Um único cliente que não cancela paga a sala três vezes no ano.',
  },
  {
    pergunta: 'E se não servir pra mim?',
    resposta:
      'Se na primeira peça o painel não apontar nenhuma objeção que sua equipe ainda não tinha visto, você não paga.',
  },
]

const objecoesSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: objecoes.map((o) => ({
    '@type': 'Question',
    name: o.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: o.resposta },
  })),
}

// Bloco 12: objeções, formato accordion no molde de MentoriaFAQ.tsx. Só a
// primeira (comando genérico de IA) abre por padrão: é a mais crítica pro
// teste do concorrente. Ordem fixa, não reordenar.
export function ObjecoesSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Antes de você perguntar"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(objecoesSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <p className="section-label">Antes de você perguntar</p>
          <h2 className="font-display uppercase text-5xl sm:text-6xl leading-none text-white mb-16">
            Sete perguntas. Sete respostas diretas.
          </h2>
        </FadeInUp>

        <div role="list">
          {objecoes.map((o, i) => (
            <FadeInUp key={o.pergunta} delay={i * 0.06}>
              <div role="listitem" className="border-b border-white/[0.07]">
                <button
                  className="w-full flex items-start justify-between gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px]"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`objecao-${i}`}
                >
                  <span className="font-display text-xl md:text-2xl text-white leading-snug">
                    {o.pergunta}
                  </span>
                  <span
                    className={`mt-1 flex-shrink-0 text-gold text-2xl font-display transition-transform duration-200 ${
                      open === i ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`objecao-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="font-body text-ash text-base leading-relaxed pb-8 pr-10">
                        {o.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
