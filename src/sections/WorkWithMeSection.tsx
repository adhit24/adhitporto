import { Download, MessageCircle } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'

const engagementTypes = [
  {
    name: 'Website Build',
    scope: 'Brand website, portfolio, company profile, landing page, and project presentation.',
    model: 'Project-based',
  },
  {
    name: 'CRM & Data System',
    scope: 'Customer records, segmentation, reporting flow, dashboard logic, and admin workflow.',
    model: 'System build',
  },
  {
    name: 'HSE Administrative System',
    scope: 'Permit tracking, inspection records, document control, and field reporting support.',
    model: 'Project support',
  },
  {
    name: 'Digital Audit',
    scope: 'Review current website, customer journey, operational bottlenecks, and quick-win roadmap.',
    model: 'Consultation',
  },
]

export function WorkWithMeSection() {
  return (
    <section className="bg-[#F6F8F5] px-5 pb-20 sm:px-8 sm:pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-6xl border-t border-[#0C0C0C]/15 pt-16 sm:pt-20">
        <FadeIn y={30}>
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#346C5B]">
                Work With Me
              </p>
              <h2 className="text-4xl font-black uppercase leading-none text-[#0C0C0C] sm:text-5xl md:text-7xl">
                Clear scope, practical build, cleaner operations.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/adhit-nugraha-profile.txt"
                download
                className="inline-flex items-center gap-2 rounded-full border border-[#0C0C0C]/25 px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#0C0C0C] transition-all duration-200 hover:border-[#0C0C0C] hover:bg-white"
              >
                <Download className="h-4 w-4" />
                Download Profile
              </a>
              <a
                href="https://wa.me/6281357662424"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0C0C0C] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:bg-[#346C5B]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {engagementTypes.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.08} y={24}>
              <div className="h-full rounded-[28px] border border-[#0C0C0C]/12 bg-white/65 p-5 transition-all duration-300 hover:border-[#346C5B]/50 hover:bg-white sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#0C0C0C]">
                    {item.name}
                  </h3>
                  <span className="shrink-0 rounded-full border border-[#346C5B]/25 bg-[#346C5B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#346C5B]">
                    {item.model}
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0C0C0C]/62 sm:text-base">
                  {item.scope}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
