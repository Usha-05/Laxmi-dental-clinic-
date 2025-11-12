import TreatmentPageTemplate from "@/components/treatment-page-template"

export default function PreCancerousLesionsEvaluationPage() {
  return (
    <TreatmentPageTemplate
      title="Pre-Cancerous Lesions Evaluation"
      description="Comprehensive assessment and monitoring of precancerous oral conditions to detect and treat potential oral cancer early. Our expert team provides thorough evaluation and treatment planning."
      heroImage="/female-dentist-professional.jpg"
      uses={[
        "Early detection of precancerous oral conditions",
        "Evaluation of leukoplakia (white patches)",
        "Assessment of erythroplakia (red patches)",
        "Monitoring of oral lichen planus",
        "Evaluation of oral submucous fibrosis",
        "Detection of dysplastic changes in oral tissue",
        "Risk assessment for oral cancer development",
        "Comprehensive treatment planning for precancerous conditions"
      ]}
      treatmentProcess={[
        {
          step: 1,
          title: "Clinical Examination",
          description: "Thorough visual examination and documentation of oral lesions, their characteristics, and location",
          image: "/professional-dentist-portrait.jpg"
        },
        {
          step: 2,
          title: "Advanced Diagnostic Tools",
          description: "Use of specialized imaging, biopsy, and diagnostic techniques to assess lesion nature and risk",
          image: "/dental-treatment-room.jpg"
        },
        {
          step: 3,
          title: "Risk Assessment",
          description: "Comprehensive evaluation of risk factors, lesion characteristics, and potential for malignant transformation",
          image: "/professional-dental-team-portrait.jpg"
        },
        {
          step: 4,
          title: "Treatment & Monitoring",
          description: "Implementation of appropriate treatment plan and regular monitoring to prevent progression to cancer",
          image: "/female-preventive-care.jpg"
        }
      ]}
      benefits={[
        "Early detection prevents progression to oral cancer",
        "Comprehensive evaluation by oral pathology experts",
        "Personalized treatment plans based on risk assessment",
        "Regular monitoring ensures timely intervention",
        "Reduces risk of malignant transformation",
        "Peace of mind through thorough evaluation",
        "Access to advanced diagnostic technologies"
      ]}
      idealFor={[
        "Patients with white or red patches in the mouth",
        "Individuals with persistent oral lesions",
        "Patients with risk factors (tobacco use, alcohol, etc.)",
        "Those with family history of oral cancer",
        "Patients with oral lichen planus or other chronic conditions",
        "Individuals requiring regular oral cancer screening"
      ]}
      timeline={{
        duration: "30-60 minutes for evaluation",
        frequency: "Initial evaluation plus regular follow-ups (every 3-6 months)",
        recovery: "Varies based on treatment plan and lesion type"
      }}
    />
  )
}


