import { FadeIn } from '../components/FadeIn'

const services = [
  {
    number: '01',
    name: 'Business Strategy',
    description:
      'Clear, practical planning for growth, operations, and customer experience, backed by data and real-world execution.',
  },
  {
    number: '02',
    name: 'CRM Specialist',
    description:
      'CRM setup, segmentation, automation, and reporting to keep your pipeline clean and your customers engaged.',
  },
  {
    number: '03',
    name: 'Web Design',
    description:
      'Clean, modern, and conversion-focused websites with strong layout, typography, and user experience.',
  },
  {
    number: '04',
    name: 'UI/UX Design',
    description:
      'Interfaces that feel fast and intuitive, designed around user flows, clarity, and the details that matter.',
  },
  {
    number: '05',
    name: 'Digital Systems',
    description:
      'Operational systems and data workflows that reduce manual work and make the business easier to run.',
  },
  {
    number: '06',
    name: 'Operational Data Control',
    description:
      'Structured data control for daily operations: tracking, reporting, validation, and dashboards that help teams make cleaner decisions.',
  },
  {
    number: '07',
    name: 'HSE Administrative System',
    description:
      'HSE document workflows, permit tracking, inspection records, and administrative systems built for clearer compliance and faster coordination.',
  },
]

export function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-[#F6F8F5] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2 className="mb-16 text-center [font-size:clamp(3rem,12vw,160px)] font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col">
        {services.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.1}
            y={30}
            className="group flex gap-6 border-b border-[rgba(12,12,12,0.15)] py-8 transition-colors duration-300 hover:border-[#0C0C0C]/40 sm:py-10 md:py-12"
          >
            <div className="[font-size:clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C] transition-colors duration-300 group-hover:text-[#346C5B]">
              {service.number}
            </div>

            <div className="flex flex-1 flex-col gap-2 pt-2">
              <div className="[font-size:clamp(1rem,2.2vw,2.1rem)] font-medium uppercase text-[#0C0C0C]">
                {service.name}
              </div>
              <div className="max-w-2xl [font-size:clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-[#0C0C0C]/60">
                {service.description}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
