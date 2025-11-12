/**
 * AI Image Generation Prompts for Dental Treatment Medical Illustrations
 * 
 * These prompts are designed for AI image generation services like:
 * - OpenAI DALL-E 3
 * - Midjourney
 * - Stable Diffusion
 * - Adobe Firefly
 * 
 * Style: Realistic medical advertising style with human context and anatomical overlays
 * Resolution: 1200 × 800 px
 * Format: PNG
 * Color Palette: Teal, white, mint green tones
 * Aesthetic: Professional dental clinic - bright, clean, hygienic feel
 */

export interface TreatmentImagePrompt {
  treatmentName: string
  category: string
  slug: string
  prompt: string
  fileName: string
  animatedPrompt?: string
  animatedFileName?: string
}

// Base prompt template for generating treatment images
function generateTreatmentPrompt(treatmentName: string, specificDescription: string): string {
  return `Create a realistic, professional image for a dental clinic website representing the treatment: ${treatmentName}.

Style guidelines:
- Clean dental-clinic environment (white and mint-green tones to match website theme).
- Show relevant dental tools, models, or doctor–patient interaction related to that treatment.
- Include human presence naturally (dentist or patient) — professional, smiling, ethical look.
- No text, no branding, no over-crowding.
- Center the main subject clearly (used in website card or section).
- Lighting: bright, clinical, soft focus.
- Format: realistic, high-resolution, 1:1 or 4:3 ratio (square/medium-rectangle).

${specificDescription}`
}

// Base prompt template for generating animated treatment images
function generateAnimatedTreatmentPrompt(treatmentName: string, specificDescription: string): string {
  return `Create a realistic, professional animated image (GIF or short video loop) for a dental clinic website representing the treatment: ${treatmentName}.

Style guidelines:
- Clean dental-clinic environment (white and mint-green tones to match website theme).
- Show relevant dental tools, models, or doctor–patient interaction related to that treatment.
- Include human presence naturally (dentist or patient) — professional, smiling, ethical look.
- No text, no branding, no over-crowding.
- Center the main subject clearly (used in website card or section).
- Lighting: bright, clinical, soft focus.
- Format: realistic, high-resolution, 1:1 or 4:3 ratio (square/medium-rectangle).
- Animation: subtle, smooth, professional movement (e.g., gentle camera pan, soft focus transition, tool movement, patient smile, or gentle breathing effect).
- Duration: 3-5 seconds loop, seamless loop.
- Motion: slow and calming, not distracting.

${specificDescription}`
}

