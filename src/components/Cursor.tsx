'use client'

import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    // Only on pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const animRing = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.12
      pos.current.ry += (my - pos.current.ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top = pos.current.ry + 'px'
      }
      rafRef.current = requestAnimationFrame(animRing)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div id="cursor" aria-hidden="true">
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-ring" ref={ringRef} />
    </div>
  )
}
