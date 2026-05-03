import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const socialLinks = [
  { icon: Linkedin,  href: 'https://linkedin.com/in/adhitya-nugraha', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/adhit24',            label: 'Instagram' },
  { icon: Mail,      href: 'mailto:adhit24@gmail.com',                 label: 'Email' },
  { icon: Github,    href: 'https://github.com/adhit24',               label: 'GitHub' },
]

const marqueeText =
  'READY WHEN YOU ARE · LET’S BUILD SOMETHING · OPEN TO COLLABORATE · '

export function FooterSection() {
  return (
    <>
      {/* ── CTA / Closing Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0C0C0C] px-5 pt-24 pb-0 sm:px-8 sm:pt-32 md:px-10 md:pt-40">

        {/* Ghost background text */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden">
          <p className="text-center [font-size:clamp(8rem,30vw,26rem)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]/[0.03]">
            READY
          </p>
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Availability badge */}
          <FadeIn delay={0} y={20}>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400">
                Available for work
              </span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.1} y={40}>
            <h2 className="mb-6 [font-size:clamp(3rem,12vw,130px)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
              Got an Idea?
            </h2>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.2} y={30}>
            <p className="mx-auto mb-10 max-w-md [font-size:clamp(0.95rem,1.8vw,1.3rem)] font-light leading-relaxed text-[#D7E2EA]/55">
              I&apos;m open to freelance projects, collaborations, and interesting problems worth solving.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn delay={0.3} y={20}>
            <a
              href="mailto:adhit24@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-[#D7E2EA] px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[#0C0C0C] transition-all duration-300 hover:scale-105 hover:bg-white sm:text-base"
            >
              <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              Start a Project
            </a>
          </FadeIn>
        </div>

        {/* Scrolling marquee strip */}
        <div className="mt-24 overflow-hidden border-t border-[#D7E2EA]/10 py-6">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: '-50%' }}
            initial={{ x: 0 }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
          >
            <span className="shrink-0 [font-size:clamp(0.9rem,2.2vw,1.8rem)] font-black uppercase tracking-widest text-[#D7E2EA]/20">
              {marqueeText}
            </span>
            <span className="shrink-0 [font-size:clamp(0.9rem,2.2vw,1.8rem)] font-black uppercase tracking-widest text-[#D7E2EA]/20">
              {marqueeText}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0C0C0C] px-5 pt-12 pb-12 text-center sm:px-8 md:px-10">

        <FadeIn delay={0} y={20}>
          <h3 className="mb-8 [font-size:clamp(1.8rem,6vw,5rem)] font-black uppercase text-[#D7E2EA]">
            Let&apos;s <span className="text-orange-400">Connect!</span>
          </h3>
        </FadeIn>

        <FadeIn delay={0.1} y={15}>
          <div className="mb-10 flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] transition-all duration-200 hover:scale-110 hover:bg-[#D7E2EA]/20"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={10}>
          <p className="text-sm text-[#D7E2EA]/35">
            © 2026 Adhitya Nugraha. Cirebon, Indonesia.
          </p>
        </FadeIn>
      </footer>
    </>
  )
}
