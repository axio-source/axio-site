'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeInUp } from './animations/FadeInUp'

const faqs = [
  {
    pergunta: 'A Axio atende qualquer segmento de empresa?',
    resposta:
      'Sim. Já trabalhamos com clínicas veterinárias, engenharia industrial e gestão patrimonial. O que importa não é o segmento: é que a empresa tenha ambição de crescer e disposição para mudar o que não funciona. Se você está aqui, provavelmente se encaixa.',
  },
  {
    pergunta: 'Como funciona o processo de trabalho com a Axio?',
    resposta:
      'Começamos com um diagnóstico para entender onde está o maior gargalo: receita ou processo. A partir disso, montamos um plano de ação com prioridades claras e implementamos junto com o seu time. Nada fica no papel.',
  },
  {
    pergunta: 'Em quanto tempo vejo resultados?',
    resposta:
      'Depende do tipo de intervenção. Automações de processo mostram resultado na semana seguinte. Reestruturação de receita leva de 4 a 8 semanas para ter impacto mensurável. A velocidade depende do gargalo, por isso o diagnóstico vem antes de qualquer compromisso de prazo.',
  },
  {
    pergunta: 'A Axio implementa as melhorias ou só aponta o caminho?',
    resposta:
      'Implementamos. Não somos uma consultoria que entrega um relatório e some. A Axio trabalha junto com a sua equipe até que a mudança esteja funcionando. O diagnóstico é nosso e a execução é nossa também.',
  },
  {
    pergunta: 'Como é feita a precificação?',
    resposta:
      'Projetos a partir de R$10k. Cada projeto é precificado de acordo com o escopo e o resultado esperado. Não existe pacote fechado porque cada empresa tem uma realidade diferente. A conversa inicial é sem compromisso. O objetivo dela é entender se faz sentido antes de qualquer proposta.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: f.resposta },
  })),
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="py-32 px-6 md:px-10 bg-black border-t border-surface"
      aria-label="Perguntas frequentes"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <p className="font-body text-sm text-ash tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="font-display text-5xl sm:text-6xl leading-none text-white mb-16">
            PERGUNTAS FREQUENTES
          </h2>
        </FadeInUp>

        <div role="list">
          {faqs.map((faq, i) => (
            <FadeInUp key={i} delay={i * 0.08}>
              <div role="listitem" className="border-b border-surface">
                <button
                  className="w-full flex items-start justify-between gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px]"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-display text-xl md:text-2xl text-white leading-snug">
                    {faq.pergunta}
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
                      id={`faq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="font-body text-ash text-base leading-relaxed pb-8 pr-10">
                        {faq.resposta}
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
