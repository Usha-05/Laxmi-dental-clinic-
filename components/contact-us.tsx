"use client"

import type React from "react"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSubmitted(false)

    try {
      // Prepare WhatsApp message
      const whatsappMessage = `Hello,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      const whatsappUrl = `https://wa.me/917794879535?text=${encodeURIComponent(whatsappMessage)}`

      // Send to API (which handles email and WhatsApp)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to send message" }))
        throw new Error(errorData.error || "Failed to send message")
      }

      const data = await response.json()

      // Also open WhatsApp link directly for immediate notification
      window.open(whatsappUrl, "_blank")

      // Show success message
      setSubmitted(true)
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
      console.error("Contact form error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-3 md:py-4 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-4">Get in touch with us for any dental inquiries or appointments</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-3">
          {/* Phone */}
          <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mb-2">
              <Phone size={18} className="text-primary" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">Call Us</h3>
            <p className="text-gray-600 mb-1.5 text-xs">Available 9 AM - 9 PM</p>
            <a href="tel:+917794879535" className="text-primary font-semibold hover:underline text-xs">
              +91 77948 79535
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mb-2">
              <Mail size={18} className="text-primary" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">Email Us</h3>
            <p className="text-gray-600 mb-1.5 text-xs">We'll respond within 24 hours</p>
            <a href="mailto:laxmidentalhospital0@gmail.com" className="text-primary font-semibold hover:underline text-xs break-all">
              laxmidentalhospital0@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg mb-2">
              <Send size={18} className="text-green-600" />
            </div>
            <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5">WhatsApp</h3>
            <p className="text-gray-600 mb-1.5 text-xs">Chat with us directly</p>
            <a
              href="https://wa.me/917794879535"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline text-xs"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Form */}
            <div className="p-3">
              <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2">Send us a Message</h3>
              {submitted && (
                <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-xs md:text-sm font-semibold">
                    ✓ Message sent successfully! We've received your message via email and WhatsApp. We'll get back to you soon.
                  </p>
                </div>
              )}
              {error && (
                <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-xs md:text-sm font-semibold">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-2 form-text-xl">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-8"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-8"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-8"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-2 rounded-lg text-xs md:text-sm font-bold hover:bg-primary/90 transition disabled:opacity-50 h-10 mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="bg-gradient-to-br from-[#1E603F] via-[#289660] to-[#34d399] text-white p-3 flex flex-col justify-center relative overflow-hidden group">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <h3 className="text-sm md:text-base font-bold mb-3 relative z-10">Get in Touch</h3>
              <div className="space-y-2 relative z-10">
                <a
                  href="tel:+917794879535"
                  className="flex gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover/item:bg-white/30 transition-colors">
                    <Phone className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold mb-0.5">Phone</p>
                    <p className="text-xs text-white/90 group-hover/item:text-white transition-colors">+91 77948 79535</p>
                    <p className="text-xs text-white/70 mt-0.5">9 AM - 9 PM</p>
                  </div>
                </a>

                <a
                  href="mailto:laxmidentalhospital0@gmail.com"
                  className="flex gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover/item:bg-white/30 transition-colors">
                    <Mail className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold mb-0.5">Email</p>
                    <p className="text-xs text-white/90 group-hover/item:text-white transition-colors break-all">
                      laxmidentalhospital0@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/WSmG37qqRPK42Lpt8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group/item cursor-pointer"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover/item:bg-white/30 transition-colors">
                    <MapPin className="w-4 h-4 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold mb-0.5">Address</p>
                    <p className="text-xs text-white/90 group-hover/item:text-white transition-colors">1st floor, beside new venkateswara book world, mainroad, vanasthalipuram, hyderabad 500070</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
