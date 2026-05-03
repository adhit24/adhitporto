import { FadeIn } from '../components/FadeIn'

type TimelineItem = {
  range: string
  role: string
  detail: string
  href?: string
}

const items: TimelineItem[] = [
  {
    range: '2020',
    role: 'Founder — Kinaryaloka Digital Studio',
    href: 'https://kinaryalokadigital.vercel.app/',
    detail:
      `ok so real talk — it's 2020, the whole world pressed pause, everyone's having an existential crisis, and my brain said "bet, let's start a digital agency." 💀 classic me. built Kinaryaloka to help local businesses not die during COVID — bc apparently while everyone was panic-buying toilet paper, i was out here digitizing studios and SMEs. chaos? absolutely. regrets? zero. accidentally helpful? very much yes. 🫡`,
  },
  {
    range: '2019 — Present',
    role: 'Founder & Business Owner — Rasa Kopi',
    href: 'https://raskop.net',
    detail:
      'Built a coffee brand from scratch. Running ops, CRM, digital presence, and customer experience — from the backend systems to the "vibes" that keep people coming back.',
  },
  {
    range: '2015 — 2018',
    role: 'Project Analyst — PT Sucofindo',
    detail:
      'Coordinated delivery end-to-end: syncing business needs with execution across product owners, devs, and designers until the output was done and done right.',
  },
  {
    range: '2008 — 2015',
    role: 'IT Support & Operations — PT Pertamina',
    detail:
      '7 years managing IT support and operational systems at enterprise scale — keeping things stable, reliable, and running clean.',
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

                  <div className="rounded-[28px] border border-[#D7E2EA]/25 bg-[#0C0C0C] px-6 py-6 sm:px-8 sm:py-7">
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
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
