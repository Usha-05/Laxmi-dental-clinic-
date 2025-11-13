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
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
    {
      src: "/c4.jpg",
      name: "Clinic View 4",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
    {
      src: "/c5.jpg",
      name: "Clinic View 5",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
    {
      src: "/c6.jpg",
      name: "Clinic View 6",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
    {
      src: "/c8.jpg",
      name: "Clinic View 8",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
    {
      src: "/c9.jpg",
      name: "Clinic View 9",
      aspect: "aspect-[4/3]",
      minHeight: "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
      span: ""
    },
  ]

  const handleImageError = (src: string) => {
    setImageErrors((prev) => ({ ...prev, [src]: true }))
  }

  return (
    <section id="clinic-view" className="py-3 md:py-4 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">Clinic View</h2>
            <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
          </div>

          {/* Gallery Grid - 3 images per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
            {clinicImages.map((image, index) => {
              const {
                aspect = "aspect-[4/3]",
                minHeight = "min-h-[180px] sm:min-h-[200px] md:min-h-[220px]",
                span = ""
              } = image
              // First image has transparent background, others have gray background
              const bgClass = index === 0 ? "bg-transparent" : "bg-gray-100"
              const containerClasses = `relative w-full overflow-hidden ${bgClass} rounded-xl shadow-md hover:shadow-lg transition-shadow ${aspect} ${minHeight}`
              // First image uses object-contain to show complete image, others use object-cover
              const objectFitClass = index === 0 ? "object-contain" : "object-cover"

              return (
                <div key={image.src} className={`clinic-view-card ${span}`}>
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
