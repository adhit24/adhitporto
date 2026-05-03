import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { Fragment, useMemo, useRef } from 'react'

function AnimatedChar({
  char,
  progress,
  start,
  end,
}: {
  char: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

function AnimatedSpace({
  progress,
  start,
  end,
}: {
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }}>{' '}</motion.span>
  )
}

export function AnimatedText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = useMemo(() => text.split(' '), [text])
  const totalChars = useMemo(
    () => text.length,
    [text],
  )

  return (
    <p ref={paragraphRef} className={className}>
      {words.map((word, wordIndex) => {
        const charOffset = words
          .slice(0, wordIndex)
          .reduce((acc, w) => acc + w.length + 1, 0)

        const spaceStart = (charOffset + word.length) / totalChars
        const spaceEnd = Math.min(1, spaceStart + 0.15)

        return (
          <Fragment key={wordIndex}>
            {/* word: never breaks mid-character */}
            <span className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => {
                const globalIndex = charOffset + charIndex
                const start = globalIndex / totalChars
                const end = Math.min(1, start + 0.15)
                return (
                  <AnimatedChar
                    key={`${globalIndex}`}
                    char={char}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                )
              })}
            </span>

            {/* space: a valid line-break point */}
            {wordIndex < words.length - 1 && (
              <AnimatedSpace
                key={`space-${wordIndex}`}
                progress={scrollYProgress}
                start={spaceStart}
                end={spaceEnd}
              />
            )}
          </Fragment>
        )
      })}
    </p>
  )
}
