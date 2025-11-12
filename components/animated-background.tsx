"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const scrolled = window.scrollY
      const parallaxElements = containerRef.current.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5')
        const yPos = -(scrolled * speed)
        const elementWithAnimation = element as HTMLElement
        // Apply parallax transform - the float animations use rotate/scale, not translate
        elementWithAnimation.style.transform = `translate3d(0, ${yPos}px, 0)`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Animated gradient orbs */}
      <div
        data-parallax
        data-speed="0.3"
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#34d399] rounded-full opacity-20 blur-3xl animate-pulse"
      />
      <div
        data-parallax
        data-speed="0.5"
        className="absolute top-1/4 -right-32 w-80 h-80 bg-[#289660] rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      <div
        data-parallax
        data-speed="0.4"
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#1E603F] rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDelay: '2s' }}
      />
      <div
        data-parallax
        data-speed="0.6"
        className="absolute -bottom-32 -right-40 w-96 h-96 bg-[#6ee7b7] rounded-full opacity-15 blur-3xl animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Floating geometric shapes - wrapped for parallax effect */}
      <div data-parallax data-speed="0.2" className="absolute top-1/3 left-1/3">
        <div className="w-32 h-32 border-2 border-[#34d399]/20 rounded-lg rotate-45 animate-float" />
      </div>
      <div data-parallax data-speed="0.35" className="absolute top-2/3 right-1/4">
        <div className="w-24 h-24 border-2 border-[#289660]/20 rounded-full animate-float-reverse" />
      </div>
      <div data-parallax data-speed="0.25" className="absolute bottom-1/3 left-1/2">
        <div className="w-20 h-20 border-2 border-[#1E603F]/20 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div data-parallax data-speed="0.3" className="absolute top-1/2 right-1/3">
        <div className="w-16 h-16 border-2 border-[#6ee7b7]/15 rounded-full animate-float-reverse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Animated mesh gradient overlay */}
      <div
        data-parallax
        data-speed="0.15"
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 96, 63, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(40, 150, 96, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.05) 0%, transparent 70%)
          `
        }}
      />
    </div>
  )
}