// All treatment image prompts
export const TREATMENT_IMAGE_PROMPTS: TreatmentImagePrompt[] = [
  // ========== ORTHODONTICS ==========
  {
    treatmentName: "TMJ Disorders / TMD",
    category: "Orthodontics",
    slug: "tmj-disorders-tmd",
    prompt: generateTreatmentPrompt("TMJ Disorders / TMD", "Show a dentist examining a patient's jaw area, with dental tools and models in the background, in a bright dental clinic setting."),
    fileName: "tmj-disorders-medical-illustration.png",
    animatedPrompt: generateAnimatedTreatmentPrompt("TMJ Disorders / TMD", "Show a dentist gently examining a patient's jaw area with subtle hand movement, dental tools and models visible in the background, in a bright dental clinic setting."),
    animatedFileName: "tmj-disorders-medical-illustration-animated.gif"
  },
  {
    treatmentName: "Functional Jaw Problems Correction",
    category: "Orthodontics",
    slug: "functional-jaw-problems-correction",
    prompt: generateTreatmentPrompt("Functional Jaw Problems Correction", "Show a dentist explaining jaw alignment issues to a patient, with a dental model showing jaw structure in hand, in a bright clinic environment."),
    fileName: "functional-jaw-problems-correction-medical-illustration.png"
  },
  {
    treatmentName: "Wisdom Tooth Removal",
    category: "Surgical Treatments",
    slug: "wisdom-tooth-removal",
    prompt: generateTreatmentPrompt("Wisdom Tooth Removal", "Show a dentist examining a patient's mouth for wisdom tooth removal, with dental tools and X-ray images visible, in a bright dental clinic setting."),
    fileName: "wisdom-tooth-removal-medical-illustration.png"
  },
  {
    treatmentName: "Aligners / Invisalign",
    category: "Orthodontics",
    slug: "aligners-invisalign",
    prompt: generateTreatmentPrompt("Aligners / Invisalign", "Show a patient wearing clear aligners, smiling, with a dentist nearby showing aligner models, in a bright dental clinic setting."),
    fileName: "aligners-invisalign-medical-illustration.png"
  },
  {
    treatmentName: "Aligners / Invisalign for Teens and Kids",
    category: "Orthodontics",
    slug: "aligners-invisalign-for-teens-and-kids",
    prompt: generateTreatmentPrompt("Aligners / Invisalign for Teens and Kids", "Show a dentist explaining clear aligners to a teenager or child with a parent present, with aligner models visible, in a friendly dental clinic environment."),
    fileName: "aligners-invisalign-teens-kids-medical-illustration.png"
  },
  {
    treatmentName: "Traditional Braces",
    category: "Orthodontics",
    slug: "traditional-braces",
    prompt: generateTreatmentPrompt("Traditional Braces", "Show a patient wearing traditional metal braces, smiling, with a dentist adjusting the braces, in a bright dental clinic setting."),
    fileName: "traditional-braces-medical-illustration.png"
  },
  {
    treatmentName: "Invisible Braces",
    category: "Orthodontics",
    slug: "invisible-braces",
    prompt: generateTreatmentPrompt("Invisible Braces", "Show a patient wearing invisible ceramic braces, smiling, with a dentist showing the discreet braces, in a bright dental clinic environment."),
    fileName: "invisible-braces-medical-illustration.png"
  },
  {
    treatmentName: "Root Canal Treatment",
    category: "Restorative Dentistry",
    slug: "root-canal-treatment",
    prompt: generateTreatmentPrompt("Root Canal Treatment", "Show a dentist performing root canal procedure on a patient, with dental tools and equipment visible, in a bright dental clinic setting."),
    fileName: "root-canal-treatment-medical-illustration.png"
  },
  {
    treatmentName: "Dental Implants",
    category: "Restorative Dentistry",
    slug: "dental-implants",
    prompt: generateTreatmentPrompt("Dental Implants", "Show a dentist showing a dental implant model to a patient in consultation, with implant models and tools visible, in a professional dental clinic environment."),
    fileName: "dental-implants-medical-illustration.png"
  },
  {
    treatmentName: "Gums Treatment",
    category: "Surgical Treatments",
    slug: "gums-treatment",
    prompt: generateTreatmentPrompt("Gums Treatment", "Show a dentist performing gum treatment on a patient, with periodontal tools visible, in a bright dental clinic environment."),
    fileName: "gums-treatment-medical-illustration.png"
  },
  {
    treatmentName: "Teeth Whitening",
    category: "Preventive Treatments",
    slug: "teeth-whitening",
    prompt: generateTreatmentPrompt("Teeth Whitening", "Show a young adult receiving a tooth-whitening procedure under LED dental light, dentist wearing gloves, bright clinic setup."),
    fileName: "teeth-whitening-medical-illustration.png",
    animatedPrompt: generateAnimatedTreatmentPrompt("Teeth Whitening", "Show a young adult receiving a tooth-whitening procedure under LED dental light with gentle light pulsing effect, dentist wearing gloves adjusting equipment, bright clinic setup."),
    animatedFileName: "teeth-whitening-medical-illustration-animated.gif"
  },
  {
    treatmentName: "Tooth Coloured Fillings",
    category: "Restorative Dentistry",
    slug: "tooth-coloured-fillings",
    prompt: generateTreatmentPrompt("Tooth Coloured Fillings", "Show a dentist placing a tooth-colored filling on a patient, with dental tools and materials visible, in a bright dental clinic setting."),
    fileName: "tooth-coloured-fillings-medical-illustration.png"
  },
  {
    treatmentName: "Crowns & Bridges",
    category: "Restorative Dentistry",
    slug: "crowns-bridges",
    prompt: generateTreatmentPrompt("Crowns & Bridges", "Show a dentist showing crown and bridge restoration to a patient, with crown and bridge models visible, in a professional dental consultation setting."),
    fileName: "crowns-bridges-medical-illustration.png"
  },
  {
    treatmentName: "Dental Veneers / Laminates",
    category: "Restorative Dentistry",
    slug: "dental-veneers-laminates",
    prompt: generateTreatmentPrompt("Dental Veneers / Laminates", "Show a patient smiling with dental veneers, with a dentist showing veneer models, in a bright dental clinic environment."),
    fileName: "dental-veneers-medical-illustration.png"
  },
  {
    treatmentName: "Dentures",
    category: "Restorative Dentistry",
    slug: "dentures",
    prompt: generateTreatmentPrompt("Dentures", "Show a dentist fitting dentures for a patient, with denture models visible, in a professional dental clinic setting."),
    fileName: "dentures-medical-illustration.png"
  },
  {
    treatmentName: "Full Mouth Prosthesis",
    category: "Restorative Dentistry",
    slug: "full-mouth-prosthesis",
    prompt: generateTreatmentPrompt("Full Mouth Prosthesis", "Show a clean, realistic image of an elderly patient smiling after receiving full mouth prosthesis or dentures, with a dentist nearby showing a denture model in a dental clinic setting."),
    fileName: "full-mouth-prosthesis-medical-illustration.png",
    animatedPrompt: generateAnimatedTreatmentPrompt("Full Mouth Prosthesis", "Show a clean, realistic image of an elderly patient with a gentle, warm smile after receiving full mouth prosthesis or dentures, with a dentist nearby showing a denture model with subtle hand movement in a dental clinic setting."),
    animatedFileName: "full-mouth-prosthesis-medical-illustration-animated.gif"
  },
  {
    treatmentName: "Teeth Sensitivity Treatment",
    category: "Restorative Dentistry",
    slug: "teeth-sensitivity-treatment",
    prompt: generateTreatmentPrompt("Teeth Sensitivity Treatment", "Show a dentist applying sensitivity treatment to a patient's teeth, with dental tools visible, in a bright dental clinic environment."),
    fileName: "teeth-sensitivity-medical-illustration.png"
  },
  {
    treatmentName: "Surgical Orthodontics",
    category: "Orthodontics",
    slug: "surgical-orthodontics",
    prompt: generateTreatmentPrompt("Surgical Orthodontics", "Show a dentist and patient in consultation discussing surgical orthodontics, with X-ray images and dental models visible, in a professional dental clinic setting."),
    fileName: "surgical-orthodontics-medical-illustration.png"
  },
  {
    treatmentName: "Orthognathic Surgery",
    category: "Surgical Treatments",
    slug: "orthognathic-surgery",
    prompt: generateTreatmentPrompt("Orthognathic Surgery", "Show an oral surgeon discussing orthognathic surgery with a patient, with X-ray images and surgical models visible, in a professional surgical consultation setting."),
    fileName: "orthognathic-surgery-medical-illustration.png"
  },
  {
    treatmentName: "Cosmetic Jaw Surgery",
    category: "Surgical Treatments",
    slug: "cosmetic-jaw-surgery",
    prompt: generateTreatmentPrompt("Cosmetic Jaw Surgery", "Show a dentist discussing cosmetic jaw surgery with a patient, with before and after models visible, in a professional dental clinic setting."),
    fileName: "cosmetic-jaw-surgery-medical-illustration.png"
  },
  {
    treatmentName: "Tongue Tie Correction",
    category: "Surgical Treatments",
    slug: "tongue-tie-correction",
    prompt: generateTreatmentPrompt("Tongue Tie Correction", "Show a dentist examining a patient's tongue tie condition, with dental tools visible, in a bright dental clinic environment."),
    fileName: "tongue-tie-correction-medical-illustration.png"
  },
  {
    treatmentName: "Frenectomy",
    category: "Surgical Treatments",
    slug: "frenectomy",
    prompt: generateTreatmentPrompt("Frenectomy", "Show a dentist performing a frenectomy procedure on a patient, with surgical tools visible, in a bright dental clinic setting."),
    fileName: "frenectomy-medical-illustration.png"
  },
  {
    treatmentName: "Operculectomy",
    category: "Surgical Treatments",
    slug: "operculectomy",
    prompt: generateTreatmentPrompt("Operculectomy", "Show a dentist examining a patient's wisdom tooth area, with dental tools visible, in a bright dental clinic environment."),
    fileName: "operculectomy-medical-illustration.png"
  },
  {
    treatmentName: "Sinus Lift",
    category: "Surgical Treatments",
    slug: "sinus-lift",
    prompt: generateTreatmentPrompt("Sinus Lift", "Show an oral surgeon discussing sinus lift procedure with a patient, with X-ray images and models visible, in a professional surgical consultation setting."),
    fileName: "sinus-lift-medical-illustration.png"
  },
  {
    treatmentName: "Bone Grafting",
    category: "Surgical Treatments",
    slug: "bone-grafting",
    prompt: generateTreatmentPrompt("Bone Grafting", "Show a dentist performing bone grafting procedure, with surgical tools and materials visible, in a professional dental surgery setting."),
    fileName: "bone-grafting-medical-illustration.png"
  },
  {
    treatmentName: "Apicoectomy",
    category: "Surgical Treatments",
    slug: "apicoectomy",
    prompt: generateTreatmentPrompt("Apicoectomy", "Show a dentist performing an apicoectomy procedure, with endodontic tools visible, in a bright dental clinic environment."),
    fileName: "apicoectomy-medical-illustration.png"
  },
  {
    treatmentName: "Cyst Removal",
    category: "Surgical Treatments",
    slug: "cyst-removal",
    prompt: generateTreatmentPrompt("Cyst Removal", "Show an oral surgeon discussing cyst removal with a patient, with X-ray images visible, in a professional oral surgery consultation setting."),
    fileName: "cyst-removal-medical-illustration.png"
  },
  {
    treatmentName: "Alveoloplasty",
    category: "Surgical Treatments",
    slug: "alveoloplasty",
    prompt: generateTreatmentPrompt("Alveoloplasty", "Show a dentist performing an alveoloplasty procedure, with surgical tools visible, in a bright dental clinic setting."),
    fileName: "alveoloplasty-medical-illustration.png"
  },
  {
    treatmentName: "Biopsy",
    category: "Surgical Treatments",
    slug: "biopsy",
    prompt: generateTreatmentPrompt("Biopsy", "Show a dentist performing an oral tissue biopsy on a patient, with diagnostic tools visible, in a bright dental clinic environment."),
    fileName: "biopsy-medical-illustration.png"
  },
  {
    treatmentName: "Precancerous Lesions Evaluation",
    category: "Surgical Treatments",
    slug: "precancerous-lesions-evaluation",
    prompt: generateTreatmentPrompt("Precancerous Lesions Evaluation", "Show a dentist examining a patient's oral lesion, with diagnostic tools visible, in a professional dental consultation setting."),
    fileName: "precancerous-lesions-medical-illustration.png"
  },
  {
    treatmentName: "Tooth Removal",
    category: "Surgical Treatments",
    slug: "tooth-removal",
    prompt: generateTreatmentPrompt("Tooth Removal", "Show a dentist performing a tooth extraction on a patient, with extraction tools visible, in a bright dental clinic setting."),
    fileName: "tooth-removal-medical-illustration.png"
  },
  {
    treatmentName: "Sleep Apnea",
    category: "Orthodontics",
    slug: "sleep-apnea",
    prompt: generateTreatmentPrompt("Sleep Apnea", "Show a patient with an oral appliance for sleep apnea, with a dentist explaining the treatment, in a bright dental clinic setting."),
    fileName: "sleep-apnea-medical-illustration.png"
  },
  {
    treatmentName: "Airway Problems Correction",
    category: "Orthodontics",
    slug: "airway-problems-correction",
    prompt: generateTreatmentPrompt("Airway Problems Correction", "Show a dentist discussing airway correction with a patient, with dental models and tools visible, in a professional dental consultation setting."),
    fileName: "airway-problems-correction-medical-illustration.png"
  },
  {
    treatmentName: "Speech Problems Correction",
    category: "Orthodontics",
    slug: "speech-problems-correction",
    prompt: generateTreatmentPrompt("Speech Problems Correction", "Show a dentist working with a patient on speech correction, with dental models and tools in the background, in a bright dental clinic environment."),
    fileName: "speech-problems-correction-medical-illustration.png"
  },
  {
    treatmentName: "Functional Habits Correction",
    category: "Orthodontics",
    slug: "functional-habits-correction",
    prompt: generateTreatmentPrompt("Functional Habits Correction", "Show a dentist guiding a patient about mouth habits correction using models or visuals, in a friendly clinic environment."),
    fileName: "functional-habits-correction-medical-illustration.png"
  },
  {
    treatmentName: "Cleft Orthodontics",
    category: "Orthodontics",
    slug: "cleft-orthodontics",
    prompt: generateTreatmentPrompt("Cleft Orthodontics", "Show a dentist discussing cleft orthodontics treatment with a patient, with orthodontic appliances and models visible, in a caring dental clinic environment."),
    fileName: "cleft-orthodontics-medical-illustration.png"
  },
  {
    treatmentName: "Pulpotomy",
    category: "Pediatric Dentistry",
    slug: "pulpotomy",
    prompt: generateTreatmentPrompt("Pulpotomy", "Show a pediatric dentist treating a child's tooth, with child-friendly dental tools visible, in a bright and welcoming dental clinic setting."),
    fileName: "pulpotomy-medical-illustration.png"
  },
  {
    treatmentName: "Pulpectomy / RCT",
    category: "Pediatric Dentistry",
    slug: "pulpectomy-rct",
    prompt: generateTreatmentPrompt("Pulpectomy / RCT", "Show a pediatric dentist performing root canal on a child's primary tooth, with child-friendly dental tools visible, in a bright dental clinic environment."),
    fileName: "pulpectomy-medical-illustration.png"
  },
  {
    treatmentName: "Aligners for Kids & Teens",
    category: "Pediatric Dentistry",
    slug: "aligners-kids-teens",
    prompt: generateTreatmentPrompt("Aligners for Kids & Teens", "Show a dentist explaining clear aligners to a child or teenager with a parent present, with aligner models visible, in a friendly dental clinic environment."),
    fileName: "aligners-kids-teens-medical-illustration.png"
  },
  {
    treatmentName: "Functional Jaw Problems Correction (Kids)",
    category: "Pediatric Dentistry",
    slug: "functional-jaw-problems-correction-kids",
    prompt: generateTreatmentPrompt("Functional Jaw Problems Correction (Kids)", "Show a pediatric dentist with a child patient discussing jaw correction, with dental models showing jaw structure, in a child-friendly dental clinic."),
    fileName: "functional-jaw-problems-correction-kids-medical-illustration.png"
  },
  {
    treatmentName: "Functional Habits Correction (Kids)",
    category: "Pediatric Dentistry",
    slug: "functional-habits-correction-kids",
    prompt: generateTreatmentPrompt("Functional Habits Correction (Kids)", "Show a dentist guiding a young child about mouth habits (like thumb-sucking correction) using models or visuals, in a friendly clinic."),
    fileName: "functional-habits-correction-kids-medical-illustration.png"
  },
  {
    treatmentName: "Space Problems Treatment",
    category: "Pediatric Dentistry",
    slug: "space-problems-treatment",
    prompt: generateTreatmentPrompt("Space Problems Treatment", "Show a dentist explaining teeth spacing issues to a parent and child, with a dental model in hand, bright environment."),
    fileName: "space-problems-treatment-medical-illustration.png"
  },
  {
    treatmentName: "Tooth Fillings for Kids",
    category: "Pediatric Dentistry",
    slug: "tooth-fillings-kids",
    prompt: generateTreatmentPrompt("Tooth Fillings for Kids", "Show a pediatric dentist placing a filling in a child's tooth, with child-friendly dental tools visible, in a bright and welcoming dental clinic setting."),
    fileName: "tooth-fillings-kids-medical-illustration.png"
  },
  {
    treatmentName: "Airway Problems Correction (Kids)",
    category: "Pediatric Dentistry",
    slug: "airway-problems-correction-kids",
    prompt: generateTreatmentPrompt("Airway Problems Correction (Kids)", "Show a pediatric dentist discussing airway correction with a child and parent, with dental models visible, in a friendly dental clinic environment."),
    fileName: "airway-problems-correction-kids-medical-illustration.png"
  },
  {
    treatmentName: "Pit & Fissure in Kids",
    category: "Pediatric Dentistry",
    slug: "pit-fissure-kids",
    prompt: generateTreatmentPrompt("Pit & Fissure in Kids", "Show a pediatric dentist applying sealant to a child's tooth, with dental tools visible, in a bright and welcoming dental clinic setting."),
    fileName: "pit-fissure-sealants-medical-illustration.png"
  },
  {
    treatmentName: "Anti-Decay Fluoride Application (Kids)",
    category: "Pediatric Dentistry",
    slug: "fluoride-application-kids",
    prompt: generateTreatmentPrompt("Anti-Decay Fluoride Application (Kids)", "Show a pediatric dentist applying fluoride treatment to a child's teeth, with dental tools visible, in a bright and welcoming dental clinic environment."),
    fileName: "fluoride-application-kids-medical-illustration.png"
  },
  {
    treatmentName: "Tooth Removal in Kids",
    category: "Pediatric Dentistry",
    slug: "tooth-removal-kids",
    prompt: generateTreatmentPrompt("Tooth Removal in Kids", "Show a pediatric dentist performing a primary tooth extraction on a child, with child-friendly dental tools visible, in a bright and caring dental clinic setting."),
    fileName: "tooth-removal-kids-medical-illustration.png"
  },
  {
    treatmentName: "Dental Emergencies (Kids)",
    category: "Pediatric Dentistry",
    slug: "dental-emergencies-kids",
    prompt: generateTreatmentPrompt("Dental Emergencies (Kids)", "Show a pediatric dentist quickly attending to a child with a dental emergency, with a parent present, in a caring and calm dental clinic environment."),
    fileName: "dental-emergencies-kids-medical-illustration.png"
  },
  {
    treatmentName: "Anti-Decay Fluoride Application",
    category: "Preventive Treatments",
    slug: "fluoride-application",
    prompt: generateTreatmentPrompt("Anti-Decay Fluoride Application", "Show a dentist applying fluoride treatment to a patient's teeth, with dental tools visible, in a bright dental clinic setting."),
    fileName: "fluoride-application-medical-illustration.png"
  },
  {
    treatmentName: "Pregnancy Dental Care",
    category: "Preventive Treatments",
    slug: "pregnancy-dental-care",
    prompt: generateTreatmentPrompt("Pregnancy Dental Care", "Show a dentist consulting a pregnant woman in a dental chair, in a bright dental clinic setting."),
    fileName: "pregnancy-dental-care-medical-illustration.png",
    animatedPrompt: generateAnimatedTreatmentPrompt("Pregnancy Dental Care", "Show a dentist consulting a pregnant woman in a dental chair with gentle conversation and caring gestures, in a bright dental clinic setting."),
    animatedFileName: "pregnancy-dental-care-medical-illustration-animated.gif"
  },
  {
    treatmentName: "Teeth & Gums Cleaning",
    category: "Preventive Treatments",
    slug: "teeth-gums-cleaning",
    prompt: generateTreatmentPrompt("Teeth & Gums Cleaning", "Show a dentist performing professional cleaning on a patient, with cleaning tools visible, in a bright dental clinic environment."),
    fileName: "teeth-cleaning-medical-illustration.png"
  },
  {
    treatmentName: "Scaling & Root Planing",
    category: "Preventive Treatments",
    slug: "scaling-root-planing",
    prompt: generateTreatmentPrompt("Scaling & Root Planing", "Depict a dentist performing ultrasonic scaling on a patient reclined in the dental chair; close-up of dental scaler tool and gentle care feel."),
    fileName: "scaling-root-planing-medical-illustration.png",
    animatedPrompt: generateAnimatedTreatmentPrompt("Scaling & Root Planing", "Depict a dentist performing ultrasonic scaling on a patient reclined in the dental chair with gentle tool movement; close-up of dental scaler tool with subtle motion and gentle care feel."),
    animatedFileName: "scaling-root-planing-medical-illustration-animated.gif"
  },
  {
    treatmentName: "Functional Jaw Problems Correction (Preventive)",
    category: "Preventive Treatments",
    slug: "functional-jaw-problems-correction-preventive",
    prompt: generateTreatmentPrompt("Functional Jaw Problems Correction (Preventive)", "Show a dentist explaining jaw alignment issues to a patient, with a dental model showing jaw structure in hand, in a bright clinic environment."),
    fileName: "functional-jaw-problems-correction-preventive-medical-illustration.png"
  },
  {
    treatmentName: "Functional Habits Correction (Preventive)",
    category: "Preventive Treatments",
    slug: "functional-habits-correction-preventive",
    prompt: generateTreatmentPrompt("Functional Habits Correction (Preventive)", "Show a dentist guiding a patient about mouth habits correction using models or visuals, in a friendly clinic environment."),
    fileName: "functional-habits-correction-preventive-medical-illustration.png"
  },
  {
    treatmentName: "Space Problems Treatment (Preventive)",
    category: "Preventive Treatments",
    slug: "space-problems-treatment-preventive",
    prompt: generateTreatmentPrompt("Space Problems Treatment (Preventive)", "Show a dentist explaining teeth spacing issues to a patient, with a dental model in hand, in a bright environment."),
    fileName: "space-problems-treatment-preventive-medical-illustration.png"
  },
  {
    treatmentName: "Pit & Fissure Sealants",
    category: "Preventive Treatments",
    slug: "pit-fissure-sealants",
    prompt: generateTreatmentPrompt("Pit & Fissure Sealants", "Show a dentist applying sealant to a patient's tooth, with dental tools visible, in a bright dental clinic setting."),
    fileName: "pit-fissure-sealants-medical-illustration.png"
  },
  {
    treatmentName: "Conscious Sedation",
    category: "Preventive Treatments",
    slug: "conscious-sedation",
    prompt: generateTreatmentPrompt("Conscious Sedation", "Show a dentist administering conscious sedation to a patient in a dental chair, with monitoring equipment visible, in a bright dental clinic setting."),
    fileName: "conscious-sedation-medical-illustration.png"
  },
  {
    treatmentName: "Dental Emergencies (Preventive Context)",
    category: "Preventive Treatments",
    slug: "dental-emergencies-preventive",
    prompt: generateTreatmentPrompt("Dental Emergencies (Preventive Context)", "Show a dentist quickly attending to a patient with mild dental injury or pain in a clean clinical setup, caring and urgent yet calm tone."),
    fileName: "dental-emergencies-medical-illustration.png"
  }
]

