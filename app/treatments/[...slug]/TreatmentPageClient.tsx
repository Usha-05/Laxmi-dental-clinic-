"use client"

import React, { useState } from "react"
import TreatmentPageContent from "@/components/treatment-page-content"
import Appointment from "@/components/appointment"
import ConsultationModal from "@/components/consultation-modal"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

interface Props {
  slug: string
}

export default function TreatmentPageClient({ slug }: Props) {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")

  const handleConsultationClick = (serviceName?: string) => {
    setSelectedService(serviceName || "")
    setConsultationOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      <Navbar onAppointmentClick={() => setAppointmentOpen(true)} />
      <TreatmentPageContent 
        slug={slug} 
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
