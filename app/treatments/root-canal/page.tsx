import type { Metadata } from "next"
import LocalSeoTreatmentPage, { type LocalSeoTreatment } from "@/components/local-seo-treatment-page"

export const metadata: Metadata = {
  title: "Root Canal Treatment in Vanasthalipuram | Laxmi Face",
  description: "Tooth pain or deep decay? Get a clinical examination and digital X-ray assessment for root canal treatment at our Vanasthalipuram dental hospital.",
  alternates: { canonical: "/treatments/root-canal" },
}

const data: LocalSeoTreatment = {
  title: "Root Canal Treatment in Vanasthalipuram | Laxmi Face",
  description: metadata.description as string,
  h1: "Root Canal Treatment in Vanasthalipuram",
  intro: "Persistent tooth pain, pain while biting, sensitivity that lingers, swelling or a deeply decayed tooth may indicate irritation or infection inside the tooth. A root canal assessment helps determine whether the tooth can be preserved and what treatment is required.",
  image: "/c1.jpg",
  imageAlt: "Dental treatment room at Laxmi Face and Multispeciality Dental Hospital",
  reviewer: "Treating dentist — full name and verified qualifications to be confirmed by the clinic before publication.",
  reviewerNote: "Do not publish a named reviewer until the treating dentist confirms the attribution and credentials.",
  sections: [
    { heading: "When should you book an assessment?", bullets: ["Spontaneous or severe tooth pain", "Pain while chewing or biting", "Lingering sensitivity to hot or cold", "Swelling, gum boil or recurrent discharge near a tooth", "Deep decay, a fractured tooth or a large old filling"] },
    { heading: "How the tooth is evaluated", paragraphs: ["The dentist takes a history, examines the tooth and surrounding gums, and performs appropriate clinical tests. A dental X-ray is advised when required to evaluate the roots and surrounding bone. The findings, restorability of the tooth, treatment sequence and estimated cost are explained before starting."] },
    { heading: "Typical treatment journey", steps: ["Diagnosis and assessment of whether the tooth can be saved.", "Local anaesthesia and isolation of the tooth.", "Cleaning and shaping of the infected root-canal space.", "Disinfection, filling of the canals and restoration of the tooth.", "Assessment for a suitable final restoration or crown when indicated."] },
  ],
  faqs: [
    { q: "Is every painful tooth treated with a root canal?", a: "No. Pain can arise from decay, gum problems, cracks, bite-related issues or other causes. Treatment is selected only after examination and appropriate tests." },
    { q: "How many visits are required?", a: "The number of appointments depends on the tooth, infection, anatomy and clinical findings. The dentist explains the expected sequence after assessment." },
    { q: "Is a crown always required?", a: "Not every tooth has the same requirement. The amount of remaining tooth structure, tooth position and bite influence the final restoration plan." },
    { q: "Can antibiotics replace root canal treatment?", a: "Antibiotics do not remove infected tissue from inside a tooth. They are prescribed only when clinically indicated as part of an appropriate treatment plan." },
  ],
  cta: "Book a root canal assessment at Laxmi Face and Multispeciality Dental Hospital, Vanasthalipuram. Call or WhatsApp 7794879535.",
}

export default function RootCanalPage() { return <LocalSeoTreatmentPage data={data} /> }
