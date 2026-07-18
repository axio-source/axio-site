import { FadeInUp } from '../animations/FadeInUp'

// Âncoras = preço de cada peça vendida avulsa como serviço Axio.
// Valores propostos pelo Axel em 18/07/2026; Rodrigo trava antes do deploy.
const itens = [
  {
    titulo: '4 ENCONTROS DE IMPLEMENTAÇÃO AO VIVO',
    texto:
      'Uma hora por semana, comigo, trabalhando no seu negócio. Não é aula gravada: é a gente montando junto.',
    valor: 'R$ 4.000',
  },
  {
    titulo: 'ASSISTENTE DE IA PRÓPRIO',
    texto:
      'Treinado no seu negócio, no seu tom, nas suas regras. O meu se chama Axel e me ajudou a montar esta página.',
    valor: 'R$ 2.500',
  },
  {
    titulo: 'MOTOR DE CONTEXTO DINÂMICO',
    texto:
      'A estrutura que faz a IA parar de responder genérico e começar a responder como alguém de dentro da sua empresa.',
    valor: 'R$ 2.500',
  },
  {
    titulo: 'AUDITORIA CORTA A CONTA',
    texto:
      'Pente fino em onde suas assinaturas de IA queimam dinheiro hoje. O desperdício achado é seu pra cortar no mesmo dia.',
    valor: 'R$ 1.500',
  },
  {
    titulo: 'BRAND BOOK DO SEU NEGÓCIO',
    texto:
      'Sua marca, seu tom e seu jeito documentados de forma que qualquer IA escreva como você, não como robô.',
    valor: 'R$ 1.500',
  },
  {
    titulo: 'MEU WHATSAPP DIRETO',
    texto:
      'Durante toda a construção, quem responde sou eu. Não é grupo de suporte com estagiário.',
    valor: 'R$ 1.500',
  },
  {
    titulo: 'BIBLIOTECA PACD + BIBLIOTECA DE PROMPTS',
    texto:
      'Os modelos prontos do método e o framework de prompt de 5 partes, pra usar depois sem mim.',
    valor: 'R$ 1.000',
  },
  {
    titulo: 'GRAVAÇÃO, REVIEW E PLANO DE CONTINUAÇÃO',
    texto:
      'Todos os encontros gravados, revisão final do que foi implantado e o plano escrito dos próximos 90 dias.',
    valor: 'R$ 1.000',
  },
]

export function StackSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10 bg-black border-t border-white/[0.07]"
      aria-label="O que você leva"
    >
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <p className="section-label">O que você leva</p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-6">
            TUDO QUE SAI IMPLANTADO
          </h2>
          <p className="font-body text-lg text-ash leading-relaxed max-w-3xl mb-14">
            Não é lista de aulas. É a lista do que fica rodando no seu negócio quando os 4
            encontros acabam. Do lado, o que cada peça custaria contratada avulsa, como serviço.
          </p>
        </FadeInUp>

        <div>
          {itens.map((item, i) => (
            <FadeInUp key={item.titulo} delay={i * 0.05}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 border-b border-white/[0.07]">
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl md:text-2xl text-white leading-snug mb-1">
                    {item.titulo}
                  </h3>
                  <p className="font-body text-sm text-ash leading-relaxed">{item.texto}</p>
                </div>
                <span className="font-display text-2xl text-gold whitespace-nowrap">
                  {item.valor}
                </span>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-8">
            <p className="font-display text-2xl md:text-3xl text-white">SOMADO, AVULSO:</p>
            <p className="font-display text-4xl md:text-5xl text-gold">R$ 15.500</p>
          </div>
          <p className="font-body text-lg text-white/85 leading-relaxed mt-6">
            Você não paga isso. Os três planos estão mais abaixo. Antes, veja como funciona por
            dentro.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
