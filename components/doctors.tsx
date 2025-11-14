"use client"

import { useState } from "react"
import Image from "next/image"
import { getDoctorPlaceholderImage } from "@/lib/image-placeholder"

type Doctor = {
  name: string
  degrees: string
  title: string
  education: string[]
  experience?: string[]
  expertise?: string[]
  photo?: string
  description?: string
}

const doctors: Doctor[] = [
  {
    name: "Vishnu Gowtham Marella",
    degrees: "BDS, MDS",
    title: "Oral & Maxillofacial Surgeon",
    education: [
      "BDS – SDM College of Dental Sciences & Hospital",
      "MDS – P.H.N.H. Dental College & Hospital, Bagalkot",
    ],
    experience: [
      "Worked as in Sri Sai College of Dental Surgery and Kamineni Institute of Dental Sciences",
      "Currently working as Professor in Mediciti Institute of Medical Sciences",
    ],
    expertise: [
      "Has expertise in treating various kinds of facial trauma & pathologies",
    ],
    photo: "/vishnu-gowtham.jpg",
    description:
      "BDS, MDS – Oral & Maxillofacial Surgeon with extensive experience in complex facial trauma, oral pathologies, and surgical rehabilitation. Leads interdisciplinary treatment planning, mentors postgraduate surgeons, and implements evidence-backed protocols for patient safety and faster recovery.",
  },
  {
    name: "Sri Lakshmi Swetha",
    degrees: "BDS, MDS",
    title: "Orthodontist & Aligner Specialist",
    education: [
      "BDS – Vishnu Dental College, Bhimavaram",
      "MDS – Sibar Institute of Dental Sciences, Guntur",
    ],
    expertise: [
      "Malocclusions",
      "TMJ disorders",
      "Cleft lip & cleft palate",
      "Orthognathic surgery cases",
      "Sleep disorders",
      "Adult orthodontic cases",
      " Certified in various aligner courses including Invisalign.",
    ],
    photo: "/doctor.jpg",
    description:
      "BDS, MDS – Orthodontist & Aligner Specialist focused on precision smile design, airway-conscious orthodontics, and advanced aligner therapies.",
  },
]

export default function Doctors() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (doctorName: string) => {
    setImageErrors((prev) => ({ ...prev, [doctorName]: true }))
  }

  return (
    <section id="doctors" className="py-2.5 md:py-4 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mb-2">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold mb-1 tracking-tight font-serif">Our Doctors</h2>
            <p className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto leading-snug font-medium">
              Experienced specialists dedicated to your care.
            </p>
          </div>
        </div>

        {/* Full Width Cards Container */}
        <div className="w-full">
          <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto">
          {doctors.map((doc) => {
            const imageSrc = imageErrors[doc.name]
              ? getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])
              : doc.photo || "/professional-dentist-portrait.jpg"
            const isVishnuPortrait = doc.photo === "/vishnu-gowtham.jpg"
            const imageObjectPosition = isVishnuPortrait ? "top center" : "center"

            return (
              <article key={doc.name} className="rounded-xl bg-white border border-border/70 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col w-full">
                {/* Mobile Image */}
                <div className="relative md:hidden bg-gray-100 w-full h-40 p-2">
                  {!imageErrors[doc.name] ? (
                    <Image
                      src={imageSrc}
                      alt={doc.name}
                      fill
                      className="object-contain transition-transform duration-300"
                      sizes="100vw"
                      onError={() => handleImageError(doc.name)}
                      style={{ objectPosition: imageObjectPosition }}
                    />
                  ) : (
                    <img
                      src={getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])}
                      alt={doc.name}
                      className="h-full w-full object-contain object-center"
                      style={{ objectPosition: imageObjectPosition }}
                    />
                  )}
                </div>
                
                <div className="flex flex-1 items-stretch gap-0 min-h-0">
                  {/* Desktop Image */}
                  <div className="relative hidden md:block bg-gray-100 w-44 lg:w-48 xl:w-52 flex-shrink-0 h-auto min-h-[240px] p-2">
                    {!imageErrors[doc.name] ? (
                      <Image
                        src={imageSrc}
                        alt={doc.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 176px, (max-width: 1024px) 192px, 208px"
                        priority={doc.name === "Vishnu Gowtham Marella"}
                        onError={() => handleImageError(doc.name)}
                        style={{ objectPosition: imageObjectPosition }}
                      />
                    ) : (
                      <img
                        src={getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])}
                        alt={doc.name}
                        className="h-full w-full object-cover object-center"
                        style={{ objectPosition: imageObjectPosition }}
                      />
                    )}
                  </div>
                  <div className="p-3 sm:p-3 md:p-4 flex-1 flex flex-col gap-1 text-[0.9rem] sm:text-base leading-snug overflow-hidden">
                    <div className="space-y-0.5 mb-0.5">
                      <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-foreground tracking-tight font-serif">{doc.name}</h3>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-primary">{doc.degrees}</p>
                      <p className="text-xs sm:text-sm md:text-base text-emerald-700 font-semibold">{doc.title}</p>
                    </div>

                    {doc.description && (
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug mb-0.5 font-normal">
                        {doc.description}
                      </p>
                    )}

                    <div className="space-y-0.5 mb-0.5">
                      {doc.education.map((line, i) => (
                        <p key={i} className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-snug font-normal">{line}</p>
                      ))}
                    </div>

                    {doc.experience && (
                      <div className="space-y-0.5 mb-0.5">
                        {doc.experience.map((line, i) => (
                          <p key={i} className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-snug font-normal">{line}</p>
                        ))}
                      </div>
                    )}

                    {doc.expertise && (
                      <ul className="list-disc pl-3 sm:pl-3 space-y-0.5">
                        {doc.expertise.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm md:text-base text-muted-foreground break-words leading-snug font-normal">{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
          </div>
        </div>
      </div>
    </section>
  )
}



