"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TreatmentsGrid from "@/components/treatments-grid"
import Services from "@/components/services"
import About from "@/components/about"
import Doctors from "@/components/doctors"
import ClinicView from "@/components/clinic-view"
import AssessYourself from "@/components/assess-yourself"
import SmileSimulator from "@/components/smile-simulator"
import VirtualConsultation from "@/components/virtual-consultation"
import Testimonials from "@/components/testimonials"
import Appointment from "@/components/appointment"
import ConsultationModal from "@/components/consultation-modal"
import Footer from "@/components/footer"
import ContactUs from "@/components/contact-us"

export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")

  const handleConsultationClick = (serviceName?: string) => {
    setSelectedService(serviceName || "")
    setConsultationOpen(true)
  }

  return (
    <div className="min-h-screen relative pt-36 sm:pt-40 md:pt-40 lg:pt-40">
      <Navbar onAppointmentClick={() => setAppointmentOpen(true)} />
      <Hero onAppointmentClick={() => setAppointmentOpen(true)} />
      <TreatmentsGrid />
      <Services
        onAppointmentClick={() => setAppointmentOpen(true)}
        onConsultationClick={handleConsultationClick}
      />
      <About />
      <Doctors />
      <ClinicView />
      <AssessYourself />
      <SmileSimulator />
      <VirtualConsultation />
      <Testimonials />
      <ContactUs />
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
