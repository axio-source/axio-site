import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  title: 'Axio — Consultoria de Receita e Automação para Empresas',
  description:
    'A Axio identifica onde sua empresa está perdendo receita e o que pode ser automatizado. Implementamos junto com o seu time. Sem relatório, sem achismo.',
  metadataBase: new URL('https://axio.gold'),
  alternates: {
    canonical: 'https://axio.gold',
  },
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
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Axio',
  description:
    'Consultoria empresarial que aumenta o faturamento e automatiza processos de empresas através de melhoria de receita e eliminação de gargalos operacionais.',
  url: 'https://axio.gold',
  logo: 'https://axio.gold/axio-logo.png',
  founder: {
    '@type': 'Person',
    name: 'Rodrigo Miyashiro',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  knowsAbout: [
    'consultoria de receita',
    'automação de processos',
    'crescimento empresarial',
    'otimização operacional',
    'gestão de empresas mid-market',
  ],
  sameAs: [
    'https://www.linkedin.com/company/axio-gold',
    'https://www.instagram.com/axio.gold/',
  ],
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
      <body className="font-body bg-black text-white antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
