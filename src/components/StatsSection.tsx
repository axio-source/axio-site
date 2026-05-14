'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 30, suffix: ' dias', label: 'Para impacto mensurável' },
  { value: 7,  suffix: 'x',    label: 'Aumento de produtividade' },
  { value: 49, suffix: '%',    label: 'Crescimento médio de receita' },
  { value: 12, suffix: 'h/sem', label: 'Devolvidas por automação', prefix: '+' },
]

function Counter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || value === 0) {
      setCount(value)
      return
    }
    const duration = 1800
    const start = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round(easeOut(p) * value))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <div ref={ref} className="font-display text-[clamp(28px,7.5vw,64px)] leading-none text-gold mb-2" style={{ textShadow: '0 0 40px rgba(255,192,0,.3)' }}>
      {prefix}{count}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section
      className="border-y py-14"
      style={{ background: '#1a1a1a', borderColor: 'rgba(255,192,0,.18)' }}
      aria-label="Indicadores"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center px-6 py-2"
              style={{ borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              <p className="font-body text-xs text-ash tracking-[2px] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
