"use client"

import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  videoSrc?: string
  fallbackImage?: string
}

export default function VideoBackground({ 
  videoSrc = "/dental-background-video.mp4",
  fallbackImage = "/modern-dental-office-with-smiling-patients.jpg"
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let timeoutId: NodeJS.Timeout

    const handleCanPlay = () => {
      setIsVideoLoaded(true)
      video.play().catch(() => {
        // If autoplay fails, use fallback
        setUseFallback(true)
      })
    }

    const handleError = () => {
      setUseFallback(true)
      setIsVideoLoaded(false)
    }

    const handleLoadedMetadata = () => {
      // Video metadata loaded successfully
      video.play().catch(() => {
        setUseFallback(true)
      })
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('error', handleError)

    // Set a timeout to fallback if video doesn't load within 5 seconds
    timeoutId = setTimeout(() => {
      if (!video.readyState || video.readyState < 2) {
        setUseFallback(true)
      }
    }, 5000)

    // Try to load the video
    video.load()

    return () => {
      clearTimeout(timeoutId)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Video Background */}
      {!useFallback && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        </video>
      )}

      {/* Fallback Image Background */}
      {(useFallback || !isVideoLoaded) && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('${fallbackImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}

      {/* Gradient Overlay to maintain readability */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(30, 96, 63, 0.85) 0%, 
            rgba(40, 150, 96, 0.80) 25%, 
            rgba(52, 211, 153, 0.75) 50%, 
            rgba(209, 250, 229, 0.70) 100%)`
        }}
      />
    </div>
  )
}

