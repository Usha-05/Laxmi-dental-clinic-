import LocalSeoTreatmentPage, { type LocalSeoTreatment } from "@/components/local-seo-treatment-page"
import TreatmentPageClient from './TreatmentPageClient'
import { getTreatmentDataBySlug, generateDefaultTreatmentData } from "@/lib/treatment-data-all"

const priority: Record<string, { title: string; description: string; data: LocalSeoTreatment }> = {
  "surgical-treatments/wisdom-tooth-removal": {
    title: "Wisdom Tooth Removal in Vanasthalipuram | Laxmi Face",
    description: "Wisdom tooth pain, swelling or food trapping? Get a clinical examination and digital X-ray assessment at our Vanasthalipuram dental hospital.",
    data: {
      title: "Wisdom Tooth Removal in Vanasthalipuram | Laxmi Face",
      description: "Wisdom tooth pain, swelling or food trapping? Get a clinical examination and digital X-ray assessment at our Vanasthalipuram dental hospital.",
      h1: "Wisdom Tooth Assessment and Removal in Vanasthalipuram",
      intro: "A wisdom tooth may erupt normally, remain partly covered by gum, grow at an angle or remain trapped inside the jaw. Pain or swelling should be assessed to understand the tooth position, surrounding structures and whether removal is necessary.",
      image: "/c6.jpg",
      imageAlt: "Dental treatment area at Laxmi Face and Multispeciality Dental Hospital",
      reviewer: "Dr. Vishnu Gowtham Marella, BDS, MDS – Oral and Maxillofacial Surgeon",
      reviewerNote: "Verify all credentials and registration details before publication.",
      sections: [
        { heading: "Common reasons for assessment", bullets: ["Pain or swelling behind the last tooth", "Food trapping and repeated gum inflammation", "Difficulty opening the mouth or discomfort while chewing", "Decay in the wisdom tooth or adjacent tooth", "An impacted tooth seen on an X-ray"] },
        { heading: "What happens during assessment?", paragraphs: ["The surgeon examines the mouth and reviews a suitable dental X-ray or OPG when required. The tooth angle, root shape, available space and relationship to nearby structures are considered. The need for removal, expected complexity, aftercare and estimated cost are explained before the procedure."] },
        { heading: "Aftercare overview", paragraphs: ["Written instructions should cover pressure on the gauze, food choices, oral hygiene, prescribed medicines, activity and warning signs. Healing varies according to the tooth position, procedure and individual health factors."] },
      ],
      faqs: [
        { q: "Does every wisdom tooth need removal?", a: "No. Removal is advised according to symptoms, disease risk, tooth position and clinical findings." },
        { q: "Why may an OPG be required?", a: "An OPG provides a panoramic view that can help assess wisdom teeth, roots, jawbone and nearby structures when clinically indicated." },
        { q: "Is the cost the same for every wisdom tooth?", a: "No. Cost varies with tooth position, root anatomy, surrounding structures and procedure complexity. It should be explained after assessment." },
        { q: "When should I seek urgent care after removal?", a: "Contact the clinic for worsening swelling, uncontrolled bleeding, fever, breathing or swallowing difficulty, or any concern listed in the surgeon’s aftercare instructions." },
      ],
      cta: "Book a wisdom tooth assessment in Vanasthalipuram. Call or WhatsApp 7794879535.",
    },
  },
  "emergency-dentist": {
    title: "Emergency Dentist in Vanasthalipuram | Laxmi Face",
    description: "Severe tooth pain, swelling, broken teeth or dental injury? Contact our Vanasthalipuram dental hospital for clinical and digital X-ray assessment.",
    data: {
      title: "Emergency Dentist in Vanasthalipuram | Laxmi Face",
      description: "Severe tooth pain, swelling, broken teeth or dental injury? Contact our Vanasthalipuram dental hospital for clinical and digital X-ray assessment.",
      h1: "Emergency Dentist in Vanasthalipuram",
      intro: "A sudden toothache, swelling, broken tooth, bleeding or dental injury needs timely assessment. The first priority is to identify the cause, control urgent symptoms and decide what treatment is required.",
      image: "/c2.jpg",
      imageAlt: "Dental clinic interior at Laxmi Face and Multispeciality Dental Hospital",
      reviewer: "Treating dentist — full name and verified qualifications to be confirmed by the clinic before publication.",
      reviewerNote: "Do not publish a named reviewer until the treating dentist confirms the attribution and credentials.",
      sections: [
        { heading: "Common dental emergencies", bullets: ["Severe or persistent tooth pain", "Swelling of the gum, face or jaw", "Broken or fractured teeth", "Dental injury or a knocked-out permanent tooth", "Bleeding or signs of infection requiring prompt assessment"] },
        { heading: "What to expect", steps: ["Clinical triage and examination to understand the immediate problem.", "Dental X-ray or other imaging when clinically required.", "Urgent treatment to stabilise the condition and control symptoms.", "A plan for definitive treatment and follow-up when the first visit is not sufficient."] },
        { heading: "Important emergency advice", paragraphs: ["Breathing or swallowing difficulty, rapidly increasing facial or neck swelling, or uncontrolled bleeding requires immediate emergency medical care. Call 7794879535 for urgent dental guidance and appointment availability when the situation is dental in nature and safe to travel."] },
      ],
      faqs: [
        { q: "Can I wait if severe tooth pain improves temporarily?", a: "Temporary improvement does not necessarily mean the underlying problem has resolved. Assessment is appropriate when pain is severe, recurrent or associated with swelling or other symptoms." },
        { q: "Will I need antibiotics?", a: "Antibiotics are not required for every dental emergency. They are prescribed only when clinically indicated after assessment." },
        { q: "What should I do with a knocked-out permanent tooth?", a: "Seek urgent dental care. Handle the tooth by the crown, not the root. If safe and possible, follow immediate instructions from a dental professional while travelling to the clinic." },
        { q: "Will the complete treatment be performed at the first visit?", a: "The first priority is diagnosis and appropriate urgent care. Definitive treatment timing depends on the condition, available records, swelling, medical factors and procedure required." },
      ],
      cta: "Call 7794879535 for urgent dental guidance and appointment availability. Breathing or swallowing difficulty requires immediate emergency medical care.",
    },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const fullSlug = Array.isArray(slug) ? slug.join('/') : ''
  if (priority[fullSlug]) {
    return { title: priority[fullSlug].title, description: priority[fullSlug].description, alternates: { canonical: `/treatments/${fullSlug}` } }
  }
  const data = getTreatmentDataBySlug(fullSlug) || generateDefaultTreatmentData(fullSlug)
  return { title: `${data.title} in Vanasthalipuram | Laxmi Face Dental Hospital`, description: data.description || `${data.title} treatment at Laxmi Face Dental Hospital in Vanasthalipuram.`, alternates: { canonical: `/treatments/${fullSlug}` } }
}

export default async function DynamicTreatmentPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params
  const fullPath = Array.isArray(slug) ? slug.join('/') : ''
  if (priority[fullPath]) return <LocalSeoTreatmentPage data={priority[fullPath].data} />
  return <TreatmentPageClient slug={fullPath} />
}
