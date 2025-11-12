"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Excellent dental care! The team is very professional and friendly. My smile transformation exceeded all my expectations.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    text: "The best dental experience I've ever had. Dr. Laxmi and team are highly skilled. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anjali Patel",
    text: "Very clean and modern facility. The treatment process was painless and the results are amazing. Thank you!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    text: "Professional, caring, and results-oriented. This is the dental hospital everyone should visit.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">What Our Patients Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Join hundreds of satisfied patients who have transformed their smiles with us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 italic">{testimonial.text}</p>
                <p className="text-lg md:text-xl font-bold text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
