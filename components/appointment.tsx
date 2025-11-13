"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, X } from "lucide-react"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

type AppointmentFormData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
  service: string
}

type AppointmentSubmission = AppointmentFormData & {
  id?: number
  timestamp?: string
}

const DEFAULT_CLINIC_WHATSAPP = "917794879535"

function toDigits(value?: string) {
  return (value || "").replace(/\D/g, "")
}

function getClinicWhatsAppNumber() {
  const envNumber = process.env.NEXT_PUBLIC_CLINIC_WHATSAPP_NUMBER
  const digits = toDigits(envNumber || DEFAULT_CLINIC_WHATSAPP)
  if (!digits) return DEFAULT_CLINIC_WHATSAPP
  if (digits.length === 10) {
    return `91${digits}`
  }
  return digits
}

function buildWhatsAppMessage(appointment: AppointmentSubmission) {
  const submittedAt = appointment.timestamp
    ? new Date(appointment.timestamp).toLocaleString()
    : new Date().toLocaleString()

  return `🦷 *New Appointment Booking*

👤 *Name:* ${appointment.name || "-"}
📧 *Email:* ${appointment.email || "-"}
📱 *Phone:* ${appointment.phone || "-"}
📅 *Preferred Date:* ${appointment.date || "-"}
⏰ *Preferred Time:* ${appointment.time || "-"}
🩺 *Service:* ${appointment.service || "-"}
📝 *Submitted:* ${submittedAt}

Thank you for choosing Laxmi Face and Dental Hospital!`
}

function buildWhatsAppLink(appointment: AppointmentSubmission) {
  const clinicNumber = getClinicWhatsAppNumber()
  const message = buildWhatsAppMessage(appointment)
  return `https://wa.me/${clinicNumber}?text=${encodeURIComponent(message)}`
}

interface AppointmentProps {
  isOpen: boolean
  onClose: () => void
}

