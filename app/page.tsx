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
import Link from "next/link"


export default function Home() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>("")

  const handleConsultationClick = (serviceName?: string) => {
    setSelectedService(serviceName || "")
    setConsultationOpen(true)
  }

  return (
    <div className="min-h-screen relative pt-16 sm:pt-20 md:pt-20 lg:pt-20">
      <Navbar onAppointmentClick={() => setAppointmentOpen(true)} />
      <Hero onAppointmentClick={() => setAppointmentOpen(true)} />
      <nav aria-label="Priority dental services" className="bg-white py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-6 gap-y-2 px-4 text-sm font-semibold text-emerald-700 sm:px-6 lg:px-8">
          <Link href="/treatments/root-canal" className="hover:text-emerald-900 hover:underline">Root Canal Treatment</Link>
          <Link href="/treatments/surgical-treatments/wisdom-tooth-removal" className="hover:text-emerald-900 hover:underline">Wisdom Tooth Removal</Link>
          <Link href="/treatments/braces" className="hover:text-emerald-900 hover:underline">Braces and Clear Aligners</Link>
          <Link href="/treatments/professional-cleaning" className="hover:text-emerald-900 hover:underline">Teeth Cleaning</Link>
          <Link href="/treatments/emergency-dentist" className="hover:text-emerald-900 hover:underline">Emergency Dental Care</Link>
        </div>
      </nav>
      <section className="bg-gradient-to-b from-emerald-50/60 to-emerald-50/40 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-3xl text-center">Complete dental and facial care from qualified specialists in Vanasthalipuram</h2>
          <ul className="mt-5 grid gap-3 text-gray-700 md:grid-cols-2">
            <li>• Orthodontic care for braces, clear aligners and Invisalign assessments</li>
            <li>• Oral and maxillofacial surgical evaluation, including wisdom teeth</li>
            <li>• Digital OPG and dental X-ray assessment when clinically required</li>
            <li>• Clear explanation of findings, treatment sequence and estimated costs</li>
            <li>• Care for children, adults and dental emergencies</li>
          </ul>
        </div>
      </section>
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
