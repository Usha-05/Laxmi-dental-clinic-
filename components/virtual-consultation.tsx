"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { CalendarIcon, CheckCircle, Clock, Phone, Video } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  preferredDate: "",
  preferredTime: "",
  concern: "",
  consultationType: "video" as "video" | "call",
}

export default function VirtualConsultation() {
  const [formData, setFormData] = useState({ ...INITIAL_FORM_STATE })
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(() =>
    INITIAL_FORM_STATE.preferredDate ? new Date(INITIAL_FORM_STATE.preferredDate) : undefined,
  )
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [datePopoverOpen, setDatePopoverOpen] = useState(false)
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        consultationType: formData.consultationType,
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
      const consultationTypeText = formData.consultationType === "video" ? "Video Call" : "Phone Call"
      const message = `Consultation Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nConsultation Type: ${consultationTypeText}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nConcern: ${formData.concern}`
      const whatsappUrl = `https://wa.me/917794879535?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ ...INITIAL_FORM_STATE })
        setSelectedDate(undefined)
        setSubmitted(false)
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("[v0] Consultation submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="virtual-consultation" className="py-3 md:py-4 bg-white">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-4 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-sm md:text-base font-bold text-foreground mb-2">Consultation Request Sent!</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                We'll contact you shortly to confirm your virtual consultation. Your consultation request has been sent to our email and WhatsApp. Thank you for choosing Laxmi Face and Dental Hospital.
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="virtual-consultation" className="py-3 md:py-4 bg-gradient-to-b from-white via-[#ecfdf5] to-[#d1fae5]">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2">Virtual Consultation</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">Connect with our experts from the comfort of your home</p>
          </div>

          {/* Consultation Form */}
          <Card>
          <CardHeader className="bg-green-600 text-white">
            <CardTitle className="text-base md:text-lg">Schedule Your Consultation</CardTitle>
            <CardDescription className="text-xs md:text-sm text-green-100">
              Fill in your details and we'll get back to you
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <form onSubmit={handleSubmit} className="space-y-2 form-text-xl">
              {error && (
                <div className="text-red-600 text-xs font-medium bg-red-50 p-2 rounded-lg border border-red-200">
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
                  className="w-full text-xs h-8"
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
                  className="w-full text-xs h-8"
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
                  className="w-full text-xs h-8"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">Consultation Type *</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, consultationType: "video" }))}
                    className={`flex-1 flex items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all text-xs ${
                      formData.consultationType === "video"
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50"
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span className="font-bold">Video Call</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, consultationType: "call" }))}
                    className={`flex-1 flex items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all text-xs ${
                      formData.consultationType === "call"
                        ? "border-green-600 bg-green-50 text-green-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-green-400 hover:bg-green-50"
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-bold">Phone Call</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="block text-xs font-semibold text-foreground">Preferred Date *</label>
                <Popover open={datePopoverOpen} onOpenChange={setDatePopoverOpen}>
                  {datePopoverOpen && (
                    <div
                      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]"
                      onClick={() => setDatePopoverOpen(false)}
                    />
                  )}
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-between h-8 rounded-lg border border-border px-3 py-2 text-left text-xs font-semibold",
                        !selectedDate && "text-muted-foreground",
                      )}
                    >
                      {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Select a date"}
                      <CalendarIcon className="h-4 w-4 ml-2 shrink-0 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="z-[70] w-[min(100vw-3rem,480px)] min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl border border-emerald-100 bg-white p-4 sm:p-6 shadow-2xl"
                    align="start"
                    sideOffset={16}
                  >
                    <Calendar
                      className="calendar-popover"
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date)
                          setFormData((prev) => ({
                            ...prev,
                            preferredDate: format(date, "yyyy-MM-dd"),
                          }))
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

              <div className="flex flex-col gap-1">
                <label className="block text-xs font-semibold text-foreground">Preferred Time</label>
                <Popover open={timePopoverOpen} onOpenChange={setTimePopoverOpen}>
                  {timePopoverOpen && !datePopoverOpen && (
                    <div
                      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-[2px]"
                      onClick={() => setTimePopoverOpen(false)}
                    />
                  )}
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full justify-between h-8 rounded-lg border border-border px-3 py-2 text-left text-xs font-semibold",
                        !formData.preferredTime && "text-muted-foreground",
                      )}
                    >
                      {formData.preferredTime || "Select a time"}
                      <Clock className="h-4 w-4 ml-2 shrink-0 text-muted-foreground" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="z-[70] w-[min(100vw-3rem,360px)] min-w-[240px] sm:min-w-[280px] rounded-2xl border border-emerald-100 bg-white p-2 sm:p-3 shadow-xl"
                    align="start"
                    sideOffset={16}
                  >
                    <div className="max-h-80 overflow-y-auto py-1">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={cn(
                            "w-full text-left px-3 py-2 text-xs rounded-md transition-colors hover:bg-emerald-50",
                            formData.preferredTime === slot ? "bg-emerald-100 font-semibold" : "bg-white",
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
                  className="w-full resize-none text-xs"
                  rows={3}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white h-10 font-bold text-xs md:text-sm py-2 mt-2"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Request Consultation"}
              </Button>
            </form>
          </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
