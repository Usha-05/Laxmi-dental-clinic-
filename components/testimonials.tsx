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
    <section id="testimonials" className="py-3 md:py-4 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">What Our Patients Say</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
            Join hundreds of satisfied patients who have transformed their smiles with us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all">
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
      </div>
    </section>
  )
}
