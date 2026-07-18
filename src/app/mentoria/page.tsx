import type { Metadata } from 'next'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { Footer } from '@/components/Footer'
import { MentoriaNavbar } from '@/components/mentoria/MentoriaNavbar'
import { MentoriaHero } from '@/components/mentoria/MentoriaHero'
import { CaminhosSection } from '@/components/mentoria/CaminhosSection'
import { MecanismoSection } from '@/components/mentoria/MecanismoSection'
import { ProvaRadicalSection } from '@/components/mentoria/ProvaRadicalSection'
import { StackSection } from '@/components/mentoria/StackSection'
import { EncontrosSection } from '@/components/mentoria/EncontrosSection'
import { ProvaSocialSection } from '@/components/mentoria/ProvaSocialSection'
import { RodrigoSection } from '@/components/mentoria/RodrigoSection'
import { ParaQuemSection } from '@/components/mentoria/ParaQuemSection'
import { TiersSection } from '@/components/mentoria/TiersSection'
import { GarantiaSection } from '@/components/mentoria/GarantiaSection'
import { UrgenciaSection } from '@/components/mentoria/UrgenciaSection'
import { MentoriaFAQ } from '@/components/mentoria/MentoriaFAQ'
import { FinalSection } from '@/components/mentoria/FinalSection'

export const metadata: Metadata = {
  title: 'Mentoria IA Implantada: sua empresa rodando com IA em 4 encontros | Axio',
  description:
    'Não é curso. Em 4 encontros você sai com assistente de IA próprio, processo automatizado e a conta de IA auditada. Garantia de implementação: ou continuo de graça até rodar. 12 vagas simultâneas.',
  alternates: {
    canonical: 'https://axio.gold/mentoria',
  },
  openGraph: {
    title: 'IA Implantada: sua empresa rodando com IA em 4 encontros',
    description:
      'Não é curso. Assistente próprio, processo automatizado e conta de IA auditada, com garantia de implementação. 12 vagas simultâneas.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Axio',
    url: 'https://axio.gold/mentoria',
  },
}

const mentoriaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://axio.gold/mentoria#service',
  name: 'Mentoria IA Implantada',
  serviceType: 'Mentoria de implementação de IA para empresas',
  description:
    'Programa de 4 encontros em que o dono da empresa sai com assistente de IA próprio treinado no negócio, um processo automatizado e a conta de IA auditada. Não é curso: é implementação, com garantia de continuar de graça até rodar.',
  url: 'https://axio.gold/mentoria',
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
      name: 'Em Grupo',
      description: 'Os 4 encontros ao vivo em grupo, com stack completo e implementação guiada no seu negócio.',
      price: '6000',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://axio.gold/mentoria',
    },
    {
      '@type': 'Offer',
      name: 'Individual',
      description: 'Os 4 encontros 1:1 na sua agenda, com implementação feita junto, processo por processo.',
      price: '12000',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://axio.gold/mentoria',
    },
    {
      '@type': 'Offer',
      name: 'Na Empresa',
      description: 'Implementação dentro da operação com o time, diagnóstico Receita e Tempo e processo crítico rodando.',
      price: '60000',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://axio.gold/mentoria',
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://axio.gold' },
    { '@type': 'ListItem', position: 2, name: 'Mentoria', item: 'https://axio.gold/mentoria' },
  ],
}

export default function MentoriaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mentoriaSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ScrollProgress />
      <MentoriaNavbar />
      <MentoriaHero />
      <CaminhosSection />
      <MecanismoSection />
      <ProvaRadicalSection />
      <StackSection />
      <EncontrosSection />
      <ProvaSocialSection />
      <RodrigoSection />
      <ParaQuemSection />
      <TiersSection />
      <GarantiaSection />
      <UrgenciaSection />
      <MentoriaFAQ />
      <FinalSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
