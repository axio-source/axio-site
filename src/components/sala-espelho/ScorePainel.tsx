'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Criterio {
  nome: string
  peso: number
  notas: [number, number, number]
}

// Matriz da casa, `interno/exemplo/agencia-bussola/04-score.md`. Pesos são
// ativo proprietário da metodologia (peso do critério) e por isso não são
// renderizados nesta página pública. O peso segue no dado-fonte, só não
// aparece na tela. O índice comparativo no fim NUNCA leva símbolo de
// porcentagem (guardrail: pode ser lido como "converte X").
const criterios: Criterio[] = [
  { nome: 'Aderência a persona-fit', peso: 30, notas: [8.0, 7.5, 7.0] },
  { nome: 'Cobertura das objeções do painel', peso: 25, notas: [8.0, 8.5, 7.0] },
  { nome: 'Clareza da promessa', peso: 20, notas: [8.5, 8.0, 8.5] },
  { nome: 'Prova e credibilidade', peso: 15, notas: [6.0, 7.5, 6.0] },
  { nome: 'Força do CTA', peso: 10, notas: [8.5, 8.0, 8.5] },
]

const labels = ['Dor', 'Prova', 'Oferta']
const indices = [78, 79, 73]

// A fonte (04-score.md) é explícita: o topo está tecnicamente empatado
// (78 contra 79, dentro da margem de ruído da própria matriz) e isso NÃO
// deve ser lido como "V2 vence". A recomendação prática da fonte é rodar a
// V1 primeiro por depender menos de uma prova que este caso ainda não tem,
// preparando a V2 para assumir quando existir case real. Por isso a
// variação marcada como recomendada aqui é a V1 (índice 78), não a de
// maior índice bruto (V2, 79). Ver nota de build.
const recomendada = 0

export function ScorePainel() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <h3 className="font-display text-2xl md:text-3xl text-white uppercase leading-tight mb-6">
        O painel falou: score comparativo
      </h3>

      {/* Desktop: matriz completa */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse" aria-label="Matriz de score comparativo entre as três variações">
          <thead>
            <tr>
              <th className="text-left font-body text-xs text-ash uppercase tracking-[1.5px] pb-4 pr-4 font-normal">
                Critério
              </th>
              {labels.map((label, i) => (
                <th key={label} className="text-center pb-4 px-3 font-normal">
                  <span className="block font-display text-lg text-white uppercase tracking-wide">{label}</span>
                  {i === recomendada && (
                    <span className="inline-block mt-2 bg-gold text-black font-display text-[10px] tracking-widest px-2 py-0.5">
                      Recomendada pela sala
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criterios.map((c) => (
              <tr key={c.nome} className="border-t border-white/[0.07]">
                <td className="py-3 pr-4 font-body text-sm text-white/70">
                  {c.nome}
                </td>
                {c.notas.map((n, i) => (
                  <td
                    key={i}
                    className={`text-center py-3 px-3 font-body text-sm ${
                      i === recomendada ? 'text-gold' : 'text-white/80'
                    }`}
                  >
                    {n.toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t-2 border-white/20">
              <td className="py-4 pr-4 font-display text-sm text-white uppercase tracking-wide">
                Índice comparativo
              </td>
              {indices.map((idx, i) => (
                <td
                  key={i}
                  className={`text-center py-4 px-3 font-display text-3xl ${
                    i === recomendada ? 'text-gold' : 'text-white'
                  }`}
                >
                  {idx}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile: índice empilhado, detalhe opcional */}
      <div className="md:hidden flex flex-col gap-3">
        {labels.map((label, i) => (
          <div
            key={label}
            className={`flex items-center justify-between p-4 border ${
              i === recomendada ? 'border-gold bg-gold/5' : 'border-white/[0.07] bg-surface'
            }`}
          >
            <div>
              <p className="font-display text-lg text-white uppercase tracking-wide">{label}</p>
              {i === recomendada && (
                <span className="inline-block mt-1.5 bg-gold text-black font-display text-[10px] tracking-widest px-2 py-0.5">
                  Recomendada pela sala
                </span>
              )}
            </div>
            <p className={`font-display text-3xl ${i === recomendada ? 'text-gold' : 'text-white'}`}>{indices[i]}</p>
          </div>
        ))}

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls="score-criterios-detalhe"
          className="min-h-[44px] mt-1 px-6 font-display uppercase tracking-widest text-sm text-white border border-white/50 hover:bg-white/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          {expanded ? 'Ocultar critérios' : 'Ver critérios'}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id="score-criterios-detalhe"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-5 pt-4">
                {labels.map((label, vi) => (
                  <div key={label}>
                    <p className="font-display text-sm text-white uppercase tracking-wide mb-2">{label}</p>
                    <ul className="flex flex-col gap-1.5">
                      {criterios.map((c) => (
                        <li key={c.nome} className="flex justify-between gap-3 font-body text-xs text-white/70">
                          <span>{c.nome}</span>
                          <span className="text-white flex-shrink-0">{c.notas[vi].toFixed(1)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="border-l-2 border-gold pl-4 md:pl-6 mt-8 max-w-3xl">
        <p className="font-body text-sm md:text-base text-white/85 leading-relaxed">
          Esse número é sinal relativo entre as três variações, nunca previsão de conversão de mercado. Mostra qual
          peça a sala prefere ver rodando primeiro, não quanto ela vai converter.
        </p>
        <p className="font-body text-sm text-ash leading-relaxed mt-3">
          V1 e V2 ficam tecnicamente empatadas, 78 contra 79, dentro da margem de ruído da própria matriz. A sala
          recomenda rodar a V1 primeiro porque depende menos de uma prova que este caso ainda não tem. A V2 tende a
          ultrapassar assim que existir um case real com número.
        </p>
      </div>
    </div>
  )
}
