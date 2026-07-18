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
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Axio' }],
  },
}

export default function MentoriaPage() {
  return (
    <main>
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
