"use client"

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1E603F] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 md:pt-3 pb-2 md:pb-3 text-[10px] sm:text-xs md:text-sm leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-2 md:mb-3">
          {/* About */}
          <div>
            <div className="relative w-full max-w-[180px] sm:max-w-[200px] h-[60px] sm:h-[70px] mb-1.5">
              <Image
                src="/finalclinicc.jpg"
                alt="Laxmi Face and Multispeciality Dental Hospital"
                fill
                className="object-contain"
              />
            </div>
            <p className="opacity-90">
              Transforming Smiles, Enhancing Lives: Your Trusted Destination for Complete Dental & Facial Care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#treatments" className="opacity-90 hover:opacity-100 transition">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-90 hover:opacity-100 transition">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1">Treatments</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/treatments/orthodontics/aligners-invisalign" className="opacity-90 hover:opacity-100 transition">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/treatments/pediatric-dentistry/pulpotomy" className="opacity-90 hover:opacity-100 transition">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link href="/treatments/restorative-dentistry/tooth-coloured-fillings" className="opacity-90 hover:opacity-100 transition">
                  Restorative Dentistry
                </Link>
              </li>
              <li>
                <Link href="/treatments/surgical-treatments/wisdom-tooth-removal" className="opacity-90 hover:opacity-100 transition">
                  Surgical Treatments
                </Link>
              </li>
              <li>
                <Link href="/treatments/preventive-treatments/anti-decay-fluoride-application" className="opacity-90 hover:opacity-100 transition">
                  Preventive Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1">Contact</h4>
            <div className="space-y-1.5">
              <div className="flex gap-1.5">
                <Phone size={14} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                <a href="tel:+917794879535" className="opacity-90 hover:opacity-100 transition">
                  +91 77948 79535
                </a>
              </div>
              <div className="flex gap-1.5">
                <Mail size={14} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:laxmidentalhospital0@gmail.com" className="opacity-90 hover:opacity-100 transition break-all">
                  laxmidentalhospital0@gmail.com
                </a>
              </div>
              <div className="flex gap-1.5">
                <MapPin size={14} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/WSmG37qqRPK42Lpt8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition"
                >
                  1st floor, beside new venkateswara book world, mainroad, vanasthalipuram, hyderabad 500070
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-1.5 md:pt-2 flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-2 text-[10px] sm:text-xs">
          <p className="opacity-90 text-center md:text-left">&copy; 2025 Laxmi Face and Multispeciality Dental Hospital. All rights reserved.</p>
          <div className="flex gap-1.5">
            <a
              href="https://www.facebook.com/share/17eD4vZyRb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://www.instagram.com/laxmifaceanddentalhospital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://youtube.com/@laxmifaceandmultispecialityden?si=191g3rMvkxapmZJX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Watch us on YouTube"
            >
              <Youtube size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
