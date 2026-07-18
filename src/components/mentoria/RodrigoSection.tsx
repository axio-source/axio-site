import Image from 'next/image'
import { FadeInUp } from '../animations/FadeInUp'

export function RodrigoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Quem implanta"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Quem implanta</p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mt-12">
          <FadeInUp delay={0.1}>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ maxWidth: '420px' }}>
                <Image
                  src="/site-profile.jpeg"
                  alt="Rodrigo Miyashiro, fundador da Axio"
                  width={420}
                  height={560}
                  style={{ width: '100%', height: 'auto' }}
                  className="block object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold" />
              </div>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gold" />
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="flex flex-col">
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-2">
                EU NÃO SOU
              </h2>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-gold mb-6">
                INFLUENCER DE IA.
              </h2>

              <p className="font-body text-xs text-ash tracking-[3px] uppercase mb-10">
                Sou quem as empresas chamam quando a IA delas não funciona
              </p>

              <div className="flex flex-col gap-5 mb-10">
                <p className="font-body text-lg text-ash leading-relaxed">
                  Passei 8 anos como desenvolvedor e Tech Lead em ambientes onde sistema que falha
                  custa dinheiro de verdade: BTG Pactual, onde construí 19 bots automatizando
                  processos de investimento, e Axia Futures, em Londres, desenvolvendo sistemas de
                  baixa latência.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  Fundei a Axio pra fazer dentro de empresas o que faço com IA todos os dias:
                  encontrar onde se perde tempo e dinheiro, e implantar o sistema que resolve. Sem
                  slide bonito, sem relatório que ninguém abre.
                </p>
                <p className="font-body text-lg text-ash leading-relaxed">
                  Essa mentoria é a versão pessoal disso. O mesmo método que uso em empresa,
                  implantado no seu negócio, com você do lado.
                </p>
              </div>

              <div className="pt-2">
                <div className="w-full h-px bg-gold/40 mb-5" />
                <p className="font-body text-sm text-ash/60 leading-relaxed">
                  Formação contínua: mentorias com Alex Hormozi e Dan Martell. Certificações
                  Anthropic em desenvolvimento com Claude.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
