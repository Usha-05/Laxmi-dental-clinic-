/**
 * Medical Illustration Generator
 * Creates clinical, educational medical-style SVG illustrations for dental treatments
 * Style: Clean, anatomical, educational - like medical textbooks
 * No human faces or realistic photos - only anatomical diagrams
 * 
 * Priority: PNG images from AI generation > SVG fallbacks
 */

import { getTreatmentPrompt } from './ai-image-prompts'

const WIDTH = 1600
const HEIGHT = 1200

/**
 * Get PNG image path if it exists, otherwise return SVG
 */
function getImagePath(treatmentSlug: string, treatmentName: string): string | null {
  // Try to find the prompt to get the correct file name
  const prompt = getTreatmentPrompt(treatmentSlug, treatmentName)
  
  if (prompt) {
    // Return the AI-generated image path
    // The image may not exist yet, but this is the correct path for AI-generated images
    return `/medical-illustrations/${prompt.fileName}`
  }
  
  // Fallback: try to construct filename from slug
  const slug = treatmentSlug.toLowerCase().replace(/\//g, '-')
  return `/medical-illustrations/${slug}-medical-illustration.png`
}

// Enhanced color palette with vibrant, 3D-friendly colors
const COLORS = {
  background: {
    light: "#F0FDF4", // emerald-50
    gradient: ["#ECFDF5", "#F0FDF4", "#D1FAE5", "#A7F3D0"], // emerald-50 to emerald-200
  },
  teeth: {
    white: "#FFFFFF",
    enamel: "#F8FAFC",
    dentin: "#F1F5F9",
    pulp: "#FEE2E2",
    highlight: "#FFFFFF",
    shadow: "#E5E7EB",
  },
  gums: {
    healthy: "#10B981", // emerald-500
    light: "#6EE7B7", // emerald-300
    dark: "#059669", // emerald-600
    vibrant: "#34D399", // emerald-400
  },
  bone: {
    light: "#E5E7EB",
    medium: "#D1D5DB",
    dark: "#9CA3AF",
  },
  nerves: {
    primary: "#FCD34D", // yellow-300
    secondary: "#FBBF24", // yellow-400
  },
  tools: {
    metal: "#4B5563", // gray-600
    highlight: "#9CA3AF", // gray-400
    shine: "#E5E7EB", // gray-200
  },
  aligners: {
    clear: "#E0F2FE", // sky-100
    tint: "#BAE6FD", // sky-200
    highlight: "#FFFFFF",
    shadow: "#7DD3FC", // sky-300
  },
  labels: {
    text: "#065F46", // emerald-800
    line: "#10B981", // emerald-500
    vibrant: "#059669", // emerald-600
  },
}

/**
 * Generate medical illustration for a specific treatment
 * Returns SVG data URI (always works) or PNG path if available
 * SVG illustrations are used as immediate fallbacks for better UX
 */
export function getMedicalIllustration(treatmentSlug: string, treatmentName: string): string {
  const slug = treatmentSlug.toLowerCase()
  const name = treatmentName.toLowerCase()
  
  // Generate SVG illustrations immediately - these always work and look professional
  // PNG paths can be used later when AI images are generated

  // TMJ Disorders / TMD
  if (slug.includes("tmj") || slug.includes("tmd") || name.includes("tmj")) {
    return generateTMJIllustration()
  }

  // Root Canal Treatment
  if (slug.includes("root-canal") || slug.includes("rct") || name.includes("root canal")) {
    return generateRootCanalIllustration()
  }

  // Braces & Aligners
  if (slug.includes("aligner") || slug.includes("invisalign") || slug.includes("brace")) {
    return generateBracesIllustration()
  }

  // Tooth Whitening
  if (slug.includes("whitening") || name.includes("whitening")) {
    return generateWhiteningIllustration()
  }

  // Gum Disease Treatment
  if (slug.includes("gum") || slug.includes("periodontal") || slug.includes("scaling")) {
    return generateGumDiseaseIllustration()
  }

  // Dental Implants
  if (slug.includes("implant")) {
    return generateImplantIllustration()
  }

  // Pediatric Dentistry
  if (slug.includes("pediatric") || slug.includes("kids") || slug.includes("child") || slug.includes("pulpotomy") || slug.includes("pulpectomy")) {
    return generatePediatricIllustration()
  }

  // Preventive Care / Cleaning
  if (slug.includes("cleaning") || slug.includes("preventive") || slug.includes("fluoride") || slug.includes("sealant")) {
    return generatePreventiveIllustration()
  }

  // Fillings
  if (slug.includes("filling")) {
    return generateFillingIllustration()
  }

  // Crowns & Bridges
  if (slug.includes("crown") || slug.includes("bridge")) {
    return generateCrownBridgeIllustration()
  }

  // Veneers
  if (slug.includes("veneer") || slug.includes("laminate")) {
    return generateVeneerIllustration()
  }

  // Dentures
  if (slug.includes("denture") || slug.includes("prosthesis")) {
    return generateDentureIllustration()
  }

  // Wisdom Tooth Removal
  if (slug.includes("wisdom") || slug.includes("extraction") || slug.includes("removal")) {
    return generateExtractionIllustration()
  }

  // Sinus Lift
  if (slug.includes("sinus") || slug.includes("lift")) {
    return generateSinusLiftIllustration()
  }

  // Sleep Apnea / Airway
  if (slug.includes("sleep") || slug.includes("apnea") || slug.includes("airway")) {
    return generateAirwayIllustration()
  }

  // Speech Problems
  if (slug.includes("speech")) {
    return generateAirwayIllustration()
  }

  // Functional Habits / Habit Breaking
  if (slug.includes("habit") || slug.includes("functional-habits")) {
    return generateBracesIllustration()
  }

  // Functional Jaw Problems
  if (slug.includes("functional-jaw") || (slug.includes("jaw") && slug.includes("problem"))) {
    return generateBracesIllustration()
  }

  // Cleft Orthodontics
  if (slug.includes("cleft")) {
    return generateBracesIllustration()
  }

  // Surgical Orthodontics
  if (slug.includes("surgical-orthodontics") || (slug.includes("surgical") && slug.includes("orthodontics"))) {
    return generateBracesIllustration()
  }

  // Invisible Braces
  if (slug.includes("invisible-braces")) {
    return generateBracesIllustration()
  }

  // Tongue Tie / Frenectomy
  if (slug.includes("tongue") || slug.includes("frenectomy")) {
    return generateExtractionIllustration()
  }

  // Operculectomy
  if (slug.includes("operculectomy")) {
    return generateExtractionIllustration()
  }

  // Apicoectomy
  if (slug.includes("apicoectomy")) {
    return generateRootCanalIllustration()
  }

  // Cyst Removal / Alveoloplasty / Biopsy
  if (slug.includes("cyst") || slug.includes("alveoloplasty") || slug.includes("biopsy")) {
    return generateExtractionIllustration()
  }

  // Precancerous Lesions
  if (slug.includes("precancerous") || slug.includes("lesion")) {
    return generateExtractionIllustration()
  }

  // Cosmetic Jaw Surgery / Orthognathic Surgery
  if (slug.includes("cosmetic-jaw") || slug.includes("orthognathic") || (slug.includes("jaw") && slug.includes("surgery"))) {
    return generateExtractionIllustration()
  }

  // Space Problems
  if (slug.includes("space") && slug.includes("problem")) {
    return generateBracesIllustration()
  }

  // Pit & Fissure / Sealants
  if (slug.includes("pit") || slug.includes("fissure") || slug.includes("sealant")) {
    return generatePreventiveIllustration()
  }

  // Conscious Sedation
  if (slug.includes("conscious") || slug.includes("sedation")) {
    return generatePreventiveIllustration()
  }

  // Dental Emergencies
  if (slug.includes("emergency") || slug.includes("emergencies")) {
    return generateExtractionIllustration()
  }

  // Sensitivity
  if (slug.includes("sensitivity")) {
    return generateSensitivityIllustration()
  }

  // Default generic dental illustration
  return generateGenericDentalIllustration()
}

/**
 * TMJ Disorders / TMD Illustration
 * Shows jaw joint anatomy with muscles and ligaments
 */
function generateTMJIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[1]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[2]}" />
      </linearGradient>
      <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCA5A5" />
        <stop offset="100%" stop-color="#EF4444" />
      </linearGradient>
      <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.bone.light}" />
        <stop offset="100%" stop-color="${COLORS.bone.medium}" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    
    <!-- Skull outline (side view) -->
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Mandible (lower jaw) -->
      <path d="M -200,50 Q -150,100 -100,120 Q -50,130 0,125 Q 50,130 100,120 Q 150,100 200,50 L 200,180 Q 150,200 100,210 Q 50,215 0,210 Q -50,215 -100,210 Q -150,200 -200,180 Z" 
            fill="url(#boneGrad)" stroke="${COLORS.bone.dark}" stroke-width="3" opacity="0.9" />
      
      <!-- Maxilla (upper jaw) -->
      <path d="M -200,-50 Q -150,-100 -100,-120 Q -50,-130 0,-125 Q 50,-130 100,-120 Q 150,-100 200,-50 L 200,-180 Q 150,-200 100,-210 Q 50,-215 0,-210 Q -50,-215 -100,-210 Q -150,-200 -200,-180 Z" 
            fill="url(#boneGrad)" stroke="${COLORS.bone.dark}" stroke-width="3" opacity="0.9" />
      
      <!-- TMJ Joint (highlighted) -->
      <circle cx="-120" cy="0" r="25" fill="#FCD34D" stroke="#F59E0B" stroke-width="4" opacity="0.8" />
      <circle cx="-120" cy="0" r="15" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" />
      <circle cx="-120" cy="0" r="8" fill="#F59E0B" />
      
      <!-- Articular disc -->
      <ellipse cx="-120" cy="0" rx="20" ry="8" fill="#FDE68A" stroke="#F59E0B" stroke-width="2" opacity="0.7" />
      
      <!-- Masseter muscle -->
      <path d="M -150,80 Q -120,60 -100,50 Q -80,45 -60,50 Q -40,55 -20,60" 
            fill="none" stroke="url(#muscleGrad)" stroke-width="12" stroke-linecap="round" opacity="0.7" />
      
      <!-- Temporalis muscle -->
      <path d="M -180,-80 Q -150,-60 -120,-50 Q -100,-45 -80,-40" 
            fill="none" stroke="url(#muscleGrad)" stroke-width="10" stroke-linecap="round" opacity="0.7" />
      
      <!-- Lateral pterygoid muscle -->
      <path d="M -100,50 Q -110,30 -120,0 Q -110,-30 -100,-50" 
            fill="none" stroke="url(#muscleGrad)" stroke-width="8" stroke-linecap="round" opacity="0.6" />
      
      <!-- Ligaments -->
      <path d="M -140,-20 L -120,0 L -140,20" 
            fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round" opacity="0.6" />
      
      <!-- Teeth (simplified) -->
      ${Array.from({ length: 8 }, (_, i) => {
        const x = -150 + (i * 40)
        return `<rect x="${x - 8}" y="-110" width="16" height="20" rx="4" fill="${COLORS.teeth.white}" stroke="${COLORS.bone.dark}" stroke-width="1" opacity="0.9" />`
      }).join('')}
      
      ${Array.from({ length: 8 }, (_, i) => {
        const x = -150 + (i * 40)
        return `<rect x="${x - 8}" y="90" width="16" height="20" rx="4" fill="${COLORS.teeth.white}" stroke="${COLORS.bone.dark}" stroke-width="1" opacity="0.9" />`
      }).join('')}
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Root Canal Treatment Illustration - Enhanced 3D Version
 * Shows tooth cross-section with vibrant colors and 3D effects
 */
function generateRootCanalIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradRCT" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="tooth3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <radialGradient id="pulpGrad3D" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#FEE2E2" />
        <stop offset="70%" stop-color="#FCA5A5" />
        <stop offset="100%" stop-color="#DC2626" />
      </radialGradient>
      <radialGradient id="infectionGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#DC2626" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#991B1B" stop-opacity="0.6" />
      </radialGradient>
      <linearGradient id="healthyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F0FDF4" />
        <stop offset="100%" stop-color="#D1FAE5" />
      </linearGradient>
      <linearGradient id="fillingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FEF3C7" />
        <stop offset="50%" stop-color="#FCD34D" />
        <stop offset="100%" stop-color="#F59E0B" />
      </linearGradient>
      <filter id="shadowRCT">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowRCT">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadRCT" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradRCT)" />
    
    <!-- Before Treatment -->
    <g transform="translate(${WIDTH * 0.3}, ${HEIGHT * 0.5})">
      <text x="0" y="-350" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowRCT)">Before</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="250" rx="100" ry="30" fill="#000000" opacity="0.25" />
      
      <!-- Tooth crown with 3D effect -->
      <rect x="-100" y="-200" width="200" height="240" rx="100" fill="url(#tooth3D)" stroke="${COLORS.bone.dark}" stroke-width="5" filter="url(#shadowRCT)" />
      <rect x="-95" y="-195" width="190" height="230" rx="95" fill="url(#tooth3D)" opacity="0.9" />
      
      <!-- Enamel highlight -->
      <ellipse cx="0" cy="-180" rx="80" ry="100" fill="#FFFFFF" opacity="0.6" />
      
      <!-- Dentin layer -->
      <rect x="-80" y="-150" width="160" height="180" rx="80" fill="${COLORS.teeth.dentin}" stroke="${COLORS.bone.medium}" stroke-width="3" opacity="0.8" />
      
      <!-- Infected pulp chamber -->
      <ellipse cx="0" y="-60" rx="40" ry="50" fill="url(#infectionGrad)" stroke="#DC2626" stroke-width="4" filter="url(#glowRCT)" />
      
      <!-- Root with 3D effect -->
      <rect x="-60" y="40" width="120" height="300" rx="30" fill="url(#tooth3D)" stroke="${COLORS.bone.dark}" stroke-width="5" filter="url(#shadowRCT)" />
      
      <!-- Infected root canals -->
      <circle cx="-25" cy="150" r="15" fill="url(#infectionGrad)" filter="url(#glowRCT)" />
      <circle cx="0" cy="180" r="15" fill="url(#infectionGrad)" filter="url(#glowRCT)" />
      <circle cx="25" cy="150" r="15" fill="url(#infectionGrad)" filter="url(#glowRCT)" />
      
      <!-- Gum line -->
      <path d="M -120,40 Q -60,25 0,40 Q 60,25 120,40" fill="none" stroke="${COLORS.gums.dark}" stroke-width="6" stroke-linecap="round" />
      
      <!-- Bone structure -->
      <rect x="-140" y="340" width="280" height="80" rx="15" fill="${COLORS.bone.light}" stroke="${COLORS.bone.dark}" stroke-width="3" opacity="0.7" />
    </g>
    
    <!-- Arrow -->
    <path d="M ${WIDTH * 0.5},${HEIGHT * 0.5} L ${WIDTH * 0.55},${HEIGHT * 0.5}" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadRCT)" filter="url(#glowRCT)" />
    
    <!-- After Treatment -->
    <g transform="translate(${WIDTH * 0.7}, ${HEIGHT * 0.5})">
      <text x="0" y="-350" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowRCT)">After</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="250" rx="100" ry="30" fill="#000000" opacity="0.25" />
      
      <!-- Tooth crown with 3D effect -->
      <rect x="-100" y="-200" width="200" height="240" rx="100" fill="url(#tooth3D)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowRCT)" />
      <rect x="-95" y="-195" width="190" height="230" rx="95" fill="url(#tooth3D)" opacity="0.9" />
      
      <!-- Enamel highlight -->
      <ellipse cx="0" cy="-180" rx="80" ry="100" fill="#FFFFFF" opacity="0.7" />
      
      <!-- Dentin layer -->
      <rect x="-80" y="-150" width="160" height="180" rx="80" fill="${COLORS.teeth.dentin}" stroke="${COLORS.gums.light}" stroke-width="3" opacity="0.8" />
      
      <!-- Healthy pulp chamber (filled) -->
      <ellipse cx="0" y="-60" rx="40" ry="50" fill="url(#healthyGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#glowRCT)" />
      
      <!-- Root with 3D effect -->
      <rect x="-60" y="40" width="120" height="300" rx="30" fill="url(#tooth3D)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowRCT)" />
      
      <!-- Cleaned root canals -->
      <circle cx="-25" cy="200" r="12" fill="url(#healthyGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="3" filter="url(#glowRCT)" />
      <circle cx="0" cy="230" r="12" fill="url(#healthyGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="3" filter="url(#glowRCT)" />
      <circle cx="25" cy="200" r="12" fill="url(#healthyGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="3" filter="url(#glowRCT)" />
      
      <!-- Gutta-percha filling -->
      <circle cx="-25" cy="260" r="10" fill="url(#fillingGrad)" stroke="#F59E0B" stroke-width="2" filter="url(#glowRCT)" />
      <circle cx="0" cy="280" r="10" fill="url(#fillingGrad)" stroke="#F59E0B" stroke-width="2" filter="url(#glowRCT)" />
      <circle cx="25" cy="260" r="10" fill="url(#fillingGrad)" stroke="#F59E0B" stroke-width="2" filter="url(#glowRCT)" />
      
      <!-- Gum line -->
      <path d="M -120,40 Q -60,25 0,40 Q 60,25 120,40" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowRCT)" />
      
      <!-- Bone structure -->
      <rect x="-140" y="340" width="280" height="80" rx="15" fill="${COLORS.bone.light}" stroke="${COLORS.gums.vibrant}" stroke-width="3" opacity="0.7" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="50" rx="150" ry="200" fill="${COLORS.gums.vibrant}" opacity="0.15" filter="url(#glowRCT)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Braces & Aligners Illustration - Enhanced 3D Version
 * Shows teeth alignment progression with vibrant colors and 3D effects
 */
function generateBracesIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="33%" stop-color="${COLORS.background.gradient[1]}" />
        <stop offset="66%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <linearGradient id="toothHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="alignerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.aligners.highlight}" stop-opacity="0.9" />
        <stop offset="50%" stop-color="${COLORS.aligners.clear}" stop-opacity="0.7" />
        <stop offset="100%" stop-color="${COLORS.aligners.shadow}" stop-opacity="0.5" />
      </linearGradient>
      <linearGradient id="braceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.tools.shine}" />
        <stop offset="50%" stop-color="${COLORS.tools.metal}" />
        <stop offset="100%" stop-color="#1F2937" />
      </linearGradient>
      <radialGradient id="toothShadow" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.15" />
      </radialGradient>
      <filter id="shadow3D">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowhead3D" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background with gradient -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad3D)" />
    
    <!-- Section 1: Before - Misaligned teeth with 3D effect -->
    <g transform="translate(${WIDTH * 0.2}, ${HEIGHT * 0.45})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glow)">Before</text>
      ${Array.from({ length: 6 }, (_, i) => {
        const offset = (i - 2.5) * 50
        const height = 80 + Math.abs(offset) * 0.8
        const rotation = offset * 0.4
        const x = offset
        const y = -height
        return `
          <!-- Tooth shadow -->
          <ellipse cx="${x}" cy="${y + height + 10}" rx="${20 + Math.abs(offset) * 0.3}" ry="8" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D gradient -->
          <rect x="${x - 20}" y="${y}" width="40" height="${height}" rx="10" fill="url(#toothGrad3D)" stroke="${COLORS.bone.dark}" stroke-width="3" filter="url(#shadow3D)" transform="rotate(${rotation} ${x} ${y})" />
          <!-- Tooth highlight -->
          <rect x="${x - 18}" y="${y + 5}" width="36" height="${height - 10}" rx="8" fill="url(#toothHighlight)" transform="rotate(${rotation} ${x} ${y})" />
        `
      }).join('')}
    </g>
    
    <!-- Arrow 1 -->
    <path d="M ${WIDTH * 0.35},${HEIGHT * 0.45} L ${WIDTH * 0.42},${HEIGHT * 0.45}" stroke="${COLORS.labels.vibrant}" stroke-width="6" marker-end="url(#arrowhead3D)" filter="url(#glow)" />
    
    <!-- Section 2: During - Clear Aligners with 3D effect -->
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.45})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glow)">During Treatment</text>
      ${Array.from({ length: 6 }, (_, i) => {
        const x = (i - 2.5) * 50
        const y = -80
        return `
          <!-- Tooth shadow -->
          <ellipse cx="${x}" cy="20" rx="22" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D gradient -->
          <rect x="${x - 20}" y="${y}" width="40" height="80" rx="10" fill="url(#toothGrad3D)" stroke="${COLORS.bone.dark}" stroke-width="3" filter="url(#shadow3D)" />
          <!-- Tooth highlight -->
          <rect x="${x - 18}" y="${y + 5}" width="36" height="70" rx="8" fill="url(#toothHighlight)" />
          <!-- Clear aligner overlay with 3D effect -->
          <rect x="${x - 22}" y="${y - 5}" width="44" height="90" rx="12" fill="url(#alignerGrad)" stroke="${COLORS.aligners.shadow}" stroke-width="2" opacity="0.8" />
          <!-- Aligner highlight -->
          <ellipse cx="${x}" cy="${y + 10}" rx="18" ry="25" fill="${COLORS.aligners.highlight}" opacity="0.6" />
          <!-- Aligner shine effect -->
          <path d="M ${x - 15},${y + 5} Q ${x},${y + 15} ${x + 15},${y + 5}" fill="none" stroke="${COLORS.aligners.highlight}" stroke-width="2" opacity="0.7" />
        `
      }).join('')}
      <!-- Aligner connection line -->
      <path d="M -150,-40 Q -75,-45 0,-40 Q 75,-45 150,-40" fill="none" stroke="${COLORS.aligners.shadow}" stroke-width="4" opacity="0.6" stroke-linecap="round" />
    </g>
    
    <!-- Arrow 2 -->
    <path d="M ${WIDTH * 0.65},${HEIGHT * 0.45} L ${WIDTH * 0.72},${HEIGHT * 0.45}" stroke="${COLORS.labels.vibrant}" stroke-width="6" marker-end="url(#arrowhead3D)" filter="url(#glow)" />
    
    <!-- Section 3: After - Perfectly aligned teeth with 3D effect -->
    <g transform="translate(${WIDTH * 0.8}, ${HEIGHT * 0.45})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glow)">After</text>
      ${Array.from({ length: 6 }, (_, i) => {
        const x = (i - 2.5) * 50
        const y = -80
        return `
          <!-- Tooth shadow -->
          <ellipse cx="${x}" cy="20" rx="22" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D gradient and perfect alignment -->
          <rect x="${x - 20}" y="${y}" width="40" height="80" rx="10" fill="url(#toothGrad3D)" stroke="${COLORS.gums.vibrant}" stroke-width="3" filter="url(#shadow3D)" />
          <!-- Tooth highlight -->
          <rect x="${x - 18}" y="${y + 5}" width="36" height="70" rx="8" fill="url(#toothHighlight)" />
          <!-- Success glow -->
          <ellipse cx="${x}" cy="${y + 40}" rx="25" ry="30" fill="${COLORS.gums.vibrant}" opacity="0.2" filter="url(#glow)" />
        `
      }).join('')}
      <!-- Perfect alignment indicator -->
      <path d="M -150,-40 Q -75,-40 0,-40 Q 75,-40 150,-40" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="5" stroke-linecap="round" opacity="0.8" filter="url(#glow)" />
    </g>
    
    <!-- Decorative elements -->
    <circle cx="${WIDTH * 0.1}" cy="${HEIGHT * 0.2}" r="60" fill="${COLORS.gums.light}" opacity="0.3" filter="url(#glow)" />
    <circle cx="${WIDTH * 0.9}" cy="${HEIGHT * 0.8}" r="80" fill="${COLORS.gums.vibrant}" opacity="0.2" filter="url(#glow)" />
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Tooth Whitening Illustration - Enhanced 3D Version
 * Shows color shade comparison with vibrant 3D effects
 */
function generateWhiteningIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradWhitening" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothWhitening3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <filter id="shadowWhitening">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowWhitening">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadWhitening" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradWhitening)" />
    
    <!-- Shade guide showing progression with 3D effect -->
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <text x="0" y="-300" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowWhitening)">Whitening Progress</text>
      
      ${['#D4A574', '#C9A882', '#BFA690', '#B5A49E', '#AB9FAC', '#A19ABA', '#97A5C8', '#FFFFFF'].map((color, i) => {
        const x = (i - 3.5) * 90
        const isWhitest = i === 7
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="50" rx="35" ry="12" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D effect -->
          <rect x="${x - 35}" y="-100" width="70" height="120" rx="12" fill="${color}" stroke="${isWhitest ? COLORS.gums.vibrant : COLORS.bone.dark}" stroke-width="${isWhitest ? 5 : 3}" filter="url(#shadowWhitening)" />
          <rect x="${x - 33}" y="-95" width="66" height="110" rx="11" fill="${color}" opacity="0.9" />
          <!-- Highlight -->
          <ellipse cx="${x}" cy="-80" rx="30" ry="20" fill="#FFFFFF" opacity="${isWhitest ? 0.9 : 0.5 - (i * 0.05)}" />
          <!-- Shade label -->
          <text x="${x}" y="60" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowWhitening)">${isWhitest ? 'A1' : `C${i + 1}`}</text>
          ${isWhitest ? `<ellipse cx="${x}" cy="-50" rx="40" ry="30" fill="${COLORS.gums.vibrant}" opacity="0.2" filter="url(#glowWhitening)" />` : ''}
        `
      }).join('')}
      
      <!-- Arrow showing whitening direction -->
      <path d="M -320,20 L 320,20" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadWhitening)" filter="url(#glowWhitening)" />
      <text x="0" y="10" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowWhitening)">Darker → Whiter</text>
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Gum Disease Treatment Illustration - Enhanced 3D Version
 * Shows healthy vs diseased gums with vibrant colors
 */
function generateGumDiseaseIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradGum" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothGum3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <radialGradient id="diseasedGumGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#DC2626" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#991B1B" stop-opacity="0.7" />
      </radialGradient>
      <linearGradient id="healthyGumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.gums.vibrant}" />
        <stop offset="50%" stop-color="${COLORS.gums.healthy}" />
        <stop offset="100%" stop-color="${COLORS.gums.dark}" />
      </linearGradient>
      <filter id="shadowGum">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowGum">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadGum" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradGum)" />
    
    <!-- Before: Diseased gums -->
    <g transform="translate(${WIDTH * 0.3}, ${HEIGHT * 0.5})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowGum)">Before</text>
      ${Array.from({ length: 4 }, (_, i) => {
        const x = (i - 1.5) * 80
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="40" rx="20" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D effect -->
          <rect x="${x - 20}" y="-120" width="40" height="120" rx="8" fill="url(#toothGum3D)" stroke="${COLORS.bone.dark}" stroke-width="4" filter="url(#shadowGum)" />
          <rect x="${x - 18}" y="-115" width="36" height="110" rx="7" fill="url(#toothGum3D)" opacity="0.9" />
          <!-- Diseased/receding gums -->
          <path d="M ${x - 25},-40 Q ${x - 12},-55 ${x},-50 Q ${x + 12},-55 ${x + 25},-40" 
                fill="url(#diseasedGumGrad)" stroke="#DC2626" stroke-width="4" filter="url(#glowGum)" />
          <circle cx="${x}" cy="-45" r="5" fill="#DC2626" opacity="0.9" />
          <!-- Recession indicator -->
          <path d="M ${x - 15},-30 L ${x + 15},-30" stroke="#DC2626" stroke-width="2" stroke-dasharray="3,3" />
        `
      }).join('')}
    </g>
    
    <!-- Arrow -->
    <path d="M ${WIDTH * 0.5},${HEIGHT * 0.5} L ${WIDTH * 0.55},${HEIGHT * 0.5}" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadGum)" filter="url(#glowGum)" />
    
    <!-- After: Healthy gums -->
    <g transform="translate(${WIDTH * 0.7}, ${HEIGHT * 0.5})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowGum)">After</text>
      ${Array.from({ length: 4 }, (_, i) => {
        const x = (i - 1.5) * 80
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="40" rx="20" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth with 3D effect -->
          <rect x="${x - 20}" y="-120" width="40" height="120" rx="8" fill="url(#toothGum3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowGum)" />
          <rect x="${x - 18}" y="-115" width="36" height="110" rx="7" fill="url(#toothGum3D)" opacity="0.9" />
          <!-- Healthy gums with 3D effect -->
          <path d="M ${x - 25},-40 Q ${x - 12},-25 ${x},-30 Q ${x + 12},-25 ${x + 25},-40" 
                fill="url(#healthyGumGrad)" stroke="${COLORS.gums.dark}" stroke-width="4" filter="url(#glowGum)" />
          <ellipse cx="${x}" cy="-32" rx="18" ry="12" fill="${COLORS.gums.light}" opacity="0.6" />
          <!-- Healthy indicator -->
          <circle cx="${x}" cy="-30" r="4" fill="${COLORS.gums.vibrant}" opacity="0.8" filter="url(#glowGum)" />
        `
      }).join('')}
      <!-- Success glow -->
      <ellipse cx="0" cy="-30" rx="200" ry="150" fill="${COLORS.gums.vibrant}" opacity="0.1" filter="url(#glowGum)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Dental Implant Illustration - Enhanced 3D Version
 * Shows implant placement in jaw bone with vibrant colors
 */
function generateImplantIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradImplant" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="implantGrad3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#E5E7EB" />
        <stop offset="50%" stop-color="#9CA3AF" />
        <stop offset="100%" stop-color="#4B5563" />
      </linearGradient>
      <linearGradient id="crownImplantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <filter id="shadowImplant">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowImplant">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradImplant)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.45})">
      <!-- Jaw bone shadow -->
      <ellipse cx="0" cy="250" rx="200" ry="40" fill="#000000" opacity="0.2" />
      
      <!-- Jaw bone with 3D effect -->
      <rect x="-200" y="0" width="400" height="250" rx="25" fill="${COLORS.bone.light}" stroke="${COLORS.bone.dark}" stroke-width="5" opacity="0.9" filter="url(#shadowImplant)" />
      <rect x="-195" y="5" width="390" height="240" rx="23" fill="${COLORS.bone.medium}" opacity="0.7" />
      
      <!-- Implant fixture (screw) with 3D effect -->
      <rect x="-20" y="30" width="40" height="200" rx="20" fill="url(#implantGrad3D)" stroke="#1F2937" stroke-width="4" filter="url(#shadowImplant)" />
      
      <!-- Implant threads with 3D effect -->
      ${Array.from({ length: 10 }, (_, i) => {
        const y = 40 + (i * 20)
        return `
          <circle cx="0" cy="${y}" r="18" fill="none" stroke="#1F2937" stroke-width="2" opacity="0.8" />
          <circle cx="0" cy="${y}" r="16" fill="none" stroke="#6B7280" stroke-width="1" opacity="0.5" />
        `
      }).join('')}
      
      <!-- Abutment with 3D effect -->
      <ellipse cx="0" cy="30" rx="20" ry="8" fill="#000000" opacity="0.2" />
      <rect x="-15" y="10" width="30" height="30" rx="5" fill="url(#implantGrad3D)" stroke="#1F2937" stroke-width="3" filter="url(#shadowImplant)" />
      <rect x="-12" y="15" width="24" height="20" rx="4" fill="#D1D5DB" opacity="0.8" />
      
      <!-- Crown with 3D effect -->
      <ellipse cx="0" cy="-60" rx="30" ry="12" fill="#000000" opacity="0.2" />
      <rect x="-30" y="-100" width="60" height="70" rx="12" fill="url(#crownImplantGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowImplant)" />
      <rect x="-28" y="-95" width="56" height="60" rx="10" fill="url(#crownImplantGrad)" opacity="0.9" />
      <ellipse cx="0" cy="-95" rx="25" ry="12" fill="#FFFFFF" opacity="0.7" />
      
      <!-- Gum tissue with 3D effect -->
      <path d="M -120,30 Q -60,15 0,30 Q 60,15 120,30" fill="${COLORS.gums.healthy}" stroke="${COLORS.gums.dark}" stroke-width="4" opacity="0.9" filter="url(#shadowImplant)" />
      <path d="M -110,25 Q -55,10 0,25 Q 55,10 110,25" fill="${COLORS.gums.light}" opacity="0.6" />
      
      <!-- Bone integration (osseointegration) with glow -->
      <circle cx="0" cy="130" r="80" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="4" stroke-dasharray="8,4" opacity="0.8" filter="url(#glowImplant)" />
      <circle cx="0" cy="130" r="70" fill="none" stroke="${COLORS.gums.light}" stroke-width="2" stroke-dasharray="4,4" opacity="0.6" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="130" rx="100" ry="120" fill="${COLORS.gums.vibrant}" opacity="0.1" filter="url(#glowImplant)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Pediatric Dentistry Illustration
 * Shows child tooth anatomy
 */
function generatePediatricIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[2]}" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Child's jaw with primary teeth -->
      ${Array.from({ length: 10 }, (_, i) => {
        const x = (i - 4.5) * 50
        const height = 35 + Math.random() * 10
        return `<rect x="${x - 12}" y="${-height}" width="24" height="${height}" rx="5" fill="${COLORS.teeth.white}" stroke="${COLORS.bone.dark}" stroke-width="1.5" opacity="0.9" />`
      }).join('')}
      
      <!-- Permanent teeth developing below -->
      ${Array.from({ length: 4 }, (_, i) => {
        const x = (i - 1.5) * 80
        return `<ellipse cx="${x}" cy="60" rx="15" ry="25" fill="${COLORS.teeth.dentin}" stroke="${COLORS.bone.dark}" stroke-width="2" opacity="0.6" />`
      }).join('')}
      
      <!-- Gum line -->
      <path d="M -250,0 Q -125,-5 0,0 Q 125,-5 250,0" fill="none" stroke="${COLORS.gums.healthy}" stroke-width="3" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Preventive Care Illustration - Enhanced 3D Version
 * Shows cleaning and fluoride treatment - Before and After
 */
function generatePreventiveIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradPreventive" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothPreventive3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <radialGradient id="fluorideGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#F0FDF4" stop-opacity="0.9" />
        <stop offset="100%" stop-color="${COLORS.gums.vibrant}" stop-opacity="0.6" />
      </radialGradient>
      <filter id="shadowPreventive">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowPreventive">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadPreventive" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradPreventive)" />
    
    <!-- Before: Unclean teeth -->
    <g transform="translate(${WIDTH * 0.3}, ${HEIGHT * 0.5})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowPreventive)">Before</text>
      ${Array.from({ length: 6 }, (_, i) => {
        const x = (i - 2.5) * 70
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="40" rx="20" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth with plaque/stains -->
          <rect x="${x - 20}" y="-100" width="40" height="100" rx="8" fill="#D1D5DB" stroke="#9CA3AF" stroke-width="4" filter="url(#shadowPreventive)" />
          <rect x="${x - 18}" y="-95" width="36" height="90" rx="7" fill="#E5E7EB" opacity="0.8" />
          <!-- Stains -->
          <ellipse cx="${x}" cy="-60" rx="15" ry="10" fill="#9CA3AF" opacity="0.6" />
        `
      }).join('')}
      <!-- Gum line -->
      <path d="M -200,0 Q -100,-5 0,0 Q 100,-5 200,0" fill="none" stroke="${COLORS.gums.dark}" stroke-width="6" stroke-linecap="round" />
    </g>
    
    <!-- Arrow -->
    <path d="M ${WIDTH * 0.5},${HEIGHT * 0.5} L ${WIDTH * 0.55},${HEIGHT * 0.5}" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadPreventive)" filter="url(#glowPreventive)" />
    
    <!-- After: Clean teeth with fluoride -->
    <g transform="translate(${WIDTH * 0.7}, ${HEIGHT * 0.5})">
      <text x="0" y="-280" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowPreventive)">After</text>
      ${Array.from({ length: 6 }, (_, i) => {
        const x = (i - 2.5) * 70
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="40" rx="20" ry="10" fill="#000000" opacity="0.2" />
          <!-- Clean tooth with 3D effect -->
          <rect x="${x - 20}" y="-100" width="40" height="100" rx="8" fill="url(#toothPreventive3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowPreventive)" />
          <rect x="${x - 18}" y="-95" width="36" height="90" rx="7" fill="url(#toothPreventive3D)" opacity="0.9" />
          <!-- Enamel highlight -->
          <ellipse cx="${x}" cy="-70" rx="18" ry="12" fill="#FFFFFF" opacity="0.7" />
          <!-- Fluoride coating with glow -->
          <ellipse cx="${x}" cy="-60" rx="16" ry="10" fill="url(#fluorideGrad)" filter="url(#glowPreventive)" />
          <!-- Sparkle effect -->
          <circle cx="${x - 8}" cy="-75" r="3" fill="#FFFFFF" opacity="0.9" />
          <circle cx="${x + 8}" cy="-65" r="2" fill="#FFFFFF" opacity="0.8" />
        `
      }).join('')}
      <!-- Gum line -->
      <path d="M -200,0 Q -100,-5 0,0 Q 100,-5 200,0" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowPreventive)" />
      <!-- Success glow -->
      <ellipse cx="0" cy="-50" rx="250" ry="150" fill="${COLORS.gums.vibrant}" opacity="0.1" filter="url(#glowPreventive)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Filling Illustration - Enhanced 3D Version
 * Shows tooth with composite filling - Before and After
 */
function generateFillingIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradFill" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothFill3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <radialGradient id="cavityGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#DC2626" stop-opacity="0.9" />
        <stop offset="100%" stop-color="#991B1B" stop-opacity="0.7" />
      </radialGradient>
      <linearGradient id="fillingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F0FDF4" />
        <stop offset="50%" stop-color="#D1FAE5" />
        <stop offset="100%" stop-color="#A7F3D0" />
      </linearGradient>
      <filter id="shadowFill">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowFill">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadFill" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradFill)" />
    
    <!-- Before: Cavity -->
    <g transform="translate(${WIDTH * 0.3}, ${HEIGHT * 0.5})">
      <text x="0" y="-300" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowFill)">Before</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="150" rx="80" ry="25" fill="#000000" opacity="0.25" />
      
      <!-- Tooth with 3D effect -->
      <rect x="-80" y="-150" width="160" height="200" rx="40" fill="url(#toothFill3D)" stroke="${COLORS.bone.dark}" stroke-width="5" filter="url(#shadowFill)" />
      <rect x="-75" y="-145" width="150" height="190" rx="38" fill="url(#toothFill3D)" opacity="0.9" />
      
      <!-- Enamel highlight -->
      <ellipse cx="0" cy="-130" rx="60" ry="80" fill="#FFFFFF" opacity="0.6" />
      
      <!-- Cavity with 3D effect -->
      <path d="M -40,-80 Q 0,-70 40,-80 Q 30,-50 0,-45 Q -30,-50 -40,-80" fill="url(#cavityGrad)" stroke="#DC2626" stroke-width="4" filter="url(#glowFill)" />
      <ellipse cx="0" cy="-62" rx="35" ry="20" fill="#991B1B" opacity="0.8" />
      
      <!-- Gum line -->
      <path d="M -100,50 Q -50,40 0,50 Q 50,40 100,50" fill="none" stroke="${COLORS.gums.dark}" stroke-width="6" stroke-linecap="round" />
    </g>
    
    <!-- Arrow -->
    <path d="M ${WIDTH * 0.5},${HEIGHT * 0.5} L ${WIDTH * 0.55},${HEIGHT * 0.5}" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadFill)" filter="url(#glowFill)" />
    
    <!-- After: Filled -->
    <g transform="translate(${WIDTH * 0.7}, ${HEIGHT * 0.5})">
      <text x="0" y="-300" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowFill)">After</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="150" rx="80" ry="25" fill="#000000" opacity="0.25" />
      
      <!-- Tooth with 3D effect -->
      <rect x="-80" y="-150" width="160" height="200" rx="40" fill="url(#toothFill3D)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowFill)" />
      <rect x="-75" y="-145" width="150" height="190" rx="38" fill="url(#toothFill3D)" opacity="0.9" />
      
      <!-- Enamel highlight -->
      <ellipse cx="0" cy="-130" rx="60" ry="80" fill="#FFFFFF" opacity="0.7" />
      
      <!-- Composite filling with 3D effect -->
      <path d="M -40,-80 Q 0,-70 40,-80 Q 30,-50 0,-45 Q -30,-50 -40,-80" fill="url(#fillingGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#glowFill)" />
      <ellipse cx="0" cy="-62" rx="35" ry="20" fill="#D1FAE5" opacity="0.8" />
      <ellipse cx="0" cy="-65" rx="25" ry="15" fill="#FFFFFF" opacity="0.6" />
      
      <!-- Gum line -->
      <path d="M -100,50 Q -50,40 0,50 Q 50,40 100,50" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowFill)" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="-50" rx="100" ry="120" fill="${COLORS.gums.vibrant}" opacity="0.15" filter="url(#glowFill)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Crown & Bridge Illustration - Enhanced 3D Version
 */
function generateCrownBridgeIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradCrown" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <linearGradient id="crownShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
      </linearGradient>
      <filter id="shadowCrown">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowCrown">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradCrown)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Abutment teeth (left) -->
      <ellipse cx="-200" cy="50" rx="25" ry="15" fill="#000000" opacity="0.2" />
      <rect x="-220" y="-100" width="40" height="120" rx="10" fill="url(#crownGrad)" stroke="${COLORS.bone.dark}" stroke-width="4" filter="url(#shadowCrown)" />
      <rect x="-215" y="-95" width="30" height="110" rx="8" fill="url(#crownGrad)" opacity="0.9" />
      <rect x="-210" y="-90" width="20" height="100" rx="6" fill="url(#crownShine)" />
      
      <!-- Bridge structure with 3D effect -->
      ${Array.from({ length: 3 }, (_, i) => {
        const x = (i - 1) * 120
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="50" rx="30" ry="18" fill="#000000" opacity="0.2" />
          <!-- Crown base -->
          <rect x="${x - 30}" y="-120" width="60" height="120" rx="12" fill="url(#crownGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowCrown)" />
          <!-- Crown inner -->
          <rect x="${x - 28}" y="-115" width="56" height="110" rx="10" fill="url(#crownGrad)" opacity="0.9" />
          <!-- Crown shine -->
          <rect x="${x - 25}" y="-110" width="50" height="100" rx="8" fill="url(#crownShine)" />
          <!-- Crown top highlight -->
          <ellipse cx="${x}" cy="-115" rx="25" ry="15" fill="#FFFFFF" opacity="0.7" />
        `
      }).join('')}
      
      <!-- Abutment teeth (right) -->
      <ellipse cx="200" cy="50" rx="25" ry="15" fill="#000000" opacity="0.2" />
      <rect x="180" y="-100" width="40" height="120" rx="10" fill="url(#crownGrad)" stroke="${COLORS.bone.dark}" stroke-width="4" filter="url(#shadowCrown)" />
      <rect x="185" y="-95" width="30" height="110" rx="8" fill="url(#crownGrad)" opacity="0.9" />
      <rect x="190" y="-90" width="20" height="100" rx="6" fill="url(#crownShine)" />
      
      <!-- Bridge connector (3D effect) -->
      <path d="M -180,-100 Q -60,-110 60,-110 Q 180,-100 180,-100" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" opacity="0.8" filter="url(#glowCrown)" />
      
      <!-- Gum line -->
      <path d="M -250,20 Q -125,10 0,20 Q 125,10 250,20" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowCrown)" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="-50" rx="200" ry="150" fill="${COLORS.gums.vibrant}" opacity="0.1" filter="url(#glowCrown)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Veneer Illustration - Enhanced 3D Version
 * Shows before and after veneer application
 */
function generateVeneerIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradVeneer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothVeneer3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <linearGradient id="veneerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#F8FAFC" />
        <stop offset="100%" stop-color="#F1F5F9" />
      </linearGradient>
      <linearGradient id="veneerShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
        <stop offset="50%" stop-color="#FFFFFF" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
      </linearGradient>
      <filter id="shadowVeneer">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowVeneer">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <marker id="arrowheadVeneer" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${COLORS.labels.vibrant}" />
      </marker>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradVeneer)" />
    
    <!-- Before: Natural tooth -->
    <g transform="translate(${WIDTH * 0.3}, ${HEIGHT * 0.5})">
      <text x="0" y="-300" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowVeneer)">Before</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="120" rx="50" ry="20" fill="#000000" opacity="0.25" />
      
      <!-- Natural tooth with 3D effect -->
      <rect x="-50" y="-120" width="100" height="150" rx="25" fill="url(#toothVeneer3D)" stroke="${COLORS.bone.dark}" stroke-width="5" filter="url(#shadowVeneer)" />
      <rect x="-48" y="-115" width="96" height="140" rx="23" fill="${COLORS.teeth.dentin}" opacity="0.8" />
      
      <!-- Stained/discolored areas -->
      <ellipse cx="-15" cy="-80" rx="20" ry="15" fill="#D1D5DB" opacity="0.6" />
      <ellipse cx="15" cy="-70" rx="18" ry="12" fill="#E5E7EB" opacity="0.5" />
      
      <!-- Gum line -->
      <path d="M -80,30 Q -40,20 0,30 Q 40,20 80,30" fill="none" stroke="${COLORS.gums.dark}" stroke-width="6" stroke-linecap="round" />
    </g>
    
    <!-- Arrow -->
    <path d="M ${WIDTH * 0.5},${HEIGHT * 0.5} L ${WIDTH * 0.55},${HEIGHT * 0.5}" stroke="${COLORS.labels.vibrant}" stroke-width="8" marker-end="url(#arrowheadVeneer)" filter="url(#glowVeneer)" />
    
    <!-- After: With veneer -->
    <g transform="translate(${WIDTH * 0.7}, ${HEIGHT * 0.5})">
      <text x="0" y="-300" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${COLORS.labels.text}" text-anchor="middle" filter="url(#glowVeneer)">After</text>
      
      <!-- Tooth shadow -->
      <ellipse cx="0" cy="120" rx="50" ry="20" fill="#000000" opacity="0.25" />
      
      <!-- Natural tooth base -->
      <rect x="-50" y="-120" width="100" height="150" rx="25" fill="url(#toothVeneer3D)" stroke="${COLORS.bone.dark}" stroke-width="3" opacity="0.3" filter="url(#shadowVeneer)" />
      
      <!-- Veneer layer with 3D effect -->
      <rect x="-48" y="-118" width="96" height="146" rx="24" fill="url(#veneerGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="5" filter="url(#shadowVeneer)" />
      <rect x="-46" y="-116" width="92" height="142" rx="22" fill="url(#veneerGrad)" opacity="0.95" />
      
      <!-- Veneer shine/highlight -->
      <rect x="-40" y="-110" width="80" height="130" rx="20" fill="url(#veneerShine)" />
      <ellipse cx="0" cy="-70" rx="35" ry="20" fill="#FFFFFF" opacity="0.8" />
      
      <!-- Perfect smile line -->
      <path d="M -45,-85 Q 0,-75 45,-85" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="3" stroke-linecap="round" opacity="0.6" filter="url(#glowVeneer)" />
      
      <!-- Gum line -->
      <path d="M -80,30 Q -40,20 0,30 Q 40,20 80,30" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowVeneer)" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="-50" rx="80" ry="100" fill="${COLORS.gums.vibrant}" opacity="0.15" filter="url(#glowVeneer)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Denture Illustration - Enhanced 3D Version
 */
function generateDentureIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradDenture" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="dentureBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F3F4F6" />
        <stop offset="50%" stop-color="#E5E7EB" />
        <stop offset="100%" stop-color="#D1D5DB" />
      </linearGradient>
      <linearGradient id="dentureToothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <filter id="shadowDenture">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowDenture">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradDenture)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Denture shadow -->
      <ellipse cx="0" cy="80" rx="250" ry="30" fill="#000000" opacity="0.2" />
      
      <!-- Denture base with 3D effect -->
      <path d="M -250,-80 Q -125,-110 0,-100 Q 125,-110 250,-80 L 250,60 Q 125,40 0,50 Q -125,40 -250,60 Z" 
            fill="url(#dentureBaseGrad)" stroke="#9CA3AF" stroke-width="5" filter="url(#shadowDenture)" />
      <path d="M -240,-75 Q -120,-105 0,-95 Q 120,-105 240,-75 L 240,55 Q 120,35 0,45 Q -120,35 -240,55 Z" 
            fill="url(#dentureBaseGrad)" opacity="0.9" />
      
      <!-- Denture teeth with 3D effect -->
      ${Array.from({ length: 14 }, (_, i) => {
        const x = (i - 6.5) * 35
        return `
          <!-- Tooth shadow -->
          <ellipse cx="${x}" cy="50" rx="12" ry="6" fill="#000000" opacity="0.15" />
          <!-- Tooth -->
          <rect x="${x - 12}" y="-90" width="24" height="50" rx="6" fill="url(#dentureToothGrad)" stroke="${COLORS.gums.vibrant}" stroke-width="3" filter="url(#shadowDenture)" />
          <rect x="${x - 11}" y="-88" width="22" height="46" rx="5" fill="url(#dentureToothGrad)" opacity="0.9" />
          <!-- Tooth highlight -->
          <ellipse cx="${x}" cy="-75" rx="10" ry="8" fill="#FFFFFF" opacity="0.7" />
        `
      }).join('')}
      
      <!-- Gum line detail -->
      <path d="M -250,-30 Q -125,-40 0,-35 Q 125,-40 250,-30" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="4" stroke-linecap="round" opacity="0.6" filter="url(#glowDenture)" />
      
      <!-- Success glow -->
      <ellipse cx="0" cy="-20" rx="280" ry="180" fill="${COLORS.gums.vibrant}" opacity="0.1" filter="url(#glowDenture)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Extraction Illustration - Enhanced 3D Version
 * Shows tooth extraction site with healing process
 */
function generateExtractionIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradExtract" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="50%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothExtract3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <radialGradient id="socketGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#FEE2E2" stop-opacity="0.9" />
        <stop offset="70%" stop-color="#FCA5A5" stop-opacity="0.7" />
        <stop offset="100%" stop-color="#DC2626" stop-opacity="0.5" />
      </radialGradient>
      <radialGradient id="healingGrad" cx="50%" cy="50%">
        <stop offset="0%" stop-color="#FCA5A5" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#F87171" stop-opacity="0.5" />
      </radialGradient>
      <filter id="shadowExtract">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/>
        <feOffset dx="4" dy="5" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.4"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowExtract">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradExtract)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Jaw bone shadow -->
      <ellipse cx="0" cy="200" rx="250" ry="40" fill="#000000" opacity="0.2" />
      
      <!-- Jaw bone with 3D effect -->
      <rect x="-200" y="0" width="400" height="200" rx="25" fill="${COLORS.bone.light}" stroke="${COLORS.bone.dark}" stroke-width="5" opacity="0.9" filter="url(#shadowExtract)" />
      <rect x="-195" y="5" width="390" height="190" rx="23" fill="${COLORS.bone.medium}" opacity="0.7" />
      
      <!-- Adjacent teeth with 3D effect -->
      <ellipse cx="-120" cy="40" rx="20" ry="12" fill="#000000" opacity="0.2" />
      <rect x="-130" y="-60" width="40" height="100" rx="8" fill="url(#toothExtract3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowExtract)" />
      <rect x="-128" y="-58" width="36" height="94" rx="7" fill="url(#toothExtract3D)" opacity="0.9" />
      <ellipse cx="-110" cy="-50" rx="18" ry="12" fill="#FFFFFF" opacity="0.7" />
      
      <ellipse cx="120" cy="40" rx="20" ry="12" fill="#000000" opacity="0.2" />
      <rect x="90" y="-60" width="40" height="100" rx="8" fill="url(#toothExtract3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowExtract)" />
      <rect x="92" y="-58" width="36" height="94" rx="7" fill="url(#toothExtract3D)" opacity="0.9" />
      <ellipse cx="110" cy="-50" rx="18" ry="12" fill="#FFFFFF" opacity="0.7" />
      
      <!-- Empty socket with 3D effect -->
      <ellipse cx="0" cy="80" rx="40" ry="20" fill="#000000" opacity="0.25" />
      <circle cx="0" cy="80" r="35" fill="url(#socketGrad)" stroke="#DC2626" stroke-width="4" stroke-dasharray="5,5" filter="url(#glowExtract)" />
      <circle cx="0" cy="80" r="30" fill="url(#socketGrad)" opacity="0.8" />
      
      <!-- Healing tissue with 3D effect -->
      <ellipse cx="0" cy="80" rx="28" ry="18" fill="url(#healingGrad)" filter="url(#glowExtract)" />
      <ellipse cx="0" cy="75" rx="20" ry="12" fill="#FCA5A5" opacity="0.6" />
      
      <!-- Gum line -->
      <path d="M -200,0 Q -100,-10 0,0 Q 100,-10 200,0" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowExtract)" />
      
      <!-- Healing indicator -->
      <circle cx="0" cy="80" r="45" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="3" stroke-dasharray="8,4" opacity="0.6" filter="url(#glowExtract)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Sinus Lift Illustration
 */
function generateSinusLiftIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[2]}" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.3})">
      <!-- Maxillary sinus -->
      <ellipse cx="0" cy="-100" rx="120" ry="60" fill="#DBEAFE" stroke="#3B82F6" stroke-width="3" stroke-dasharray="5,5" opacity="0.6" />
      
      <!-- Bone before -->
      <rect x="-100" y="0" width="200" height="80" rx="10" fill="${COLORS.bone.light}" stroke="${COLORS.bone.dark}" stroke-width="2" opacity="0.5" />
      
      <!-- Bone graft -->
      <rect x="-100" y="-20" width="200" height="100" rx="10" fill="#FCD34D" stroke="#F59E0B" stroke-width="2" opacity="0.7" />
      
      <!-- Implant site -->
      <rect x="-15" y="-40" width="30" height="120" rx="15" fill="#9CA3AF" stroke="#4B5563" stroke-width="2" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Airway Illustration
 */
function generateAirwayIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[2]}" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Head outline -->
      <ellipse cx="0" cy="0" rx="200" ry="250" fill="none" stroke="${COLORS.bone.dark}" stroke-width="3" opacity="0.3" />
      
      <!-- Nasal passage -->
      <ellipse cx="0" cy="-150" rx="30" ry="40" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2" />
      
      <!-- Airway (open) -->
      <path d="M 0,-150 Q -20,-50 0,50 Q 20,-50 0,-150" fill="#DBEAFE" stroke="#3B82F6" stroke-width="3" opacity="0.6" />
      
      <!-- Tongue -->
      <ellipse cx="0" cy="100" rx="80" ry="40" fill="#FCA5A5" stroke="#DC2626" stroke-width="2" opacity="0.5" />
      
      <!-- Airflow arrows -->
      <path d="M 0,-200 L 0,-100" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrowhead)" />
      <path d="M 0,-50 L 0,0" stroke="#3B82F6" stroke-width="4" marker-end="url(#arrowhead)" />
    </g>
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#3B82F6" />
      </marker>
    </defs>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Sensitivity Illustration
 */
function generateSensitivityIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[2]}" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Tooth with exposed dentin -->
      <rect x="-40" y="-100" width="80" height="120" rx="20" fill="${COLORS.teeth.white}" stroke="${COLORS.bone.dark}" stroke-width="3" />
      
      <!-- Exposed dentin tubules -->
      <rect x="-35" y="-20" width="70" height="80" rx="15" fill="${COLORS.teeth.dentin}" stroke="${COLORS.bone.dark}" stroke-width="2" />
      
      <!-- Nerve endings (sensitivity) -->
      ${Array.from({ length: 6 }, (_, i) => {
        const x = (i - 2.5) * 12
        return `<circle cx="${x}" cy="30" r="3" fill="#FCD34D" opacity="0.8" />`
      }).join('')}
      
      <!-- Pain signals -->
      ${Array.from({ length: 3 }, (_, i) => {
        const x = (i - 1) * 30
        return `<path d="M ${x},30 Q ${x - 10},10 ${x - 20},-10" fill="none" stroke="#EF4444" stroke-width="2" stroke-dasharray="3,3" />`
      }).join('')}
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}

/**
 * Generic Dental Illustration - Enhanced 3D Version
 * Professional dental smile illustration
 */
function generateGenericDentalIllustration(): string {
  const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bgGradGeneric" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${COLORS.background.gradient[0]}" />
        <stop offset="33%" stop-color="${COLORS.background.gradient[1]}" />
        <stop offset="66%" stop-color="${COLORS.background.gradient[2]}" />
        <stop offset="100%" stop-color="${COLORS.background.gradient[3]}" />
      </linearGradient>
      <linearGradient id="toothGeneric3D" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="${COLORS.teeth.enamel}" />
        <stop offset="100%" stop-color="${COLORS.teeth.shadow}" />
      </linearGradient>
      <filter id="shadowGeneric">
        <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
        <feOffset dx="3" dy="4" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <filter id="glowGeneric">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGradGeneric)" />
    
    <g transform="translate(${WIDTH * 0.5}, ${HEIGHT * 0.5})">
      <!-- Upper teeth with 3D effect -->
      ${Array.from({ length: 8 }, (_, i) => {
        const x = (i - 3.5) * 60
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="-30" rx="18" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth -->
          <rect x="${x - 18}" y="-120" width="36" height="70" rx="10" fill="url(#toothGeneric3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowGeneric)" />
          <rect x="${x - 16}" y="-115" width="32" height="65" rx="9" fill="url(#toothGeneric3D)" opacity="0.9" />
          <!-- Highlight -->
          <ellipse cx="${x}" cy="-100" rx="15" ry="10" fill="#FFFFFF" opacity="0.7" />
        `
      }).join('')}
      
      <!-- Lower teeth with 3D effect -->
      ${Array.from({ length: 8 }, (_, i) => {
        const x = (i - 3.5) * 60
        return `
          <!-- Shadow -->
          <ellipse cx="${x}" cy="80" rx="18" ry="10" fill="#000000" opacity="0.2" />
          <!-- Tooth -->
          <rect x="${x - 18}" y="50" width="36" height="70" rx="10" fill="url(#toothGeneric3D)" stroke="${COLORS.gums.vibrant}" stroke-width="4" filter="url(#shadowGeneric)" />
          <rect x="${x - 16}" y="55" width="32" height="65" rx="9" fill="url(#toothGeneric3D)" opacity="0.9" />
          <!-- Highlight -->
          <ellipse cx="${x}" cy="70" rx="15" ry="10" fill="#FFFFFF" opacity="0.7" />
        `
      }).join('')}
      
      <!-- Gum lines with 3D effect -->
      <path d="M -250,-50 Q -125,-45 0,-50 Q 125,-45 250,-50" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowGeneric)" />
      <path d="M -250,50 Q -125,45 0,50 Q 125,45 250,50" fill="none" stroke="${COLORS.gums.vibrant}" stroke-width="6" stroke-linecap="round" filter="url(#glowGeneric)" />
      
      <!-- Decorative glow -->
      <ellipse cx="0" cy="0" rx="300" ry="200" fill="${COLORS.gums.vibrant}" opacity="0.08" filter="url(#glowGeneric)" />
    </g>
  </svg>`
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`
}


