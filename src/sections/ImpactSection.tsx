import { motion } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'

const stats = [
  {
    value: '15+',
    label: 'Years Experience',
    description: 'Across IT support, operations, CRM, business systems, and digital execution.',
  },
  {
    value: '8+',
    label: 'Digital Projects',
    description: 'Websites, CRM flows, brand pages, reservation concepts, and operational tools.',
  },
  {
    value: '4',
    label: 'Core Domains',
    description: 'F&B, digital studio, industrial operations, and HSE administration.',
  },
  {
    value: '2026',
    label: 'HSSE Project',
    description: 'Major Overhaul PLTU Kanci with PT. Koin Pratama.',
  },
]

export function ImpactSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn y={30}>
          <div className="mb-10 max-w-3xl sm:mb-14">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#84B8A6]">
              Impact Snapshot
            </p>
            <h2 className="text-4xl font-black uppercase leading-none text-[#D7E2EA] sm:text-5xl md:text-7xl">
              Built around useful systems, not just nice screens.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-4 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.08} y={24}>
              <motion.div
                whileHover={{
                  y: -10,
                  rotateX: 7,
                  rotateY: index % 2 === 0 ? -7 : 7,
                  scale: 1.025,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className="group relative h-full rounded-[28px] p-px [transform-style:preserve-3d]"
              >
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(132,184,166,0.55),rgba(215,226,234,0.18),rgba(132,184,166,0.06))] opacity-55 blur-[0.5px] transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-full overflow-hidden rounded-[28px] border border-[#D7E2EA]/25 bg-[linear-gradient(145deg,rgba(215,226,234,0.13),rgba(12,12,12,0.98)_48%)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-[#84B8A6]/60 group-hover:shadow-[0_28px_90px_rgba(132,184,166,0.18)] sm:p-6">
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(215,226,234,0.68),transparent)]" />
                  <div className="pointer-events-none absolute -right-16 -top-20 h-36 w-36 rounded-full bg-[#84B8A6]/18 blur-3xl transition-transform duration-500 group-hover:translate-y-4" />
                  <div className="relative [transform:translateZ(34px)]">
                    <div className="text-5xl font-black leading-none text-[#D7E2EA] sm:text-6xl">
                      {stat.value}
                    </div>
                    <div className="mt-4 text-sm font-bold uppercase tracking-widest text-[#84B8A6]">
                      {stat.label}
                    </div>
                    <p className="mt-3 text-sm font-light leading-relaxed text-[rgba(215,226,234,0.74)]">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
