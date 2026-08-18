import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const topImages = [
  ...Array.from({ length: 7 }, (_, index) => `/asset_scroll_animation/atas${index + 1}.png`),
  '/asset_scroll_animation/atas8.jpg',
  '/asset_scroll_animation/atas9.jpg',
  '/asset_scroll_animation/atas10.jpg',
]

const bottomImages = Array.from({ length: 10 }, (_, index) => `/asset_scroll_animation/bawah${index + 1}.png`)
const bottomLogoSizes = [
  'h-[116px] max-w-[210px]',
  'h-[132px] max-w-[250px]',
  'h-[104px] max-w-[190px]',
  'h-[144px] max-w-[270px]',
  'h-[122px] max-w-[230px]',
  'h-[136px] max-w-[260px]',
  'h-[108px] max-w-[200px]',
  'h-[128px] max-w-[240px]',
  'h-[112px] max-w-[215px]',
  'h-[140px] max-w-[265px]',
]

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const topX = useTransform(scrollYProgress, [0, 1], ['0%', '-38%'])
  const bottomX = useTransform(scrollYProgress, [0, 1], ['-32%', '0%'])

  const topLoop = [...topImages, ...topImages]
  const bottomLoop = [...bottomImages, ...bottomImages]

  return (
    <section ref={sectionRef} className="relative h-[190vh] bg-[#0C0C0C]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="flex w-full flex-col gap-3">
          <motion.div style={{ x: topX }} className="flex w-max gap-3 will-change-transform">
            {topLoop.map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt="" loading="lazy" className="h-[160px] w-[260px] flex-shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]" />
            ))}
          </motion.div>
          <motion.div style={{ x: bottomX }} className="flex w-max gap-3 will-change-transform">
            {bottomLoop.map((src, index) => (
              <img
                key={`${src}-${index}`}
                src={src}
                alt=""
                loading="lazy"
                className={`${bottomLogoSizes[index % bottomLogoSizes.length]} w-auto flex-shrink-0 rounded-2xl border border-[#D7E2EA]/10 bg-[#121212] p-3 object-contain sm:p-4 md:p-5`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
