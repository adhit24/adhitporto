import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from '../components/FadeIn'

type TimelineItem = {
  range: string
  role: string
  detail: string
  href?: string
  tags?: string[]
}

const items: TimelineItem[] = [
  {
    range: '2026',
    role: 'General Skill — HSSE Department, PT. Koin Pratama',
    href: 'https://www.ptkoin.com/en/koin.html',
    detail:
      'Assigned to the Major Overhaul PLTU Kanci project, supporting HSSE administration and operational coordination with organized permit workflows, reporting control, field documentation, and practical site-to-office execution.',
    tags: ['Major Overhaul', 'PLTU Kanci', 'HSSE Admin'],
  },
  {
    range: '2020',
    role: 'Founder — Kinaryaloka Digital Studio',
    href: 'https://www.kinaryaloka.com/',
    detail:
      'Founded Kinaryaloka during the 2020 disruption to help local businesses move their presence and customer touchpoints into digital channels. Built practical websites and digital foundations for SMEs.',
  },
  {
    range: '2019 — Present',
    role: 'Founder & Business Owner — Rasa Kopi',
    href: 'https://raskop.net',
    detail:
      'Built Rasa Kopi from the ground up and continue to lead operations, CRM, digital presence, and customer experience across the business. The brand is also a live laboratory for testing systems in the real world.',
  },
  {
    range: '2015 — 2018',
    role: 'Project Analyst — PT Sucofindo, Cirebon',
    href: 'https://www.sucofindo.co.id/',
    detail:
      'Based in Cirebon, coordinated project delivery end-to-end: translating business requirements into execution plans, syncing teams, tracking progress, and keeping documentation aligned until the output was done and done right.',
    tags: ['Cirebon', 'Project Delivery', 'Documentation'],
  },
  {
    range: '2008 — 2015',
    role: 'IT Support & Operations — PT. Globalindo Jaya Perdana | TBBM UPMS 3 PT. Pertamina',
    href: 'https://itbalongan.emansinam.com/',
    detail:
      'Worked through vendor PT. Globalindo Jaya Perdana at TBBM UPMS 3 PT. Pertamina, supporting IT operations, troubleshooting, user support, and operational systems for a high-reliability fuel terminal environment.',
    tags: ['Vendor Support', 'TBBM UPMS 3', 'IT Operations'],
  },
]

const educationItems: TimelineItem[] = [
  {
    range: '1998 — 2001',
    role: 'SMUI Al-Azhar 5 Cirebon',
    detail:
      'Completed senior high school education in Cirebon, building the early foundation for communication, discipline, and creative curiosity.',
  },
  {
    range: '2001 — 2005',
    role: 'UNPAD | F.Kom | Broadcasting 2005',
    detail:
      'Studied communication and broadcasting at Universitas Padjadjaran, shaping a practical eye for storytelling, media, audience, and presentation.',
  },
]

export function TimelineSection() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'education'>('timeline')

  return (
    <section id="timeline" className="bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36">
      <div className="mb-10 flex flex-col items-center gap-6 sm:mb-14 md:mb-20">
        <h2 className="hero-heading text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">Timeline</h2>
        <div className="relative flex rounded-full border border-[#D7E2EA]/20 bg-[#141414]/80 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md" role="tablist" aria-label="Timeline sections">
          {(['timeline', 'education'] as const).map((tab) => (
            <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className="relative z-10 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D7E2EA]/70 transition-colors hover:text-[#D7E2EA] sm:px-7 sm:py-2.5">
              {tab}
              {activeTab === tab && <motion.span layoutId="active-timeline-tab" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#84B8A6] to-[#D7E2EA]/80 shadow-[0_0_24px_rgba(132,184,166,0.35)]" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
      {activeTab === 'timeline' ? <motion.div key="timeline" role="tabpanel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }} className="mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-[#D7E2EA]/20 sm:left-4" />

          <div className="flex flex-col gap-10 sm:gap-12 md:gap-14">
            {items.map((item, i) => (
              <FadeIn key={item.range} delay={i * 0.08} y={30}>
                <div className="relative pl-10 sm:pl-12">
                  <div className="absolute left-2 top-2 h-3 w-3 rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C] sm:left-3" />

                  <div className="rounded-[28px] border border-[#D7E2EA]/25 bg-[linear-gradient(135deg,rgba(215,226,234,0.08),rgba(12,12,12,0.96)_42%)] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#D7E2EA]/45 sm:px-8 sm:py-7">
                    <div className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70">
                      {item.range}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <div className="text-lg font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-xl">
                        {item.role}
                      </div>
                      {item.href && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[#D7E2EA]/25 px-3 py-0.5 text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/60 transition-all duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA]"
                        >
                          Visit ↗
                        </a>
                      )}
                    </div>

                    <div className="mt-3 max-w-3xl text-[#D7E2EA]/80 [font-size:clamp(0.95rem,1.4vw,1.2rem)] leading-relaxed">
                      {item.detail}
                    </div>

                    {item.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#84B8A6]/40 bg-[#84B8A6]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/85"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.div> : <motion.div key="education" role="tabpanel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }} className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2">
          {educationItems.map((item, i) => (
            <FadeIn key={item.range} delay={i * 0.08} y={30}>
              <div className="group relative h-full overflow-hidden rounded-[28px] border border-[#D7E2EA]/25 bg-[linear-gradient(135deg,rgba(52,108,91,0.26),rgba(12,12,12,0.96)_48%)] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#84B8A6]/70 hover:shadow-[0_24px_70px_rgba(52,108,91,0.2)] sm:px-8 sm:py-7">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#84B8A6]/15 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70">{item.range}</div>
                  <div className="mt-2 text-lg font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-xl">{item.role}</div>
                  <div className="mt-3 text-[#D7E2EA]/80 [font-size:clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed">{item.detail}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </motion.div>}
      </AnimatePresence>
    </section>
  )
}
