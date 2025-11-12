"use client"

export default function DentalSymbolsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Tooth with leaf (top-left) */}
      <svg
        className="absolute top-8 left-8 w-24 h-24 text-primary/30 animate-float"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "0s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2c-2 0-4 1-4 3 0 2 2 3 4 3s4-1 4-3c0-2-2-3-4-3zm0 6c-2 0-4 1-4 3v8c0 2 2 3 4 3s4-1 4-3v-8c0-2-2-3-4-3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 8h4M10 12h4M10 16h4"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 2l-1 2h2l-1-2z"
        />
      </svg>

      {/* Dental Forceps (top-middle) */}
      <svg
        className="absolute top-12 right-1/4 w-28 h-28 text-primary/25 animate-float-reverse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "1s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 4c0-1 1-2 2-2h8c1 0 2 1 2 2v16c0 1-1 2-2 2H8c-1 0-2-1-2-2V4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 8h12M6 12h12M6 16h12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 2v4M16 2v4"
        />
      </svg>

      {/* Molar Tooth (top-right) */}
      <svg
        className="absolute top-16 right-12 w-20 h-20 text-primary/30 animate-float"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "2s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2c-2 0-4 1-4 3v12c0 2 2 3 4 3s4-1 4-3V5c0-2-2-3-4-3z"
        />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Dental Implant Screw (bottom-left) */}
      <svg
        className="absolute bottom-16 left-12 w-20 h-20 text-primary/25 animate-float-reverse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "3s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2v20M12 2c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 6h8M8 10h8M8 14h8M8 18h8"
        />
      </svg>

      {/* Molar Tooth (bottom-middle) */}
      <svg
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-24 text-primary/30 animate-float"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "4s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2c-2 0-4 1-4 3v12c0 2 2 3 4 3s4-1 4-3V5c0-2-2-3-4-3z"
        />
        <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Toothbrush (bottom-right) */}
      <svg
        className="absolute bottom-12 right-16 w-24 h-24 text-primary/25 animate-float-reverse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "5s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 2h12v20H6V2z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 4h8M8 8h8M8 12h8M8 16h8M8 20h8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6 2c0-1 1-2 2-2h8c1 0 2 1 2 2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M10 0h4M10 22h4"
        />
      </svg>

      {/* Braces Chain (far right, middle) */}
      <svg
        className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 text-primary/20 animate-float"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "6s" }}
      >
        <circle cx="6" cy="6" r="2" strokeWidth={1.5} />
        <circle cx="12" cy="6" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="6" r="2" strokeWidth={1.5} />
        <circle cx="6" cy="12" r="2" strokeWidth={1.5} />
        <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="12" r="2" strokeWidth={1.5} />
        <circle cx="6" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="12" cy="18" r="2" strokeWidth={1.5} />
        <circle cx="18" cy="18" r="2" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 6h2M14 6h2M8 12h2M14 12h2M8 18h2M14 18h2"
        />
      </svg>

      {/* Additional symbols for better coverage */}
      {/* Dental Mirror (middle-left) */}
      <svg
        className="absolute top-1/3 left-16 -translate-y-1/2 w-20 h-20 text-primary/25 animate-float-reverse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "7s" }}
      >
        <circle cx="12" cy="12" r="8" strokeWidth={1.5} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v8M12 12l-4-4M12 12l4-4"
        />
      </svg>

      {/* Dental Probe (middle-right) */}
      <svg
        className="absolute top-2/3 right-1/3 w-16 h-16 text-primary/30 animate-float"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "8s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2v20M12 2l-2 4h4l-2-4z"
        />
        <circle cx="12" cy="8" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Dental Crown (top-center) */}
      <svg
        className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 text-primary/25 animate-float-reverse"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ animationDelay: "9s" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2l4 4-4 4-4-4 4-4zM12 10l4 4-4 4-4-4 4-4zM12 18l4 4-4 4-4-4 4-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M8 6h8M8 14h8"
        />
      </svg>
    </div>
  )
}

