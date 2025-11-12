"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import TreatmentPageContent from "@/components/treatment-page-content"
import Appointment from "@/components/appointment"
import ConsultationModal from "@/components/consultation-modal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DynamicTreatmentPage() {
  const params = useParams()
  const slug = params?.slug as string[]
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")

  // Combine slug parts to create full path
  const fullPath = Array.isArray(slug) ? slug.join("/") : slug || ""

  const handleConsultationClick = (serviceName?: string) => {
    setSelectedService(serviceName || "")
    setConsultationOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      <Navbar onAppointmentClick={() => setAppointmentOpen(true)} />
      <TreatmentPageContent 
        slug={fullPath} 
        onAppointmentClick={() => setAppointmentOpen(true)}
        onConsultationClick={handleConsultationClick}
      />
      <Appointment isOpen={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => {
          setConsultationOpen(false)
          setSelectedService("")
        }}
        serviceName={selectedService}
      />
      <Footer />
    </div>
  )
}
