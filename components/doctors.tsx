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
    <section id="doctors" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full px-3 sm:px-5 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold mb-3">Our Doctors</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Experienced specialists dedicated to your care.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {doctors.map((doc) => {
            const imageSrc = imageErrors[doc.name]
              ? getDoctorPlaceholderImage(400, 400, doc.name.split(" ")[0])
              : doc.photo || "/professional-dentist-portrait.jpg"
            const isVishnuPortrait = doc.photo === "/vishnu-gowtham.jpg"
            
            return (
              <article key={doc.name} className="rounded-2xl bg-white border border-border/70 overflow-hidden shadow-sm h-full flex flex-col">
                <div className="flex flex-1 items-stretch gap-0">
                  <div className="relative hidden md:block bg-gray-100 w-32 lg:w-36 min-h-[210px] max-h-[260px]">
                    {!imageErrors[doc.name] ? (
                      <Image
                        src={imageSrc}
                        alt={doc.name}
                        fill
                        className={`object-cover transition-transform duration-300 hover:scale-105 ${
                          isVishnuPortrait ? "object-top" : "object-center"
                        }`}
                        sizes="(max-width: 640px) 140px, 200px"
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
                  <div className="p-5 flex-1 flex flex-col gap-3 text-sm md:text-base leading-relaxed">
                    <div className="space-y-1.5">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">{doc.name}</h3>
                      <p className="text-sm md:text-base font-semibold text-primary">{doc.degrees}</p>
                      <p className="text-sm md:text-base text-emerald-700 font-semibold">{doc.title}</p>
                    </div>

                    {doc.description && (
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    )}

                    <div className="space-y-1.5 mt-1.5">
                      {doc.education.map((line, i) => (
                        <p key={i} className="text-sm md:text-base text-muted-foreground">{line}</p>
                      ))}
                    </div>

                    {doc.experience && (
                      <div className="space-y-1.5 mt-3">
                        {doc.experience.map((line, i) => (
                          <p key={i} className="text-sm md:text-base text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    )}

                    {doc.expertise && (
                      <ul className="list-disc pl-4 mt-3 space-y-1">
                        {doc.expertise.map((item, i) => (
                          <li key={i} className="text-sm md:text-base text-muted-foreground">{item}</li>
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



