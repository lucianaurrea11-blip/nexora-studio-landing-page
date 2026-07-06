import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Services } from '@/components/services'
import { WhyChoose } from '@/components/why-choose'
import { Process } from '@/components/process'
import { FeaturedProject } from '@/components/featured-project'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { CtaSection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { FloatingCta } from '@/components/floating-cta'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChoose />
        <Process />
        <FeaturedProject />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
