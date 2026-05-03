import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type FadeInBaseProps = {
  children?: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
}

type FadeInProps =
  | ({ as?: 'div' } & FadeInBaseProps & Omit<HTMLMotionProps<'div'>, 'children'>)
  | ({ as: 'section' } & FadeInBaseProps & Omit<HTMLMotionProps<'section'>, 'children'>)
  | ({ as: 'nav' } & FadeInBaseProps & Omit<HTMLMotionProps<'nav'>, 'children'>)
  | ({ as: 'p' } & FadeInBaseProps & Omit<HTMLMotionProps<'p'>, 'children'>)
  | ({ as: 'h1' } & FadeInBaseProps & Omit<HTMLMotionProps<'h1'>, 'children'>)
  | ({ as: 'h2' } & FadeInBaseProps & Omit<HTMLMotionProps<'h2'>, 'children'>)
  | ({ as: 'span' } & FadeInBaseProps & Omit<HTMLMotionProps<'span'>, 'children'>)

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: FadeInProps) {
  const as = 'as' in rest && rest.as ? rest.as : 'div'

  const shared = {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] as const },
    viewport: { once: true, margin: '50px', amount: 0 as const },
  }

  if (as === 'section') {
    const { as: omitAs, ...props } = rest as { as: 'section' } & HTMLMotionProps<'section'>
    void omitAs
    return (
      <motion.section {...shared} {...props}>
        {children}
      </motion.section>
    )
  }

  if (as === 'nav') {
    const { as: omitAs, ...props } = rest as { as: 'nav' } & HTMLMotionProps<'nav'>
    void omitAs
    return (
      <motion.nav {...shared} {...props}>
        {children}
      </motion.nav>
    )
  }

  if (as === 'p') {
    const { as: omitAs, ...props } = rest as { as: 'p' } & HTMLMotionProps<'p'>
    void omitAs
    return (
      <motion.p {...shared} {...props}>
        {children}
      </motion.p>
    )
  }

  if (as === 'h1') {
    const { as: omitAs, ...props } = rest as { as: 'h1' } & HTMLMotionProps<'h1'>
    void omitAs
    return (
      <motion.h1 {...shared} {...props}>
        {children}
      </motion.h1>
    )
  }

  if (as === 'h2') {
    const { as: omitAs, ...props } = rest as { as: 'h2' } & HTMLMotionProps<'h2'>
    void omitAs
    return (
      <motion.h2 {...shared} {...props}>
        {children}
      </motion.h2>
    )
  }

  if (as === 'span') {
    const { as: omitAs, ...props } = rest as { as: 'span' } & HTMLMotionProps<'span'>
    void omitAs
    return (
      <motion.span {...shared} {...props}>
        {children}
      </motion.span>
    )
  }

  const { as: omitAs, ...props } = rest as { as?: 'div' } & HTMLMotionProps<'div'>
  void omitAs
  return (
    <motion.div {...shared} {...props}>
      {children}
    </motion.div>
  )
}
