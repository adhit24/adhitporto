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
        problem: 'Needed a clearer customer journey across discovery, branch availability, and booking intent.',
        built: 'Customer-facing website and booking foundation connected to branch, membership, notification, and operational workflows.',
        result: 'A stronger digital front door with clearer booking authority and a foundation for measurable growth.',
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
        problem: 'Coffee brand needed a digital home for menu, branches, and brand story.',
        built: 'Website experience for Rasa Kopi with visual identity and customer touchpoints.',
        result: 'Stronger online presence for daily discovery and branch expansion.',
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
        problem: 'Product brand needed a cleaner commerce presentation and brand credibility.',
        built: 'E-commerce style website with product highlights and conversion-oriented sections.',
        result: 'A more focused digital storefront for customers and campaign traffic.',
        underDevelopment: true,
        href: 'https://www.ginabo.id/',
        images: {
          col1: ['/logo_diamond.png', '/why-choose-us.png'],
          col2: '/store_ginabo.png',
        },
      },
      {
        number: '04',
        category: 'Client',
        name: 'Website + CRM Oxigen Coffee',
        problem: 'F&B operation needed a stronger website and customer relationship flow.',
        built: 'Website concept with CRM direction for customer data and repeat engagement.',
        result: 'Prepared foundation for digital operations and customer retention.',
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
        problem: 'Cafe brand needed a more structured digital presence and customer system.',
        built: 'Website and CRM concept for menu, brand story, and customer follow-up.',
        result: 'Clearer path for brand discovery and future CRM activation.',
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
        problem: 'Restaurant concept needed a reservation-ready customer journey.',
        built: 'Website concept with reservation flow and venue-focused presentation.',
        result: 'Reduced friction between browsing, choosing, and planning a visit.',
        underDevelopment: true,
        href: 'https://bilik-kita.vercel.app/',
        images: {
          col1: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
          ],
          col2: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
        },
      },
      {
        number: '07',
        category: 'Client',
        name: 'dr. Wildan A. Sutrisno | SpOG · Dokter Kandungan',
        problem: 'Praktik kandungan membutuhkan reservasi yang rapi, cepat, dan mudah dikontrol dari satu pusat operasi.',
        built: 'Sistem reservasi otomatis end-to-end dengan admin dashboard untuk mengelola jadwal, pasien, dan alur layanan.',
        result: 'Pengalaman booking lebih profesional, operasional lebih terukur, dan follow-up lebih siap dikembangkan.',
        images: {
          col1: ['/asset_scroll_animation/atas5.png', '/asset_scroll_animation/atas5.png'],
          col2: '/asset_scroll_animation/atas5.png',
        },
      },
      {
        number: '08',
        category: 'Personal',
        name: 'Rasakopi New Branch Cirebon',
        problem: 'New branch planning needed visual direction and operational framing.',
        built: 'Concept visuals and digital presentation for branch expansion.',
        result: 'Sharper expansion story for planning, promotion, and stakeholder alignment.',
        underDevelopment: true,
        images: {
          col1: ['/raskop-branch-1.jpg', '/raskop-branch-2.jpg'],
          col2: '/raskop-branch-3.jpg',
        },
      },
      {
        number: '09',
        category: 'Personal',
        name: 'Healthcare Concept',
        problem: 'Healthcare service concept needed a clean and trustworthy digital direction.',
        built: 'Website concept with modern visual system and patient-friendly structure.',
        result: 'A calmer brand foundation for future health service presentation.',
        underDevelopment: true,
        images: {
          col1: [
            '/medvi-style.jpg',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
          ],
          col2: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
        },
      },
    ],
    [],
  )

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 pb-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-[90vh]"
    >
      <h2 className="hero-heading mb-10 text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20">
        Projects
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
