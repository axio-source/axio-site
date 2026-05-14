import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { StatsSection } from '@/components/StatsSection'
import { ManifestoSection } from '@/components/ManifestoSection'
import { ComoFuncionaSection } from '@/components/ComoFuncionaSection'
import { ClientesSection } from '@/components/ClientesSection'
import { FAQSection } from '@/components/FAQSection'
import { CTAFinalSection } from '@/components/CTAFinalSection'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ManifestoSection />
      <ComoFuncionaSection />
      <ClientesSection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
      <WhatsAppFloatingButton />
      <BackToTop />
    </main>
  )
}
