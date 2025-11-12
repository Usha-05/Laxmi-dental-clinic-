import TreatmentPageTemplate from "@/components/treatment-page-template"

export default function BiopsyPage() {
  return (
    <TreatmentPageTemplate
      title="Biopsy"
      description="Diagnostic procedure involving the removal of tissue samples for laboratory analysis. Essential for detecting oral cancer, infections, and other pathological conditions early."
      heroImage="/female-dentist-professional.jpg"
      uses={[
        "Diagnosis of oral cancer and precancerous lesions",
        "Identification of suspicious oral lesions",
        "Detection of oral infections and diseases",
        "Evaluation of unexplained oral growths",
        "Monitoring of chronic oral conditions",
        "Confirmation of diagnosis before treatment",
        "Early detection of pathological changes",
        "Assessment of treatment effectiveness"
      ]}
      treatmentProcess={[
        {
          step: 1,
          title: "Suspicious Lesion Detection",
          description: "Clinical examination identifies suspicious areas requiring further investigation",
          image: "/professional-dentist-portrait.jpg"
        },
        {
          step: 2,
          title: "Biopsy Planning",
          description: "Determination of biopsy type (incisional, excisional, or brush) based on lesion characteristics",
          image: "/dental-treatment-room.jpg"
        },
        {
          step: 3,
          title: "Tissue Sample Collection",
          description: "Careful removal of tissue sample under local anesthesia for laboratory analysis",
          image: "/female-dentist-professional.jpg"
        },
        {
          step: 4,
          title: "Laboratory Analysis & Results",
          description: "Pathological examination and diagnosis, followed by discussion of results and treatment plan",
          image: "/professional-dental-team-portrait.jpg"
        }
      ]}
      benefits={[
        "Early detection of oral cancer and precancerous conditions",
        "Accurate diagnosis for appropriate treatment planning",
        "Peace of mind through definitive diagnosis",
        "Minimally invasive procedure with local anesthesia",
        "Quick recovery with minimal discomfort",
        "Essential for early intervention and better outcomes",
        "Professional expertise in oral pathology"
      ]}
      idealFor={[
        "Patients with suspicious oral lesions or growths",
        "Individuals with persistent oral sores or ulcers",
        "Patients with white or red patches in the mouth",
        "Those with unexplained oral changes",
        "Patients with risk factors for oral cancer",
        "Individuals requiring diagnostic confirmation"
      ]}
      timeline={{
        duration: "15-30 minutes",
        frequency: "Single procedure",
        recovery: "3-7 days for healing, 1-2 weeks for lab results"
      }}
    />
  )
}


