"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export type Testimonial = {
  name: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "Shakir Pasha . SD",
    text: "I had an excellent experience at Laxmi Face and Multispecialty Dental Hospital. The entire team was highly professional, caring, and attentive from the moment I walked in. The doctors explained every procedure clearly and ensured I was completely comfortable throughout my treatment.",
    rating: 5,
  },
  {
    name: "Sanjay Sreekanth Guturi",
    text: "Choosing Dr. Laxmi garu for my dental treatment was one of the best decisions I've made. I'm still in the middle of my treatment, but the care, professionalism, and genuine concern she shows for her patients have been exceptional.",
    rating: 5,
  },
  {
    name: "teja m",
    text: "Dr. Lakshmi clearly examined my teeth, problematic area in my mouth and patiently explained the root cause. Underwent root canal and got a cap for tooth. The hospital is very clean and tidy and the staff very humble and received great service.",
    rating: 5,
  },
  {
    name: "Rahul Chowdary",
    text: "I have recently visited Laxmi dental clinic for aligner treatment to correct my crooked teeth. The doctor laxmi madam was very humble, addressed all my issues and gave me the right choice and best treatment. I'm very much happy and satisfied with the treatment and happy to be part of the Invisalign journey with Dr Lakshmi.",
    rating: 5,
  },
  {
    name: "vijay kumar togati",
    text: "I went for my wisdom teeth extraction which was growing in the wrong direction. Painless treatment in less time. Thanks sir and laxmi madam, prices are affordable.",
    rating: 5,
  },
  {
    name: "Prashant Kumar",
    text: "Had a great experience with my wisdom tooth removal. Dr. Vishnu treated me with care and gave complete explanation about the issue followed by utmost care. The best part was the follow up after treatment which shows the concern of the doctor.",
    rating: 5,
  },
  {
    name: "Vinay Vimala",
    text: "I went to Lakshmi Dental Hospital in Vanasthalipuram and the doctor asked me for treatment and I did teeth scaling treatment. Very reasonable price and Dr. Lakshmi was very friendly. Big thanks to the doctor and the staff.",
    rating: 5,
  },
  {
    name: "roopa k",
    text: "Had a great experience with Laxmi face and multi-speciality dental hospital. Doctors Dr. Vishnu sir & Dr Swetha mam clearly explained procedure. Good patient care and maintain high standards of hygiene. Minimal charges with high quality services. Staff very good.",
    rating: 5,
  },
]

const treatmentReviewMap: Record<string, number[]> = {
  "root-canal": [0, 1],
  braces: [1, 3],
  "professional-cleaning": [2, 3],
  extractions: [1, 2],
  "wisdom-tooth": [1, 2],
  "emergency-dentist": [0, 1],
  implants: [1, 2],
  "dental-implant": [1, 2],
  "emergency": [0, 1],
}

export function getTreatmentTestimonials(slug: string): Testimonial[] {
  const normalizedSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, "")

  if (!normalizedSlug) {
    return []
  }

  const reviewIndexes = Object.entries(treatmentReviewMap).find(([key]) => normalizedSlug.includes(key))?.[1]

  if (!reviewIndexes) {
    return []
  }

  return reviewIndexes.map((index) => testimonials[index]).filter(Boolean)
}

type TestimonialsProps = {
  items?: Testimonial[]
  showGoogleReviewsButton?: boolean
  showHeader?: boolean
  title?: string
  description?: string
}

export default function Testimonials({
  items = testimonials,
  showGoogleReviewsButton = true,
  showHeader = true,
  title = "What Our Patients Say",
  description = "Join hundreds of satisfied patients who have transformed their smiles with us",
}: TestimonialsProps) {
  const googleReviewsUrl = "https://www.google.com/maps/place/Laxmi+face+and+multispeciality+dental+hospital/@17.3325046,78.5692702,17z/data=!4m8!3m7!1s0x3bcba11047d8f569:0xc954ab6502dc9185!8m2!3d17.3325046!4d78.5692702!9m1!1b1!16s%2Fg%2F11yjbsjy3y"

  return (
    <section id="testimonials" className="py-3 md:py-4 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
              {description}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {items.map((testimonial, index) => (
            <Card key={`${testimonial.name}-${index}`} className="border-border hover:border-primary/50 transition-all">
              <CardContent className="pt-3">
                <div className="flex gap-1 mb-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-2 italic">{testimonial.text}</p>
                <p className="text-xs md:text-sm font-bold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {showGoogleReviewsButton && (
          <div className="mt-4 text-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              View all Google Reviews
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