export default function Appointment({ isOpen, onClose }: AppointmentProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  })

  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [datePopoverOpen, setDatePopoverOpen] = useState(false)
  const [timePopoverOpen, setTimePopoverOpen] = useState(false)

  // Ensure component is mounted before rendering portal
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
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

  const CLINIC_START_HOUR = 9
  const CLINIC_END_HOUR = 21

  // Services structure matching navbar treatments
  const services = {
    Orthodontics: [
      "Aligners / Invisalign",
      "Aligners / Invisalign for Teens and Kids",
      "TMJ Disorders / TMD",
      "Functional Jaw Problems Correction",
      "Functional Habits Correction",
      "Traditional Braces",
      "Invisible Braces",
      "Surgical Orthodontics",
      "Cleft Orthodontics",
      "Sleep Apnea",
      "Airway Problems Correction",
      "Speech Problems Correction",
    ],
    "Pediatric Dentistry": [
      "Pulpotomy",
      "Pulpectomy / RCT",
      "Aligners for Kids & Teens",
      "Functional Jaw Problems Correction (Kids)",
      "Functional Habits Correction (Kids)",
      "Space Problems Treatment",
      "Tooth Fillings for Kids",
      "Airway Problems Correction (Kids)",
      "Pit & Fissure in Kids",
      "Anti-Decay Fluoride Application (Kids)",
      "Tooth Removal in Kids",
      "Dental Emergencies (Kids)",
    ],
    "Restorative Dentistry": [
      "Tooth Coloured Fillings",
      "Root Canal Treatment",
      "Full Mouth Prosthesis",
      "Crowns & Bridges",
      "Dental Implants",
      "Teeth Sensitivity Treatment",
      "Dentures",
      "Dental Veneers / Laminates",
    ],
    "Surgical Treatments": [
      "Tooth Extraction",
      "Wisdom Tooth Removal",
      "Dental Implants",
      "Gum Surgeries",
      "Bone Grafting",
      "Sinus Lift Surgery",
      "Cyst Removal",
      "Alveoloplasty",
      "Biopsy",
      "Precancerous Lesions Evaluation",
    ],
    "Preventive Treatments": [
      "Dental Cleaning",
      "Scaling & Polishing",
      "Oral Hygiene Instructions",
      "Fluoride Applications",
      "Sealants",
      "Anti Decay Fluoride Application",
      "Pregnancy Dental Care",
      "Tooth & Gums Cleaning",
      "Scaling & Root Planing",
      "Functional Jaw Problems Correction (Preventive)",
      "Functional Habits Correction (Preventive)",
      "Space Problems Treatment (Preventive)",
      "Pit & Fissure Sealants",
      "Tooth Whitening",
      "Conscious Sedation",
      "Dental Emergencies (Preventive Context)",
    ],
  }

  const generateTimeSlots = () => {
    const slots = []
    for (let hour = CLINIC_START_HOUR; hour < CLINIC_END_HOUR; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`)
      slots.push(`${hour.toString().padStart(2, "0")}:30`)
    }
    return slots
  }

  const timeSlots = useMemo(() => generateTimeSlots(), [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    if (!formData.date || !formData.time) {
      setError("Please select a preferred date and time")
      return
    }

    // Validate service selection
    if (!formData.service) {
      setError("Please select a treatment")
      return
    }

    setIsLoading(true)

    try {
      const submissionSnapshot: AppointmentSubmission = {
        ...formData,
      }

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const contentType = response.headers.get("content-type")
        let errorMessage = "Failed to save appointment"

        if (contentType?.includes("application/json")) {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } else {
          errorMessage = await response.text()
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      setSuccess(true)

      const appointmentResponse: AppointmentSubmission | undefined = data?.appointment
      const appointmentDetails: AppointmentSubmission = appointmentResponse
        ? { ...appointmentResponse }
        : {
            ...submissionSnapshot,
            timestamp: new Date().toISOString(),
          }

      if (!appointmentDetails.timestamp) {
        appointmentDetails.timestamp = new Date().toISOString()
      }

      const whatsappUrl: string | undefined =
        data?.whatsappLink && typeof data.whatsappLink === "string" && data.whatsappLink.trim().length > 0
          ? data.whatsappLink
          : buildWhatsAppLink(appointmentDetails)

      if (whatsappUrl) {
        window.location.assign(whatsappUrl)
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
      })
      setSelectedDate(undefined)
      setTimePopoverOpen(false)
      setDatePopoverOpen(false)
      setSelectedCategory("")

      setTimeout(() => onClose(), 1500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("[v0] Appointment submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen || !mounted) return null

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[10000] px-4 md:px-6 py-6" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 10000,
        overflow: 'auto'
      }}
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div 
        className="bg-white rounded-xl max-w-xl sm:max-w-2xl w-full shadow-2xl border border-gray-200 max-h-[85vh] overflow-y-auto my-auto z-[10001] flex-shrink-0" 
        style={{ 
          backgroundColor: '#ffffff', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          zIndex: 10001,
          position: 'relative',
          opacity: 1,
          visibility: 'visible',
          minHeight: '200px',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3 border-b border-border bg-green-600 text-white rounded-t-2xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-[100px] h-[35px] hidden sm:block">
              <Image
                src="/finalclinicc.jpg"
                alt="Laxmi Face and Multispeciality Dental Hospital"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-base md:text-lg font-bold text-white">Book Appointment</h3>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-green-700 rounded-lg">
            <X size={18} className="text-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-4 sm:px-5 py-4 space-y-2.5 form-text-xl appointment-form">
          {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
          {success && (
            <div className="text-green-600 text-sm font-medium">
              Appointment saved! Details have been sent to WhatsApp and email.
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full px-2.5 py-1.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-2.5 py-1.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-2.5 py-1.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="block text-xs font-semibold">Preferred Date *</label>
            <Popover open={datePopoverOpen} onOpenChange={setDatePopoverOpen}>
              {datePopoverOpen && (
                <div
                  className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]"
                  aria-hidden="true"
                  onMouseDown={(event) => {
                    event.preventDefault()
                    setDatePopoverOpen(false)
                  }}
                />
              )}
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-between h-8 rounded-lg border border-border px-2.5 py-1.5 text-left text-sm font-medium",
                    !selectedDate && "text-muted-foreground",
                  )}
                >
                  {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Select a date"}
                  <CalendarIcon className="h-4 w-4 ml-2 shrink-0 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-2 rounded-lg border border-emerald-100 bg-white shadow-2xl"
                align="start"
                sideOffset={8}
              >
                <Calendar
                  className="calendar-popover"
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    if (date) {
                      setSelectedDate(date)
                      setFormData({ ...formData, date: format(date, "yyyy-MM-dd") })
                      setDatePopoverOpen(false)
                    }
                  }}
                  disabled={(date) => {
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="block text-xs font-semibold">Preferred Time *</label>
            <p className="text-xs text-muted-foreground">Clinic Hours: 9:00 AM - 9:00 PM</p>
            <Popover open={timePopoverOpen} onOpenChange={setTimePopoverOpen}>
              {timePopoverOpen && !datePopoverOpen && (
                <div
                  className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]"
                  aria-hidden="true"
                  onMouseDown={(event) => {
                    event.preventDefault()
                    setTimePopoverOpen(false)
                  }}
                />
              )}
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-between h-8 rounded-lg border border-border px-2.5 py-1.5 text-left text-sm font-medium",
                    !formData.time && "text-muted-foreground",
                  )}
                >
                  {formData.time || "Select a time"}
                  <Clock className="h-4 w-4 ml-2 shrink-0 text-muted-foreground" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-[min(100vw-3rem,320px)] min-w-[240px] sm:min-w-[280px] rounded-lg border border-emerald-100 bg-white p-2 shadow-xl"
                align="start"
                sideOffset={8}
              >
                <div className="max-h-80 overflow-y-auto py-1">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={cn(
                        "w-full text-left px-2.5 py-1.5 text-sm rounded-md transition-colors hover:bg-emerald-50",
                        formData.time === slot ? "bg-emerald-100 font-semibold" : "bg-white",
                      )}
                      onClick={() => {
                        setFormData({ ...formData, time: slot })
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
            <label className="block text-xs font-semibold mb-1">Service</label>
            <div className="space-y-2">
              {/* First dropdown: Select main treatment category */}
              <Select
                value={selectedCategory}
                onValueChange={(value) => {
                  setSelectedCategory(value)
                  setFormData({ ...formData, service: "" }) // Reset sub-treatment when category changes
                }}
              >
                <SelectTrigger className="w-full border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm py-1.5 pr-10 h-8">
                  <SelectValue placeholder="Select a treatment category…" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] overflow-y-auto">
                  {Object.keys(services).map((category) => (
                    <SelectItem key={category} value={category} className="text-sm">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Second dropdown: Select sub-treatment (shown only when category is selected) */}
              {selectedCategory && (
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="w-full border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm py-1.5 pr-10 h-8">
                    <SelectValue placeholder="Select a specific treatment…" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px] overflow-y-auto">
                    {services[selectedCategory as keyof typeof services].map((treatment) => (
                      <SelectItem key={treatment} value={treatment} className="text-sm">
                        {treatment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 text-sm font-semibold h-9"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Confirm Appointment"}
          </Button>
        </form>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
