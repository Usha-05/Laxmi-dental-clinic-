import type { Metadata } from "next"
import LocalSeoTreatmentPage, { type LocalSeoTreatment } from "@/components/local-seo-treatment-page"

export const metadata: Metadata = {
  title: "Braces & Clear Aligners in Vanasthalipuram | Laxmi Face",
  description: "Orthodontic assessment for crooked teeth, gaps, crowding and bite concerns. Explore braces and clear aligners in Vanasthalipuram.",
  alternates: { canonical: "/treatments/braces" },
}

const data: LocalSeoTreatment = {
  title: "Braces & Clear Aligners in Vanasthalipuram | Laxmi Face",
  description: metadata.description as string,
  h1: "Braces and Clear Aligners in Vanasthalipuram",
  intro: "Crooked teeth, crowding, gaps, forwardly placed teeth and bite concerns can affect appearance, cleaning and function. Orthodontic treatment planning begins with a clinical examination of the teeth, jaws, bite and facial profile.",
  image: "/c5.jpg",
  imageAlt: "Dental treatment area at Laxmi Face and Multispeciality Dental Hospital",
  reviewer: "Dr. Sri Lakshmi Swetha, BDS, MDS – Orthodontist and Aligner Specialist",
  reviewerNote: "Verify all credentials and registration details before publication.",
  sections: [
    { heading: "Treatment options", bullets: ["Metal braces: A fixed option that can manage a wide range of orthodontic problems.", "Ceramic braces: A less visible fixed option for suitable patients.", "Clear aligners: Removable trays for selected cases, requiring consistent daily wear.", "Growth modification: Age-appropriate assessment for selected jaw and bite concerns in growing children."] },
    { heading: "What happens at the first orthodontic visit?", steps: ["Discuss the patient’s main concern and expectations.", "Examine tooth alignment, bite, jaw relationship and oral health.", "Advise records such as photographs, scans or X-rays when required.", "Explain suitable options, limitations, expected duration and retention.", "Discuss the treatment fee and payment plan before starting."] },
  ],
  faqs: [
    { q: "Which is better: braces or aligners?", a: "The appropriate option depends on the type and severity of the orthodontic problem, oral health, age, lifestyle and ability to follow treatment instructions." },
    { q: "How long does treatment take?", a: "Treatment duration varies with the problem, chosen appliance, biological response and patient cooperation. An individual estimate is provided after assessment." },
    { q: "Will retainers be required?", a: "Retainers are commonly recommended after active orthodontic treatment to help maintain the corrected tooth positions." },
    { q: "Can adults undergo orthodontic treatment?", a: "Many adults can be treated after assessing oral health, gum support, existing restorations and the orthodontic problem." },
  ],
  cta: "Book an orthodontic consultation in Vanasthalipuram. Call or WhatsApp 7794879535.",
}

export default function BracesPage() { return <LocalSeoTreatmentPage data={data} /> }
