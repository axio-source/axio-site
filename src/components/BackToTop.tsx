'use client'

import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-24 right-6 z-50 w-11 h-11 flex items-center justify-center border text-gold font-display text-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{ background: '#1a1a1a', borderColor: 'rgba(255,192,0,.3)' }}
    >
      ↑
    </button>
  )
}
