import type { AnchorHTMLAttributes } from 'react'

type LiveProjectButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function LiveProjectButton({ className = '', ...rest }: LiveProjectButtonProps) {
  return (
    <a
      className={[
        'inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]',
        'px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]',
        'transition-colors duration-200 hover:bg-[#D7E2EA]/10',
        'sm:px-10 sm:py-3.5 sm:text-base',
        className,
      ].join(' ')}
      {...rest}
    >
      Live Project
    </a>
  )
}
