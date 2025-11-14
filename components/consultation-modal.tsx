"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
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
  const [timePopoverOpen, setTimePopoverOpen] = useState(false)

  const timeSlots = useMemo(() => {
    const slots: string[] = []
    for (let hour = 9; hour < 21; hour++) {
      const hourLabel = hour.toString().padStart(2, "0")
      slots.push(`${hourLabel}:00`)
      slots.push(`${hourLabel}:30`)
    }
    return slots
  }, [])

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
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] px-4 md:px-6 py-4 overflow-y-auto" 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000 }}
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-xl max-w-xl sm:max-w-2xl w-full shadow-2xl border-2 border-gray-200 max-h-[85vh] overflow-y-auto relative z-[10001] flex-shrink-0" 
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
          <div className="text-center py-4 px-5">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <h3 className="text-base md:text-lg font-bold text-foreground mb-1.5">Consultation Request Sent!</h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              We'll contact you shortly to confirm your consultation. Your consultation request has been sent to our email and WhatsApp. Thank you for choosing Laxmi Face and Multispeciality Dental Hospital.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center p-3 border-b border-border bg-green-600 text-white rounded-t-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-[100px] h-[35px] hidden sm:block">
                  <Image
                    src="/finalclinicc.jpg"
                    alt="Laxmi Face and Multispeciality Dental Hospital"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white">Schedule Your Consultation</h3>
                  <p className="text-xs text-green-100 mt-0.5">
                    Fill in your details and we'll get back to you
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-1.5 hover:bg-green-700 rounded-lg">
                <X size={18} className="text-white" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 p-4 sm:p-5 form-text-xl">
              {error && (
                <div className="text-red-600 text-sm font-medium bg-red-50 p-2.5 rounded-lg border border-red-200">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full text-sm h-8"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full text-sm h-8"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  className="w-full text-sm h-8"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Preferred Date *</label>
                <Input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full text-sm h-8"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-xs font-semibold text-foreground mb-1">Preferred Time</label>
                <p className="text-xs text-muted-foreground mb-1.5">Clinic Hours: 9:00 AM - 9:00 PM</p>
                <Popover open={timePopoverOpen} onOpenChange={setTimePopoverOpen}>
                  {timePopoverOpen && (
                    <div
                      className="fixed inset-0 z-[10002] bg-black/20"
                      onClick={() => setTimePopoverOpen(false)}
                    />
                  )}
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-between h-9 rounded-lg border border-border bg-white text-left text-sm font-semibold",
                        !formData.preferredTime && "text-muted-foreground",
                      )}
                    >
                      {formData.preferredTime || "Select a time slot"}
                      <Clock className="h-4 w-4 shrink-0 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="z-[10005] w-[min(100vw-3rem,360px)] rounded-xl border border-border bg-white p-2 shadow-2xl"
                    align="start"
                    sideOffset={6}
                  >
                    <div className="max-h-72 overflow-y-auto pr-1">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                            formData.preferredTime === slot
                              ? "bg-emerald-100 font-semibold text-emerald-900"
                              : "hover:bg-emerald-50",
                          )}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, preferredTime: slot }))
                            setTimePopoverOpen(false)
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Your Concern *</label>
                <Textarea
                  name="concern"
                  value={formData.concern}
                  onChange={handleInputChange}
                  placeholder="Tell us about your dental concerns"
                  className="w-full resize-none text-sm"
                  rows={3}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white h-9 font-semibold text-sm py-2"
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

