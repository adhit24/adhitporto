import { AboutSection } from './sections/AboutSection'
import { AboutMeStackSection } from './sections/AboutMeStackSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ImpactSection } from './sections/ImpactSection'
import { MarqueeSection } from './sections/MarqueeSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ServicesSection } from './sections/ServicesSection'
import { TimelineSection } from './sections/TimelineSection'
import { WorkWithMeSection } from './sections/WorkWithMeSection'

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <AboutMeStackSection />
      <ImpactSection />
      <TimelineSection />
      <ServicesSection />
      <WorkWithMeSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}
