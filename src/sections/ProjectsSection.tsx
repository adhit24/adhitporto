import { useScroll } from 'framer-motion'
import { useMemo, useRef } from 'react'
import ProjectCard, { type ProjectData } from './ProjectCard'

export function ProjectsSection() {
  const containerRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const projects = useMemo<ProjectData[]>(
    () => [
      {
        number: '01',
        category: 'Client',
        name: 'Website RedBox',
        href: 'https://www.redboxbarbershop.com/',
        images: {
          col1: ['/redbox1st.png', '/redbok_LP.png'],
          col2: '/redbox.png',
        },
      },
      {
        number: '02',
        category: 'Personal',
        name: 'Raskop Website',
        href: 'https://raskop.net',
        images: {
          col1: ['/raskopfront.png', '/Story_4.JPG'],
          col2: '/DSCF5975.JPG',
        },
      },
      {
        number: '03',
        category: 'Client',
        name: 'Ginabo E-commerce',
        underDevelopment: true,
        images: {
          col1: ['/logo_diamond.png', '/why-choose-us.png'],
          col2: '/pr_splash_homepagr.png',
        },
      },
      {
        number: '04',
        category: 'Client',
        name: 'Website + CRM Oxigen Coffee',
        underDevelopment: true,
        images: {
          col1: ['/oksi3.png', '/oksi2.jpg'],
          col2: '/oksi4.jpg',
        },
      },
      {
        number: '05',
        category: 'Client',
        name: 'Website + CRM Belly Bites Coffee Bistro',
        underDevelopment: true,
        images: {
          col1: ['/belly1.jpg', '/belly2.jpg'],
          col2: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
        },
      },
      {
        number: '06',
        category: 'Client',
        name: 'Website + Reservation Bilik Kita Coffee & Resto',
        underDevelopment: true,
        images: {
          col1: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
          ],
          col2: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
        },
      },
    ],
    [],
  )

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 pb-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2 className="hero-heading mb-10 text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20">
        Project
      </h2>

      <div className="relative mx-auto w-full max-w-[1760px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
