"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight, Smile, Baby, Wrench, Activity, Shield, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navbar({ onAppointmentClick }: { onAppointmentClick: () => void }) {
  const router = useRouter()
  const pathname = usePathname()
  const isTreatmentPage = pathname?.startsWith("/treatments") || false
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)
  const [assessOpen, setAssessOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1)
  const [isScrolled, setIsScrolled] = useState(false)

  // Helper function to generate route from treatment name
  const generateRoute = (categoryTitle: string, treatmentName: string): string => {
    const categorySlug = categoryTitle.toLowerCase().replace(/\s+/g, "-")
    const treatmentSlug = treatmentName
      .toLowerCase()
      .replace(/\s*\/\s*/g, "-")
      .replace(/[^a-z0-9-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
    return `/treatments/${categorySlug}/${treatmentSlug}`
  }

  // Treatment data structure
  const treatmentData = {
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
      "Wisdom Tooth Removal",
      "Cosmetic Jaw Surgery",
      "Tongue Tie Correction",
      "Tooth Removal",
      "Gums Treatment",
      "Frenectomy",
      "Operculectomy",
      "Sinus Lift",
      "Apicoectomy",
      "Orthognathic Surgery",
      "Cyst Removal",
      "Alveoloplasty",
      "Biopsy",
      "Precancerous Lesions Evaluation",
    ],
    "Preventive Treatments": [
      "Anti-Decay Fluoride Application",
      "Pregnancy Dental Care",
      "Teeth & Gums Cleaning",
      "Scaling & Root Planing",
      "Functional Jaw Problems Correction (Preventive)",
      "Functional Habits Correction (Preventive)",
      "Space Problems Treatment (Preventive)",
      "Pit & Fissure Sealants",
      "Teeth Whitening",
      "Conscious Sedation",
      "Dental Emergencies (Preventive Context)",
    ],
  }

  const treatmentCategories = Object.keys(treatmentData)

  // Icon mapping for treatment categories
  const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Orthodontics: Smile,
    "Pediatric Dentistry": Baby,
    "Restorative Dentistry": Wrench,
    "Surgical Treatments": Activity,
    "Preventive Treatments": Shield,
  }
  
  // Helper function to render category icon
  const renderCategoryIcon = (category: string) => {
    const IconComponent = categoryIcons[category]
    if (!IconComponent) return null
    return <IconComponent size={22} className="text-emerald-500 flex-shrink-0" />
  }
  
  // Helper function to render category icon (mobile, smaller)
  const renderCategoryIconMobile = (category: string) => {
    const IconComponent = categoryIcons[category]
    if (!IconComponent) return null
    return <IconComponent size={18} className="text-emerald-500 flex-shrink-0" />
  }

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Gallery", href: "#clinic-view" },
    { label: "Contact", href: "#contact" },
  ]
  
  // Get current active link based on hash
  const getActiveLink = () => {
    if (typeof window !== "undefined") {
      return window.location.hash || "#home"
    }
    return "#home"
  }
  
  const [activeLink, setActiveLink] = useState(getActiveLink())
  
  // Handle smooth scroll with navbar offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      setActiveLink(href)
      
      // If we're on a treatment page, navigate to home page with hash
      if (isTreatmentPage) {
        router.push(`/${href}`)
        return
      }
      
      // If on home page, scroll to the section
      const elementId = href.substring(1)
      const element = document.getElementById(elementId)
      
      if (element) {
        // Get navbar height (accounting for responsive heights: h-28=112px, sm:h-32=128px, md:h-36=144px, lg:h-48=192px)
        const navbarHeight = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 144 : window.innerWidth >= 640 ? 128 : 112
        
        // Calculate scroll position with offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
        
        // Update URL hash
        window.history.pushState(null, "", href)
      }
    }
  }
  
  // Handle initial hash navigation on page load
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash
      if (hash) {
        const elementId = hash.substring(1)
        const element = document.getElementById(elementId)
        if (element) {
            // Wait for page to render, then scroll
            setTimeout(() => {
              const navbarHeight = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 144 : window.innerWidth >= 640 ? 128 : 112
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
          }, 100)
        }
      }
    }
    
    // Handle initial hash after page loads
    if (typeof window !== "undefined") {
      handleInitialHash()
    }
  }, [])

  // Update active link on scroll
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home")
    }
    
    const handleScroll = () => {
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      // Calculate navbar height for scroll offset
      const navbarHeight = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 144 : window.innerWidth >= 640 ? 128 : 112
      const scrollPosition = window.scrollY + navbarHeight // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset
          if (scrollPosition >= sectionTop - navbarHeight) {
            setActiveLink(`#${sections[i]}`)
            break
          }
        }
      }
    }
    
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle scroll effect for shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Keyboard shortcuts for search
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Open with '/'
      if (e.key === '/' && !isSearchOpen) {
        const target = e.target as HTMLElement | null
        const isTyping = !!target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
        if (!isTyping) {
          e.preventDefault()
          setIsSearchOpen(true)
        }
      }
      // Close with Escape
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
        setSearchQuery("")
        setSelectedSearchIndex(-1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isSearchOpen])

  // Keyboard navigation in search results
  useEffect(() => {
    if (!isSearchOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const results = searchResults()
      if (results.length === 0) return

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedSearchIndex((prev) => {
          const maxIndex = results.length - 1
          return prev < maxIndex ? prev + 1 : prev
        })
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedSearchIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if (e.key === "Enter" && selectedSearchIndex >= 0 && selectedSearchIndex < results.length) {
        e.preventDefault()
        handleSearchResultClick(results[selectedSearchIndex].href)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchOpen, searchQuery, selectedSearchIndex])

  const assessYourselfItems = [
    { label: "Self Assessment", href: "#assess-yourself" },
    { label: "Smile View Simulator", href: "#smile-simulator" },
    { label: "Virtual Consultation", href: "#virtual-consultation" },
  ]

  // Search functionality
  const searchResults = () => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase().trim()
    const results: Array<{
      type: "treatment" | "nav" | "assess"
      label: string
      href: string
      category?: string
    }> = []

    // Search nav links
    navLinks.forEach((link) => {
      if (link.label.toLowerCase().includes(query)) {
        results.push({ type: "nav", label: link.label, href: link.href })
      }
    })

    // Search assess yourself items
    assessYourselfItems.forEach((item) => {
      if (item.label.toLowerCase().includes(query)) {
        results.push({ type: "assess", label: item.label, href: item.href })
      }
    })

    // Search treatments
    treatmentCategories.forEach((category) => {
      treatmentData[category as keyof typeof treatmentData].forEach((treatment) => {
        if (treatment.toLowerCase().includes(query)) {
          results.push({
            type: "treatment",
            label: treatment,
            href: generateRoute(category, treatment),
            category,
          })
        }
      })
    })

    return results.slice(0, 10) // Limit to 10 results
  }

  const handleSearchResultClick = (href: string) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    setSelectedSearchIndex(-1)
    if (href.startsWith("#")) {
      // If we're on a treatment page, navigate to home page with hash
      if (isTreatmentPage) {
        router.push(`/${href}`)
        return
      }
      
      // Handle hash navigation - scroll to element with navbar offset
      const elementId = href.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        // Get navbar height (accounting for responsive heights: h-28=112px, sm:h-32=128px, md:h-36=144px, lg:h-48=192px)
        const navbarHeight = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 144 : window.innerWidth >= 640 ? 128 : 112
        
        // Calculate scroll position with offset
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
        
        // Update URL hash and active link
        window.history.pushState(null, "", href)
        setActiveLink(href)
      } else {
        // Fallback for sections without IDs
        window.location.hash = href
        setTimeout(() => {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            const navbarHeight = window.innerWidth >= 1024 ? 192 : window.innerWidth >= 768 ? 144 : window.innerWidth >= 640 ? 128 : 112
            const elementPosition = (targetElement as HTMLElement).getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
            setActiveLink(href)
          }
        }, 100)
      }
    } else {
      // Handle route navigation
      router.push(href)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] w-full bg-gradient-to-r from-[#020b07]/95 via-[#062116]/95 to-[#0d3a27]/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-2xl border-b-2 border-teal-700 bg-gradient-to-r from-[#020b07]/95 via-[#0a2f1f]/95 to-[#125336]/95' : 'shadow-xl border-b border-teal-800/80'
      }`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20 sm:h-24 md:h-24 lg:h-24 gap-4">
            <Link href="/" className="flex items-center hover:opacity-90 transition-all hover:scale-[1.015] -ml-1 sm:-ml-2 md:-ml-3">
              <div className="relative w-[170px] h-[54px] sm:w-[205px] sm:h-[70px] md:w-[235px] md:h-[80px] lg:w-[255px] lg:h-[88px] xl:w-[275px] xl:h-[96px] drop-shadow-lg max-w-full">
                {!logoError ? (
                  <Image
                    src="/finalclinicc.jpg"
                    alt="Laxmi Face and Multispeciality Dental Hospital"
                    fill
                    className="object-contain"
                    priority
                    onError={() => setLogoError(true)}
                  />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-emerald-100 rounded-lg">
                      <span className="text-emerald-700 text-xl font-bold">Laxmi Dental</span>
                    </div>
                )}
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href || (link.href === "#home" && !activeLink)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-2.5 py-1.5 text-white hover:text-white/80 transition-all text-[15px] font-semibold relative group ${
                      isActive ? "text-white" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-3 h-[3px] bg-white transition-all duration-300 rounded-full ${
                      isActive ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                    }`} />
                  </a>
                )
              })}

              {/* Assess Yourself Dropdown */}
              <div className="relative group ml-1.5">
                <button className="px-3 py-1.5 text-white hover:text-white/80 transition-all text-base font-semibold flex items-center gap-1.5 relative">
                  Assess Yourself
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300 text-white"
                  />
                </button>

                <div className="absolute left-0 top-full mt-2 w-44 bg-gradient-to-b from-white/98 via-emerald-50/95 to-emerald-800/20 backdrop-blur-xl border border-emerald-700/70 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3 -translate-y-2 group-hover:translate-y-0 z-50">
                  <ul className="space-y-2">
                    {assessYourselfItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={isTreatmentPage ? `/${item.href}` : item.href}
                          className="block px-3 py-1.5 text-sm font-semibold text-black hover:text-black/80 hover:bg-emerald-200/60 rounded-lg transition-all duration-200 group/item"
                        >
                          <span className="flex items-center gap-2">
                            <ChevronRight
                              size={16}
                              className="text-black opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200"
                            />
                            <span className="flex-1">{item.label}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Treatments Dropdown */}
              <div className="relative group ml-1.5">
                <button className="px-3 py-1.5 text-white hover:text-white/80 transition-all text-base font-semibold flex items-center gap-1.5 relative">
                  Treatments
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300 text-white"
                  />
                </button>

                <div className="absolute left-0 top-full mt-2 w-[440px] max-h-[65vh] overflow-y-auto bg-gradient-to-b from-white/98 via-emerald-50/95 to-emerald-800/20 backdrop-blur-xl border border-emerald-700/70 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 -translate-y-2 group-hover:translate-y-0 z-50">
                  <Accordion
                    type="single"
                    collapsible
                    value={openCategory || undefined}
                    onValueChange={(value) => setOpenCategory(value || null)}
                    className="w-full"
                  >
                    {treatmentCategories.map((category) => (
                      <AccordionItem
                        key={category}
                        value={category}
                        className="border-b border-emerald-100 last:border-b-0"
                      >
                        <AccordionTrigger className="py-1.5 text-left font-semibold text-base text-black hover:text-black/80 transition-colors [&[data-state=open]]:text-black">
                          <div className="flex items-center gap-3">
                            {renderCategoryIcon(category)}
                            <span>{category}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pt-2">
                          <ul className="space-y-2">
                            {treatmentData[category as keyof typeof treatmentData].map((treatment) => (
                              <li key={treatment}>
                                <Link
                                  href={generateRoute(category, treatment)}
                                  className="block px-3 py-2.5 text-xl font-semibold text-black hover:text-black/80 hover:bg-emerald-200/60 rounded-lg transition-all duration-200 group/item"
                                >
                                  <span className="flex items-center gap-2">
                                    <ChevronRight
                                      size={18}
                                      className="text-black opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200"
                                    />
                                    <span className="flex-1">{treatment}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {/* Search Icon */}
              <button
                className="p-2.5 text-white hover:text-white/80 hover:bg-white/20 rounded-xl transition-all duration-200 group"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={24} className="transition-transform group-hover:scale-110" />
              </button>
              
              {/* CTA Button */}
              <Button
                onClick={onAppointmentClick}
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:via-amber-700 hover:to-orange-600 text-white px-4 py-2 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-[2px] transition-all duration-300 font-semibold text-sm tracking-wide uppercase"
              >
                Book Appointment
              </Button>
            </div>

            {/* Tablet & Small Desktop Actions */}
            <div className="hidden sm:flex lg:hidden items-center gap-3">
              <button
                className="p-4 text-white hover:text-white/80 hover:bg-white/20 rounded-lg transition-all duration-200 group"
                aria-label="Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={32} className="transition-transform group-hover:scale-125" />
              </button>
              <Button
                onClick={onAppointmentClick}
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:via-amber-700 hover:to-orange-600 text-white px-3 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm uppercase tracking-wide"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-6 border-t border-teal-200 space-y-2 bg-gradient-to-r from-black via-gray-800 via-teal-900 to-teal-200 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href || (link.href === "#home" && !activeLink)
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block px-5 py-3.5 text-white hover:bg-white/20 hover:text-white transition-all text-2xl font-bold rounded-lg ${
                      isActive ? "bg-white/20 text-white" : ""
                    }`}
                    onClick={(e) => {
                      setIsOpen(false)
                      handleNavClick(e, link.href)
                    }}
                  >
                    {link.label}
                  </a>
                )
              })}

              {/* Assess Yourself Mobile Dropdown */}
              <button
                onClick={() => setAssessOpen(!assessOpen)}
                className="w-full text-left px-5 py-3.5 text-white hover:bg-white/20 hover:text-white transition-all text-2xl font-bold rounded-lg flex items-center justify-between"
              >
                Assess Yourself
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 text-white ${assessOpen ? "rotate-180" : ""}`}
                />
              </button>

              {assessOpen && (
                <div className="px-2 py-3 bg-emerald-200/60 rounded-xl mx-2 border border-emerald-600/50">
                  <ul className="space-y-1.5">
                    {assessYourselfItems.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={isTreatmentPage ? `/${item.href}` : item.href}
                          onClick={() => {
                            setIsOpen(false)
                            setAssessOpen(false)
                          }}
                          className="block px-3 py-2 text-xl font-medium text-black hover:text-black/80 hover:bg-emerald-100/80 rounded-lg transition-all duration-200 group/item"
                        >
                          <span className="flex items-center gap-2">
                            <ChevronRight
                              size={20}
                              className="text-black opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200"
                            />
                            <span className="flex-1">{item.label}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Treatments Mobile Dropdown */}
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="w-full text-left px-5 py-3.5 text-white hover:bg-white/20 hover:text-white transition-all text-2xl font-bold rounded-lg flex items-center justify-between"
              >
                Treatments
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 text-white ${treatmentsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {treatmentsOpen && (
                <div className="px-2 py-3 bg-emerald-200/60 rounded-xl mx-2 border border-emerald-600/50">
                  <Accordion type="single" collapsible className="w-full">
                    {treatmentCategories.map((category) => (
                      <AccordionItem
                        key={category}
                        value={category}
                        className="border-b border-emerald-200 last:border-b-0 px-2"
                      >
                        <AccordionTrigger className="py-3 text-left font-bold text-2xl text-black hover:text-black/80 transition-colors [&[data-state=open]]:text-black">
                          <div className="flex items-center gap-3">
                            {renderCategoryIconMobile(category)}
                            <span>{category}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-3 pt-2">
                          <ul className="space-y-1.5">
                            {treatmentData[category as keyof typeof treatmentData].map((treatment) => (
                              <li key={treatment}>
                                <Link
                                  href={generateRoute(category, treatment)}
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-2.5 text-2xl font-semibold text-black hover:text-black/80 hover:bg-emerald-100/80 rounded-lg transition-all duration-200 group/item"
                                >
                                  <span className="flex items-center gap-2">
                                    <ChevronRight
                                      size={22}
                                      className="text-black opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-200"
                                    />
                                    <span className="flex-1">{treatment}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              <Button
                onClick={() => {
                  onAppointmentClick()
                  setIsOpen(false)
                }}
                className="w-full mt-6 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:via-amber-700 hover:to-orange-600 text-white rounded-xl font-extrabold text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide py-4"
              >
                Book Appointment
              </Button>
            </div>
          )}
        </div>
      </nav>
      {/* Search Modal */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-start justify-center pt-28 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setIsSearchOpen(false)
            setSearchQuery("")
            setSelectedSearchIndex(-1)
          }}
        >
          <div
            className="w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Search"
          >
            <div className="flex items-center gap-4 px-6 py-5 border-b">
              <Search size={36} className="text-gray-500" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSelectedSearchIndex(-1)
                }}
                placeholder="Search treatments, services, or topics..."
                className="flex-1 outline-none text-2xl placeholder:text-gray-400 placeholder:text-2xl"
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    setIsSearchOpen(false)
                    setSearchQuery("")
                    setSelectedSearchIndex(-1)
                  }
                }}
              />
              <button
                className="px-3 py-1.5 text-lg text-gray-500 hover:text-gray-700 rounded-md"
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery("")
                  setSelectedSearchIndex(-1)
                }}
                aria-label="Close search"
              >
                Esc
              </button>
            </div>
            <div className="max-h-[32rem] overflow-y-auto">
              {searchQuery.trim() ? (
                searchResults().length > 0 ? (
                  <div className="py-3">
                    {searchResults().map((result, index) => {
                      const IconComponent = result.category
                        ? categoryIcons[result.category as keyof typeof categoryIcons]
                        : null
                      const isSelected = index === selectedSearchIndex
                      return (
                        <button
                          key={`${result.type}-${result.label}-${index}`}
                          onClick={() => handleSearchResultClick(result.href)}
                          className={`w-full text-left px-6 py-4 transition-colors duration-200 flex items-center gap-4 group ${
                            isSelected ? "bg-emerald-100" : "hover:bg-emerald-50"
                          }`}
                        >
                          {IconComponent && (
                            <IconComponent
                              size={32}
                              className="text-emerald-500 flex-shrink-0 opacity-70 group-hover:opacity-100"
                            />
                          )}
                          {!IconComponent && result.type === "nav" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          )}
                          {!IconComponent && result.type === "assess" && (
                            <ChevronRight size={26} className="text-emerald-500 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <div className="text-2xl font-semibold text-black group-hover:text-black/80">
                              {result.label}
                            </div>
                            {result.category && (
                              <div className="text-xl text-black/70 mt-0.5">
                                {result.category}
                              </div>
                            )}
                          </div>
                          <ChevronRight
                            size={26}
                            className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="px-6 py-10 text-center text-gray-500 text-2xl">
                    No results found for &quot;{searchQuery}&quot;
                  </div>
                )
              ) : (
                <div className="px-6 py-8 text-xl text-gray-500">
                  <div className="mb-4 text-2xl font-semibold text-gray-700">Quick links:</div>
                  <div className="space-y-3">
                    {navLinks.slice(0, 3).map((link) => (
                      <button
                        key={link.href}
                        onClick={() => handleSearchResultClick(link.href)}
                        className="w-full text-left px-4 py-3 hover:bg-emerald-50 rounded-xl transition-colors text-2xl text-black hover:text-black/80"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="px-6 py-3 border-t bg-gray-50 text-lg text-gray-500 flex items-center justify-between">
              <span>Press Esc to close</span>
              <span>↑↓ to navigate</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
