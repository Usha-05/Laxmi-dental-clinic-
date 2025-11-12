"use client"

import { useState } from "react"
import { getClinicPlaceholderImage } from "@/lib/image-placeholder"

type ClinicImage = {
  src: string
  name: string
  aspect?: string
  minHeight?: string
  span?: string
}

export default function ClinicView() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const clinicImages: ClinicImage[] = [
    {
      src: "/c1.jpg",
      name: "Clinic View 1",
      aspect: "aspect-[3/4]",
      minHeight: "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
    },
    {
      src: "/c4.jpg",
      name: "Clinic View 4",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]"
    },
    {
      src: "/c5.jpg",
      name: "Clinic View 5",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]"
    },
    {
      src: "/c6.jpg",
      name: "Clinic View 6",
      aspect: "aspect-[5/4]",
      minHeight: "min-h-[240px] sm:min-h-[260px] md:min-h-[320px]"
    },
    {
      src: "/c8.jpg",
      name: "Clinic View 8",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]"
    },
    {
      src: "/c9.jpg",
      name: "Clinic View 9",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[260px] sm:min-h-[280px] md:min-h-[320px]"
    },
  ]

  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }))
  }

  return (
    <section id="clinic-view" className="py-6 md:py-10 lg:py-12 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="space-y-5 md:space-y-7">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">Clinic View</h2>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4">
            {clinicImages.map((image) => {
              const {
                aspect = "aspect-[4/3]",
                minHeight = "min-h-[240px] sm:min-h-[260px] md:min-h-[300px]",
                span = ""
              } = image
              const containerClasses = `relative w-full overflow-hidden bg-white h-full rounded-2xl ${aspect} ${minHeight}`
              const objectFitClass = "object-cover block"

              return (
                <div key={image.src} className={`clinic-view-card h-full ${span}`}>
                  <div className={containerClasses}>
                    <img
                      src={!imageErrors[image.src] ? image.src : getClinicPlaceholderImage(800, 600, image.name)}
                      alt={`Clinic view - ${image.name}`}
                      className={`w-full h-full ${objectFitClass} object-center transition-transform duration-300 hover:scale-105`}
                      loading="lazy"
                      onError={() => handleImageError(image.src)}
                    />
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
