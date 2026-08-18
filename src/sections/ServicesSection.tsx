import { motion, type MotionValue, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, BarChart3, Blocks, Compass, Database, Palette, Route, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    number: '01',
    name: 'Business Strategy',
    description: 'Clear, practical planning for growth, operations, and customer experience, backed by data and real-world execution.',
    icon: Compass,
    accent: '#84B8A6',
  },
  {
    number: '02',
    name: 'CRM Specialist',
    description: 'CRM setup, segmentation, automation, and reporting to keep your pipeline clean and your customers engaged.',
    icon: Route,
    accent: '#B8D6C9',
  },
  {
    number: '03',
    name: 'Web Design',
    description: 'Clean, modern, and conversion-focused websites with strong layout, typography, and user experience.',
    icon: Palette,
    accent: '#D6E6DF',
  },
  {
    number: '04',
    name: 'UI/UX Design',
    description: 'Interfaces that feel fast and intuitive, designed around user flows, clarity, and the details that matter.',
    icon: Blocks,
    accent: '#A8C7B8',
  },
  {
    number: '05',
    name: 'Digital Systems',
    description: 'Operational systems and data workflows that reduce manual work and make the business easier to run.',
    icon: Database,
    accent: '#84B8A6',
  },
  {
    number: '06',
    name: 'Operational Data Control',
    description: 'Structured data control for daily operations: tracking, reporting, validation, and dashboards that help teams make cleaner decisions.',
    icon: BarChart3,
    accent: '#B8D6C9',
  },
  {
    number: '07',
    name: 'HSSE Administrative System',
    description: 'HSE document workflows, permit tracking, inspection records, and administrative systems built for clearer compliance and faster coordination.',
    icon: ShieldCheck,
    accent: '#D6E6DF',
  },
]

function ServiceCard({ service, index, progress }: { service: (typeof services)[number]; index: number; progress: MotionValue<number> }) {
  const Icon = service.icon
  const start = index / services.length
  const end = (index + 1) / services.length
  const y = useTransform(progress, [start, end], ['0%', '-115%'])
  const rotate = useTransform(progress, [start, end], [index % 2 === 0 ? 2 : -2, 0])
  const scale = useTransform(progress, [start, end], [1, 0.96])

  return (
    <motion.article
      style={{ y, rotate, scale, zIndex: services.length - index, top: index * 14 }}
      className="absolute inset-x-0 flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-[#D7E2EA]/30 bg-[#111515] p-5 text-[#D7E2EA] shadow-[0_28px_80px_rgba(12,12,12,0.22)] sm:rounded-[38px] sm:p-8 md:rounded-[48px] md:p-10"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: `${service.accent}24` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(215,226,234,0.12),transparent_30%),linear-gradient(135deg,rgba(52,108,91,0.18),transparent_52%)]" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-black leading-none text-[#84B8A6] [font-size:clamp(3.5rem,12vw,9rem)]">{service.number}</span>
        <div className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D7E2EA]/65 sm:px-4 sm:text-xs">
          <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>Service</span>
        </div>
      </div>

      <div className="relative max-w-3xl">
        <h3 className="max-w-2xl text-[clamp(1.7rem,5vw,4.8rem)] font-medium uppercase leading-[0.95] tracking-tight text-[#F6F8F5] md:text-[clamp(1.8rem,3.2vw,3.5rem)]">{service.name}</h3>
        <p className="mt-3 max-w-2xl text-[clamp(0.9rem,1.8vw,1.25rem)] leading-relaxed text-[#D7E2EA]/72 sm:mt-5 md:text-[clamp(0.9rem,1.25vw,1.1rem)]">{service.description}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#84B8A6] sm:mt-8 sm:text-sm">
          <span>Build with intent</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </div>
      </div>
    </motion.article>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative h-[430vh] rounded-t-[40px] bg-[#F6F8F5] px-5 sm:rounded-t-[50px] sm:px-8 md:rounded-t-[60px] md:px-10"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-14 sm:py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#346C5B] sm:text-xs">Capabilities / 07</p>
              <h2 className="text-[clamp(3.2rem,12vw,160px)] font-black uppercase leading-[0.82] tracking-tight text-[#0C0C0C]">Services</h2>
            </div>
            <div className="hidden max-w-[220px] pb-1 text-right text-sm leading-relaxed text-[#0C0C0C]/55 sm:block">
              Strategy, systems, and digital experiences built to move the business forward.
            </div>
          </div>

          <div className="relative h-[min(62vh,590px)] min-h-[320px] w-full [perspective:1200px] sm:h-[min(64vh,620px)]">
            {services.map((service, index) => <ServiceCard key={service.number} service={service} index={index} progress={scrollYProgress} />)}
          </div>

          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#0C0C0C]/45 sm:text-xs">
            <span>Scroll to explore</span>
            <span>{services.length} disciplines / one operating system</span>
          </div>
        </div>
      </div>
    </section>
  )
}
