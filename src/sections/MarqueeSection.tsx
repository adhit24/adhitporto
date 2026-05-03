import { useEffect, useMemo, useRef, useState } from 'react'

const gifUrls = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rafId = useRef<number | null>(null)
  const [offset, setOffset] = useState(0)

  const row1 = useMemo(() => gifUrls.slice(0, 11), [])
  const row2 = useMemo(() => gifUrls.slice(11), [])
  const row1Loop = useMemo(() => [...row1, ...row1, ...row1], [row1])
  const row2Loop = useMemo(() => [...row2, ...row2, ...row2], [row2])

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const nextOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(nextOffset)
    }

    const onScroll = () => {
      if (rafId.current !== null) return
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null
        update()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current !== null) window.cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] overflow-hidden pt-16 pb-10 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3 overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            transform: `translate3d(${offset - 200}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row1Loop.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[160px] w-[260px] flex-shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translate3d(${-(offset - 200)}px, 0, 0)`,
            willChange: 'transform',
          }}
        >
          {row2Loop.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[160px] w-[260px] flex-shrink-0 rounded-2xl object-cover sm:h-[220px] sm:w-[340px] md:h-[270px] md:w-[420px]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
