'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const PHONE = '5512981764882'

// Tracking do canal de parceiros: /mentoria?ref=<handle> injeta o handle
// na mensagem do WhatsApp ("Vim pelo @handle"), que é o registro de atribuição.
function buildHref(plano?: string, ref?: string | null) {
  let msg = plano
    ? `Olá, Rodrigo. Quero o plano ${plano} da mentoria IA Implantada.`
    : 'Olá, Rodrigo. Quero minha vaga na mentoria IA Implantada.'
  if (ref) msg += ` Vim pelo @${ref}.`
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
}

interface MentoriaCTAProps {
  children: React.ReactNode
  plano?: string
  variant?: 'gold' | 'ghost'
  size?: 'sm' | 'lg' | 'xl'
  className?: string
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center text-center font-display tracking-widest uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px]'

const variants = {
  gold: 'bg-gold text-black hover:bg-gold-dark',
  ghost: 'bg-transparent text-white border border-white/50 hover:bg-white/10',
}

const sizes = {
  sm: 'px-6 py-3 text-sm',
  lg: 'px-10 py-5 text-lg',
  xl: 'w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 text-xl md:text-2xl',
}

export function MentoriaCTA({
  children,
  plano,
  variant = 'gold',
  size = 'lg',
  className,
  'aria-label': ariaLabel,
}: MentoriaCTAProps) {
  const [href, setHref] = useState(() => buildHref(plano, null))

  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get('ref')
    if (ref) setHref(buildHref(plano, ref.replace(/[^\w.]/g, '')))
  }, [plano])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