/**
 * Get prompt for a specific treatment
 * Improved matching to handle various slug formats and treatment names
 */
export function getTreatmentPrompt(slug: string, treatmentName?: string): TreatmentImagePrompt | undefined {
  const normalizedSlug = slug.toLowerCase().replace(/\//g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  const normalizedName = treatmentName?.toLowerCase() || ""
  
  // Try exact match first
  let prompt = TREATMENT_IMAGE_PROMPTS.find(
    p => 
      p.slug.toLowerCase() === normalizedSlug ||
      p.treatmentName.toLowerCase() === normalizedName
  )
  
  if (prompt) return prompt
  
  // Try partial matches
  prompt = TREATMENT_IMAGE_PROMPTS.find(
    p => {
      const promptSlug = p.slug.toLowerCase()
      const promptName = p.treatmentName.toLowerCase()
      
      // Check if slug contains key words from prompt
      const slugWords = normalizedSlug.split('-')
      const promptWords = promptSlug.split('-')
      const hasCommonWords = slugWords.some(w => promptWords.includes(w) && w.length > 3)
      
      // Check if treatment name contains key words
      const nameWords = normalizedName.split(/\s+/)
      const promptNameWords = promptName.split(/\s+/)
      const hasCommonNameWords = nameWords.some(w => promptNameWords.includes(w) && w.length > 3)
      
      return hasCommonWords || hasCommonNameWords ||
        promptSlug.includes(normalizedSlug) ||
        normalizedSlug.includes(promptSlug) ||
        promptName.includes(normalizedName) ||
        normalizedName.includes(promptName)
    }
  )
  
  return prompt
}

/**
 * Get all prompts for a category
 */
export function getCategoryPrompts(category: string): TreatmentImagePrompt[] {
  return TREATMENT_IMAGE_PROMPTS.filter(prompt => 
    prompt.category.toLowerCase() === category.toLowerCase()
  )
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  return Array.from(new Set(TREATMENT_IMAGE_PROMPTS.map(p => p.category)))
}

/**
 * Get animated prompt for a specific treatment
 */
export function getAnimatedTreatmentPrompt(slug: string, treatmentName?: string): TreatmentImagePrompt | undefined {
  const prompt = getTreatmentPrompt(slug, treatmentName)
  if (prompt && prompt.animatedPrompt) {
    return prompt
  }
  return undefined
}

/**
 * Get all treatments with animated prompts
 */
export function getTreatmentsWithAnimatedPrompts(): TreatmentImagePrompt[] {
  return TREATMENT_IMAGE_PROMPTS.filter(p => p.animatedPrompt && p.animatedFileName)
}

/**
 * Generate animated prompt for a treatment that doesn't have one
 */
export function generateAnimatedPromptForTreatment(treatment: TreatmentImagePrompt): TreatmentImagePrompt {
  if (treatment.animatedPrompt && treatment.animatedFileName) {
    return treatment
  }
  
  // Extract the specific description from the static prompt
  const staticPrompt = treatment.prompt
  const descriptionMatch = staticPrompt.match(/Show (.+?)(?:\.|$)/i)
  const description = descriptionMatch ? descriptionMatch[1] : `Show a dentist and patient in a dental clinic setting for ${treatment.treatmentName}`
  
  // Add animation-specific details
  const animatedDescription = `${description} with gentle, subtle movement and professional animation`
  
  return {
    ...treatment,
    animatedPrompt: generateAnimatedTreatmentPrompt(treatment.treatmentName, animatedDescription),
    animatedFileName: treatment.fileName.replace('.png', '-animated.gif')
  }
}

