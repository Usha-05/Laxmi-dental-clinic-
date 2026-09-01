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
  faqs?: FAQItem[]
  reviewer?: string
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
export interface FAQItem { q: string; a: string }

export function generateDefaultTreatmentData(slug: string): TreatmentData {
  const title = generateTitle(slug)
  const category = slug.split("/")[0] || "general"
  const heroImage = getTreatmentHeroImage(slug, title)

  // Create more specific default content by inspecting keywords in the slug/title.
  const slugLower = slug.toLowerCase()
  const titleLower = title.toLowerCase()

  // Helpers to build common structures
  const simpleProcess = (steps: { title: string; desc: string; img?: string }[]) =>
    steps.map((s, i) => ({ step: i + 1, title: s.title, description: s.desc, image: s.img || "/dental-treatment-room.jpg" }))

  let description = `${title} at Laxmi Face and Multispeciality Dental Hospital in Vanasthalipuram. We explain what to expect and how the treatment helps restore oral health.`
  let uses: string[] = [
    `${title} related care and treatment`,
  ]
  let treatmentProcess = simpleProcess([
    { title: "Consultation & Examination", desc: "Clinical assessment and imaging to understand the problem." },
    { title: "Treatment Plan", desc: "Discuss options, risks and expected outcomes with your dentist." },
    { title: "Procedure", desc: "The clinical steps involved in the treatment." },
    { title: "Aftercare", desc: "Instructions and follow-up to support recovery." },
  ])
  let benefits: string[] = ["Improves oral function", "Addresses the presenting problem", "Helps maintain long-term dental health"]
  let idealFor: string[] = ["Patients with relevant dental concerns", "Those seeking specialist care"]
  let timeline = { duration: "Varies by treatment", frequency: "As advised", recovery: "Depends on procedure" }
  let faqs: FAQItem[] = [
    { q: `What is ${title}?`, a: `${title} is a dental treatment that addresses condition-specific needs. Your dentist will explain how it applies to your situation.` },
    { q: "How do I know if I need this treatment?", a: "Symptoms, clinical exam and imaging determine the need for treatment. Book a consultation for an assessment." },
    { q: "Is the procedure painful?", a: "Most procedures use local anaesthesia and modern techniques to minimise discomfort; your dentist will discuss pain control options." },
    { q: "How soon can I resume normal activities?", a: "Recovery times vary; your dentist will provide aftercare guidance specific to the procedure." },
  ]

  // Tailor content for common treatments by detecting keywords
  if (slugLower.includes("root") || titleLower.includes("root canal") || slugLower.includes("rct")) {
    description = `Root canal treatment (endodontic therapy) removes infected or inflamed dental pulp to save a tooth that would otherwise require extraction. We use digital imaging and microscopic techniques where appropriate.`
    uses = [
      "Treat deep decay that reaches the nerve",
      "Manage dental pulp infection or abscess",
      "Relieve severe tooth pain and sensitivity",
      "Preserve a natural tooth instead of extraction",
    ]
    treatmentProcess = simpleProcess([
      { title: "Diagnosis & X-rays", desc: "Testing and radiographs to confirm pulp involvement and canal anatomy.", img: "/c1.jpg" },
      { title: "Anaesthesia & Isolation", desc: "Local anaesthesia and rubber dam isolation for a clean, comfortable procedure.", img: "/c2.jpg" },
      { title: "Cleaning & Shaping", desc: "Removal of infected tissue and shaping of the canal system before disinfection.", img: "/c6.jpg" },
      { title: "Filling & Restoration", desc: "Canals are sealed and the tooth restored - often with a crown for long-term strength.", img: "/dental-treatment-room.jpg" },
    ])
    benefits = [
      "Save a tooth that would otherwise need extraction",
      "Eliminate source of infection and pain",
      "Restore chewing function",
      "Protect adjacent teeth from shifting",
    ]
    idealFor = ["Patients with persistent toothache", "Those with deep decay or abscess", "Teeth with cracked or exposed pulp"]
    timeline = { duration: "1-2 visits in most cases", frequency: "As scheduled by the dentist", recovery: "Several days of mild discomfort" }
    faqs = [
      { q: "Why might I need a root canal?", a: "When decay or injury reaches the pulp causing infection or irreversible inflammation; a root canal removes the infected tissue." },
      { q: "Will the tooth need a crown after root canal?", a: "Often yes — a crown protects the treated tooth and restores strength, especially molars." },
      { q: "Is root canal safe and effective?", a: "Root canal is a well-established treatment with high success rates when performed correctly." },
      { q: "What aftercare is needed?", a: "Avoid chewing on the treated tooth until fully restored; follow pain-relief advice and attend follow-up appointments." },
    ]
  } else if (slugLower.includes("wisdom") || slugLower.includes("extraction") || slugLower.includes("tooth-removal")) {
    description = `Wisdom tooth removal addresses impacted or problematic third molars that cause pain, infection, or crowding. Treatment planning uses clinical assessment and imaging to determine the safest approach.`
    uses = ["Removal of impacted wisdom teeth", "Treat infection or pericoronitis", "Relieve pain and swelling", "Prevent crowding or damage to adjacent teeth"]
    treatmentProcess = simpleProcess([
      { title: "Clinical Exam & Imaging", desc: "Assess tooth position and relation to nerves using X-ray or CBCT.", img: "/c1.jpg" },
      { title: "Anaesthesia & Extraction", desc: "Local anaesthesia (and sedation if needed) to remove the tooth safely.", img: "/c6.jpg" },
      { title: "Post-op Care", desc: "Stitches if required and aftercare instructions to manage swelling and pain.", img: "/dental-treatment-room.jpg" },
    ])
    benefits = ["Relief from pain and infection", "Prevent long-term damage to neighbouring teeth", "Reduce risk of cyst formation"]
    idealFor = ["Impacted or infected wisdom teeth", "Pain or swelling in the back of the mouth", "Recurrent infections around a wisdom tooth"]
    timeline = { duration: "30–90 minutes depending on complexity", frequency: "Single procedure (follow-up as advised)", recovery: "7–10 days for soft tissue healing" }
    faqs = [
      { q: "How long does recovery take?", a: "Most patients recover in 7–10 days with decreasing pain and swelling; full bone healing takes longer." },
      { q: "What are the risks?", a: "Common risks include swelling, bleeding and temporary numbness; imaging reduces risk of nerve injury." },
      { q: "When is removal recommended?", a: "When the tooth causes pain, infection, or threatens other teeth — or if it is impacted and likely to cause future problems." },
      { q: "What should I do before the appointment?", a: "Follow fasting or medication instructions if sedation is planned and arrange transport if needed." },
    ]
  } else if (slugLower.includes("brace") || slugLower.includes("aligner") || titleLower.includes("aligners") || titleLower.includes("braces")) {
    description = `Orthodontic treatment with braces or clear aligners corrects tooth alignment, crowding, spacing and bite issues. Treatment type is selected after assessing your teeth, bite and facial features.`
    uses = ["Correct crowding and spacing", "Improve bite alignment (overbite, underbite)", "Enhance smile aesthetics and function"]
    treatmentProcess = simpleProcess([
      { title: "Orthodontic Assessment", desc: "Records, photos and 3D scans to design a personalised plan.", img: "/professional-dentist-portrait.jpg" },
      { title: "Appliance Placement", desc: "Fit braces or deliver the first set of aligners.", img: "/dental-treatment-room.jpg" },
      { title: "Active Movement", desc: "Regular adjustments or aligner changes to move teeth gradually.", img: "/female-aligners-invisalign.jpg" },
      { title: "Retention", desc: "Retainers preserve the new tooth positions after active treatment.", img: "/female-patient-smile.jpg" },
    ])
    benefits = ["Improved bite and function", "Enhanced smile aesthetics", "Long-term oral health benefits"]
    idealFor = ["Crowded or spaced teeth", "Bite problems", "Patients seeking cosmetic and functional improvement"]
    timeline = { duration: "6–36 months depending on complexity", frequency: "Visits every 4–8 weeks or aligner changes as advised", recovery: "Minor discomfort after adjustments" }
    faqs = [
      { q: "Which is better: braces or aligners?", a: "Choice depends on case complexity, patient preferences and compliance; an orthodontic assessment will guide the best option." },
      { q: "Will treatment affect speech or eating?", a: "Temporary changes are common but usually resolve quickly; aligners are removable for meals." },
      { q: "How long until I see results?", a: "Initial changes may be visible in weeks; completion depends on individual treatment plan." },
      { q: "Are retainers necessary?", a: "Yes — retention is essential to maintain results after active treatment." },
    ]
  } else if (slugLower.includes("clean") || slugLower.includes("scal") || titleLower.includes("cleaning")) {
    description = `Professional teeth cleaning (scaling and polishing) removes hard plaque (tartar) and helps prevent gum disease. It is a preventive procedure tailored to your gum health.`
    uses = ["Plaque and tartar removal", "Gum health maintenance", "Stain removal and fresh breath"]
    treatmentProcess = simpleProcess([
      { title: "Examination", desc: "Check for gum pockets, inflammation and other concerns.", img: "/c2.jpg" },
      { title: "Scaling", desc: "Ultrasonic and hand instruments remove tartar.", img: "/dental-treatment-room.jpg" },
      { title: "Polishing & Advice", desc: "Polish teeth and provide home care advice.", img: "/female-preventive-care.jpg" },
    ])
    benefits = ["Prevent gum disease", "Reduce risk of decay", "Improve breath and appearance"]
    idealFor = ["Routine preventive care", "Patients with plaque/tartar build-up", "Those at higher risk of gum disease"]
    timeline = { duration: "30–60 minutes", frequency: "6 months or as advised", recovery: "No downtime" }
    faqs = [
      { q: "How often should I get a cleaning?", a: "Most people benefit from a cleaning every 6 months; those with gum disease may need more frequent visits." },
      { q: "Does scaling hurt?", a: "Scaling is usually comfortable; local anaesthesia can be used for sensitive areas." },
      { q: "Can I eat after cleaning?", a: "Yes — normal diet can be resumed unless otherwise instructed." },
      { q: "Will whitening be performed?", a: "Polishing removes surface stains; whitening is a separate cosmetic procedure." },
    ]
  } else if (slugLower.includes("emergency") || slugLower.includes("urgent") || slugLower.includes("trauma")) {
    description = `Emergency dental care addresses urgent problems such as severe pain, uncontrolled bleeding, dental trauma or swelling. Prompt assessment helps prevent complications and preserve teeth when possible.`
    uses = ["Severe tooth pain or swelling", "Trauma and broken teeth", "Uncontrolled bleeding or infection"]
    treatmentProcess = simpleProcess([
      { title: "Triage & Pain Relief", desc: "Immediate assessment and pain control measures.", img: "/c2.jpg" },
      { title: "Diagnosis & Imaging", desc: "X-rays to determine extent of injury or infection.", img: "/c1.jpg" },
      { title: "Definitive Care", desc: "Stabilise teeth, treat infection, or plan urgent procedures.", img: "/c6.jpg" },
      { title: "Follow-up", desc: "Arrange definitive restorative or surgical care as needed.", img: "/dental-treatment-room.jpg" },
    ])
    benefits = ["Rapid pain relief", "Reduce risk of infection", "Preserve damaged teeth when possible"]
    idealFor = ["Acute pain or trauma", "Signs of spreading infection", "Anyone with sudden dental problems"]
    timeline = { duration: "Immediate assessment; treatment as required", frequency: "Triage followed by scheduled follow-up", recovery: "Depends on the problem treated" }
    faqs = [
      { q: "What should I do while waiting for care?", a: "Control bleeding with gentle pressure, use cold packs for swelling, and avoid placing aspirin directly on gums." },
      { q: "When should I go to emergency care?", a: "Severe uncontrolled pain, swelling that affects breathing, or traumatic injury warrants urgent attention." },
      { q: "Will I need antibiotics?", a: "Antibiotics are used when infection is present; the dentist will decide based on clinical findings." },
      { q: "Can a damaged tooth be saved?", a: "Many teeth can be saved if treated promptly; bring any broken fragments to the clinic." },
    ]
  }

  return {
    title,
    description,
    heroImage,
    uses,
    treatmentProcess,
    benefits,
    idealFor,
    timeline,
    // @ts-ignore - faqs is an optional extension consumed by the client component
    faqs,
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
  "surgical-treatments/wisdom-tooth-removal": {
    title: "Wisdom Tooth Assessment and Removal in Vanasthalipuram",
    description: "Assessment and safe removal of impacted or problematic third molars (wisdom teeth). We use clinical examination and imaging to select the least invasive, safest approach for each patient.",
    heroImage: "/dental-treatment-room.jpg",
    reviewer: "Dr. Vishnu Gowtham Marella, BDS, MDS – Oral and Maxillofacial Surgeon",
    uses: [
      "Removal of impacted or partially erupted wisdom teeth",
      "Treatment of recurrent pericoronitis (gum infection around a wisdom tooth)",
      "Relief from pain, swelling or difficulty cleaning the back molars",
      "Prevention of damage to adjacent teeth and cyst formation",
    ],
    treatmentProcess: [
      { step: 1, title: "Clinical Examination & Imaging", description: "Detailed mouth exam and radiographs (or CBCT when needed) to evaluate tooth position and nerve relation.", image: "/c1.jpg" },
      { step: 2, title: "Anaesthesia & Comfort", description: "Local anaesthesia; sedation options available for anxious patients or complex extractions.", image: "/c6.jpg" },
      { step: 3, title: "Extraction", description: "Tooth is removed using minimally invasive surgical technique; bone trimming and suturing performed when required.", image: "/dental-treatment-room.jpg" },
      { step: 4, title: "Post-op Care & Review", description: "Controlled bleeding, pain management, and follow-up to confirm healing and remove sutures if placed.", image: "/c2.jpg" },
    ],
    benefits: [
      "Resolve recurrent infections and pain",
      "Prevent crowding and damage to neighbouring teeth",
      "Reduce the future risk of cysts or decay around partially erupted teeth",
      "Restore comfort and ease of oral hygiene in the back of the mouth",
    ],
    idealFor: ["Patients with impacted or infected wisdom teeth", "Those with swelling, pain or difficulty cleaning the area", "When radiographic assessment shows risk to adjacent teeth"],
    timeline: { duration: "Single surgical appointment for most cases (30–90 minutes)", frequency: "One procedure with routine follow-up", recovery: "7–10 days for soft-tissue healing; bone remodeling over months" },
    // @ts-ignore - faqs used by client component
    faqs: [
      { q: "How long does the procedure take?", a: "Simple removals may take 20–30 minutes; impacted or surgical cases can take longer depending on complexity." },
      { q: "What should I expect after the extraction?", a: "Swelling and mild-to-moderate discomfort are common for 2–5 days; strong analgesics and cold packs help manage symptoms." },
      { q: "Are there risks of nerve injury?", a: "Careful imaging reduces risk; temporary numbness is uncommon and permanent nerve injury is rare but discussed when risk is present." },
      { q: "When should I contact the clinic after surgery?", a: "If you have uncontrolled bleeding, increasing severe pain, fever or signs of spreading swelling, contact us immediately." },
    ]
  },
  "emergency-dentist": {
    title: "Emergency Dentist in Vanasthalipuram",
    description: "Immediate assessment and urgent care for severe tooth pain, dental trauma, swelling, bleeding or any dental problem needing prompt attention. Our team triages and treats urgent issues to relieve pain and prevent complications.",
    heroImage: "/dental-treatment-room.jpg",
    uses: [
      "Severe, uncontrolled toothache or facial swelling",
      "Dental trauma with broken or avulsed (knocked-out) teeth",
      "Uncontrolled bleeding from the mouth",
      "Rapidly spreading infection or difficulty breathing/swallowing related to dental origin",
    ],
    treatmentProcess: [
      { step: 1, title: "Triage & Pain Control", description: "Immediate assessment, analgesia and stabilisation to control pain and reduce acute symptoms.", image: "/c2.jpg" },
      { step: 2, title: "Diagnostic Imaging & Assessment", description: "X-rays to determine the extent of injury or infection and plan urgent care.", image: "/c1.jpg" },
      { step: 3, title: "Urgent Treatment", description: "Where needed: temporary dressings, tooth replantation (when appropriate), drainage of abscesses, antibiotics and definitive procedures scheduled.", image: "/c6.jpg" },
      { step: 4, title: "Follow-up Care", description: "Arrange definitive restorative or surgical care and monitor recovery closely.", image: "/dental-treatment-room.jpg" },
    ],
    benefits: [
      "Rapid relief of severe pain and swelling",
      "Reduce risk of spreading infection",
      "Increase chance of saving traumatised teeth if treated promptly",
      "Provide immediate stabilisation and plan definitive care",
    ],
    idealFor: ["Anyone with sudden severe dental pain", "Patients with facial swelling or trauma", "Uncontrolled bleeding or signs of spreading infection"],
    timeline: { duration: "Immediate assessment with treatment as required", frequency: "Single urgent visit with scheduled follow-up", recovery: "Varies by condition; may need several days to weeks" },
    // @ts-ignore - faqs used by client component
    faqs: [
      { q: "What should I do before arriving?", a: "Control bleeding with gentle pressure, apply cold packs for swelling, keep any avulsed tooth moist (milk or saliva) and come to the clinic promptly." },
      { q: "Will I need antibiotics?", a: "Antibiotics are prescribed when an infection is present or there is a high risk; the dentist will decide based on clinical findings." },
      { q: "Can a knocked-out tooth be saved?", a: "If a tooth is replanted within a short window (ideally under 60 minutes) and handled correctly, it has the best chance of survival. Bring the tooth in a suitable medium." },
      { q: "When is an emergency critical?", a: "Difficulty breathing or swallowing, rapidly increasing swelling, or uncontrolled bleeding require immediate emergency medical care. Call emergency services or go to the nearest emergency department." },
    ]
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
