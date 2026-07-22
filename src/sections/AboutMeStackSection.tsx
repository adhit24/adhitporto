import { useScroll } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { AboutMeCard, type AboutMeCardData } from './AboutMeCard'

// ── Card 01: Profile Photos ──────────────────────────────────────────────────

function ProfilePhotos() {
  return (
    <div className="flex gap-3 sm:gap-4 h-[clamp(280px,38vw,540px)]">
      <div className="flex flex-[2] flex-col gap-3 sm:gap-4 min-w-0">
        <img
          src="/adhit1.png"
          alt="Adhit Nugraha"
          loading="lazy"
          className="flex-[3] min-h-0 w-full rounded-[28px] object-cover sm:rounded-[36px] md:rounded-[44px]"
          style={{ objectPosition: 'center 25%' }}
        />
        <img
          src="/adhit3.png"
          alt=""
          loading="lazy"
          className="flex-[3] min-h-0 w-full rounded-[28px] object-cover sm:rounded-[36px] md:rounded-[44px]"
          style={{ objectPosition: 'center 10%' }}
        />
      </div>
      <div className="flex flex-[3] flex-col gap-3 sm:gap-4 min-w-0">
        <img
          src="/adhit2.png"
          alt="Adhit Nugraha"
          loading="lazy"
          className="flex-[3] min-h-0 w-full rounded-[28px] object-cover sm:rounded-[36px] md:rounded-[44px]"
          style={{ objectPosition: 'center 15%' }}
        />
        <img
          src="/Project_rasakopi.JPG"
          alt="Rasa Kopi"
          loading="lazy"
          className="flex-[2] min-h-0 w-full rounded-[28px] object-cover object-center sm:rounded-[36px] md:rounded-[44px]"
        />
      </div>
    </div>
  )
}

// ── Card 02: Tech Stack Icons ────────────────────────────────────────────────

type TechItem = { name: string; icon: string; invert?: boolean }

const techStack: TechItem[] = [
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'WordPress',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg' },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Canva',      icon: 'https://cdn.simpleicons.org/canva/00C4CC' },
  { name: 'Photoshop',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'Bootstrap',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'Google',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'VS Code',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Notion',     icon: 'https://cdn.simpleicons.org/notion/ffffff' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
]

