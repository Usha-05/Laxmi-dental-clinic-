/**
 * Utility functions for generating AI-related placeholder images
 * Uses SVG data URIs to generate placeholder images when actual images are missing or fail to load
 */

/**
 * Generate an AI placeholder image using SVG data URI
 * This creates a placeholder image with custom text and colors that always works
 */
export function getPlaceholderImage(
  width: number = 600,
  height: number = 400,
  text: string = "Dental Treatment",
  bgColor: string = "#00A86B",
  textColor: string = "#FFFFFF"
): string {
  // Truncate long text to fit in image
  const maxLength = 30
  const displayText = text.length > maxLength ? text.substring(0, maxLength) + "..." : text
  
  // Create SVG with text
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width / 15, 24)}" 
        font-weight="bold" 
        fill="${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${displayText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </text>
    </svg>
  `.trim()
  
  // Convert to data URI (browser-compatible)
  const encodedSvg = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

/**
 * Generate a dental-related AI placeholder image
 * Creates sophisticated, contextually relevant AI-style images for each treatment
 */
export function getDentalPlaceholderImage(
  width: number = 600,
  height: number = 400,
  treatmentName?: string
): string {
  const name = treatmentName || "Dental Treatment"
  const nameLower = name.toLowerCase()
  
  // Determine treatment category and design based on treatment name
  let design: {
    gradient: string[]
    accent: string
    patternType: string
    iconType: string
    textColor: string
  }
  
  // Orthodontics treatments
  if (nameLower.includes("cleft") || nameLower.includes("orthodontics")) {
    design = {
      gradient: ["#1E603F", "#289660", "#34d399"],
      accent: "#6ee7b7",
      patternType: "wave",
      iconType: "smile",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("sleep") || nameLower.includes("apnea")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "radial",
      iconType: "moon",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("airway") || nameLower.includes("speech")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      iconType: "breath",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("habit")) {
    design = {
      gradient: ["#059669", "#10B981", "#34D399"],
      accent: "#6EE7B7",
      patternType: "dots",
      iconType: "circle",
      textColor: "#FFFFFF"
    }
  }
  // Pediatric treatments
  else if (nameLower.includes("pulpotomy") || nameLower.includes("pulpectomy")) {
    design = {
      gradient: ["#059669", "#10B981", "#34D399"],
      accent: "#6EE7B7",
      patternType: "dots",
      iconType: "star",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("kids") || nameLower.includes("pediatric") || nameLower.includes("child")) {
    design = {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      accent: "#A7F3D0",
      patternType: "dots",
      iconType: "star",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("pit") || nameLower.includes("fissure") || nameLower.includes("sealant")) {
    design = {
      gradient: ["#34D399", "#6EE7B7", "#A7F3D0"],
      accent: "#D1FAE5",
      patternType: "radial",
      iconType: "shield",
      textColor: "#065F46"
    }
  } else if (nameLower.includes("fluoride")) {
    design = {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      accent: "#A7F3D0",
      patternType: "wave",
      iconType: "droplet",
      textColor: "#FFFFFF"
    }
  }
  // Restorative treatments
  else if (nameLower.includes("filling")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      iconType: "tooth",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("crown") || nameLower.includes("bridge")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      iconType: "crown",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("implant")) {
    design = {
      gradient: ["#1E603F", "#289660", "#34d399"],
      accent: "#6ee7b7",
      patternType: "wave",
      iconType: "anchor",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("root canal") || nameLower.includes("rct")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "radial",
      iconType: "root",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("veneer") || nameLower.includes("laminate")) {
    design = {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      accent: "#A7F3D0",
      patternType: "wave",
      iconType: "sparkle",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("denture") || nameLower.includes("prosthesis")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "grid",
      iconType: "teeth",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("sensitivity")) {
    design = {
      gradient: ["#059669", "#10B981", "#34D399"],
      accent: "#6EE7B7",
      patternType: "radial",
      iconType: "zap",
      textColor: "#FFFFFF"
    }
  }
  // Surgical treatments
  else if (nameLower.includes("wisdom") || nameLower.includes("extraction") || nameLower.includes("removal")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      iconType: "scissors",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("gum") || nameLower.includes("periodontal")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      iconType: "gum",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("bone") || nameLower.includes("graft")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      iconType: "bone",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("sinus") || nameLower.includes("lift")) {
    design = {
      gradient: ["#1E603F", "#289660", "#34d399"],
      accent: "#6ee7b7",
      patternType: "wave",
      iconType: "mountain",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("cyst") || nameLower.includes("biopsy") || nameLower.includes("alveoloplasty")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      iconType: "medical",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("tongue") || nameLower.includes("frenectomy")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      iconType: "tongue",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("surgical")) {
    design = {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      iconType: "scalpel",
      textColor: "#FFFFFF"
    }
  }
  // Preventive treatments
  else if (nameLower.includes("cleaning") || nameLower.includes("scaling") || nameLower.includes("polish")) {
    design = {
      gradient: ["#34D399", "#6EE7B7", "#A7F3D0"],
      accent: "#D1FAE5",
      patternType: "radial",
      iconType: "sparkle",
      textColor: "#065F46"
    }
  } else if (nameLower.includes("pregnancy")) {
    design = {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      accent: "#A7F3D0",
      patternType: "wave",
      iconType: "heart",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("whitening")) {
    design = {
      gradient: ["#FFFFFF", "#F0FDF4", "#D1FAE5"],
      accent: "#6EE7B7",
      patternType: "radial",
      iconType: "sun",
      textColor: "#047857"
    }
  } else if (nameLower.includes("bleeding") || nameLower.includes("gum disease")) {
    design = {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      iconType: "droplet",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("bad breath") || nameLower.includes("halitosis")) {
    design = {
      gradient: ["#059669", "#10B981", "#34D399"],
      accent: "#6EE7B7",
      patternType: "wave",
      iconType: "wind",
      textColor: "#FFFFFF"
    }
  } else if (nameLower.includes("emergency")) {
    design = {
      gradient: ["#DC2626", "#EF4444", "#F87171"],
      accent: "#FCA5A5",
      patternType: "radial",
      iconType: "alert",
      textColor: "#FFFFFF"
    }
  }
  // Default design
  else {
    design = {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      accent: "#A7F3D0",
      patternType: "dots",
      iconType: "tooth",
      textColor: "#FFFFFF"
    }
  }
  
  // Create unique ID for this SVG
  const uniqueId = name.replace(/\s+/g, '-').toLowerCase().replace(/[^a-z0-9-]/g, '')
  
  // Truncate text for display
  const maxLength = 35
  const displayText = name.length > maxLength ? name.substring(0, maxLength) + "..." : name
  
  // Create sophisticated AI-style SVG with realistic dental treatment imagery
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="mainGrad-${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${design.gradient[0]}" stop-opacity="1" />
          <stop offset="50%" stop-color="${design.gradient[1]}" stop-opacity="1" />
          <stop offset="100%" stop-color="${design.gradient[2]}" stop-opacity="1" />
        </linearGradient>
        <radialGradient id="accentGrad-${uniqueId}" cx="50%" cy="30%">
          <stop offset="0%" stop-color="${design.accent}" stop-opacity="0.6" />
          <stop offset="70%" stop-color="${design.accent}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="${design.accent}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="accentGrad2-${uniqueId}" cx="80%" cy="80%">
          <stop offset="0%" stop-color="${design.gradient[1]}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${design.gradient[1]}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="lightGrad-${uniqueId}" cx="20%" cy="20%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="overlayGrad-${uniqueId}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.2" />
        </linearGradient>
        <pattern id="dots-${uniqueId}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1.5" fill="#FFFFFF" opacity="0.12"/>
        </pattern>
        <pattern id="grid-${uniqueId}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="0.6" opacity="0.1"/>
        </pattern>
        <pattern id="diagonal-${uniqueId}" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M 0 25 L 25 0" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.08"/>
        </pattern>
        <pattern id="wave-${uniqueId}" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          <path d="M 0,15 Q 15,10 30,15 T 60,15" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.06"/>
        </pattern>
        <filter id="blur-${uniqueId}">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
        </filter>
        <filter id="shadow-${uniqueId}">
          <feDropShadow dx="0" dy="2" stdDeviation="4" flood-opacity="0.3"/>
        </filter>
        <marker id="arrow-${uniqueId}" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#FFFFFF" opacity="0.5"/>
        </marker>
      </defs>
      
      <!-- Main background gradient -->
      <rect width="${width}" height="${height}" fill="url(#mainGrad-${uniqueId})"/>
      
      <!-- Light source effect -->
      <circle cx="${width * 0.2}" cy="${height * 0.2}" r="${width * 0.3}" fill="url(#lightGrad-${uniqueId})"/>
      
      <!-- Pattern overlay based on treatment type -->
      ${design.patternType === 'dots' ? `<rect width="${width}" height="${height}" fill="url(#dots-${uniqueId})"/>` : ''}
      ${design.patternType === 'grid' ? `<rect width="${width}" height="${height}" fill="url(#grid-${uniqueId})"/>` : ''}
      ${design.patternType === 'diagonal' ? `<rect width="${width}" height="${height}" fill="url(#diagonal-${uniqueId})"/>` : ''}
      ${design.patternType === 'wave' ? `<rect width="${width}" height="${height}" fill="url(#wave-${uniqueId})"/>` : ''}
      ${design.patternType === 'radial' ? `<circle cx="${width * 0.5}" cy="${height * 0.5}" r="${width * 0.45}" fill="url(#accentGrad-${uniqueId})"/>` : ''}
      
      <!-- Accent circles for depth and realism -->
      <circle cx="${width * 0.75}" cy="${height * 0.25}" r="${width * 0.22}" fill="url(#accentGrad-${uniqueId})" filter="url(#blur-${uniqueId})"/>
      <circle cx="${width * 0.25}" cy="${height * 0.75}" r="${width * 0.2}" fill="url(#accentGrad2-${uniqueId})" filter="url(#blur-${uniqueId})"/>
      <circle cx="${width * 0.6}" cy="${height * 0.5}" r="${width * 0.15}" fill="url(#accentGrad-${uniqueId})" opacity="0.3" filter="url(#blur-${uniqueId})"/>
      
      <!-- Unique treatment-specific visual elements -->
      ${nameLower.includes("filling") ? `
        <!-- Tooth with filling - unique to fillings -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <rect x="-${width * 0.08}" y="-${height * 0.1}" width="${width * 0.16}" height="${height * 0.2}" rx="${width * 0.02}" fill="#FFFFFF" opacity="0.4" filter="url(#shadow-${uniqueId})"/>
          <rect x="-${width * 0.06}" y="-${height * 0.08}" width="${width * 0.12}" height="${height * 0.16}" rx="${width * 0.015}" fill="${design.gradient[1]}" opacity="0.5"/>
          <circle cx="-${width * 0.03}" cy="-${height * 0.05}" r="${width * 0.012}" fill="${design.gradient[0]}" opacity="0.7"/>
          <circle cx="${width * 0.03}" cy="-${height * 0.05}" r="${width * 0.012}" fill="${design.gradient[0]}" opacity="0.7"/>
          <!-- Composite filling material -->
          <rect x="-${width * 0.04}" y="${height * 0.02}" width="${width * 0.08}" height="${height * 0.05}" rx="${width * 0.006}" fill="${design.accent}" opacity="0.6"/>
          <ellipse cx="0" cy="${height * 0.045}" rx="${width * 0.03}" ry="${height * 0.01}" fill="#FFFFFF" opacity="0.3"/>
        </g>
      ` : nameLower.includes("jaw") && (nameLower.includes("correction") || nameLower.includes("problem")) ? `
        <!-- Before/After jaw correction visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.4})">
          <!-- Before: Misaligned jaw -->
          <g transform="translate(-${width * 0.15}, 0)">
            <ellipse cx="0" cy="0" rx="${width * 0.08}" ry="${height * 0.1}" fill="#FFFFFF" opacity="0.25" filter="url(#blur-${uniqueId})"/>
            <path d="M -${width * 0.06},${height * 0.05} Q 0,${height * 0.08} ${width * 0.06},${height * 0.05}" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.4"/>
            <rect x="-${width * 0.04}" y="${height * 0.02}" width="${width * 0.08}" height="${height * 0.06}" rx="${width * 0.01}" fill="#FFFFFF" opacity="0.2"/>
            <path d="M -${width * 0.03},${height * 0.05} L ${width * 0.03},${height * 0.08}" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3"/>
          </g>
          <!-- Arrow -->
          <path d="M -${width * 0.05},0 L ${width * 0.05},0" stroke="#FFFFFF" stroke-width="2" opacity="0.5" marker-end="url(#arrow-${uniqueId})"/>
          <!-- After: Corrected jaw -->
          <g transform="translate(${width * 0.15}, 0)">
            <ellipse cx="0" cy="0" rx="${width * 0.08}" ry="${height * 0.1}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
            <path d="M -${width * 0.06},${height * 0.05} Q 0,${height * 0.06} ${width * 0.06},${height * 0.05}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.5"/>
            <rect x="-${width * 0.04}" y="${height * 0.02}" width="${width * 0.08}" height="${height * 0.06}" rx="${width * 0.01}" fill="#FFFFFF" opacity="0.3"/>
            <path d="M -${width * 0.03},${height * 0.05} L 0,${height * 0.06} L ${width * 0.03},${height * 0.05}" stroke="#FFFFFF" stroke-width="1.5" opacity="0.4"/>
          </g>
        </g>
      ` : nameLower.includes("orthodontics") && !nameLower.includes("jaw") ? `
        <!-- Aligners/Braces visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.22}" ry="${height * 0.13}" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.35" filter="url(#blur-${uniqueId})"/>
          ${Array.from({length: 8}, (_, i) => {
            const x = (i - 3.5) * width * 0.045;
            const alignerOpacity = 0.3 + (i % 2) * 0.1;
            return `<rect x="${x - width * 0.018}" y="-${height * 0.04}" width="${width * 0.036}" height="${height * 0.08}" rx="${width * 0.006}" fill="#FFFFFF" opacity="${alignerOpacity}"/>
              <rect x="${x - width * 0.015}" y="-${height * 0.035}" width="${width * 0.03}" height="${height * 0.07}" rx="${width * 0.005}" fill="${design.accent}" opacity="0.2"/>`;
          }).join('')}
        </g>
      ` : nameLower.includes("crown") || nameLower.includes("bridge") ? `
        <!-- Crown/Bridge visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <rect x="-${width * 0.07}" y="-${height * 0.09}" width="${width * 0.14}" height="${height * 0.18}" rx="${width * 0.018}" fill="#FFFFFF" opacity="0.35" filter="url(#shadow-${uniqueId})"/>
          <path d="M -${width * 0.07},-${height * 0.09} L 0,-${height * 0.13} L ${width * 0.07},-${height * 0.09} Z" fill="${design.accent}" opacity="0.5"/>
          <rect x="-${width * 0.05}" y="${height * 0.02}" width="${width * 0.1}" height="${height * 0.07}" rx="${width * 0.012}" fill="${design.gradient[1]}" opacity="0.4"/>
          ${nameLower.includes("bridge") ? `
            <rect x="${width * 0.07}" y="-${height * 0.06}" width="${width * 0.05}" height="${height * 0.12}" rx="${width * 0.008}" fill="#FFFFFF" opacity="0.25"/>
            <rect x="-${width * 0.12}" y="-${height * 0.06}" width="${width * 0.05}" height="${height * 0.12}" rx="${width * 0.008}" fill="#FFFFFF" opacity="0.25"/>
          ` : ''}
        </g>
      ` : nameLower.includes("implant") ? `
        <!-- Dental implant visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.5})">
          <circle cx="0" cy="0" r="${width * 0.07}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
          <circle cx="0" cy="0" r="${width * 0.05}" fill="${design.gradient[1]}" opacity="0.4"/>
          <rect x="-${width * 0.022}" y="${width * 0.07}" width="${width * 0.044}" height="${height * 0.1}" rx="${width * 0.012}" fill="${design.gradient[1]}" opacity="0.5"/>
          <circle cx="0" cy="${height * 0.14}" r="${width * 0.035}" fill="${design.accent}" opacity="0.6"/>
          <rect x="-${width * 0.08}" y="${height * 0.12}" width="${width * 0.16}" height="${height * 0.03}" rx="${width * 0.008}" fill="#FFFFFF" opacity="0.2"/>
        </g>
      ` : nameLower.includes("root canal") || nameLower.includes("rct") ? `
        <!-- Root canal visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <rect x="-${width * 0.08}" y="-${height * 0.1}" width="${width * 0.16}" height="${height * 0.2}" rx="${width * 0.02}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
          <rect x="-${width * 0.06}" y="-${height * 0.08}" width="${width * 0.12}" height="${height * 0.16}" rx="${width * 0.015}" fill="${design.gradient[1]}" opacity="0.4"/>
          <!-- Root canals -->
          <path d="M -${width * 0.02},${height * 0.08} L -${width * 0.03},${height * 0.12} L -${width * 0.025},${height * 0.15}" stroke="${design.accent}" stroke-width="2" opacity="0.6" fill="none"/>
          <path d="M 0,${height * 0.08} L 0,${height * 0.12} L 0,${height * 0.15}" stroke="${design.accent}" stroke-width="2" opacity="0.6" fill="none"/>
          <path d="M ${width * 0.02},${height * 0.08} L ${width * 0.03},${height * 0.12} L ${width * 0.025},${height * 0.15}" stroke="${design.accent}" stroke-width="2" opacity="0.6" fill="none"/>
        </g>
      ` : nameLower.includes("veneer") || nameLower.includes("laminate") ? `
        <!-- Veneer visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <rect x="-${width * 0.08}" y="-${height * 0.1}" width="${width * 0.16}" height="${height * 0.2}" rx="${width * 0.02}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
          <rect x="-${width * 0.06}" y="-${height * 0.08}" width="${width * 0.12}" height="${height * 0.16}" rx="${width * 0.015}" fill="${design.gradient[1]}" opacity="0.4"/>
          <!-- Veneer layer -->
          <rect x="-${width * 0.055}" y="-${height * 0.085}" width="${width * 0.11}" height="${height * 0.17}" rx="${width * 0.014}" fill="${design.accent}" opacity="0.3" stroke="#FFFFFF" stroke-width="1" opacity="0.5"/>
          <ellipse cx="0" cy="-${height * 0.02}" rx="${width * 0.04}" ry="${height * 0.01}" fill="#FFFFFF" opacity="0.4"/>
        </g>
      ` : nameLower.includes("wisdom") || nameLower.includes("extraction") ? `
        <!-- Extraction visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.2}" ry="${height * 0.12}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          ${Array.from({length: 6}, (_, i) => {
            const x = (i - 2.5) * width * 0.05;
            if (i === 2 || i === 3) {
              return `<rect x="${x - width * 0.02}" y="-${height * 0.04}" width="${width * 0.04}" height="${height * 0.08}" rx="${width * 0.006}" fill="#FFFFFF" opacity="0.15" stroke="${design.gradient[0]}" stroke-width="1.5" opacity="0.4"/>`;
            }
            return `<rect x="${x - width * 0.018}" y="-${height * 0.035}" width="${width * 0.036}" height="${height * 0.07}" rx="${width * 0.005}" fill="#FFFFFF" opacity="0.25"/>`;
          }).join('')}
          <path d="M -${width * 0.05},${height * 0.04} L ${width * 0.05},${height * 0.04}" stroke="${design.gradient[0]}" stroke-width="2" opacity="0.5" stroke-dasharray="3,3"/>
        </g>
      ` : nameLower.includes("cleaning") || nameLower.includes("scaling") ? `
        <!-- Cleaning/Scaling visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.2}" ry="${height * 0.12}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          ${Array.from({length: 6}, (_, i) => {
            const x = (i - 2.5) * width * 0.05;
            return `<rect x="${x - width * 0.018}" y="-${height * 0.035}" width="${width * 0.036}" height="${height * 0.07}" rx="${width * 0.005}" fill="#FFFFFF" opacity="0.35"/>
              <circle cx="${x}" cy="-${height * 0.02}" r="${width * 0.008}" fill="${design.accent}" opacity="0.6"/>`;
          }).join('')}
          <!-- Sparkle effects -->
          ${Array.from({length: 4}, (_, i) => {
            const angle = (i * Math.PI * 2) / 4;
            const x = Math.cos(angle) * width * 0.15;
            const y = Math.sin(angle) * height * 0.1;
            return `<circle cx="${x}" cy="${y}" r="${width * 0.01}" fill="${design.accent}" opacity="0.7"/>
              <path d="M ${x - width * 0.015},${y} L ${x + width * 0.015},${y} M ${x},${y - height * 0.015} L ${x},${y + height * 0.015}" stroke="${design.accent}" stroke-width="1.5" opacity="0.5"/>`;
          }).join('')}
        </g>
      ` : nameLower.includes("pregnancy") ? `
        <!-- Pregnancy care visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <path d="M 0,${height * 0.05} C -${width * 0.04},${height * 0.02} -${width * 0.06},${height * 0.02} -${width * 0.06},${height * 0.05} C -${width * 0.06},${height * 0.02} -${width * 0.08},${height * 0.02} -${width * 0.08},${height * 0.05} C -${width * 0.08},${height * 0.1} 0,${height * 0.15} 0,${height * 0.15} C 0,${height * 0.15} ${width * 0.08},${height * 0.1} ${width * 0.08},${height * 0.05} C ${width * 0.08},${height * 0.02} ${width * 0.06},${height * 0.02} ${width * 0.06},${height * 0.05} C ${width * 0.06},${height * 0.02} ${width * 0.04},${height * 0.02} 0,${height * 0.05} Z" fill="#FFFFFF" opacity="0.35" filter="url(#shadow-${uniqueId})"/>
          <ellipse cx="0" cy="${height * 0.08}" rx="${width * 0.06}" ry="${height * 0.04}" fill="${design.accent}" opacity="0.3"/>
          <circle cx="0" cy="${height * 0.08}" r="${width * 0.03}" fill="${design.accent}" opacity="0.4"/>
        </g>
      ` : nameLower.includes("whitening") ? `
        <!-- Whitening visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.2}" ry="${height * 0.12}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          ${Array.from({length: 6}, (_, i) => {
            const x = (i - 2.5) * width * 0.05;
            return `<rect x="${x - width * 0.018}" y="-${height * 0.035}" width="${width * 0.036}" height="${height * 0.07}" rx="${width * 0.005}" fill="#FFFFFF" opacity="0.5"/>
              <ellipse cx="${x}" cy="-${height * 0.02}" rx="${width * 0.012}" ry="${height * 0.008}" fill="${design.accent}" opacity="0.4"/>`;
          }).join('')}
          <!-- Light rays -->
          ${Array.from({length: 5}, (_, i) => {
            const angle = (i - 2) * 0.3;
            const x1 = Math.sin(angle) * width * 0.15;
            const y1 = -Math.cos(angle) * height * 0.1;
            const x2 = Math.sin(angle) * width * 0.25;
            const y2 = -Math.cos(angle) * height * 0.15;
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>`;
          }).join('')}
        </g>
      ` : design.iconType === 'tooth' ? `
        <!-- Generic tooth representation -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <rect x="-${width * 0.08}" y="-${height * 0.1}" width="${width * 0.16}" height="${height * 0.2}" rx="${width * 0.02}" fill="#FFFFFF" opacity="0.35" filter="url(#shadow-${uniqueId})"/>
          <rect x="-${width * 0.06}" y="-${height * 0.08}" width="${width * 0.12}" height="${height * 0.16}" rx="${width * 0.015}" fill="${design.gradient[1]}" opacity="0.4"/>
          <circle cx="-${width * 0.03}" cy="-${height * 0.05}" r="${width * 0.01}" fill="${design.gradient[0]}" opacity="0.6"/>
          <circle cx="${width * 0.03}" cy="-${height * 0.05}" r="${width * 0.01}" fill="${design.gradient[0]}" opacity="0.6"/>
        </g>
      ` : nameLower.includes("airway") || nameLower.includes("speech") ? `
        <!-- Airway/Speech visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <!-- Face/jaw outline -->
          <ellipse cx="0" cy="0" rx="${width * 0.18}" ry="${height * 0.11}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          <!-- Airway pathway -->
          <path d="M -${width * 0.05},-${height * 0.08} Q 0,-${height * 0.02} ${width * 0.05},-${height * 0.08}" fill="none" stroke="${design.accent}" stroke-width="3" opacity="0.5" stroke-linecap="round"/>
          <path d="M -${width * 0.04},-${height * 0.06} Q 0,-${height * 0.01} ${width * 0.04},-${height * 0.06}" fill="none" stroke="${design.accent}" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
          <!-- Breathing flow lines -->
          ${Array.from({length: 5}, (_, i) => {
            const x = (i - 2) * width * 0.04;
            const y1 = -height * 0.05;
            const y2 = -height * 0.12;
            return `<path d="M ${x},${y1} Q ${x},${y2} ${x},${y2 - height * 0.02}" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" stroke-linecap="round">
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" begin="${i * 0.2}s"/>
            </path>`;
          }).join('')}
          <!-- Open airway indicator -->
          <ellipse cx="0" cy="-${height * 0.08}" rx="${width * 0.06}" ry="${height * 0.03}" fill="${design.accent}" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          <circle cx="0" cy="-${height * 0.08}" r="${width * 0.03}" fill="${design.accent}" opacity="0.5"/>
        </g>
      ` : nameLower.includes("sleep") && nameLower.includes("apnea") ? `
        <!-- Sleep apnea visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <!-- Face outline -->
          <ellipse cx="0" cy="0" rx="${width * 0.18}" ry="${height * 0.11}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          <!-- Closed/blocked airway -->
          <path d="M -${width * 0.05},-${height * 0.08} Q 0,-${height * 0.02} ${width * 0.05},-${height * 0.08}" fill="none" stroke="${design.gradient[0]}" stroke-width="4" opacity="0.4" stroke-linecap="round"/>
          <line x1="-${width * 0.04}" y1="-${height * 0.06}" x2="${width * 0.04}" y2="-${height * 0.06}" stroke="${design.gradient[0]}" stroke-width="2" opacity="0.5"/>
          <!-- Moon/sleep icon -->
          <path d="M ${width * 0.12},-${height * 0.12} A ${width * 0.03},${height * 0.02} 0 1,1 ${width * 0.12},-${height * 0.08} Z" fill="#FFFFFF" opacity="0.4"/>
          <circle cx="${width * 0.12}" cy="-${height * 0.1}" r="${width * 0.015}" fill="#FFFFFF" opacity="0.3"/>
        </g>
      ` : nameLower.includes("tmj") || nameLower.includes("tmd") ? `
        <!-- TMJ visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <!-- Jaw joint representation -->
          <circle cx="-${width * 0.1}" cy="${height * 0.05}" r="${width * 0.04}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
          <circle cx="${width * 0.1}" cy="${height * 0.05}" r="${width * 0.04}" fill="#FFFFFF" opacity="0.3" filter="url(#shadow-${uniqueId})"/>
          <!-- Jaw movement lines -->
          <path d="M -${width * 0.1},${height * 0.05} Q 0,${height * 0.08} ${width * 0.1},${height * 0.05}" fill="none" stroke="${design.accent}" stroke-width="2.5" opacity="0.4" stroke-linecap="round"/>
          <path d="M -${width * 0.08},${height * 0.03} Q 0,${height * 0.06} ${width * 0.08},${height * 0.03}" fill="none" stroke="${design.accent}" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
          <!-- Joint connection -->
          <line x1="-${width * 0.06}" y1="${height * 0.05}" x2="${width * 0.06}" y2="${height * 0.05}" stroke="#FFFFFF" stroke-width="1.5" opacity="0.2"/>
        </g>
      ` : nameLower.includes("cleft") ? `
        <!-- Cleft orthodontics visualization -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.2}" ry="${height * 0.12}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          <!-- Before: Cleft -->
          <g transform="translate(-${width * 0.12}, 0)">
            <path d="M -${width * 0.04},-${height * 0.05} L 0,-${height * 0.08} L ${width * 0.04},-${height * 0.05}" fill="none" stroke="${design.gradient[0]}" stroke-width="2" opacity="0.4"/>
            <line x1="0" y1="-${height * 0.08}" x2="0" y2="${height * 0.05}" stroke="${design.gradient[0]}" stroke-width="1.5" opacity="0.3"/>
          </g>
          <!-- Arrow -->
          <path d="M -${width * 0.04},0 L ${width * 0.04},0" stroke="#FFFFFF" stroke-width="2" opacity="0.5" marker-end="url(#arrow-${uniqueId})"/>
          <!-- After: Corrected -->
          <g transform="translate(${width * 0.12}, 0)">
            <path d="M -${width * 0.04},-${height * 0.05} Q 0,-${height * 0.06} ${width * 0.04},-${height * 0.05}" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.5"/>
            <ellipse cx="0" cy="-${height * 0.055}" rx="${width * 0.02}" ry="${height * 0.01}" fill="${design.accent}" opacity="0.4"/>
          </g>
        </g>
      ` : design.iconType === 'smile' ? `
        <!-- Generic smile representation -->
        <g transform="translate(${width * 0.5}, ${height * 0.45})">
          <ellipse cx="0" cy="0" rx="${width * 0.2}" ry="${height * 0.12}" fill="none" stroke="#FFFFFF" stroke-width="3" opacity="0.3" filter="url(#blur-${uniqueId})"/>
          ${Array.from({length: 6}, (_, i) => {
            const x = (i - 2.5) * width * 0.04;
            return `<rect x="${x - width * 0.015}" y="-${height * 0.03}" width="${width * 0.03}" height="${height * 0.06}" rx="${width * 0.005}" fill="#FFFFFF" opacity="0.25"/>`;
          }).join('')}
        </g>
      ` : ''}
      
      <!-- Decorative geometric shapes for depth -->
      <rect x="${width * 0.1}" y="${height * 0.15}" width="${width * 0.25}" height="${width * 0.04}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}" filter="url(#blur-${uniqueId})"/>
      <rect x="${width * 0.65}" y="${height * 0.25}" width="${width * 0.2}" height="${width * 0.03}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}" filter="url(#blur-${uniqueId})"/>
      <rect x="${width * 0.2}" y="${height * 0.65}" width="${width * 0.3}" height="${width * 0.03}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}" filter="url(#blur-${uniqueId})"/>
      
      <!-- Soft wave pattern at bottom for depth -->
      <path d="M 0,${height * 0.9} Q ${width * 0.2},${height * 0.8} ${width * 0.4},${height * 0.85} T ${width * 0.8},${height * 0.85} T ${width},${height * 0.9} L ${width},${height} L 0,${height} Z" fill="#FFFFFF" opacity="0.05" filter="url(#blur-${uniqueId})"/>
      
      <!-- Overlay gradient for depth -->
      <rect width="${width}" height="${height}" fill="url(#overlayGrad-${uniqueId})"/>
      
      <!-- Treatment name text with better styling -->
      <text 
        x="50%" 
        y="${height * 0.75}" 
        font-family="'Segoe UI', 'Arial', sans-serif" 
        font-size="${Math.min(width / 16, 32)}" 
        font-weight="700" 
        fill="${design.textColor}" 
        text-anchor="middle"
        dominant-baseline="middle"
        opacity="0.98"
        filter="url(#shadow-${uniqueId})"
        style="letter-spacing: 0.5px;"
      >
        ${displayText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </text>
      
      <!-- Subtle shine effect -->
      <ellipse cx="${width * 0.3}" cy="${height * 0.3}" rx="${width * 0.15}" ry="${height * 0.1}" fill="#FFFFFF" opacity="0.1" filter="url(#blur-${uniqueId})"/>
    </svg>`
  
  // Convert to data URI
  try {
    if (typeof btoa !== 'undefined') {
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
    }
  } catch (e) {
    // Fallback to URL encoding
  }
  const encodedSvg = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

/**
 * Generate a clinic/office placeholder image
 */
export function getClinicPlaceholderImage(
  width: number = 600,
  height: number = 400,
  roomName?: string
): string {
  const bgColor = "#10B981" // Lighter green
  const textColor = "#FFFFFF"
  const text = roomName || "Dental Clinic"
  return getPlaceholderImage(width, height, text, bgColor, textColor)
}

/**
 * Generate a realistic AI-generated style image for dental clinic
 * Creates a sophisticated, modern clinic image with dental themes
 */
export function getRealisticClinicImage(
  width: number = 800,
  height: number = 800
): string {
  // Clinic-themed color scheme with modern gradients
  const gradient = ["#1E603F", "#289660", "#34d399", "#6ee7b7"]
  const accent = "#A7F3D0"
  
  // Create unique ID for this SVG
  const uniqueId = "clinic-hero"
  
  // Create an AI-generated style SVG with sophisticated patterns for a modern dental clinic
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="mainGrad-${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${gradient[0]}" stop-opacity="1" />
          <stop offset="33%" stop-color="${gradient[1]}" stop-opacity="1" />
          <stop offset="66%" stop-color="${gradient[2]}" stop-opacity="1" />
          <stop offset="100%" stop-color="${gradient[3]}" stop-opacity="1" />
        </linearGradient>
        <radialGradient id="accentGrad-${uniqueId}" cx="50%" cy="30%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="accentGrad2-${uniqueId}" cx="80%" cy="80%">
          <stop offset="0%" stop-color="${gradient[2]}" stop-opacity="0.4" />
          <stop offset="100%" stop-color="${gradient[2]}" stop-opacity="0" />
        </radialGradient>
        <pattern id="dots-${uniqueId}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1.5" fill="#FFFFFF" opacity="0.15"/>
        </pattern>
        <pattern id="grid-${uniqueId}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      
      <!-- Main background gradient -->
      <rect width="${width}" height="${height}" fill="url(#mainGrad-${uniqueId})"/>
      
      <!-- Subtle grid pattern -->
      <rect width="${width}" height="${height}" fill="url(#grid-${uniqueId})"/>
      
      <!-- Accent circles for depth and modern feel -->
      <circle cx="${width * 0.75}" cy="${height * 0.25}" r="${width * 0.25}" fill="url(#accentGrad-${uniqueId})"/>
      <circle cx="${width * 0.25}" cy="${height * 0.75}" r="${width * 0.2}" fill="url(#accentGrad2-${uniqueId})"/>
      <circle cx="${width * 0.5}" cy="${height * 0.5}" r="${width * 0.15}" fill="url(#accentGrad-${uniqueId})"/>
      
      <!-- Decorative elements representing modern clinic architecture -->
      <rect x="${width * 0.1}" y="${height * 0.2}" width="${width * 0.3}" height="${width * 0.05}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}"/>
      <rect x="${width * 0.6}" y="${height * 0.3}" width="${width * 0.25}" height="${width * 0.04}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}"/>
      <rect x="${width * 0.2}" y="${height * 0.6}" width="${width * 0.35}" height="${width * 0.04}" fill="#FFFFFF" opacity="0.08" rx="${width * 0.01}"/>
      
      <!-- Subtle dots pattern overlay -->
      <rect width="${width}" height="${height}" fill="url(#dots-${uniqueId})"/>
      
      <!-- Modern geometric shapes representing clinic structure -->
      <polygon points="${width * 0.7},${height * 0.4} ${width * 0.85},${height * 0.5} ${width * 0.7},${height * 0.6} ${width * 0.65},${height * 0.5}" fill="#FFFFFF" opacity="0.06"/>
      <polygon points="${width * 0.15},${height * 0.3} ${width * 0.25},${height * 0.4} ${width * 0.15},${height * 0.5} ${width * 0.1},${height * 0.4}" fill="#FFFFFF" opacity="0.06"/>
      
      <!-- Soft wave pattern at bottom representing comfort -->
      <path d="M 0,${height * 0.85} Q ${width * 0.2},${height * 0.75} ${width * 0.4},${height * 0.8} T ${width * 0.8},${height * 0.8} T ${width},${height * 0.85} L ${width},${height} L 0,${height} Z" fill="#FFFFFF" opacity="0.05"/>
    </svg>`

  // Convert to data URI with proper encoding
  try {
    if (typeof btoa !== 'undefined') {
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
    }
  } catch (e) {
    // Fallback to URL encoding
  }
  const encodedSvg = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

/**
 * Generate a doctor/team placeholder image
 */
export function getDoctorPlaceholderImage(
  width: number = 400,
  height: number = 400,
  doctorName?: string
): string {
  const bgColor = "#059669" // Darker green
  const textColor = "#FFFFFF"
  const text = doctorName ? `Dr. ${doctorName}` : "Dental Professional"
  return getPlaceholderImage(width, height, text, bgColor, textColor)
}

/**
 * Generate a patient placeholder image
 */
export function getPatientPlaceholderImage(
  width: number = 600,
  height: number = 600
): string {
  const bgColor = "#34D399" // Light emerald
  const textColor = "#FFFFFF"
  const text = "Happy Patient"
  return getPlaceholderImage(width, height, text, bgColor, textColor)
}

/**
 * Generate an AI-generated style placeholder image for expertise cards
 * Creates a beautiful gradient-based placeholder with dental-themed design
 */
export function getExpertisePlaceholderImage(
  width: number = 400,
  height: number = 250,
  expertiseName: string
): string {
  // Color schemes for different expertise types
  const colorSchemes: Record<string, { gradient: string[]; text: string }> = {
    Orthodontics: {
      gradient: ["#10B981", "#34D399", "#6EE7B7"],
      text: "Braces & Aligners"
    },
    Pediatric: {
      gradient: ["#059669", "#10B981", "#34D399"],
      text: "Kids Dental Care"
    },
    Restorative: {
      gradient: ["#047857", "#059669", "#10B981"],
      text: "Restore Your Smile"
    },
    Surgical: {
      gradient: ["#065F46", "#047857", "#059669"],
      text: "Expert Surgery"
    },
    Preventive: {
      gradient: ["#34D399", "#6EE7B7", "#A7F3D0"],
      text: "Preventive Care"
    },
  }

  const scheme = colorSchemes[expertiseName] || {
    gradient: ["#10B981", "#34D399"],
    text: expertiseName
  }

  // Create a more sophisticated SVG with gradient and pattern
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad-${expertiseName.replace(/\s+/g, '-')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${scheme.gradient[0]};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${scheme.gradient[1] || scheme.gradient[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${scheme.gradient[2] || scheme.gradient[1] || scheme.gradient[0]};stop-opacity:1" />
        </linearGradient>
        <pattern id="dots-${expertiseName.replace(/\s+/g, '-')}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="#FFFFFF" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${expertiseName.replace(/\s+/g, '-')})"/>
      <rect width="100%" height="100%" fill="url(#dots-${expertiseName.replace(/\s+/g, '-')})"/>
      <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.15}" fill="#FFFFFF" opacity="0.1"/>
      <circle cx="${width * 0.2}" cy="${height * 0.8}" r="${width * 0.1}" fill="#FFFFFF" opacity="0.1"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="${Math.min(width / 12, 20)}" 
        font-weight="bold" 
        fill="#FFFFFF" 
        text-anchor="middle"
        dominant-baseline="middle"
        opacity="0.9"
      >
        ${scheme.text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
      </text>
    </svg>
  `.trim()

  // Convert to data URI (browser-compatible)
  const encodedSvg = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

/**
 * Generate a realistic AI-generated style image for dental expertise cards
 * Uses enhanced SVG placeholders that look like AI-generated images with dental themes
 * Each category gets a unique, visually appealing design with distinct patterns
 */
export function getRealisticExpertiseImage(
  width: number = 400,
  height: number = 250,
  expertiseName: string
): string {
  // Enhanced color schemes and designs for each dental category
  // Each has unique gradients, patterns, and decorative elements
  const designs: Record<string, {
    gradient: string[]
    accent: string
    patternType: string
    shapes: string[]
  }> = {
    Orthodontics: {
      gradient: ["#1E603F", "#289660", "#34d399"],
      accent: "#6ee7b7",
      patternType: "wave",
      shapes: ["circle", "arc"]
    },
    Pediatric: {
      gradient: ["#059669", "#10B981", "#34D399"],
      accent: "#6EE7B7",
      patternType: "dots",
      shapes: ["star", "circle"]
    },
    Restorative: {
      gradient: ["#047857", "#059669", "#10B981"],
      accent: "#34D399",
      patternType: "diagonal",
      shapes: ["diamond", "square"]
    },
    Surgical: {
      gradient: ["#065F46", "#047857", "#059669"],
      accent: "#10B981",
      patternType: "grid",
      shapes: ["hexagon", "line"]
    },
    Preventive: {
      gradient: ["#34D399", "#6EE7B7", "#A7F3D0"],
      accent: "#D1FAE5",
      patternType: "radial",
      shapes: ["circle", "ring"]
    },
  }

  const design = designs[expertiseName] || {
    gradient: ["#10B981", "#34D399"],
    accent: "#6EE7B7",
    patternType: "dots",
    shapes: ["circle"]
  }

  // Create unique ID for this SVG to avoid conflicts
  const uniqueId = expertiseName.replace(/\s+/g, '-').toLowerCase()
  
  // Create an AI-generated style SVG with sophisticated patterns
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="mainGrad-${uniqueId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${design.gradient[0]}" stop-opacity="1" />
          <stop offset="50%" stop-color="${design.gradient[1]}" stop-opacity="1" />
          <stop offset="100%" stop-color="${design.gradient[2]}" stop-opacity="1" />
        </linearGradient>
        <radialGradient id="accentGrad-${uniqueId}" cx="50%" cy="50%">
          <stop offset="0%" stop-color="${design.accent}" stop-opacity="0.4" />
          <stop offset="100%" stop-color="${design.accent}" stop-opacity="0" />
        </radialGradient>
        <pattern id="dots-${uniqueId}" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="12.5" cy="12.5" r="2" fill="#FFFFFF" opacity="0.2"/>
        </pattern>
        <pattern id="grid-${uniqueId}" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
          <path d="M 35 0 L 0 0 0 35" fill="none" stroke="#FFFFFF" stroke-width="0.8" opacity="0.15"/>
        </pattern>
        <pattern id="diagonal-${uniqueId}" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 20 L 20 0" fill="none" stroke="#FFFFFF" stroke-width="1" opacity="0.1"/>
        </pattern>
      </defs>
      
      <!-- Main background gradient -->
      <rect width="${width}" height="${height}" fill="url(#mainGrad-${uniqueId})"/>
      
      <!-- Pattern overlay based on category -->
      ${design.patternType === 'dots' ? `<rect width="${width}" height="${height}" fill="url(#dots-${uniqueId})"/>` : ''}
      ${design.patternType === 'grid' ? `<rect width="${width}" height="${height}" fill="url(#grid-${uniqueId})"/>` : ''}
      ${design.patternType === 'diagonal' ? `<rect width="${width}" height="${height}" fill="url(#diagonal-${uniqueId})"/>` : ''}
      
      <!-- Accent circles for depth - different positions per category -->
      <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${width * 0.18}" fill="url(#accentGrad-${uniqueId})"/>
      <circle cx="${width * 0.2}" cy="${height * 0.8}" r="${width * 0.14}" fill="url(#accentGrad-${uniqueId})"/>
      ${expertiseName === 'Pediatric' ? `<circle cx="${width * 0.5}" cy="${height * 0.5}" r="${width * 0.12}" fill="url(#accentGrad-${uniqueId})"/>` : ''}
      
      <!-- Decorative shapes based on category -->
      ${design.shapes.includes('diamond') ? `<polygon points="${width * 0.5},${height * 0.3} ${width * 0.6},${height * 0.4} ${width * 0.5},${height * 0.5} ${width * 0.4},${height * 0.4}" fill="#FFFFFF" opacity="0.08"/>` : ''}
      ${design.shapes.includes('hexagon') ? `<polygon points="${width * 0.7},${height * 0.4} ${width * 0.75},${height * 0.5} ${width * 0.7},${height * 0.6} ${width * 0.65},${height * 0.6} ${width * 0.6},${height * 0.5} ${width * 0.65},${height * 0.4}" fill="#FFFFFF" opacity="0.06"/>` : ''}
      
      <!-- Wave pattern for Orthodontics -->
      ${expertiseName === 'Orthodontics' ? `<path d="M 0,${height * 0.6} Q ${width * 0.25},${height * 0.5} ${width * 0.5},${height * 0.6} T ${width},${height * 0.6} L ${width},${height} L 0,${height} Z" fill="#FFFFFF" opacity="0.05"/>` : ''}
      
      <!-- Radial pattern for Preventive -->
      ${expertiseName === 'Preventive' ? `<circle cx="${width * 0.5}" cy="${height * 0.5}" r="${width * 0.3}" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.1"/>` : ''}
    </svg>`

  // Convert to data URI with proper encoding (works in both browser and Node.js)
  try {
    // Try base64 encoding first (browser)
    if (typeof btoa !== 'undefined') {
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`
    }
  } catch (e) {
    // Fallback to URL encoding
  }
  // URL encoding fallback (works everywhere)
  const encodedSvg = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`
}

/**
 * Check if an image URL is a placeholder (data URI)
 */
export function isPlaceholderImage(url: string): boolean {
  return url.startsWith("data:image/svg+xml")
}

