import { FadeInUp } from '../animations/FadeInUp'

// URL do embed da vídeo-aula pública (módulo amigos gravado, YouTube).
// Enquanto for null a seção inteira não renderiza: a página funciona sem ela
// e a seção ativa sozinha quando a aula estiver no ar.
// Formato esperado: 'https://www.youtube.com/embed/<id>'
const VIDEO_AULA_URL: string | null = null

export function ProvaRadicalSection() {
  if (!VIDEO_AULA_URL) return null

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="A aula base pública"
    >
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <p className="section-label">Transparência total</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            VEJA O PRODUTO POR DENTRO
            <br />
            <span className="text-gold">ANTES DE PAGAR UM REAL</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-12">
            Guru esconde o curso atrás do checkout. Eu faço o contrário: essa é a aula base
            inteira, pública, sem cadastro. Assiste. Se o conteúdo aberto já é assim, você decide
            o que vale a implementação guiada no seu negócio.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <div className="relative w-full border border-white/[0.07]" style={{ paddingTop: '56.25%' }}>
            <iframe
              src={VIDEO_AULA_URL}
              title="Aula base da mentoria IA Implantada"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
