// Helper function to extract slug from href
function getSlugFromHref(href: string): string {
  return href.replace("/treatments/", "").replace("/", "-")
}

// Helper function to generate AI-style preview data
export interface TreatmentPreviewData {
  title: string
  description: string
  highlights: string[]
  duration?: string
  complexity?: string
  recommendation?: string
}

// AI-generated preview data for treatments
// This provides AI-powered insights and previews for each treatment
export function getTreatmentPreviewData(href: string, label: string): TreatmentPreviewData {
  const slug = getSlugFromHref(href)
  
  // Map of treatment-specific AI preview data
  const previewDataMap: Record<string, TreatmentPreviewData> = {
    "invisalign": {
      title: "Clear Aligners / Invisalign",
      description:
        "Transform your smile with cutting-edge clear aligner technology. Our AI-analyzed treatment plans use advanced 3D imaging and predictive modeling to create a personalized journey toward your perfect smile. Experience nearly invisible orthodontic treatment with maximum comfort and predictable results.",
      highlights: [
        "Nearly invisible treatment - perfect for professionals",
        "AI-powered 3D treatment planning for optimal results",
        "Removable aligners for better oral hygiene",
        "Shorter treatment time compared to traditional braces",
        "Predictable outcomes with virtual smile preview",
        "Comfortable and convenient lifestyle-friendly option",
      ],
      duration: "6-24 months",
      complexity: "Moderate",
      recommendation:
        "Based on AI analysis, this treatment is ideal for adults and teens seeking discreet orthodontic correction. Our advanced imaging technology can predict your results before treatment begins.",
    },
    "braces": {
      title: "Braces",
      description:
        "Time-tested orthodontic treatment enhanced with modern AI-assisted planning. Our advanced diagnostic tools help create the most efficient treatment plan, reducing overall treatment time while ensuring optimal results.",
      highlights: [
        "AI-optimized treatment planning",
        "Proven effective for complex cases",
        "Predictable and reliable results",
        "Suitable for all ages",
        "Cost-effective long-term solution",
        "Comprehensive correction of alignment issues",
      ],
      duration: "18-36 months",
      complexity: "Moderate",
      recommendation:
        "AI analysis shows traditional braces are most effective for severe malocclusions and complex cases. Our predictive modeling can estimate treatment duration with high accuracy.",
    },
    "tmj-disorders": {
      title: "TMJ Disorders / TMD",
      description:
        "Comprehensive AI-assisted diagnosis and treatment of temporomandibular joint disorders. Our advanced diagnostic tools use machine learning to analyze jaw movement patterns, bite force distribution, and muscle tension to create personalized treatment plans.",
      highlights: [
        "AI-powered diagnostic imaging and analysis",
        "Personalized treatment based on individual patterns",
        "Non-invasive treatment options prioritized",
        "Comprehensive pain management approach",
        "Long-term tracking and monitoring",
        "Multi-disciplinary care coordination",
      ],
      duration: "3-12 months",
      complexity: "Moderate to High",
      recommendation:
        "AI analysis of your symptoms can help identify the root cause and predict treatment outcomes. Early intervention typically results in faster recovery and better long-term outcomes.",
    },
    "root-canal": {
      title: "Root Canal Treatment",
      description:
        "Advanced endodontic treatment using AI-assisted imaging and precision instruments. Our technology helps identify all root canals, detect complications early, and ensure complete treatment success.",
      highlights: [
        "AI-enhanced imaging for precise diagnosis",
        "Pain-free treatment with modern techniques",
        "Preserves natural tooth structure",
        "High success rate with proper care",
        "Single-visit options available",
        "Comprehensive infection elimination",
      ],
      duration: "1-2 visits (1-2 hours each)",
      complexity: "Moderate",
      recommendation:
        "AI analysis of pre-treatment imaging can predict treatment complexity and success rates. Early detection and treatment prevent tooth loss and more invasive procedures.",
    },
    "implants": {
      title: "Dental Implants",
      description:
        "State-of-the-art implant dentistry with AI-guided planning and placement. Our advanced imaging and 3D planning ensure optimal implant positioning for long-term success and natural aesthetics.",
      highlights: [
        "AI-guided 3D implant planning",
        "Precise placement with surgical guides",
        "Natural-looking results",
        "Long-term durability and success",
        "Bone preservation techniques",
        "Minimally invasive procedures",
      ],
      duration: "3-6 months (healing period included)",
      complexity: "High",
      recommendation:
        "AI analysis of bone density and anatomy ensures optimal implant placement. Our predictive models help estimate healing time and long-term success rates with over 95% accuracy.",
    },
  }

  // Return specific preview data if available
  if (previewDataMap[slug]) {
    return previewDataMap[slug]
  }

  // Generate default AI preview data for treatments not in the map
  return {
    title: label,
    description: `AI-powered analysis suggests this treatment offers comprehensive dental care solutions. Our advanced diagnostic and treatment planning tools ensure personalized, effective care tailored to your specific needs. Modern dental technology combined with expert care provides optimal outcomes and patient satisfaction.`,
    highlights: [
      "Personalized treatment planning",
      "Advanced diagnostic capabilities",
      "Comprehensive care approach",
      "Expert professional guidance",
      "Modern treatment techniques",
      "Patient-centered experience",
    ],
    duration: "Varies by case",
    complexity: "Varies",
    recommendation:
      "Our AI analysis recommends scheduling a consultation to determine the best treatment approach for your specific needs. Early intervention often leads to better outcomes.",
  }
}

