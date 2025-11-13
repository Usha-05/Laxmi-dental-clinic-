"use client"

import { useState } from "react"
import { ArrowLeft, CheckCircle2, Zap, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getDentalPlaceholderImage } from "@/lib/image-placeholder"

interface TreatmentStep {
  step: number
  title: string
  description: string
  image?: string
}

interface TreatmentPageTemplateProps {
  title: string
  description: string
  heroImage: string
  uses: string[]
  treatmentProcess: TreatmentStep[]
  benefits: string[]
  idealFor?: string[]
  timeline?: {
    duration?: string
    frequency?: string
    recovery?: string
  }
}

export default function TreatmentPageTemplate({
  title,
  description,
  heroImage,
  uses,
  treatmentProcess,
  benefits,
  idealFor,
  timeline,
}: TreatmentPageTemplateProps) {
  // Check if heroImage is missing or is a placeholder file
  const hasValidHeroImage = heroImage && heroImage !== "/placeholder.jpg" && heroImage !== "/placeholder.svg"
  const [heroImageError, setHeroImageError] = useState(!hasValidHeroImage)
  const [processImageErrors, setProcessImageErrors] = useState<Record<number, boolean>>({})

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white pt-24 sm:pt-28 md:pt-28 lg:pt-28">
      {/* Header */}
      <div className="sticky top-20 sm:top-24 md:top-24 lg:top-24 z-40 bg-white/80 backdrop-blur-md border-b border-green-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#treatments"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-lg transition-colors"
          >
            <ArrowLeft size={24} />
            Back to Treatments
          </Link>
          <div className="flex items-center justify-center gap-4 flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent text-center">
              {title}
            </h1>
          </div>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">{title}</h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Uses Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-emerald-600" />
                What It's Used For
              </h3>
              <ul className="space-y-3">
                {uses.map((use, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={24} />
                    <span className="text-lg md:text-xl text-gray-700 font-semibold">{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              {hasValidHeroImage && !heroImageError ? (
                <Image
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  onError={() => setHeroImageError(true)}
                />
              ) : (
                <img
                  src={getDentalPlaceholderImage(600, 400, title)}
                  alt={title}
                  className="w-full h-96 object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">The Treatment Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {treatmentProcess.map((item, index) => {
            const hasImageError = processImageErrors[index]
            // Always use a visible placeholder - either the actual image or a good placeholder
            const imageSrc = item.image && !hasImageError 
              ? item.image 
              : getDentalPlaceholderImage(900, 700, item.title)
            
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl p-5 border border-green-200/60 hover:border-emerald-400 hover:shadow-lg transition-all"
              >
                {/* Process Image - Always show something visible */}
                <div className="mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 border-[3px] border-black shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {item.image && !hasImageError ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={700}
                      className="w-full h-36 md:h-40 lg:h-44 object-cover transition-transform duration-300 hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQADAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      onError={() => setProcessImageErrors((prev) => ({ ...prev, [index]: true }))}
                    />
                  ) : (
                    <img
                      src={imageSrc}
                      alt={item.title}
                      className="w-full h-36 md:h-40 lg:h-44 object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        // If even placeholder fails, use a simple colored background
                        const target = e.target as HTMLImageElement
                        target.src = getDentalPlaceholderImage(900, 700, item.title)
                      }}
                    />
                  )}
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-extrabold text-base mb-2">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Treatment Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-emerald-600" />
                Key Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                {benefits.map((benefit, index) => (
                  <li className="text-lg md:text-xl font-medium">✓ {benefit}</li>
                ))}
              </ul>
            </div>
            {idealFor && idealFor.length > 0 && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Ideal For</h3>
                <p className="text-base md:text-lg text-gray-700 mb-3 font-medium">This treatment works best for:</p>
                <ul className="space-y-2 text-gray-700">
                  {idealFor.map((item, index) => (
                    <li className="text-lg md:text-xl">• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-700 mb-4">Treatment Timeline</h3>
            <div className="space-y-4">
              {timeline?.duration && (
                <div className="pb-4 border-b border-emerald-200">
                  <p className="text-lg md:text-xl font-bold text-gray-900">Duration</p>
                  <p className="text-base md:text-lg text-gray-600">{timeline.duration}</p>
                </div>
              )}
              {timeline?.frequency && (
                <div className="pb-4 border-b border-emerald-200">
                  <p className="text-lg md:text-xl font-bold text-gray-900">Frequency</p>
                  <p className="text-base md:text-lg text-gray-600">{timeline.frequency}</p>
                </div>
              )}
              {timeline?.recovery && (
                <div>
                  <p className="text-lg md:text-xl font-bold text-gray-900">Recovery Time</p>
                  <p className="text-base md:text-lg text-gray-600">{timeline.recovery}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Images Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">Treatment Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-emerald-100 to-green-100">
              <img
                src={getDentalPlaceholderImage(400, 300, `${title} - Visual ${num}`)}
                alt={`${title} visual ${num}`}
                className="w-full aspect-video object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-emerald-50 max-w-2xl mx-auto">
            Schedule a consultation with our dental experts to learn more about {title}
          </p>
          <Link
            href="/#appointment"
            className="inline-block px-10 py-5 bg-white text-emerald-600 font-extrabold text-xl rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}


