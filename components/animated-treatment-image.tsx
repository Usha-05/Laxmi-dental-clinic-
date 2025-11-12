"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getAnimatedMedicalImagePath } from "@/lib/image-utils"
import { getDentalPlaceholderImage } from "@/lib/image-placeholder"

interface AnimatedTreatmentImageProps {
  treatmentSlug: string
  treatmentName?: string
  staticImagePath: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  onError?: () => void
}

/**
 * Component that displays an animated image (GIF/video) for a treatment if available,
 * otherwise falls back to the static image
 */
export default function AnimatedTreatmentImage({
  treatmentSlug,
  treatmentName,
  staticImagePath,
  alt,
  className = "",
  width,
  height,
  priority = false,
  onError
}: AnimatedTreatmentImageProps) {
  const [useAnimated, setUseAnimated] = useState(true)
  const [animatedImageError, setAnimatedImageError] = useState(false)
  const [staticImageError, setStaticImageError] = useState(false)

  // Get animated image path
  const animatedImagePath = getAnimatedMedicalImagePath(treatmentSlug, treatmentName)

  // Check if animated image exists (client-side check)
  useEffect(() => {
    if (!animatedImagePath) {
      setUseAnimated(false)
      return
    }

    // Try to load the animated image
    const img = new window.Image()
    img.onload = () => {
      setUseAnimated(true)
    }
    img.onerror = () => {
      setUseAnimated(false)
      setAnimatedImageError(true)
    }
    img.src = animatedImagePath
  }, [animatedImagePath])

  // Handle animated image error
  const handleAnimatedError = () => {
    setAnimatedImageError(true)
    setUseAnimated(false)
    if (onError) {
      onError()
    }
  }

  // Handle static image error
  const handleStaticError = () => {
    setStaticImageError(true)
    if (onError) {
      onError()
    }
  }

  // If animated image is available and no error, show animated version
  if (useAnimated && animatedImagePath && !animatedImageError) {
    const isGif = animatedImagePath.endsWith('.gif')
    const isVideo = animatedImagePath.endsWith('.mp4') || animatedImagePath.endsWith('.webm')

    if (isVideo) {
      return (
        <div className={`relative ${className}`}>
          <video
            src={animatedImagePath}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={handleAnimatedError}
            style={{ width: width || '100%', height: height || 'auto' }}
          />
          {staticImageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
              <span className="text-emerald-600 text-sm">Image unavailable</span>
            </div>
          )}
        </div>
      )
    }

    if (isGif) {
      return (
        <div className={`relative ${className}`}>
          <img
            src={animatedImagePath}
            alt={alt}
            className="w-full h-full object-cover"
            onError={handleAnimatedError}
            style={{ width: width || '100%', height: height || 'auto' }}
          />
          {staticImageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center">
              <span className="text-emerald-600 text-sm">Image unavailable</span>
            </div>
          )}
        </div>
      )
    }
  }

  // Fallback to static image
  // Handle both regular image paths and data URIs
  if (staticImagePath.startsWith('data:image/svg') || staticImagePath.startsWith('data:image/')) {
    return (
      <img
        src={staticImagePath}
        alt={alt}
        className={className}
        style={{ width: width || '100%', height: height || 'auto' }}
        onError={(e) => {
          handleStaticError()
          // Fallback to placeholder if data URI fails
          const target = e.target as HTMLImageElement
          target.src = getDentalPlaceholderImage(width || 800, height || 600, treatmentName || alt)
        }}
      />
    )
  }
  
  // If static image has already errored, show placeholder
  if (staticImageError) {
    return (
      <img
        src={getDentalPlaceholderImage(width || 800, height || 600, treatmentName || alt)}
        alt={alt}
        className={className}
        style={{ width: width || '100%', height: height || 'auto' }}
      />
    )
  }
  
  return (
    <div className="relative w-full h-full">
      <Image
        src={staticImagePath}
        alt={alt}
        width={width || 600}
        height={height || 400}
        className={className}
        priority={priority}
        onError={() => {
          handleStaticError()
        }}
      />
      {staticImageError && (
        <img
          src={getDentalPlaceholderImage(width || 800, height || 600, treatmentName || alt)}
          alt={alt}
          className={className}
          style={{ width: width || '100%', height: height || 'auto', position: 'absolute', top: 0, left: 0 }}
        />
      )}
    </div>
  )
}

