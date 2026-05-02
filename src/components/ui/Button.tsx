import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  external?: boolean
  'aria-label'?: string
}

const base =
  'inline-flex items-center justify-center font-display tracking-widest uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 min-h-[44px]'

const variants = {
  gold: 'bg-gold text-black hover:bg-gold-dark',
  ghost: 'bg-transparent text-white border border-white/50 hover:bg-white/10',
}

const sizes = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-8 py-4 text-base',
  lg: 'px-10 py-5 text-lg',
}

export function Button({
  variant = 'gold',
  size = 'md',
  href,
  children,
  className,
  onClick,
  external = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
