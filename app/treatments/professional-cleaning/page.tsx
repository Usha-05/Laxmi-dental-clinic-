import type { Metadata } from "next"
import LocalSeoTreatmentPage, { type LocalSeoTreatment } from "@/components/local-seo-treatment-page"

export const metadata: Metadata = {
  title: "Teeth Cleaning in Vanasthalipuram | Laxmi Face Dental",
  description: "Professional teeth cleaning and gum assessment in Vanasthalipuram for tartar, surface stains, bleeding gums and bad breath.",
  alternates: { canonical: "/treatments/professional-cleaning" },
}

const data: LocalSeoTreatment = {
  title: "Teeth Cleaning in Vanasthalipuram | Laxmi Face Dental",
  description: metadata.description as string,
  h1: "Teeth Cleaning and Gum Care in Vanasthalipuram",
  intro: "Tartar, surface stains, bleeding gums, bad breath, swollen or tender gums, recession and loose teeth all warrant an assessment. Professional cleaning removes deposits and helps the dental team identify when deeper gum care may be needed.",
  image: "/c3.jpg",
  imageAlt: "Dental treatment area at Laxmi Face and Multispeciality Dental Hospital",
  reviewer: "Treating dentist — full name and verified qualifications to be confirmed by the clinic before publication.",
  reviewerNote: "Do not publish a named reviewer until the treating dentist confirms the attribution and credentials.",
  sections: [
    { heading: "What is assessed?", bullets: ["Visible tartar and plaque deposits", "Surface stains and areas that are difficult to clean", "Bleeding, swollen or tender gums", "Bad breath and oral-hygiene concerns", "Recession, loose teeth or signs that may need further periodontal assessment"] },
    { heading: "What happens during cleaning?", steps: ["Clinical examination of the teeth and gums.", "Assessment of deposits and gum condition.", "Professional removal of plaque and calculus with appropriate instruments.", "Polishing when indicated to remove surface stains.", "Advice on home cleaning and whether further gum assessment is required."] },
    { heading: "Why follow-up may be recommended", paragraphs: ["Cleaning is not a substitute for treatment of active gum disease. If examination suggests deeper periodontal problems, the dentist explains the appropriate next step and whether additional treatment or review is needed."] },
  ],
  faqs: [
    { q: "Does everyone need professional teeth cleaning?", a: "The need and frequency depend on oral hygiene, tartar formation, gum health and individual clinical findings." },
    { q: "Will cleaning damage enamel?", a: "Professional cleaning is designed to remove deposits from tooth surfaces. The dentist or hygienist selects appropriate instruments and techniques for the patient’s condition." },
    { q: "Why do gums bleed during brushing?", a: "Bleeding can be associated with gum inflammation, plaque or calculus, although other causes are possible. A dental assessment can identify the likely cause." },
    { q: "Can cleaning permanently prevent gum disease?", a: "No. Long-term gum health also depends on daily oral hygiene, risk factors, professional review and treatment when disease is present." },
  ],
  cta: "Book a teeth-cleaning and gum assessment in Vanasthalipuram. Call or WhatsApp 7794879535.",
}

export default function ProfessionalCleaningPage() { return <LocalSeoTreatmentPage data={data} /> }
