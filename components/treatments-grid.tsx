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
    <section id="treatments" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white relative overflow-hidden">
      <DentalSymbolsBackground />
      <div className="w-full px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
            <div className="inline-block px-5 py-2.5 bg-emerald-100 rounded-full border border-emerald-200">
              <p className="text-emerald-700 text-base font-bold uppercase tracking-wide">OUR EXPERTISE</p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4 tracking-tight leading-tight">Comprehensive Dental Care</h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium px-4">
              From preventive care to advanced surgical solutions, we offer a complete spectrum of dental treatments
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 w-full">
            {expertiseData.map((expertise) => {
              const IconComponent = expertise.icon

              return (
                <div
                  key={expertise.name}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-emerald-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col h-full"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-r from-[#1E603F] to-[#289660] text-white px-4 py-2">
                    <p className="text-xs font-semibold uppercase tracking-wide">{expertise.category}</p>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
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
                  <div className="p-3 flex flex-col items-center text-center flex-1">
                    {/* Icon Container */}
                    <div className="relative -mt-8 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border-2 border-emerald-100 group-hover:border-emerald-200 transition-colors duration-300">
                        <IconComponent size={20} className="text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-emerald-700 mb-1.5 group-hover:text-emerald-800 transition-colors duration-300 tracking-tight">
                      {expertise.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
