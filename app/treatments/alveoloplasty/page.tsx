import TreatmentPageTemplate from "@/components/treatment-page-template"

export default function AlveoloplastyPage() {
  return (
    <TreatmentPageTemplate
      title="Alveoloplasty"
      description="Surgical reshaping and smoothing of the jawbone ridge to prepare for dentures or improve oral function. This procedure ensures a comfortable fit for prosthetic devices and optimal oral health."
      heroImage="/female-dentist-professional.jpg"
      uses={[
        "Preparation for denture placement",
        "Smoothing of irregular jawbone ridges",
        "Removal of sharp bony projections",
        "Correction of jawbone deformities after extractions",
        "Improvement of denture stability and comfort",
        "Treatment of bone spurs and sharp edges",
        "Preparation for dental implants",
        "Enhancement of oral function and comfort"
      ]}
      treatmentProcess={[
        {
          step: 1,
          title: "Evaluation",
          description: "Comprehensive examination of jawbone structure, X-rays, and assessment of prosthetic needs",
          image: "/professional-dentist-portrait.jpg"
        },
        {
          step: 2,
          title: "Surgical Planning",
          description: "Detailed plan for bone reshaping to achieve optimal ridge contour for dentures or implants",
          image: "/dental-treatment-room.jpg"
        },
        {
          step: 3,
          title: "Bone Reshaping",
          description: "Precise surgical reshaping and smoothing of the alveolar ridge under local anesthesia",
          image: "/female-surgical-orthodontics.jpg"
        },
        {
          step: 4,
          title: "Healing & Prosthesis",
          description: "Complete healing period followed by denture fitting or implant placement for optimal results",
          image: "/female-patient-smile.jpg"
        }
      ]}
      benefits={[
        "Ensures comfortable and stable denture fit",
        "Eliminates sharp bone edges and discomfort",
        "Improves oral function and speech",
        "Prevents denture-related sores and irritation",
        "Creates optimal foundation for dental prosthetics",
        "Enhances overall oral health and comfort",
        "Professional surgical expertise for optimal results"
      ]}
      idealFor={[
        "Patients preparing for dentures",
        "Individuals with irregular jawbone ridges",
        "Patients experiencing denture discomfort",
        "Those with sharp bony projections",
        "Patients requiring dental implants",
        "Individuals seeking improved oral function"
      ]}
      timeline={{
        duration: "30-60 minutes",
        frequency: "Single procedure",
        recovery: "2-4 weeks for complete healing before denture fitting"
      }}
    />
  )
}


