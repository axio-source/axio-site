'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/Button'

const EASE = [0.16, 1, 0.3, 1] as const
const WA_HREF =
  'https://wa.me/5512981764882?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Axio%20e%20gostaria%20de%20conversar.'

function CharReveal({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()

  if (reduced) return <span className={className}>{text}</span>

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          aria-hidden="true"
          initial={{ opacity: 0, y: 60, skewY: 4 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.03, ease: EASE }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const reduced = useReducedMotion()

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  })

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-center"
      aria-label="Hero"
    >
      {/* Animated gold grid */}
      <div className="hero-grid absolute inset-0" aria-hidden="true" />

      {/* Radial glow */}
      <div className="hero-glow absolute" aria-hidden="true" />

      {/* Side lines */}
      <div className="hero-line hero-line-l absolute" aria-hidden="true" />
      <div className="hero-line hero-line-r absolute" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 px-6 py-32 max-w-5xl mx-auto w-full">

        {/* Logo com float + glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mb-10"
        >
          <Image
            src="/axio-logo.png"
            alt="Axio"
            width={160}
            height={160}
            className="mx-auto object-contain hero-logo-img"
            priority
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p {...fade(0.8)} className="font-body text-[11px] text-gold tracking-[5px] uppercase mb-5">
          Consultoria · Receita · Automação
        </motion.p>

        {/* H1 — char por char */}
        <h1 className="font-display text-[clamp(48px,8.5vw,100px)] leading-[0.92] uppercase mb-8">
          <CharReveal text="VOCÊ DEIXA DINHEIRO NA MESA TODO MÊS." delay={0.9} className="block text-white" />
          <CharReveal text="A AXIO ENCONTRA ONDE." delay={1.15} className="block text-gold" />
        </h1>

        {/* Subheadline */}
        <motion.p {...fade(1.6)} className="font-body text-lg text-ash max-w-xl mx-auto mb-12 leading-relaxed">
          A Axio mapeia onde sua empresa está perdendo receita e o que está
          roubando o tempo da sua equipe. Resolve os dois com método, não com achismo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button variant="gold" size="lg" href={WA_HREF} external>FALAR COM A AXIO</Button>
          <Button variant="ghost" size="lg" href="#como-funciona">COMO FUNCIONA</Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
        <span className="font-body text-[10px] text-ash tracking-[3px] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