function TechStackGrid() {
  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-4 py-2 sm:grid-cols-5 sm:gap-x-4 sm:gap-y-5">
      {techStack.map((tech) => (
        <div key={tech.name} className="flex flex-col items-center gap-2">
          <img
            src={tech.icon}
            alt={tech.name}
            loading="lazy"
            className={`h-[clamp(36px,4.8vw,64px)] w-[clamp(36px,4.8vw,64px)] object-contain drop-shadow-sm${tech.invert ? ' invert' : ''}`}
          />
          <span className="text-[clamp(9px,1.2vw,11px)] font-medium uppercase tracking-wider text-[#D7E2EA]/55 text-center leading-tight">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── Card 03: How I Work ──────────────────────────────────────────────────────

function HowIWorkGrid() {
  return (
    <div className="flex flex-col gap-3 h-[clamp(240px,34vw,500px)]">
      {/* top row */}
      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex-[3] min-w-0">
          <img
            src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"
            alt=""
            loading="lazy"
            className="h-full w-full rounded-[28px] object-cover sm:rounded-[36px] md:rounded-[44px]"
          />
        </div>
        <div className="flex-[2] flex flex-col gap-3 min-w-0">
          <div className="flex-1 rounded-[22px] bg-[#141414] border border-[#D7E2EA]/15 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[clamp(1.5rem,3.2vw,2.8rem)] leading-none">🔨</span>
            <div>
              <div className="text-[#D7E2EA] font-bold text-[11px] sm:text-sm uppercase tracking-wide mt-1">Build it first</div>
              <div className="text-[#D7E2EA]/50 text-[10px] mt-0.5 leading-snug hidden sm:block">messy v0.1 beats a perfect plan</div>
            </div>
          </div>
          <div className="flex-1 rounded-[22px] bg-[#141414] border border-[#D7E2EA]/15 p-3 sm:p-4 flex flex-col justify-between">
            <span className="text-[clamp(1.5rem,3.2vw,2.8rem)] leading-none">🚀</span>
            <div>
              <div className="text-[#D7E2EA] font-bold text-[11px] sm:text-sm uppercase tracking-wide mt-1">Ship it</div>
              <div className="text-[#D7E2EA]/50 text-[10px] mt-0.5 leading-snug hidden sm:block">v0.9 shipped &gt; v∞ pending</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom row */}
      <div className="flex gap-3 h-[37%] min-h-0">
        <div className="flex-[2] min-w-0 rounded-[22px] bg-[#141414] border border-[#D7E2EA]/15 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <span className="text-[clamp(1.2rem,2.2vw,2rem)] shrink-0 leading-none">🐛→💡</span>
          <div>
            <div className="text-[#D7E2EA] font-bold text-[10px] sm:text-xs uppercase tracking-wide">Bug = Insight</div>
            <div className="text-[#D7E2EA]/50 text-[10px] mt-0.5 leading-snug hidden sm:block">no drama, just data</div>
          </div>
        </div>
        <div className="flex-[3] min-w-0 rounded-[22px] bg-[#141414] border border-[#D7E2EA]/15 p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <span className="text-[clamp(1.2rem,2.2vw,2rem)] shrink-0 leading-none">♻️</span>
          <div>
            <div className="text-[#D7E2EA] font-bold text-[10px] sm:text-xs uppercase tracking-wide">Iterate Always</div>
            <div className="text-[#D7E2EA]/50 text-[10px] mt-0.5 leading-snug hidden sm:block">done doesn't mean done done</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Section ─────────────────────────────────────────────────────────────

export function AboutMeStackSection() {
  const containerRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const cards = useMemo<AboutMeCardData[]>(
    () => [
      {
        number: '01',
        category: 'Profile',
        name: 'Adhit Nugraha',
        summary:
          "Business operator and digital builder with 15+ years across IT, ops, and data systems. I build scalable brands, digital systems, and meaningful experiences — from the backend to the vibe.",
        highlights: ['Bandung', 'Cirebon', 'UNPAD F.Kom', '15+ yrs'],
        backgroundImage: '/adhit2.png',
        customImages: <ProfilePhotos />,
      },
      {
        number: '02',
        category: 'What I Do',
        name: 'Systems, Web, CRM',
        summary:
          "Into business strategy, automation, and digital presence. The goal's simple: less manual grunt work, more real insight, and a customer experience that doesn't feel like a guessing game.",
        highlights: ['Strategy', 'Automation', 'Data', 'UI/UX'],
        backgroundImage: '/homepage_background.jpg',
        customImages: <TechStackGrid />,
      },
      {
        number: '03',
        category: 'How I Work',
        name: 'Build, Break, Fix, Ship',
        summary:
          "I keep it pragmatic — fix the foundation, ship a solid v0.9, then iterate. If something breaks, cool. That's data. No drama, just lessons. Done beats perfect — but that doesn't mean sloppy.",
        highlights: ['Lean', 'Iterate', 'Ship', 'Improve'],
        backgroundImage: '/Project_rasakopi.JPG',
        customImages: <HowIWorkGrid />,
      },
    ],
    [],
  )

  return (
    <section
      id="about-me"
      ref={containerRef}
      className="relative bg-[#0C0C0C] px-5 pt-24 pb-24 sm:px-8 sm:pt-28 sm:pb-28 md:px-10 md:pt-36 md:pb-36"
    >
      <h2 className="hero-heading mb-10 text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-14 md:mb-20">
        About Me
      </h2>

      <div className="relative mx-auto w-full max-w-[1760px]">
        {cards.map((card, index) => (
          <AboutMeCard
            key={card.number}
            card={card}
            index={index}
            totalCards={cards.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
