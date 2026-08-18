import { useEffect, useMemo, useRef, useState } from 'react'

const projectImages = [
  '/redbox.png', '/redbox1st.png', '/redbok_LP.png', '/raskopfront.png',
  '/Project_rasakopi.JPG', '/DSCF5975.JPG', '/store_ginabo.png', '/why-choose-us.png',
  '/oksi4.jpg', '/belly2.jpg', '/raskop-branch-3.jpg', '/medvi-style.jpg',
]

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const rafId = useRef<number | null>(null)
  const [offset, setOffset] = useState(0)

  const row1 = useMemo(() => projectImages.slice(0, 6), [])
  const row2 = useMemo(() => projectImages.slice(6), [])
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
