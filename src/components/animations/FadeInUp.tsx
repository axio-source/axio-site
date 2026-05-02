'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface FadeInUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function FadeInUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeInUpProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
