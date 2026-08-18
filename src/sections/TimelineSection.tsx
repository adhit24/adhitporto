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
  return (
    <section id="timeline" className="bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-36">
      <h2 className="hero-heading mb-10 text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20">
        Timeline
      </h2>

      <div className="mx-auto max-w-5xl">
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
      </div>

      <div className="mx-auto mt-24 max-w-5xl sm:mt-28 md:mt-32">
        <h3 className="mb-10 text-center [font-size:clamp(2.25rem,7vw,96px)] font-black uppercase leading-none text-[#D7E2EA]">
          Education
        </h3>

        <div className="grid gap-5 md:grid-cols-2">
          {educationItems.map((item, i) => (
            <FadeIn key={item.range} delay={i * 0.08} y={30}>
              <div className="h-full rounded-[28px] border border-[#D7E2EA]/25 bg-[linear-gradient(135deg,rgba(52,108,91,0.22),rgba(12,12,12,0.96)_48%)] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-[#D7E2EA]/45 sm:px-8 sm:py-7">
                <div className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70">
                  {item.range}
                </div>
                <div className="mt-2 text-lg font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-xl">
                  {item.role}
                </div>
                <div className="mt-3 text-[#D7E2EA]/80 [font-size:clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed">
                  {item.detail}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
