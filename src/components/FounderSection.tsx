import Image from 'next/image'
import { FadeInUp } from './animations/FadeInUp'

export function FounderSection() {
  return (
    <section
      className="py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="Sobre o fundador"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Quem está por trás</p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-12">

          <FadeInUp delay={0.1}>
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{ maxWidth: '420px' }}
              >
                <Image
                  src="/site-profile.jpeg"
                  alt="Rodrigo Miyashiro — Fundador da Axio"
                  width={420}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                  className="block object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                {/* Gold border bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
              </div>
              {/* Gold accent line left */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gold" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="flex flex-col">
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-2">
                RODRIGO
              </h2>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-gold mb-6">
                MIYASHIRO
              </h2>

              <p className="font-body text-xs text-ash tracking-[3px] uppercase mb-10">
                Fundador & CEO
              </p>

              <div className="flex flex-col gap-5 mb-10">
                <p className="font-body text-lg text-ash leading-relaxed">
                  Antes de fundar a Axio, Rodrigo passou 8 anos como desenvolvedor e Tech Lead em BTG Pactual e Axia Futures, em Londres. Não são credenciais para impressionar. São os ambientes onde aprendeu que sistema que falha custa dinheiro de verdade, e que ninguém espera reunião de alinhamento quando o mercado não espera.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  Quando foi estudar o mercado de automação no Brasil a fundo, o que encontrou foi frustrante: tecnologia genérica empacotada como solução, sem ninguém entender o problema de verdade. Bots de WhatsApp. Fluxos que qualquer estagiário replicaria. Consultores que entregam slide e somem.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  A Axio existe porque esse padrão tem custo real. Cada projeto tem escopo definido, prazo real e um número para bater. O cliente termina sabendo operar o que foi construído, sem depender de ninguém.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/in/rdgmiyashiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-sm text-gold tracking-[2px] uppercase hover:opacity-70 transition-opacity duration-200 self-start"
                aria-label="LinkedIn de Rodrigo Miyashiro"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </FadeInUp>

        </div>
      </div>
    </section>
  )
}
