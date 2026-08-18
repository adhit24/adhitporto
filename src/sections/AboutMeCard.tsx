import { motion, type MotionValue, useTransform } from 'framer-motion'
import { type ReactNode } from 'react'

export type AboutMeCardData = {
  number: string
  category: string
  name: string
  summary: string
  highlights: string[]
  images?: {
    col1: [string, string]
    col2: string
  }
  customImages?: ReactNode
  backgroundImage?: string
}

export function AboutMeCard({
  card,
  index,
  totalCards,
  progress,
}: {
  card: AboutMeCardData
  index: number
  totalCards: number
  progress: MotionValue<number>
}) {
  const rangeStart = index / totalCards
  const rangeEnd = 1
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])
  return (
    <div
      className="sticky top-3 relative mb-0 flex h-[calc(100svh-1.5rem)] w-full items-start justify-center md:top-24 md:h-[70vh]"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: 0,
          backgroundColor: '#0C0C0C',
          backgroundImage: card.backgroundImage
            ? `linear-gradient(135deg, rgba(12, 12, 12, 0.94), rgba(12, 12, 12, 0.78)), url(${card.backgroundImage})`
            : undefined,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          willChange: 'transform',
        }}
        className="absolute inset-x-0 mx-auto h-full w-full max-w-[1760px] origin-top overflow-hidden rounded-[30px] border-2 border-[#D7E2EA] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(215,226,234,0.16),transparent_34%),linear-gradient(180deg,rgba(215,226,234,0.08),transparent_42%)]" />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-baseline gap-4">
            <div className="[font-size:clamp(2.6rem,15vw,140px)] font-black leading-none text-[#D7E2EA]">
              {card.number}
            </div>
            <div className="flex flex-col gap-1 pt-2">
              <div className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70">
                {card.category}
              </div>
              <div className="text-base font-medium uppercase tracking-wide text-[#D7E2EA] sm:text-2xl md:text-3xl">
                {card.name}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 grid gap-4 md:mt-6 md:grid-cols-5 md:gap-6">
          <div className="md:col-span-2">
            <div className="text-[#D7E2EA] [font-size:clamp(0.88rem,3.7vw,1.2rem)] font-medium leading-relaxed">
              {card.summary}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/85 sm:text-xs"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            {card.customImages ? (
              card.customImages
            ) : card.images ? (
              <div className="grid grid-cols-5 gap-4 sm:gap-6">
                <div className="col-span-2 flex flex-col gap-4 sm:gap-6">
                  <img
                    src={card.images.col1[0]}
                    alt=""
                    loading="lazy"
                    className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                  />
                  <img
                    src={card.images.col1[1]}
                    alt=""
                    loading="lazy"
                    className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                  />
                </div>
                <div className="col-span-3">
                  <img
                    src={card.images.col2}
                    alt=""
                    loading="lazy"
                    className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
