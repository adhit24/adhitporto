import { motion, type MotionValue, useTransform } from 'framer-motion'
import { LiveProjectButton } from '../components/LiveProjectButton'

export interface ProjectData {
  number: string
  category: string
  name: string
  problem: string
  built: string
  result: string
  href?: string
  underDevelopment?: boolean
  hideSecondaryImage?: boolean
  images: {
    col1: string[]
    col2: string
  }
}

export interface ProjectCardProps {
  project: ProjectData
  index: number
  totalCards: number
  progress: MotionValue<number>
}

export default function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const rangeStart = index / totalCards
  const rangeEnd = 1
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])
  return (
    <div
      className="sticky top-3 relative mb-0 flex h-[calc(100svh-1.5rem)] w-full items-start justify-center md:top-24 md:h-[88vh] lg:top-28"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: 0,
          backgroundColor: '#0C0C0C',
          backgroundImage: `linear-gradient(135deg, rgba(12, 12, 12, 0.92), rgba(12, 12, 12, 0.78)), url(${project.images.col2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className="absolute inset-x-0 mx-auto h-full w-full max-w-[1760px] origin-top overflow-hidden rounded-[30px] border-2 border-[#D7E2EA] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,226,234,0.18),transparent_34%),linear-gradient(180deg,rgba(215,226,234,0.08),transparent_42%)]" />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            <span
              className="font-black uppercase leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.category}
              </span>
              <span
                className="font-light tracking-wide text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 2rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 sm:flex-row sm:items-center sm:gap-3">
            {project.underDevelopment && (
              <span className="inline-flex items-center justify-center rounded-full border-2 border-yellow-400/60 px-8 py-3 text-sm font-medium uppercase tracking-widest text-yellow-400/80 sm:px-10 sm:py-3.5 sm:text-base">
                Under Development
              </span>
            )}
            {project.href && (
              <LiveProjectButton href={project.href} target="_blank" rel="noreferrer" />
            )}
          </div>
        </div>

        <div className="relative z-10 mt-3 grid w-full grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-[0.95fr_1.25fr] lg:gap-5">
          <div className="col-span-2 grid w-full grid-cols-2 gap-3 lg:col-span-1 lg:flex lg:flex-col lg:gap-5">
            <img
              src={project.images.col1[0]}
              alt={`${project.name} preview 1`}
              className={`w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px] ${project.hideSecondaryImage ? 'col-span-2 h-[180px] sm:h-[280px] lg:col-span-1 lg:h-full lg:min-h-[260px]' : ''}`}
              style={project.hideSecondaryImage ? undefined : { height: 'clamp(72px, 13vw, 230px)' }}
              loading="lazy"
            />
            {!project.hideSecondaryImage && (
              <img
                src={project.images.col1[1]}
                alt={`${project.name} preview 2`}
                className="w-full rounded-[30px] object-cover sm:rounded-[40px] md:rounded-[60px]"
                style={{ height: 'clamp(86px, 17vw, 340px)' }}
                loading="lazy"
              />
            )}
          </div>

          <div className="col-span-2 grid gap-3 lg:col-span-1 lg:grid-rows-[1fr_auto] lg:gap-4">
            <img
              src={project.images.col2}
              alt={`${project.name} main`}
              className="h-[126px] w-full rounded-[30px] object-cover sm:h-[180px] sm:rounded-[40px] lg:h-full lg:min-h-[260px] lg:self-stretch lg:rounded-[60px]"
              loading="lazy"
            />

            <div className="grid grid-cols-1 gap-2 rounded-[24px] border border-[#D7E2EA]/20 bg-[#0C0C0C]/72 p-3 backdrop-blur-sm sm:grid-cols-3 sm:gap-3 sm:rounded-[32px] sm:p-4">
              {[
                ['Problem', project.problem],
                ['Built', project.built],
                ['Result', project.result],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#84B8A6]">
                    {label}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#D7E2EA]/72 sm:text-[13px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
