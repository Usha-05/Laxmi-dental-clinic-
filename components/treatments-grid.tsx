"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Shield, Wrench, Smile, Baby, Activity } from "lucide-react"
import { getRealisticExpertiseImage } from "@/lib/image-placeholder"
import DentalSymbolsBackground from "@/components/dental-symbols-background"

export default function TreatmentsGrid() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const expertiseData = [
    {
      name: "Orthodontics",
      category: "Braces & Aligners",
      icon: Smile,
      description: "Advanced orthodontic treatments including braces, aligners, and jaw correction for a perfect smile alignment.",
      image: "/clear-aligners-invisalign.jpg",
      fallbackImage: "/female-aligners-invisalign.jpg",
    },
    {
      name: "Pediatric",
      category: "Kids Dental Care",
      icon: Baby,
      description: "Specialized dental care for children, ensuring healthy dental development and positive dental experiences.",
      image: "/female-child-dental-care.jpg",
      fallbackImage: "/smiling-child-happy.jpg",
    },
    {
      name: "Restorative",
      category: "Restore Your Smile",
      icon: Wrench,
      description: "Comprehensive restoration solutions including fillings, crowns, bridges, and implants to restore your smile.",
      image: "/dental-treatment-room.jpg",
      fallbackImage: "/modern-dental-office-with-smiling-patients.jpg",
    },
    {
      name: "Surgical",
      category: "Expert Surgery",
      icon: Activity,
      description: "Expert surgical procedures including wisdom tooth removal, cosmetic jaw surgery, and advanced oral surgery.",
      image: "/surgical-orthodontics.jpg",
      fallbackImage: "/female-surgical-orthodontics.jpg",
    },
    {
      name: "Preventive",
      category: "Preventive Care",
      icon: Shield,
      description: "Proactive dental care including cleanings, fluoride treatments, and screenings to maintain optimal oral health.",
      image: "/preventive-dental-care.jpg",
      fallbackImage: "/female-preventive-care.jpg",
    },
  ]

  const handleImageError = (expertiseName: string) => {
    setImageErrors((prev) => ({ ...prev, [expertiseName]: true }))
  }

  const getImageSrc = (expertise: typeof expertiseData[0]) => {
    if (imageErrors[expertise.name]) {
      return expertise.fallbackImage || getRealisticExpertiseImage(400, 250, expertise.name)
    }
    return expertise.image
  }

  return (
    <section id="treatments" className="py-3 md:py-4 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white relative overflow-hidden">
      <DentalSymbolsBackground />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-3 space-y-1.5 md:space-y-2">
          <div className="inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-emerald-100 rounded-full border border-emerald-200">
            <p className="text-emerald-700 text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide">OUR EXPERTISE</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-emerald-700 mb-3 tracking-tight leading-tight">Comprehensive Dental Care</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            From preventive care to advanced surgical solutions, we offer a complete spectrum of dental treatments
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 w-full">
            {expertiseData.map((expertise) => {
              const IconComponent = expertise.icon

              return (
                <div
                  key={expertise.name}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-[#1E603F] to-[#289660] text-white px-6 py-4">
                    <p className="text-base md:text-lg font-semibold uppercase tracking-wide">{expertise.category}</p>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                    {!imageErrors[expertise.name] ? (
                      <Image
                        src={getImageSrc(expertise)}
                        alt={expertise.name}
                        fill
                        priority={false}
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        onError={() => {
                          if (!imageErrors[expertise.name]) {
                            handleImageError(expertise.name)
                          }
                        }}
                      />
                    ) : (
                      <img
                        src={expertise.fallbackImage || getRealisticExpertiseImage(800, 600, expertise.name)}
                        alt={expertise.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getRealisticExpertiseImage(800, 600, expertise.name)
                        }}
                      />
                    )}
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-5 lg:p-6 flex flex-col items-center text-center flex-1">
                    {/* Icon Container */}
                    <div className="relative -mt-8 mb-3">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-emerald-100 group-hover:border-emerald-200 transition-colors duration-300">
                        <IconComponent size={32} className="md:w-10 md:h-10 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-800 transition-colors duration-300 tracking-tight">
                      {expertise.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {expertise.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
