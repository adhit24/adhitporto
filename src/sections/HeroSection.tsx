import { FadeIn } from '../components/FadeIn'
import { ContactButton } from '../components/ContactButton'
import { Magnet } from '../components/Magnet'
import { Download } from 'lucide-react'

const portraitUrl = '/avatar.png'

export function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        aria-label="Primary navigation"
        className="flex items-center justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] sm:text-base md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]"
      >
        <a href="#about" className="transition-opacity duration-200 hover:opacity-70">
          About
        </a>
        <a href="#services" className="transition-opacity duration-200 hover:opacity-70">
          Services
        </a>
        <a href="#projects" className="transition-opacity duration-200 hover:opacity-70">
          Projects
        </a>
        <a
          href="mailto:adhit24@gmail.com"
          className="transition-opacity duration-200 hover:opacity-70"
        >
          Contact
        </a>
      </FadeIn>

      <div className="relative flex flex-1 flex-col">
        <FadeIn delay={0.15} y={40} className="mt-6 w-full overflow-hidden sm:mt-4 md:-mt-5">
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, I&apos;m Adhit
          </h1>
        </FadeIn>

        <FadeIn
          delay={0.6}
          y={30}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="pointer-events-auto w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <div className="flex items-center justify-center">
                <img
                  src={portraitUrl}
                  alt="Avatar"
                  className="block h-auto w-full select-none object-contain object-center"
                />
              </div>
            </Magnet>
          </div>
        </FadeIn>

        <div className="mt-auto px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
          <div className="flex items-end justify-between">
            <FadeIn
              delay={0.35}
              y={20}
              as="p"
              className="max-w-[160px] text-[#D7E2EA] [font-size:clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase tracking-wide leading-snug sm:max-w-[220px] md:max-w-[260px]"
            >
              I build business websites, CRM workflows, and operational systems for brands that need clarity, control, and growth.
            </FadeIn>

            <FadeIn delay={0.5} y={20} className="flex flex-col items-end gap-3 sm:flex-row">
              <a
                href="/adhit-nugraha-profile.txt"
                download
                className="hidden items-center gap-2 rounded-full border border-[#D7E2EA]/35 px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:inline-flex"
              >
                <Download className="h-4 w-4" />
                Profile
              </a>
              <ContactButton href="mailto:adhit24@gmail.com" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
