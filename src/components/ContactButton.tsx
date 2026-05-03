import type { AnchorHTMLAttributes } from 'react'

type ContactButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function ContactButton({ className = '', ...rest }: ContactButtonProps) {
  return (
    <a
      className={[
        'inline-flex items-center justify-center rounded-full',
        'bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)]',
        'px-8 py-3 text-xs font-medium uppercase tracking-widest text-white',
        'shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1]',
        'outline outline-2 outline-white outline-offset-[-3px]',
        'transition-opacity duration-200 hover:opacity-90',
        'sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base',
        className,
      ].join(' ')}
      {...rest}
    >
      Contact Me
    </a>
  )
}
