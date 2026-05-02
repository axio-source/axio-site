'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/Button'

const WA_HREF =
  'https://wa.me/5512981764882?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Axio.'

const links = [
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#clientes',      label: 'Clientes' },
  { href: '#faq',           label: 'FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/[0.07]' : 'bg-transparent'
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20"
          aria-label="Navegação principal"
        >
          <a href="/" aria-label="Axio — página inicial">
            <Image src="/axio-logo.png" alt="Axio" width={52} height={52} className="object-contain" priority />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-xs text-ash tracking-[2px] uppercase hover:text-white transition-colors duration-200 relative group pb-0.5"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="ghost" size="sm" href={WA_HREF} external aria-label="Falar com a Axio">
              FALAR COM A AXIO
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-1 z-[60]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-transform duration-300 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-5xl text-white uppercase tracking-widest hover:text-gold transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
        <a
          href={WA_HREF}
          onClick={() => setOpen(false)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-display text-5xl text-gold uppercase tracking-widest text-center"
        >
          Falar com a Axio
        </a>
      </div>
    </>
  )
}
