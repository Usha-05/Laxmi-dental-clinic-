// Treatment data configuration for all dental treatments
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

export const treatmentDataMap: Record<string, TreatmentData> = {
  "cyst-removal": {
    title: "Cyst Removal",
    description:
      "Professional surgical removal of dental cysts to prevent complications and restore oral health. Our experienced oral surgeons use advanced techniques to safely remove cysts while preserving surrounding tissue.",
    heroImage: "/treatments/cyst-removal-hero.jpg",
    uses: [
      "Removal of odontogenic cysts (dental origin cysts)",
      "Treatment of radicular cysts (root-related cysts)",
      "Elimination of dentigerous cysts (around unerupted teeth)",
      "Management of residual cysts after tooth extraction",
      "Prevention of bone destruction and tooth displacement",
      "Treatment of infected or symptomatic cysts",
      "Prevention of cyst recurrence",
      "Preservation of adjacent teeth and bone structure",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "Comprehensive examination including X-rays, CT scans, and clinical evaluation to assess cyst size and location",
        image: "/treatments/cyst-removal-step1.jpg",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Detailed surgical plan developed using 3D imaging to determine the best approach for cyst removal",
        image: "/treatments/cyst-removal-step2.jpg",
      },
      {
        step: 3,
        title: "Surgical Removal",
        description:
          "Careful surgical excision of the cyst under local or general anesthesia, ensuring complete removal",
        image: "/treatments/cyst-removal-step3.jpg",
      },
      {
        step: 4,
        title: "Post-Operative Care",
        description:
          "Follow-up appointments to monitor healing, ensure proper bone regeneration, and prevent recurrence",
        image: "/treatments/cyst-removal-step4.jpg",
      },
    ],
    benefits: [
      "Prevents further bone destruction and tooth displacement",
      "Eliminates pain and discomfort caused by cyst growth",
      "Reduces risk of infection and complications",
      "Preserves adjacent teeth and oral structures",
      "Professional surgical expertise ensures complete removal",
      "Minimally invasive techniques when possible",
      "Comprehensive follow-up care for optimal healing",
    ],
    idealFor: [
      "Patients with symptomatic dental cysts",
      "Cysts causing bone destruction or tooth displacement",
      "Large cysts requiring surgical intervention",
      "Recurrent cysts that haven't responded to other treatments",
      "Patients with infected or painful cysts",
      "Prevention of future complications",
    ],
    timeline: {
      duration: "30-90 minutes (depending on cyst size and complexity)",
      frequency: "Single procedure with follow-up visits",
      recovery: "7-14 days for initial healing, 3-6 months for complete bone regeneration",
    },
  },
  alveoloplasty: {
    title: "Alveoloplasty",
    description:
      "Surgical reshaping and smoothing of the jawbone ridge to prepare for dentures or improve oral function. This procedure ensures a comfortable fit for prosthetic devices and optimal oral health.",
    heroImage: "/treatments/alveoloplasty-hero.jpg",
    uses: [
      "Preparation for denture placement",
      "Smoothing of irregular jawbone ridges",
      "Removal of sharp bony projections",
      "Correction of jawbone deformities after extractions",
      "Improvement of denture stability and comfort",
      "Treatment of bone spurs and sharp edges",
      "Preparation for dental implants",
      "Enhancement of oral function and comfort",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Evaluation",
        description:
          "Comprehensive examination of jawbone structure, X-rays, and assessment of prosthetic needs",
        image: "/treatments/alveoloplasty-step1.jpg",
      },
      {
        step: 2,
        title: "Surgical Planning",
        description:
          "Detailed plan for bone reshaping to achieve optimal ridge contour for dentures or implants",
        image: "/treatments/alveoloplasty-step2.jpg",
      },
      {
        step: 3,
        title: "Bone Reshaping",
        description:
          "Precise surgical reshaping and smoothing of the alveolar ridge under local anesthesia",
        image: "/treatments/alveoloplasty-step3.jpg",
      },
      {
        step: 4,
        title: "Healing & Prosthesis",
        description:
          "Complete healing period followed by denture fitting or implant placement for optimal results",
        image: "/treatments/alveoloplasty-step4.jpg",
      },
    ],
    benefits: [
      "Ensures comfortable and stable denture fit",
      "Eliminates sharp bone edges and discomfort",
      "Improves oral function and speech",
      "Prevents denture-related sores and irritation",
      "Creates optimal foundation for dental prosthetics",
      "Enhances overall oral health and comfort",
      "Professional surgical expertise for optimal results",
    ],
    idealFor: [
      "Patients preparing for dentures",
      "Individuals with irregular jawbone ridges",
      "Patients experiencing denture discomfort",
      "Those with sharp bony projections",
      "Patients requiring dental implants",
      "Individuals seeking improved oral function",
    ],
    timeline: {
      duration: "30-60 minutes",
      frequency: "Single procedure",
      recovery: "2-4 weeks for complete healing before denture fitting",
    },
  },
  biopsy: {
    title: "Biopsy",
    description:
      "Diagnostic procedure involving the removal of tissue samples for laboratory analysis. Essential for detecting oral cancer, infections, and other pathological conditions early.",
    heroImage: "/treatments/biopsy-hero.jpg",
    uses: [
      "Diagnosis of oral cancer and precancerous lesions",
      "Identification of suspicious oral lesions",
      "Detection of oral infections and diseases",
      "Evaluation of unexplained oral growths",
      "Monitoring of chronic oral conditions",
      "Confirmation of diagnosis before treatment",
      "Early detection of pathological changes",
      "Assessment of treatment effectiveness",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Suspicious Lesion Detection",
        description: "Clinical examination identifies suspicious areas requiring further investigation",
        image: "/treatments/biopsy-step1.jpg",
      },
      {
        step: 2,
        title: "Biopsy Planning",
        description:
          "Determination of biopsy type (incisional, excisional, or brush) based on lesion characteristics",
        image: "/treatments/biopsy-step2.jpg",
      },
      {
        step: 3,
        title: "Tissue Sample Collection",
        description:
          "Careful removal of tissue sample under local anesthesia for laboratory analysis",
        image: "/treatments/biopsy-step3.jpg",
      },
      {
        step: 4,
        title: "Laboratory Analysis & Results",
        description:
          "Pathological examination and diagnosis, followed by discussion of results and treatment plan",
        image: "/treatments/biopsy-step4.jpg",
      },
    ],
    benefits: [
      "Early detection of oral cancer and precancerous conditions",
      "Accurate diagnosis for appropriate treatment planning",
      "Peace of mind through definitive diagnosis",
      "Minimally invasive procedure with local anesthesia",
      "Quick recovery with minimal discomfort",
      "Essential for early intervention and better outcomes",
      "Professional expertise in oral pathology",
    ],
    idealFor: [
      "Patients with suspicious oral lesions or growths",
      "Individuals with persistent oral sores or ulcers",
      "Patients with white or red patches in the mouth",
      "Those with unexplained oral changes",
      "Patients with risk factors for oral cancer",
      "Individuals requiring diagnostic confirmation",
    ],
    timeline: {
      duration: "15-30 minutes",
      frequency: "Single procedure",
      recovery: "3-7 days for healing, 1-2 weeks for lab results",
    },
  },
  "pre-cancerous-lesions-evaluation": {
    title: "Pre-Cancerous Lesions Evaluation",
    description:
      "Comprehensive assessment and monitoring of precancerous oral conditions to detect and treat potential oral cancer early. Our expert team provides thorough evaluation and treatment planning.",
    heroImage: "/treatments/pre-cancerous-lesions-hero.jpg",
    uses: [
      "Early detection of precancerous oral conditions",
      "Evaluation of leukoplakia (white patches)",
      "Assessment of erythroplakia (red patches)",
      "Monitoring of oral lichen planus",
      "Evaluation of oral submucous fibrosis",
      "Detection of dysplastic changes in oral tissue",
      "Risk assessment for oral cancer development",
      "Comprehensive treatment planning for precancerous conditions",
    ],
    treatmentProcess: [
      {
        step: 1,
        title: "Clinical Examination",
        description:
          "Thorough visual examination and documentation of oral lesions, their characteristics, and location",
        image: "/treatments/pre-cancerous-lesions-step1.jpg",
      },
      {
        step: 2,
        title: "Advanced Diagnostic Tools",
        description:
          "Use of specialized imaging, biopsy, and diagnostic techniques to assess lesion nature and risk",
        image: "/treatments/pre-cancerous-lesions-step2.jpg",
      },
      {
        step: 3,
        title: "Risk Assessment",
        description:
          "Comprehensive evaluation of risk factors, lesion characteristics, and potential for malignant transformation",
        image: "/treatments/pre-cancerous-lesions-step3.jpg",
      },
      {
        step: 4,
        title: "Treatment & Monitoring",
        description:
          "Implementation of appropriate treatment plan and regular monitoring to prevent progression to cancer",
        image: "/treatments/pre-cancerous-lesions-step4.jpg",
      },
    ],
    benefits: [
      "Early detection prevents progression to oral cancer",
      "Comprehensive evaluation by oral pathology experts",
      "Personalized treatment plans based on risk assessment",
      "Regular monitoring ensures timely intervention",
      "Reduces risk of malignant transformation",
      "Peace of mind through thorough evaluation",
      "Access to advanced diagnostic technologies",
    ],
    idealFor: [
      "Patients with white or red patches in the mouth",
      "Individuals with persistent oral lesions",
      "Patients with risk factors (tobacco use, alcohol, etc.)",
      "Those with family history of oral cancer",
      "Patients with oral lichen planus or other chronic conditions",
      "Individuals requiring regular oral cancer screening",
    ],
    timeline: {
      duration: "30-60 minutes for evaluation",
      frequency: "Initial evaluation plus regular follow-ups (every 3-6 months)",
      recovery: "Varies based on treatment plan and lesion type",
    },
  },
}

// Helper function to generate slug from category and treatment name
export function generateTreatmentSlug(categoryTitle: string, treatmentName: string): string {
  const categorySlug = categoryTitle.toLowerCase().replace(/\s+/g, "-")
  const treatmentSlug = treatmentName
    .toLowerCase()
    .replace(/\s*\/\s*/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
  return `${categorySlug}/${treatmentSlug}`
}

// Helper function to get treatment data by slug (supports both simple slug and category/treatment format)
export function getTreatmentData(slug: string): TreatmentData | undefined {
  // Try direct lookup first
  if (treatmentDataMap[slug]) {
    return treatmentDataMap[slug]
  }
  
  // Try with category/treatment format
  const parts = slug.split('/')
  if (parts.length === 2) {
    const [category, treatment] = parts
    const fullSlug = `${category}/${treatment}`
    if (treatmentDataMap[fullSlug]) {
      return treatmentDataMap[fullSlug]
    }
  }
  
  return undefined
}


