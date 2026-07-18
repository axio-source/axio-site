'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeInUp } from '../animations/FadeInUp'

const faqs = [
  {
    pergunta: 'Não sou técnico. Consigo acompanhar?',
    resposta:
      'O programa foi desenhado pra quem não é. Se você usa WhatsApp e e-mail, consegue. A parte técnica pesada é exatamente o que eu faço junto com você nos encontros.',
  },
  {
    pergunta: 'Não tenho tempo.',
    resposta:
      'Uma hora por semana, durante 4 semanas. E um dos entregáveis é justamente devolver horas: processo automatizado é hora que volta pra sua agenda toda semana, depois que o programa acaba.',
  },
  {
    pergunta: 'Já tentei IA e não funcionou.',
    resposta:
      'Você tentou ferramenta. Ferramenta sem método não entrega. É a diferença entre assinar a academia e ter um treino montado: a academia era a mesma o tempo todo, o que faltava era o treino.',
  },
  {
    pergunta: 'Por que não faço sozinho com o ChatGPT?',
    resposta:
      'Pode fazer. O que você compra aqui não é informação, informação é grátis. É implementação com quem já fez, no seu negócio, com garantia. Sistema rodando é outro produto.',
  },
  {
    pergunta: 'Funciona no meu ramo?',
    resposta:
      'O método é o mesmo em indústria, software e serviço. O que muda é o processo que a gente escolhe automatizar. Nos encontros trabalhamos no seu processo, não em exemplo de apostila.',
  },
  {
    pergunta: 'Por que R$ 6.000?',
    resposta:
      'Pense no que custa um mês de um bom funcionário administrativo. É essa a faixa do plano Em Grupo. A diferença: o sistema implantado trabalha todo mês, não pede férias e fica seu pra sempre. E se não rodar, eu continuo de graça até rodar. O risco do preço é meu.',
  },
  {
    pergunta: 'Como funciona o pagamento?',
    resposta:
      'Pix ou parcelado no cartão, direto comigo, sem plataforma no meio. Os detalhes a gente fecha na conversa do WhatsApp.',
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

export function MentoriaFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Perguntas frequentes"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <p className="section-label">FAQ</p>
          <h2 className="font-display text-5xl sm:text-6xl leading-none text-white mb-16">
            O QUE VOCÊ ESTÁ
            <br />
            SE PERGUNTANDO
          </h2>
        </FadeInUp>

        <div role="list">
          {faqs.map((faq, i) => (
            <FadeInUp key={i} delay={i * 0.06}>
              <div role="listitem" className="border-b border-white/[0.07]">
                <button
                  className="w-full flex items-start justify-between gap-4 py-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px]"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`mentoria-faq-${i}`}
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
                      id={`mentoria-faq-${i}`}
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
