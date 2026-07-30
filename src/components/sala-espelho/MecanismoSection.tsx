import { FadeInUp } from '../animations/FadeInUp'

const passos = [
  {
    numero: '01',
    titulo: 'Você manda a peça',
    texto: 'O anúncio que já ia subir, do jeito que está. Sem reescrever nada antes de entrar na sala.',
  },
  {
    numero: '02',
    titulo: 'O painel reage do outro lado do vidro',
    texto: 'Ainda no mesmo dia. Cada persona lê a peça e reage sem filtro, sem tentar te agradar.',
  },
  {
    numero: '03',
    titulo: 'Você recebe o veredito',
    texto: 'Objeção com nome de quem falou, as três variações reescritas e o score dizendo qual rodar primeiro.',
  },
]

// Bloco 5: mecanismo único. Empurra pro bloco 6 (demonstração ao vivo), sem
// CTA próprio. Grid de 3 passos no molde de MecanismoSection.tsx / EncontrosSection.tsx
// do precedente mentoria: número grande no topo, mesmo peso tipográfico nos três cards.
export function MecanismoSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Como funciona a Sala Espelho"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <p className="section-label">Como funciona</p>
          <h2 className="font-display uppercase text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-6 max-w-4xl">
            Você entra na sala, fica do outro lado do vidro e ouve antes de gastar.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-16">
            É a mesma sala espelhada do grupo de foco tradicional, sem a agenda de três semanas nem
            a conta de milhares de reais. De um lado, o painel reage. Do outro, você escuta tudo
            antes de qualquer real subir pra mídia.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {passos.map((p, i) => (
            <FadeInUp key={p.numero} delay={i * 0.1}>
              <div className="h-full border border-white/[0.07] bg-black p-8 flex flex-col gap-3">
                <span className="font-display text-5xl text-gold leading-none" aria-hidden="true">
                  {p.numero}
                </span>
                <h3 className="font-display text-2xl text-white leading-tight">{p.titulo}</h3>
                <p className="font-body text-sm text-ash leading-relaxed">{p.texto}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}
