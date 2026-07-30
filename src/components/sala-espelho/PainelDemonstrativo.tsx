'use client'

import { SeloFiccao } from './SeloFiccao'
import { PersonaCard, type Persona } from './PersonaCard'
import { VariacaoTabs } from './VariacaoTabs'
import { ScorePainel } from './ScorePainel'

// Elenco do caso Bússola, `interno/exemplo/agencia-bussola/02-feedback-painel.md`.
// As seis personas reagem à peça original (mostrada acima do painel, fora
// deste componente). As três do grupo fit dizendo não é o diagnóstico do
// caso, não um erro de dado: é o motivo de existirem as três variações
// reescritas logo abaixo. Ver nota de build.
const quemCompraria: Persona[] = [
  {
    nome: 'Dra. Camila Rezende',
    papel: 'Dona de clínica odontológica',
    veredito: 'nao',
    objecao: 'Eu sou dentista, entendo de dente, não entendo essas palavras. Quando fala complicado demais, meu alarme acende.',
  },
  {
    nome: 'Marcos Tanaka',
    papel: 'Sócio de escritório de contabilidade',
    veredito: 'nao',
    objecao: 'A página não prova nada e não explica como qualifica quem chega. Presumo que vai vir a mesma coisa de sempre.',
  },
  {
    nome: 'Rosana Alves',
    papel: 'Dona de loja de material de construção',
    veredito: 'nao',
    objecao: 'Quando alguém fala difícil assim, eu penso que quer me impressionar pra me enrolar.',
  },
]

const quemNaoCompraria: Persona[] = [
  {
    nome: 'Tiago Nunes',
    papel: 'Fotógrafo MEI',
    veredito: 'nao',
    objecao: 'R$ 1.997 por mês é quase metade do que eu faturo num mês fraco. Não tem como.',
  },
  {
    nome: 'Bianca Prado',
    papel: 'Fundadora de e-commerce',
    veredito: 'nao',
    objecao: 'Meu caminho agora é montar time interno, não contratar agência. Por modelo, não por preço.',
  },
  {
    nome: 'Eduardo Simões',
    papel: 'Diretor de rede de academias',
    veredito: 'nao',
    objecao: 'Já tenho agência e analista interno. Meu problema é escala e padronização entre unidades, não dar o primeiro passo.',
  },
]

function GrupoPersonas({
  titulo,
  accent,
  personas,
}: {
  titulo: string
  accent: 'gold' | 'ash'
  personas: Persona[]
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-2 h-2 flex-shrink-0 ${accent === 'gold' ? 'bg-gold' : 'bg-ash'}`} aria-hidden="true" />
        <h4 className="font-display text-xl md:text-2xl text-white uppercase tracking-wide">{titulo}</h4>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 md:mx-0 md:px-0 md:flex-col md:overflow-visible">
        {personas.map((p) => (
          <PersonaCard
            key={p.nome}
            {...p}
            className="min-w-[82%] sm:min-w-[60%] md:min-w-0 flex-shrink-0 md:flex-shrink md:w-full"
          />
        ))}
      </div>
    </div>
  )
}

// Painel interativo, elemento dominante do bloco 6. Deliberadamente NÃO
// envolvido por `FadeInUp`: o wrapper do FadeInUp deixa um `transform`
// inline no elemento mesmo depois da animação terminar (translateY(0px)
// ainda conta como transform ativo pra CSS), e qualquer transform num
// ancestral quebra `position: sticky` do `SeloFiccao`, prendendo o selo ao
// próprio container animado em vez do viewport. Entrada de scroll deste
// bloco específico fica sem easing de fade, o resto da seção usa FadeInUp
// normalmente. Ver nota de build para o detalhe completo.
export function PainelDemonstrativo() {
  return (
    <div className="relative bg-[#050505] border border-white/[0.07]">
      <SeloFiccao />

      <div className="p-6 md:p-10 flex flex-col gap-14 md:gap-20">
        <div>
          <p className="font-body text-xs text-ash uppercase tracking-[2px] mb-5">
            Como o painel reagiu à peça original
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            <GrupoPersonas titulo="Quem compraria" accent="gold" personas={quemCompraria} />
            <GrupoPersonas titulo="Quem não compraria" accent="ash" personas={quemNaoCompraria} />
          </div>
        </div>

        <div>
          <p className="font-body text-xs text-ash uppercase tracking-[2px] mb-5">As três variações reescritas</p>
          <VariacaoTabs />
        </div>

        <ScorePainel />
      </div>
    </div>
  )
}
