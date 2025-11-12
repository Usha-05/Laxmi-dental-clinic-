"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { getRealisticClinicImage } from "@/lib/image-placeholder"

export default function Hero({ onAppointmentClick }: { onAppointmentClick: () => void }) {
  const [imageError, setImageError] = useState(false)
  const primaryHeroImage = "/headerr.png"

  return (
    <section id="home" className="pt-38 md:pt-42 lg:pt-46 pb-8 md:pb-12 lg:pb-16 relative overflow-hidden bg-gradient-to-b from-[#1E603F] via-[#289660] via-[#34d399] to-[#6ee7b7]">
      <div className="w-full px-2 sm:px-4 lg:px-6 relative">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-white text-balance tracking-tight">
                Hi, welcome to Laxmi Face and Multispeciality Dental Hospital
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">It's anxiety free...</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white/95 leading-relaxed text-balance max-w-2xl font-medium">
                Transforming Smiles, Enhancing Lives: Your Trusted Destination for Complete Dental & Facial Care.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={onAppointmentClick}
                className="bg-white hover:bg-white/90 text-primary font-bold px-8 py-4 text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Right Visual - Modern Header Illustration */}
          <div className="relative h-[22rem] md:h-[25rem] w-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-emerald-200/80 via-teal-300/60 to-emerald-400/80 blur-3xl opacity-70" />
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(14,116,144,0.45)] ring-1 ring-emerald-100/70">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-100 to-emerald-200" />

              {/* Decorative waves */}
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-white/35 rounded-full blur-3xl" />
              <div className="absolute -top-12 -right-8 w-64 h-64 bg-white/25 rounded-full blur-3xl" />

              {/* Floating dental icons */}
              <svg
                className="absolute top-6 right-6 w-14 h-14 text-emerald-500/60 drop-shadow-lg"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M44.5 10.5c-4.1 0-7.4 2.8-12.5 2.8-5.1 0-8.4-2.8-12.5-2.8C11 10.5 8 18.2 8 24.4c0 9.6 5.6 13.4 9.1 13.4 3.5 0 4.3-1.3 7-1.3 2.7 0 3.5 1.3 7 1.3 3.5 0 9.1-3.8 9.1-13.4 0-6.2-3-13.9-11.5-13.9Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="absolute bottom-8 left-6 w-16 h-16 text-emerald-400/40"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  d="M20 40c10-15 30-25 60-20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M18 58c10-15 32-30 64-24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.45"
                />
              </svg>

              <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
                <img
                  src={
                    imageError
                      ? getRealisticClinicImage(1100, 900)
                      : primaryHeroImage
                  }
                  alt="Modern dental operatory at Laxmi Face & Multispeciality Dental Hospital"
                  className="w-full h-full object-cover object-center"
                  onError={() => setImageError(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
