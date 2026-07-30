export interface Persona {
  nome: string
  papel: string
  veredito: 'sim' | 'nao'
  objecao: string
}

// Cartão individual do elenco. Puramente apresentacional (sem estado),
// usado tanto no carrossel mobile quanto na coluna desktop de
// `PainelDemonstrativo.tsx`. O prop `className` existe só para o pai
// injetar a largura mínima do snap-scroll em mobile sem duplicar o resto
// do estilo do cartão.
export function PersonaCard({ nome, papel, veredito, objecao, className = '' }: Persona & { className?: string }) {
  const sim = veredito === 'sim'

  return (
    <div
      className={`bg-surface border border-white/[0.07] p-6 flex flex-col gap-3 snap-start ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="font-display text-lg text-white leading-tight">{nome}</h4>
          <p className="font-body text-xs text-ash uppercase tracking-[1.5px] mt-1">{papel}</p>
        </div>
        <span
          className={`flex-shrink-0 font-display text-[11px] tracking-[1.5px] uppercase px-2.5 py-1 border ${
            sim ? 'border-gold text-gold' : 'border-white/25 text-white/70'
          }`}
        >
          {sim ? 'Compraria' : 'Não compraria'}
        </span>
      </div>

      <p className="font-body text-sm text-white/80 leading-relaxed">
        <span className="text-ash" aria-hidden="true">
          &ldquo;
        </span>
        {objecao}
        <span className="text-ash" aria-hidden="true">
          &rdquo;
        </span>
      </p>
    </div>
  )
}
