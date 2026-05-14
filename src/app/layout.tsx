import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Axio — Consultoria de Receita e Automação para PMEs',
  description:
    'A Axio identifica onde sua empresa está perdendo receita e o que pode ser automatizado hoje. Converse com a equipe.',
  metadataBase: new URL('https://axio.gold'),
  icons: {
    icon: '/axio-logo.png',
    apple: '/axio-logo.png',
  },
  openGraph: {
    title: 'Axio — Você deixa dinheiro na mesa todo mês. A Axio encontra onde.',
    description:
      'Consultoria empresarial que aumenta faturamento e elimina gargalos com método.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Axio',
    url: 'https://axio.gold',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Axio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axio — Consultoria de Receita e Automação',
    description: 'Consultoria empresarial que aumenta faturamento e elimina gargalos.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Axio',
  description:
    'Consultoria empresarial focada em aumentar faturamento e automatizar processos de PMEs',
  url: 'https://axio.com.br',
  logo: 'https://axio.com.br/axio-logo.jpg',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body bg-black text-white antialiased">{children}</body>
    </html>
  )
}
