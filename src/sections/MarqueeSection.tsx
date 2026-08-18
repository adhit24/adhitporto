import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// atas8/atas9 belum tersedia di folder asset; fallback menjaga rail tetap utuh
// sampai file asli ditambahkan dengan nama yang sudah disepakati.
const topImages = [
  ...Array.from({ length: 7 }, (_, index) => `/asset_scroll_animation/atas${index + 1}.png`),
  '/asset_scroll_animation/atas7.png',
  '/asset_scroll_animation/atas10.jpg',
  '/asset_scroll_animation/atas10.jpg',
]

const bottomImages = Array.from({ length: 10 }, (_, index) => `/asset_scroll_animation/bawah${index + 1}.png`)

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
              <img key={`${src}-${index}`} src={src} alt="" loading="lazy" className="h-[160px] w-[260px] flex-shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
