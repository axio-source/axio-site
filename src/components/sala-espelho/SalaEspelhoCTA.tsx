import { Button } from '../ui/Button'

// Canal único das três portas: WhatsApp, sem checkout, sem formulário.
// Mensagens copiadas literalmente de bloco-09-portas.md e bloco-14-cta.md
// (idênticas nos dois arquivos, por desenho). Não reescrever aqui.
const PHONE = '5512981764882'

export type Porta = 'Visita' | 'Sala Própria' | 'Sala Mestra'

const MENSAGENS: Record<Porta, string> = {
  Visita:
    'Oi, vim pela Sala Espelho. Quero comprar uma Visita, já tenho uma peça pronta pra rodar no painel.',
  'Sala Própria':
    'Oi, vim pela Sala Espelho. Quero agendar uma conversa sobre a Sala Própria pra instalar na minha agência.',
  'Sala Mestra':
    'Oi, vim pela Sala Espelho. Quero agendar uma conversa sobre a Sala Mestra, quero entender a licença de revenda pros meus clientes.',
}

interface SalaEspelhoCTAProps {
  porta: Porta
  variant?: 'gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  'aria-label'?: string
}

export function SalaEspelhoCTA({
  porta,
  variant = 'gold',
  size = 'lg',
  className,
  children,
  'aria-label': ariaLabel,
}: SalaEspelhoCTAProps) {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MENSAGENS[porta])}`

  return (
    <Button variant={variant} size={size} href={href} external className={className} aria-label={ariaLabel}>
      {children}
    </Button>
  )
}
