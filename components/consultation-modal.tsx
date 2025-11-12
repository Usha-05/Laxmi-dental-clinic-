"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, X } from "lucide-react"
import Image from "next/image"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
}

export default function ConsultationModal({ isOpen, onClose, serviceName }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    concern: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      // Prevent scrolling
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scroll position when modal closes
        const bodyTop = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        if (bodyTop) {
          window.scrollTo(0, parseInt(bodyTop || '0') * -1)
        }
      }
    }
  }, [isOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate || !formData.concern) {
      setError("Please fill in all required fields")
      return
    }

    setIsLoading(true)

    try {
      const consultationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime || "",
        concern: formData.concern,
        consultationType: "video" as "video" | "call", // Default to video for consultation modal
        serviceName: serviceName || undefined,
      }

      const response = await fetch("/api/virtual-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(consultationData),
      })

      if (!response.ok) {
        const contentType = response.headers.get("content-type")
        let errorMessage = "Failed to submit consultation request"

        if (contentType?.includes("application/json")) {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } else {
          errorMessage = await response.text()
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      // Also open WhatsApp as fallback (in case API doesn't send)
      const serviceText = serviceName ? `\nService: ${serviceName}` : ""
      const message = `Consultation Request:${serviceText}\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nConcern: ${formData.concern}`
      const whatsappUrl = `https://wa.me/917794879535?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", preferredDate: "", preferredTime: "", concern: "" })
        setSubmitted(false)
        onClose()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("[v0] Consultation submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] px-6 md:px-8 lg:px-12 py-4 overflow-y-auto" 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000 }}
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full shadow-2xl border-2 border-gray-200 max-h-[90vh] overflow-y-auto relative z-[10001] flex-shrink-0" 
        style={{ 
          backgroundColor: '#ffffff', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          zIndex: 10001,
          position: 'relative',
          opacity: 1,
          visibility: 'visible',
          minHeight: '200px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center py-8 px-6">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Consultation Request Sent!</h3>
            <p className="text-base md:text-lg text-muted-foreground">
              We'll contact you shortly to confirm your consultation. Your consultation request has been sent to our email and WhatsApp. Thank you for choosing Laxmi Face and Multispeciality Dental Hospital.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-6 border-b border-border bg-green-600 text-white rounded-t-xl">
              <div className="flex items-center gap-4">
                <div className="relative w-[280px] h-[98px] hidden sm:block">
                  <Image
                    src="/finalclinicc.jpg"
                    alt="Laxmi Face and Multispeciality Dental Hospital"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Schedule Your Consultation</h3>
                  <p className="text-base md:text-lg text-green-100 mt-1">
                    Fill in your details and we'll get back to you
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-1 hover:bg-green-700 rounded-lg">
                <X size={24} className="text-white" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-6 form-text-xl">
              {error && (
                <div className="text-red-600 text-base md:text-lg font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Preferred Date *</label>
                <Input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full text-base md:text-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Preferred Time</label>
                <p className="text-sm md:text-base text-muted-foreground mb-2">Clinic Hours: 9:00 AM - 9:00 PM</p>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg md:text-xl bg-white text-foreground"
                  style={{ 
                    fontSize: '18px', 
                    backgroundColor: '#ffffff', 
                    color: '#000000',
                    minHeight: '48px'
                  }}
                >
                  <option value="" style={{ fontSize: '18px', backgroundColor: '#ffffff', color: '#000000' }}>Select a time slot</option>
                  {(() => {
                    const timeSlots = []
                    for (let hour = 9; hour < 21; hour++) {
                      timeSlots.push(`${hour.toString().padStart(2, "0")}:00`)
                      timeSlots.push(`${hour.toString().padStart(2, "0")}:30`)
                    }
                    return timeSlots.map((slot) => (
                      <option key={slot} value={slot} style={{ fontSize: '18px', backgroundColor: '#ffffff', color: '#000000' }}>
                        {slot}
                      </option>
                    ))
                  })()}
                </select>
              </div>

              <div>
                <label className="block text-base md:text-lg font-semibold text-foreground mb-2">Your Concern *</label>
                <Textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleInputChange}
                  placeholder="Tell us about your dental concerns"
                  className="w-full resize-none text-base md:text-lg"
                  rows={3}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white h-14 font-bold text-lg md:text-xl py-4"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Request Consultation"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

