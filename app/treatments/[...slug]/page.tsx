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
      reviewer: "Laxmi Face and Multispeciality Dental Hospital, Vanasthalipuram, Hyderabad",
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
  "orthodontics/traditional-braces": {
    title: "Traditional Braces in Vanasthalipuram | Laxmi Face",
    description: "Traditional braces help correct crowding, spacing and bite issues in Vanasthalipuram. Explore orthodontic assessment and care at Laxmi Face and Multispeciality Dental Hospital.",
    data: {
      title: "Traditional Braces in Vanasthalipuram | Laxmi Face",
      description: "Traditional braces help correct crowding, spacing and bite issues in Vanasthalipuram. Explore orthodontic assessment and care at Laxmi Face and Multispeciality Dental Hospital.",
      h1: "Traditional Braces in Vanasthalipuram",
      intro: "Traditional braces remain a dependable option for correcting overcrowding, spacing, bite problems and more complex tooth movement. A thorough orthodontic assessment helps decide whether fixed braces or another appliance is most suitable.",
      image: "/c5.jpg",
      imageAlt: "Orthodontic consultation at Laxmi Face and Multispeciality Dental Hospital",
      reviewer: "Dr. Sri Lakshmi Swetha, BDS, MDS – Orthodontist & Aligner Specialist",
      sections: [
        { heading: "When traditional braces are considered", bullets: ["Complex crowding or spacing issues", "Overbite, underbite or open bite concerns", "Teeth that require more significant movement than aligners alone may provide", "Patients who prefer a fixed, time-tested orthodontic option"] },
        { heading: "What happens at the first visit?", steps: ["Review the main concerns and expected outcome.", "Examine teeth, bite, gum support and facial profile.", "Take photographs, scans or X-rays when required.", "Discuss the appliance choice, estimated duration and retention plan."] },
        { heading: "Aftercare and retention", paragraphs: ["Active treatment is followed by retention to help maintain tooth positions. Retainers are typically recommended after braces are removed, and regular follow-up supports long-term stability."] },
      ],
      faqs: [
        { q: "Who is a good candidate for traditional braces?", a: "Traditional braces are often considered for more complex orthodontic problems, especially when fixed appliance therapy is needed to guide tooth and jaw alignment." },
        { q: "How long will treatment take?", a: "Treatment length varies with the case. An individual estimate is explained after the orthodontic exam and planning review." },
        { q: "Do braces affect eating and speech?", a: "There may be an adjustment period, but most patients adapt quickly. Eating a careful diet and maintaining oral hygiene are important during treatment." },
        { q: "Are retainers required after braces?", a: "Yes, retainers are usually recommended to help maintain the corrected positions of the teeth after active treatment." },
      ],
      cta: "Book an orthodontic consultation in Vanasthalipuram. Call or WhatsApp 7794879535.",
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
