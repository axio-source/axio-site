// Selo de demonstração fictícia, preso ao painel.
//
// Requisito não negociável (wireframe, bloco 6): o selo precisa continuar
// visível enquanto QUALQUER parte do painel estiver em tela, não só na
// intro do bloco. `position: sticky` dentro do container do painel resolve
// isso de verdade: o selo nasce no topo do painel e gruda no topo do
// viewport (abaixo da navbar fixa, h-16/h-20 no precedente) enquanto o
// resto do painel rola por baixo dele, soltando só quando o painel termina.
//
// Importante para quem mexer aqui depois: este componente não pode virar
// filho de nenhum ancestral com `transform` ativo (ex.: o wrapper do
// FadeInUp). Um transform em qualquer ancestral vira containing block e
// quebra o sticky, fazendo o selo grudar no painel inteiro em vez do
// viewport. Por isso `PainelDemonstrativo.tsx` não é envolvido por
// `FadeInUp`. Ver nota de build.
export function SeloFiccao() {
  return (
    <div className="sticky top-16 md:top-20 z-20 w-full bg-black border-y border-gold/50 px-4 sm:px-6 py-3">
      <p className="flex items-center gap-3 font-body text-xs sm:text-sm text-white/90 leading-snug">
        <span className="w-2 h-2 bg-gold flex-shrink-0" aria-hidden="true" />
        <span>
          <span className="text-gold font-semibold">Demonstração com caso fictício:</span>{' '}
          a Agência Bússola não existe.
        </span>
      </p>
    </div>
  )
}
