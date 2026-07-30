import type { Metadata } from 'next'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { Footer } from '@/components/Footer'
import { SalaEspelhoNavbar } from '@/components/sala-espelho/SalaEspelhoNavbar'
import { SalaEspelhoHero } from '@/components/sala-espelho/SalaEspelhoHero'
import { AvatarSection } from '@/components/sala-espelho/AvatarSection'
import { AgitacaoSection } from '@/components/sala-espelho/AgitacaoSection'
import { InimigoSection } from '@/components/sala-espelho/InimigoSection'
import { MecanismoSection } from '@/components/sala-espelho/MecanismoSection'
import { DemonstracaoSection } from '@/components/sala-espelho/DemonstracaoSection'
import { DiferencaSection } from '@/components/sala-espelho/DiferencaSection'
import { HeroisSection } from '@/components/sala-espelho/HeroisSection'
import { PortasSection } from '@/components/sala-espelho/PortasSection'
import { RazaoSection } from '@/components/sala-espelho/RazaoSection'
import { GarantiaSection } from '@/components/sala-espelho/GarantiaSection'
import { ObjecoesSection } from '@/components/sala-espelho/ObjecoesSection'
import { NaoFazSection } from '@/components/sala-espelho/NaoFazSection'
import { CTADuploSection } from '@/components/sala-espelho/CTADuploSection'
import { PSSection } from '@/components/sala-espelho/PSSection'

export const metadata: Metadata = {
  title: 'Sala Espelho: o painel que reage à sua peça antes da verba subir | Axio',
  description:
    'Descubra antes de gastar. O painel reage à sua peça no mesmo dia: veredito por persona, três variações reescritas e o score de qual rodar primeiro. Três portas, preço exato: R$1.197, R$12.873 e R$70.793.',
  alternates: {
    canonical: 'https://axio.gold/sala-espelho',
  },
  openGraph: {
    title: 'Sala Espelho: descubra antes de gastar a verba do cliente',
    description:
      'O painel reage à sua peça no mesmo dia, com veredito por persona e o score de qual variação rodar. Preço exato nas três portas.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Axio',
    url: 'https://axio.gold/sala-espelho',
  },
}

const salaEspelhoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://axio.gold/sala-espelho#service',
  name: 'Sala Espelho',
  serviceType: 'Teste de peça de marketing contra um painel de personas antes de veicular a verba',
  description:
    'A agência entrega a peça que já ia publicar e recebe, no mesmo dia, a reação de um painel de personas calibrado pro nicho da sua carteira: objeção por persona, três variações reescritas e um score de qual rodar primeiro.',
  url: 'https://axio.gold/sala-espelho',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  provider: {
    '@type': 'Organization',
    name: 'Axio',
    url: 'https://axio.gold',
    logo: 'https://axio.gold/axio-logo.png',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Visita',
      description: 'Uma peça rodada no painel, como convidada, sem elenco calibrado nem uso ilimitado.',
      price: '1197',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: 'https://axio.gold/sala-espelho',
    },
    {
      '@type': 'Offer',
      name: 'Sala Própria',
      description: 'A sala instalada dentro da agência, com elenco calibrado, uso ilimitado e relatório com a marca da própria agência.',
      price: '12873',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://axio.gold/sala-espelho',
    },
    {
      '@type': 'Offer',
      name: 'Sala Mestra',
      description: 'Tudo da Sala Própria, com elenco para vários nichos e licença de revenda do relatório aos clientes da agência.',
      price: '70793',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://axio.gold/sala-espelho',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://axio.gold' },
    { '@type': 'ListItem', position: 2, name: 'Sala Espelho', item: 'https://axio.gold/sala-espelho' },
  ],
}

export default function SalaEspelhoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salaEspelhoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollProgress />
      <SalaEspelhoNavbar />
      <SalaEspelhoHero />
      <AvatarSection />
      {/* Ponto de inserção futuro: <ProvaRealSection /> entra aqui, entre os
          blocos 2 e 3, quando a primeira rodada real existir (wireframe.md,
          seção "Encaixe da prova real"). Não construído agora. */}
      <AgitacaoSection />
      <InimigoSection />
      <MecanismoSection />
      <DemonstracaoSection />
      <DiferencaSection />
      <HeroisSection />
      <PortasSection />
      <RazaoSection />
      <GarantiaSection />
      <ObjecoesSection />
      <NaoFazSection />
      <CTADuploSection />
      <PSSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
