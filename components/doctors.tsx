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
    <section id="doctors" className="py-4 md:py-6 lg:py-8 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full">
        {/* Centered Header */}
        <div className="max-w-7xl mx-auto mb-4 md:mb-6 px-3 sm:px-4 lg:px-5">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-3 tracking-tight font-serif">Our Doctors</h2>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed font-semibold">
              Experienced specialists dedicated to your care.
            </p>
          </div>
        </div>

        {/* Full Width Cards Container */}
        <div className="w-full px-1 sm:px-2">
          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-1 w-full">
          {doctors.map((doc) => {
            const imageSrc = imageErrors[doc.name]
              ? getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])
              : doc.photo || "/professional-dentist-portrait.jpg"
            const isVishnuPortrait = doc.photo === "/vishnu-gowtham.jpg"
            
            return (
              <article key={doc.name} className="rounded-2xl bg-white border border-border/70 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full md:flex-1 md:min-w-0 min-h-[280px]">
                {/* Mobile Image */}
                <div className="relative md:hidden bg-gray-100 w-full h-48">
                  {!imageErrors[doc.name] ? (
                    <Image
                      src={imageSrc}
                      alt={doc.name}
                      fill
                      className={`object-cover transition-transform duration-300 ${
                        isVishnuPortrait ? "object-top" : "object-center"
                      }`}
                      sizes="100vw"
                      onError={() => handleImageError(doc.name)}
                    />
                  ) : (
                    <img
                      src={getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])}
                      alt={doc.name}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                
                <div className="flex flex-1 items-stretch gap-0 min-h-0">
                  {/* Desktop Image */}
                  <div className="relative hidden md:block bg-gray-100 w-48 lg:w-56 xl:w-64 flex-shrink-0 h-full min-h-[200px]">
                    {!imageErrors[doc.name] ? (
                      <Image
                        src={imageSrc}
                        alt={doc.name}
                        fill
                        className={`object-cover transition-transform duration-300 hover:scale-105 ${
                          isVishnuPortrait ? "object-top" : "object-center"
                        }`}
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                        priority={doc.name === "Vishnu Gowtham Marella"}
                        onError={() => handleImageError(doc.name)}
                      />
                    ) : (
                      <img
                        src={getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])}
                        alt={doc.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-5 md:p-6 lg:p-7 flex-1 flex flex-col gap-3 text-xl md:text-2xl leading-relaxed overflow-hidden">
                    <div className="space-y-2 mb-4">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight font-serif">{doc.name}</h3>
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{doc.degrees}</p>
                      <p className="text-xl md:text-2xl lg:text-3xl text-emerald-700 font-semibold">{doc.title}</p>
                    </div>

                    {doc.description && (
                      <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-4 font-normal">
                        {doc.description}
                      </p>
                    )}

                    <div className="space-y-2 mb-4">
                      {doc.education.map((line, i) => (
                        <p key={i} className="text-lg md:text-xl lg:text-2xl text-muted-foreground break-words leading-relaxed font-normal">{line}</p>
                      ))}
                    </div>

                    {doc.experience && (
                      <div className="space-y-2 mb-4">
                        {doc.experience.map((line, i) => (
                          <p key={i} className="text-lg md:text-xl lg:text-2xl text-muted-foreground break-words leading-relaxed font-normal">{line}</p>
                        ))}
                      </div>
                    )}

                    {doc.expertise && (
                      <ul className="list-disc pl-6 space-y-2">
                        {doc.expertise.map((item, i) => (
                          <li key={i} className="text-lg md:text-xl lg:text-2xl text-muted-foreground break-words leading-relaxed font-normal">{item}</li>
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



