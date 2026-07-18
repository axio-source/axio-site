'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MentoriaCTA } from './MentoriaCTA'

// Navbar de página de vendas: sem menu, sem saídas. Logo volta pra home,
// o resto da página só tem um destino.
export function MentoriaNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/[0.07]' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20"
        aria-label="Navegação da mentoria"
      >
        <a href="/" aria-label="Axio, página inicial" className="flex items-center gap-3">
          <Image src="/axio-logo.png" alt="Axio" width={44} height={44} className="object-contain" priority />
          <span className="hidden sm:block font-display text-lg text-white tracking-widest">
            IA IMPLANTADA
          </span>
        </a>

        <MentoriaCTA size="sm" aria-label="Quero minha vaga na mentoria">
          QUERO MINHA VAGA
        </MentoriaCTA>
      </nav>
    </header>
  )
}
