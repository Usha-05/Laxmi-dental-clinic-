"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DentalSymbolsBackground from "@/components/dental-symbols-background"
import {
  Shield,
  Smile,
  Baby,
  Heart,
  AlertCircle,
  Moon,
  MessageCircle,
  Activity,
  Wrench,
  Layers,
  Zap,
  Crown,
  Sparkles,
  Scissors,
  Droplet,
  Wind,
  Sun,
  CircleDot,
  Grid3x3,
} from "lucide-react"

interface ServicesProps {
  onAppointmentClick?: () => void
  onConsultationClick?: (serviceName?: string) => void
}

const services = [
  {
    icon: Shield,
    title: "Preventive Dental Treatment",
    description:
      "Comprehensive preventive care including regular cleanings, fluoride treatments, and oral health education to maintain your healthy smile.",
  },
  {
    icon: Smile,
    title: "Braces",
    description: "Traditional braces to straighten teeth and correct bite alignment for a beautiful, healthy smile.",
  },
  {
    icon: Baby,
    title: "Cleft Orthodontics",
    description: "Specialized orthodontic care for patients with cleft lip and palate conditions.",
  },
  {
    icon: Heart,
    title: "Pregnancy Dental Care",
    description: "Safe and gentle dental care tailored for expecting mothers to maintain oral health during pregnancy.",
  },
  {
    icon: AlertCircle,
    title: "Dental Emergencies",
    description: "Immediate care for urgent dental issues including toothaches, broken teeth, and trauma.",
  },
  {
    icon: Moon,
    title: "Sleep Apnea",
    description: "Diagnosis and treatment of sleep apnea using oral appliances and airway management solutions.",
  },
  {
    icon: MessageCircle,
    title: "Tongue Tie",
    description: "Professional tongue tie correction to improve speech, feeding, and oral function.",
  },
  {
    icon: Activity,
    title: "Surgical Orthodontics",
    description: "Advanced surgical procedures combined with orthodontics to correct severe jaw and bite issues.",
  },
  {
    icon: Wrench,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions using advanced implant technology for natural-looking results.",
  },
  {
    icon: Layers,
    title: "Full Mouth Prosthesis",
    description: "Complete denture solutions for full mouth rehabilitation and restoration.",
  },
  {
    icon: Zap,
    title: "Teeth Sensitivity",
    description: "Effective treatments to reduce tooth sensitivity and improve comfort during eating and drinking.",
  },
  {
    icon: Crown,
    title: "Crowns Bridges",
    description: "Custom-made crowns and bridges to restore damaged teeth and replace missing ones.",
  },
  {
    icon: Sparkles,
    title: "Dental Veneers",
    description: "Thin porcelain veneers to enhance your smile by correcting discoloration, gaps, and minor misalignments.",
  },
  {
    icon: Scissors,
    title: "Wisdom Tooth Removal",
    description: "Safe and painless extraction of wisdom teeth to prevent complications and maintain oral health.",
  },
  {
    icon: Droplet,
    title: "Bleeding Gums",
    description: "Professional treatment for gum disease and bleeding gums to restore healthy periodontal tissue.",
  },
  {
    icon: Wind,
    title: "Bad Mouth Smell",
    description: "Diagnosis and treatment of halitosis (bad breath) to restore fresh breath and confidence.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Professional teeth whitening treatments to brighten your smile and remove stains safely.",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment",
    description: "Advanced endodontic treatment to save infected teeth and eliminate pain with precision.",
  },
  {
    icon: CircleDot,
    title: "Teeth Filling",
    description: "Tooth-colored fillings to restore decayed teeth while maintaining natural appearance.",
  },
  {
    icon: Grid3x3,
    title: "Dentures",
    description: "Custom-made removable dentures for partial or complete tooth replacement solutions.",
  },
]

export default function Services({ onAppointmentClick, onConsultationClick }: ServicesProps) {
  return (
    <section id="services" className="py-4 md:py-6 lg:py-8 bg-gradient-to-b from-[#6ee7b7] via-[#a7f3d0] to-[#d1fae5] relative">
      <DentalSymbolsBackground />
      <div className="w-full px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-3 text-balance tracking-tight">Our Services</h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground max-w-2xl mx-auto text-balance font-medium leading-relaxed px-4">
            Comprehensive dental and cosmetic solutions tailored to meet all your oral health needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg flex flex-col">
                <CardHeader>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-4 flex-1">
                    {service.description}
                  </CardDescription>
                  <Button
                    onClick={() => {
                      if (onConsultationClick) {
                        onConsultationClick(service.title)
                      } else if (onAppointmentClick) {
                        onAppointmentClick()
                      }
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl md:text-2xl font-semibold py-5"
                  >
                    Request Consultation
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
