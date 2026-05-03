import type { ReactNode } from 'react'
import { useEffect, useMemo, useRef, useState } from 'react'

type MagnetProps = {
  children: ReactNode
  className?: string
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

export function Magnet({
  children,
  className = '',
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  const style = useMemo(
    () => ({
      transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
      transition: isActive ? activeTransition : inactiveTransition,
      willChange: 'transform',
    }),
    [activeTransition, inactiveTransition, isActive, translate.x, translate.y],
  )

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const element = elementRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const withinX = event.clientX >= rect.left - padding && event.clientX <= rect.right + padding
      const withinY = event.clientY >= rect.top - padding && event.clientY <= rect.bottom + padding
      const within = withinX && withinY

      if (!within) {
        setIsActive(false)
        setTranslate({ x: 0, y: 0 })
        return
      }

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setIsActive(true)
      setTranslate({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [padding, strength])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const getOffset = (touch: Touch) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      return {
        x: (touch.clientX - centerX) / strength,
        y: (touch.clientY - centerY) / strength,
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      setIsActive(true)
      setTranslate(getOffset(touch))
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      setIsActive(true)
      setTranslate(getOffset(touch))
    }

    const handleTouchEnd = () => {
      setIsActive(false)
      setTranslate({ x: 0, y: 0 })
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: true })
    element.addEventListener('touchmove', handleTouchMove, { passive: true })
    element.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [strength])

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  )
}
