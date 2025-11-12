"use client"

import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#1E603F] text-white">
      <div className="w-full px-2 sm:px-4 lg:px-6 pt-5 md:pt-7 pb-5 md:pb-7 text-sm sm:text-base leading-relaxed">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-5 md:mb-6">
          {/* About */}
          <div>
            <div className="relative w-full max-w-[240px] h-[90px] mb-3">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2.5">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3">Treatments</h4>
            <ul className="space-y-2.5">
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
            <h4 className="text-base sm:text-lg font-semibold mb-3">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={22} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+917794879535" className="opacity-90 hover:opacity-100 transition">
                  +91 77948 79535
                </a>
              </div>
              <div className="flex gap-3">
                <Mail size={22} className="flex-shrink-0 mt-0.5" />
                <a href="mailto:laxmidentalhospital0@gmail.com" className="opacity-90 hover:opacity-100 transition break-all">
                  laxmidentalhospital0@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin size={22} className="flex-shrink-0 mt-0.5" />
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
        <div className="border-t border-primary-foreground/20 pt-4 md:pt-5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5 text-xs sm:text-sm">
          <p className="opacity-90 text-center md:text-left">&copy; 2025 Laxmi Face and Multispeciality Dental Hospital. All rights reserved.</p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/17eD4vZyRb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={22} />
            </a>
            <a 
              href="https://www.instagram.com/laxmifaceanddentalhospital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://youtube.com/@laxmifaceandmultispecialityden?si=191g3rMvkxapmZJX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl hover:bg-primary-foreground/10 transition"
              aria-label="Watch us on YouTube"
            >
              <Youtube size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
