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
                style={{ aspectRatio: '3/4', maxWidth: '420px' }}
              >
                <Image
                  src="/site-profile.jpeg"
                  alt="Rodrigo Miyashiro — Fundador da Axio"
                  fill
                  className="object-cover object-top"
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
                Fundador · CEO · CTO · CFO · CCO
              </p>

              <div className="flex flex-col gap-5 mb-10">
                <p className="font-body text-lg text-ash leading-relaxed">
                  Rodrigo não é consultor de carreira. É fundador e operador.
                  Construiu processos e sistemas do zero e entende o que trava
                  uma empresa porque já esteve do outro lado do problema.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  Na Axio, acumula CEO, CTO, CFO e CCO. Não por falta de equipe.
                  Porque é assim que garante que cada projeto seja implementado
                  sem camadas de intermediários.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  A diferença entre crescer e estagnar costuma ser uma ou duas
                  decisões certas, tomadas na hora certa. A Axio existe para
                  garantir que essas decisões aconteçam.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/company/axio-gold"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-body text-sm text-gold tracking-[2px] uppercase hover:opacity-70 transition-opacity duration-200 self-start"
                aria-label="LinkedIn da Axio"
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
