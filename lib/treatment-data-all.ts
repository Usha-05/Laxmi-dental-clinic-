// Comprehensive treatment data for all treatments in the navbar
// This file contains uses, treatment process, benefits, and other details for each treatment

export interface TreatmentData {
  title: string
  description: string
  heroImage: string
  uses: string[]
  treatmentProcess: {
    step: number
    title: string
    description: string
    image?: string
  }[]
  benefits: string[]
  idealFor?: string[]
  timeline?: {
    duration?: string
    frequency?: string
    recovery?: string
  }
}

// Helper function to generate slug from treatment name
function generateSlug(treatmentName: string): string {
  return treatmentName
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// Helper function to generate title from slug
function generateTitle(slug: string): string {
  const parts = slug.split("/")
  const treatmentPart = parts[parts.length - 1]
  return treatmentPart
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Import medical illustration generator
import { getMedicalIllustration } from "./medical-illustrations"

// Function to get contextually relevant hero image based on treatment slug
function getTreatmentHeroImage(slug: string, title: string): string {
  // Use medical illustrations for all treatments
  return getMedicalIllustration(slug, title)
  
  // Legacy code below (kept for reference but not used)
  const slugLower = slug.toLowerCase()
  const titleLower = title.toLowerCase()
  
  // Restorative Dentistry - Fillings, Crowns, Bridges, etc.
  if (slugLower.includes("filling") || titleLower.includes("filling")) {
    return "/dental-filling-treatment.jpg"
  }
  if (slugLower.includes("crown") || titleLower.includes("crown")) {
    return "/dental-crown-treatment.jpg"
  }
  if (slugLower.includes("bridge") || titleLower.includes("bridge")) {
    return "/dental-bridge-treatment.jpg"
  }
  if (slugLower.includes("implant") || titleLower.includes("implant")) {
    return "/dental-implant-treatment.jpg"
  }
  if (slugLower.includes("veneer") || slugLower.includes("laminate") || titleLower.includes("veneer")) {
    return "/dental-veneer-treatment.jpg"
  }
  if (slugLower.includes("root-canal") || slugLower.includes("rct") || titleLower.includes("root canal")) {
    return "/root-canal-treatment.jpg"
  }
  if (slugLower.includes("denture") || titleLower.includes("denture")) {
    return "/dental-denture-treatment.jpg"
  }
  if (slugLower.includes("prosthesis") || titleLower.includes("prosthesis")) {
    return "/full-mouth-prosthesis.jpg"
  }
  if (slugLower.includes("sensitivity") || titleLower.includes("sensitivity")) {
    return "/teeth-sensitivity-treatment.jpg"
  }
  
  // Pediatric Dentistry
  if (slugLower.includes("pediatric") || slugLower.includes("kids") || slugLower.includes("child")) {
    return "/pediatric-dental-care.jpg"
  }
  if (slugLower.includes("pulpotomy") || titleLower.includes("pulpotomy")) {
    return "/pulpotomy-treatment.jpg"
  }
  if (slugLower.includes("pulpectomy") || titleLower.includes("pulpectomy")) {
    return "/pulpectomy-treatment.jpg"
  }
  if (slugLower.includes("fluoride") && slugLower.includes("kids")) {
    return "/fluoride-treatment-kids.jpg"
  }
  if (slugLower.includes("pit") && slugLower.includes("fissure")) {
    return "/pit-fissure-sealants.jpg"
  }
  
  // Orthodontics
  if (slugLower.includes("aligner") || slugLower.includes("invisalign")) {
    return "/clear-aligners-invisalign.jpg"
  }
  if (slugLower.includes("brace") || titleLower.includes("brace")) {
    return "/traditional-braces-treatment.jpg"
  }
  if (slugLower.includes("tmj") || slugLower.includes("tmd")) {
    return "/tmj-jaw-disorders.jpg"
  }
  if (slugLower.includes("jaw") && (slugLower.includes("correction") || slugLower.includes("problem"))) {
    return "/pediatric-jaw-correction.jpg"
  }
  if (slugLower.includes("cleft")) {
    return "/cleft-orthodontics.jpg"
  }
  if (slugLower.includes("sleep") && slugLower.includes("apnea")) {
    return "/sleep-apnea-treatment.jpg"
  }
  if (slugLower.includes("airway")) {
    return "/airway-problems-correction.jpg"
  }
  if (slugLower.includes("speech")) {
    return "/speech-problems-correction.jpg"
  }
  if (slugLower.includes("habit")) {
    return "/habit-breaking-treatment.jpg"
  }
  
  // Surgical Treatments
  if (slugLower.includes("wisdom") || slugLower.includes("tooth-removal") || slugLower.includes("extraction")) {
    return "/wisdom-tooth-removal.jpg"
  }
  if (slugLower.includes("gum") && (slugLower.includes("surgery") || slugLower.includes("treatment"))) {
    return "/gum-surgery-treatment.jpg"
  }
  if (slugLower.includes("bone") && slugLower.includes("graft")) {
    return "/bone-grafting-treatment.jpg"
  }
  if (slugLower.includes("sinus") && slugLower.includes("lift")) {
    return "/sinus-lift-surgery.jpg"
  }
  if (slugLower.includes("cyst") || slugLower.includes("removal")) {
    return "/cyst-removal-treatment.jpg"
  }
  if (slugLower.includes("alveoloplasty")) {
    return "/alveoloplasty-treatment.jpg"
  }
  if (slugLower.includes("biopsy")) {
    return "/biopsy-treatment.jpg"
  }
  if (slugLower.includes("frenectomy")) {
    return "/frenectomy-treatment.jpg"
  }
  if (slugLower.includes("operculectomy")) {
    return "/operculectomy-treatment.jpg"
  }
  if (slugLower.includes("tongue") && slugLower.includes("tie")) {
    return "/tongue-tie-correction.jpg"
  }
  if (slugLower.includes("surgical") && slugLower.includes("orthodontics")) {
    return "/surgical-orthodontics.jpg"
  }
  if (slugLower.includes("jaw") && slugLower.includes("surgery")) {
    return "/jaw-surgery.jpg"
  }
  
  // Preventive Treatments
  if (slugLower.includes("cleaning") || slugLower.includes("scaling") || slugLower.includes("polish")) {
    return "/dental-cleaning-treatment.jpg"
  }
  if (slugLower.includes("fluoride") && !slugLower.includes("kids")) {
    return "/fluoride-treatment.jpg"
  }
  if (slugLower.includes("sealant")) {
    return "/dental-sealants.jpg"
  }
  if (slugLower.includes("pregnancy") || titleLower.includes("pregnancy")) {
    return "/pregnancy-dental-care.jpg"
  }
  if (slugLower.includes("whitening") || titleLower.includes("whitening")) {
    return "/teeth-whitening-treatment.jpg"
  }
  if (slugLower.includes("bleeding") && slugLower.includes("gum")) {
    return "/bleeding-gums-treatment.jpg"
  }
  if (slugLower.includes("bad") && (slugLower.includes("breath") || slugLower.includes("smell"))) {
    return "/bad-breath-treatment.jpg"
  }
  if (slugLower.includes("emergency")) {
    return "/dental-emergency-treatment.jpg"
  }
  
  // Default fallback - try category-based images
  const category = slug.split("/")[0] || ""
  if (category === "restorative") {
    return "/dental-restoration-treatment.jpg"
  }
  if (category === "pediatric" || category === "pediatric-dentistry") {
    return "/pediatric-dental-care.jpg"
  }
  if (category === "orthodontics") {
    return "/orthodontic-treatment.jpg"
  }
  if (category === "surgical" || category === "surgical-treatments") {
    return "/dental-surgery-treatment.jpg"
  }
  if (category === "preventive" || category === "preventive-treatments") {
    return "/preventive-dental-care.jpg"
  }
  
  // Final fallback
  return "/dental-treatment-room.jpg"
}

// Default treatment data generator
export function generateDefaultTreatmentData(slug: string): TreatmentData {
  const title = generateTitle(slug)
  const category = slug.split("/")[0] || "general"
  const heroImage = getTreatmentHeroImage(slug, title)

  return {
    title,
    description: `Professional ${title.toLowerCase()} treatment at LAXMI DENTAL. Our experienced team provides comprehensive care using advanced techniques to ensure optimal results and patient comfort.`,
    heroImage,
    uses: [
      `Treatment of ${title.toLowerCase()} conditions`,
      `Comprehensive evaluation and assessment`,
      `Customized treatment planning`,
      `Professional care and monitoring`,
      `Post-treatment follow-up and maintenance`,
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Comprehensive examination and assessment of your dental needs",
        image: "/professional-dentist-portrait.jpg",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Customized treatment plan designed specifically for you",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Treatment Procedure",
        description: "Professional treatment performed by our experienced dental team",
        image: "/female-dentist-professional.jpg",
      },
      {
        step: 4,
        title: "Follow-up Care",
        description: "Regular monitoring and follow-up appointments to ensure optimal results",
        image: "/female-preventive-care.jpg",
      },
    ],
    benefits: [
      "Professional expertise and care",
      "Advanced treatment techniques",
      "Comprehensive evaluation and planning",
      "Personalized treatment approach",
      "Regular monitoring and follow-up",
      "Commitment to patient comfort and satisfaction",
    ],
    idealFor: [
      "Patients seeking professional dental care",
      "Individuals requiring specialized treatment",
      "Those looking for comprehensive dental solutions",
    ],
    timeline: {
      duration: "Varies based on individual needs",
      frequency: "As recommended by your dentist",
      recovery: "Depends on treatment type",
    },
  }
}

// Comprehensive treatment data map
const treatmentDataMap: Record<string, TreatmentData> = {
  "orthodontics/aligners-invisalign": {
    title: "Aligners / Invisalign",
    description:
      "Clear aligners offer a modern, nearly invisible solution to straighten your teeth without the traditional look of braces. Using advanced 3D technology, we create a custom treatment plan just for you.",
    heroImage: getMedicalIllustration("orthodontics/aligners-invisalign", "Aligners / Invisalign"),
    uses: [
      "Straightening crooked or misaligned teeth",
      "Correcting mild to moderate crowding",
      "Closing gaps between teeth",
      "Aligning bite issues",
      "Improving overall smile aesthetics",
      "Correcting teeth spacing problems",
      "Treatment for adults and teens",
      "Alternative to traditional braces",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Consultation",
        description: "Meet with our orthodontist to discuss your goals and assess your teeth",
        image: "/professional-dentist-portrait.jpg",
      },
      {
        step: 2,
        title: "3D Scan",
        description: "Advanced scanning creates a detailed digital model of your teeth",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Custom Plan",
        description: "We create your personalized aligner series - you'll see your future smile",
        image: "/female-aligners-invisalign.jpg",
      },
      {
        step: 4,
        title: "Treatment",
        description: "Wear aligners 20+ hours daily, changing them every 1-2 weeks",
        image: "/female-patient-smile.jpg",
      },
    ],
    benefits: [
      "Nearly invisible - perfect for professionals and students",
      "Removable for eating, brushing, and flossing",
      "More comfortable than traditional braces",
      "Shorter treatment time - typically 6-24 months",
      "Advanced technology shows results before treatment starts",
      "No dietary restrictions",
      "Easy oral hygiene maintenance",
    ],
    idealFor: [
      "Mild to moderate crowding or spacing issues",
      "Adults who want a discreet option",
      "Professionals in customer-facing roles",
      "Patients committed to wearing aligners 20+ hours daily",
    ],
    timeline: {
      duration: "6-24 months",
      frequency: "Aligner changes every 1-2 weeks",
      recovery: "Wear retainers to maintain results",
    },
  },
  "orthodontics/aligners-invisalign-for-teens-and-kids": {
    title: "Aligners / Invisalign for Teens and Kids",
    description:
      "Specialized clear aligner treatment designed specifically for children and teenagers. Our pediatric orthodontic approach ensures comfortable, effective treatment for younger patients.",
    heroImage: getMedicalIllustration("orthodontics/aligners-invisalign-for-teens-and-kids", "Aligners / Invisalign for Teens and Kids"),
    uses: [
      "Early orthodontic treatment for children",
      "Correcting developing bite issues",
      "Aligning teeth in teens and kids",
      "Preventing future orthodontic problems",
      "Guiding proper jaw development",
      "Correcting habits affecting teeth alignment",
      "Treatment for crowded or spaced teeth in children",
      "Addressing developmental dental issues",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Pediatric Consultation",
        description: "Child-friendly examination and assessment of dental development",
        image: "/female-child-dental-care.jpg",
      },
      {
        step: 2,
        title: "3D Imaging",
        description: "Advanced scanning adapted for children's comfort",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Treatment Planning",
        description: "Customized plan designed for growing teeth and jaws",
        image: "/professional-dental-team-portrait.jpg",
      },
      {
        step: 4,
        title: "Treatment & Monitoring",
        description: "Regular monitoring to ensure proper development and treatment progress",
        image: "/smiling-child-happy.jpg",
      },
    ],
    benefits: [
      "Child-friendly treatment approach",
      "Nearly invisible aligners",
      "Comfortable for growing mouths",
      "Early intervention prevents future problems",
      "Easy to maintain oral hygiene",
      "No dietary restrictions",
      "Regular monitoring ensures optimal results",
    ],
    idealFor: [
      "Children and teenagers with alignment issues",
      "Early intervention cases",
      "Patients with developing bite problems",
      "Families seeking discreet treatment for kids",
    ],
    timeline: {
      duration: "6-18 months (varies by case)",
      frequency: "Regular check-ups every 6-8 weeks",
      recovery: "Retainers to maintain results",
    },
  },
  "orthodontics/tmj-disorders-tmd": {
    title: "TMJ Disorders / TMD",
    description:
      "Comprehensive treatment for temporomandibular joint (TMJ) disorders and temporomandibular dysfunction (TMD). Our expert team provides relief from jaw pain, clicking, and related symptoms.",
    heroImage: getMedicalIllustration("orthodontics/tmj-disorders-tmd", "TMJ Disorders / TMD"),
    uses: [
      "Treatment of jaw pain and discomfort",
      "Relief from TMJ clicking and popping",
      "Correction of jaw locking issues",
      "Treatment of headaches related to TMJ",
      "Addressing bite alignment problems",
      "Management of jaw muscle tension",
      "Treatment of ear pain related to TMJ",
      "Prevention of further TMJ damage",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Diagnosis",
        description: "Comprehensive examination including imaging and symptom assessment",
        image: "/professional-dentist-portrait.jpg",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Customized treatment plan based on your specific TMJ condition",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Treatment",
        description: "Multi-modal approach including orthotics, therapy, and adjustments",
        image: "/female-tmj-treatment.jpg",
      },
      {
        step: 4,
        title: "Follow-up",
        description: "Regular monitoring and adjustments to ensure optimal relief",
        image: "/female-preventive-care.jpg",
      },
    ],
    benefits: [
      "Relief from jaw pain and discomfort",
      "Reduction in headaches and ear pain",
      "Improved jaw function and mobility",
      "Better bite alignment",
      "Comprehensive treatment approach",
      "Prevention of further complications",
      "Improved quality of life",
    ],
    idealFor: [
      "Patients with jaw pain or clicking",
      "Individuals with TMJ-related headaches",
      "Those with bite alignment issues",
      "Patients experiencing jaw locking",
    ],
    timeline: {
      duration: "3-12 months depending on severity",
      frequency: "Regular visits every 4-6 weeks",
      recovery: "Gradual improvement with treatment",
    },
  },
  "orthodontics/functional-jaw-problems-correction": {
    title: "Functional Jaw Problems Correction",
    description:
      "Comprehensive orthodontic treatment to correct functional jaw problems including bite issues, jaw alignment, and related functional problems affecting oral health and comfort.",
    heroImage: getMedicalIllustration("orthodontics/functional-jaw-problems-correction", "Functional Jaw Problems Correction"),
    uses: [
      "Correction of bite alignment issues",
      "Treatment of jaw misalignment",
      "Addressing functional bite problems",
      "Improving jaw function and comfort",
      "Treatment of crossbite, overbite, underbite",
      "Correcting jaw development issues",
      "Improving chewing and speaking function",
      "Preventing future dental problems",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Comprehensive Evaluation",
        description: "Detailed assessment of jaw function and bite alignment",
        image: "/professional-dentist-portrait.jpg",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Customized plan to correct functional jaw problems",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Treatment Implementation",
        description: "Application of orthodontic appliances and interventions",
        image: "/pediatric-jaw-correction.jpg",
      },
      {
        step: 4,
        title: "Monitoring & Adjustment",
        description: "Regular monitoring and adjustments to ensure optimal correction",
        image: "/female-patient-smile.jpg",
      },
    ],
    benefits: [
      "Improved jaw function and comfort",
      "Better bite alignment",
      "Prevention of future dental problems",
      "Improved chewing efficiency",
      "Better speech and oral function",
      "Enhanced overall oral health",
      "Professional comprehensive care",
    ],
    idealFor: [
      "Patients with bite alignment issues",
      "Individuals with jaw misalignment",
      "Those with functional bite problems",
      "Patients seeking comprehensive jaw correction",
    ],
    timeline: {
      duration: "12-36 months depending on complexity",
      frequency: "Regular visits every 4-6 weeks",
      recovery: "Retainers to maintain correction",
    },
  },
  "orthodontics/traditional-braces": {
    title: "Traditional Braces",
    description:
      "Traditional braces are a proven, effective method for correcting various orthodontic issues. Using metal brackets and wires, we can address complex alignment problems and create beautiful, healthy smiles.",
    heroImage: getMedicalIllustration("orthodontics/traditional-braces", "Traditional Braces"),
    uses: [
      "Correction of severe crowding",
      "Treatment of complex bite issues",
      "Aligning severely misaligned teeth",
      "Correcting overbite, underbite, crossbite",
      "Treatment of spacing issues",
      "Comprehensive orthodontic correction",
      "Treatment for all ages",
      "Complex orthodontic cases",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Comprehensive examination and X-rays to assess your orthodontic needs",
        image: "/professional-dentist-portrait.jpg",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Customized treatment plan designed for your specific case",
        image: "/dental-treatment-room.jpg",
      },
      {
        step: 3,
        title: "Brace Placement",
        description: "Comfortable placement of brackets and wires in a single appointment",
        image: "/female-dentist-professional.jpg",
      },
      {
        step: 4,
        title: "Regular Adjustments",
        description: "Monthly visits for adjustments to gradually move teeth into position",
        image: "/female-patient-smile.jpg",
      },
    ],
    benefits: [
      "Highly effective for complex orthodontic cases",
      "Predictable and reliable results",
      "Customizable with colored bands for kids and teens",
      "Cost-effective treatment option",
      "Can address severe crowding, spacing, and bite issues",
      "Proven track record of success",
      "Suitable for all ages",
    ],
    idealFor: [
      "Severe crowding or spacing issues",
      "Complex bite problems (overbite, underbite, crossbite)",
      "Patients requiring tooth movement in multiple directions",
      "Those who prefer a traditional, proven approach",
    ],
    timeline: {
      duration: "18-36 months",
      frequency: "Adjustments every 4-6 weeks",
      recovery: "Retainers required to maintain results",
    },
  },
  "restorative-dentistry/tooth-coloured-fillings": {
    title: "Tooth Coloured Fillings",
    description:
      "Professional tooth-coloured fillings treatment at LAXMI DENTAL. Our experienced team provides comprehensive care using advanced composite materials to restore your teeth naturally and beautifully.",
    heroImage: getMedicalIllustration("restorative-dentistry/tooth-coloured-fillings", "Tooth Coloured Fillings"),
    uses: [
      "Treatment of tooth coloured fillings conditions",
      "Comprehensive evaluation and assessment",
      "Customized treatment planning",
      "Professional care and monitoring",
      "Post-treatment follow-up and maintenance",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "Comprehensive examination and assessment of your dental needs with our experienced dentist",
        image: getMedicalIllustration("consultation", "Initial Consultation"),
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Customized treatment plan designed specifically for your tooth restoration needs",
        image: getMedicalIllustration("planning", "Treatment Planning"),
      },
      {
        step: 3,
        title: "Filling Procedure",
        description: "Professional tooth-coloured filling procedure performed by our skilled dental team",
        image: getMedicalIllustration("restorative-dentistry/tooth-coloured-fillings", "Tooth Coloured Fillings"),
      },
      {
        step: 4,
        title: "Follow-up Care",
        description: "Regular monitoring and follow-up appointments to ensure optimal results and longevity",
        image: getMedicalIllustration("followup", "Follow-up Care"),
      },
    ],
    benefits: [
      "Natural tooth-coloured appearance",
      "Advanced composite materials",
      "Minimally invasive procedure",
      "Durable and long-lasting results",
      "Quick and comfortable treatment",
      "Preserves maximum tooth structure",
    ],
    idealFor: [
      "Patients with cavities or tooth decay",
      "Those seeking natural-looking restorations",
      "Individuals wanting to preserve tooth structure",
      "Patients preferring aesthetic dental solutions",
    ],
    timeline: {
      duration: "30-60 minutes per filling",
      frequency: "Single visit procedure",
      recovery: "Immediate - can resume normal activities right away",
    },
  },
}

// Helper function to get treatment data by slug
export function getTreatmentDataBySlug(slug: string): TreatmentData | undefined {
  // Try direct lookup first
  if (treatmentDataMap[slug]) {
    return treatmentDataMap[slug]
  }

  // Try with category/treatment format
  const parts = slug.split("/")
  if (parts.length === 2) {
    const [category, treatment] = parts
    const fullSlug = `${category}/${treatment}`
    if (treatmentDataMap[fullSlug]) {
      return treatmentDataMap[fullSlug]
    }

    // Try with just the treatment part
    if (treatmentDataMap[treatment]) {
      return treatmentDataMap[treatment]
    }
  }

  // Try with just the last part (treatment name)
  if (parts.length > 0) {
    const treatmentPart = parts[parts.length - 1]
    if (treatmentDataMap[treatmentPart]) {
      return treatmentDataMap[treatmentPart]
    }
  }

  return undefined
}
