import TreatmentPageTemplate from "@/components/treatment-page-template"

export default function CystRemovalPage() {
  return (
    <TreatmentPageTemplate
      title="Cyst Removal"
      description="Professional surgical removal of dental cysts to prevent complications and restore oral health. Our experienced oral surgeons use advanced techniques to safely remove cysts while preserving surrounding tissue."
      heroImage="/female-dentist-professional.jpg"
      uses={[
        "Removal of odontogenic cysts (dental origin cysts)",
        "Treatment of radicular cysts (root-related cysts)",
        "Elimination of dentigerous cysts (around unerupted teeth)",
        "Management of residual cysts after tooth extraction",
        "Prevention of bone destruction and tooth displacement",
        "Treatment of infected or symptomatic cysts",
        "Prevention of cyst recurrence",
        "Preservation of adjacent teeth and bone structure"
      ]}
      treatmentProcess={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "Comprehensive examination including X-rays, CT scans, and clinical evaluation to assess cyst size and location",
          image: "/professional-dentist-portrait.jpg"
        },
        {
          step: 2,
          title: "Treatment Planning",
          description: "Detailed surgical plan developed using 3D imaging to determine the best approach for cyst removal",
          image: "/dental-treatment-room.jpg"
        },
        {
          step: 3,
          title: "Surgical Removal",
          description: "Careful surgical excision of the cyst under local or general anesthesia, ensuring complete removal",
          image: "/female-surgical-orthodontics.jpg"
        },
        {
          step: 4,
          title: "Post-Operative Care",
          description: "Follow-up appointments to monitor healing, ensure proper bone regeneration, and prevent recurrence",
          image: "/female-preventive-care.jpg"
        }
      ]}
      benefits={[
        "Prevents further bone destruction and tooth displacement",
        "Eliminates pain and discomfort caused by cyst growth",
        "Reduces risk of infection and complications",
        "Preserves adjacent teeth and oral structures",
        "Professional surgical expertise ensures complete removal",
        "Minimally invasive techniques when possible",
        "Comprehensive follow-up care for optimal healing"
      ]}
      idealFor={[
        "Patients with symptomatic dental cysts",
        "Cysts causing bone destruction or tooth displacement",
        "Large cysts requiring surgical intervention",
        "Recurrent cysts that haven't responded to other treatments",
        "Patients with infected or painful cysts",
        "Prevention of future complications"
      ]}
      timeline={{
        duration: "30-90 minutes (depending on cyst size and complexity)",
        frequency: "Single procedure with follow-up visits",
        recovery: "7-14 days for initial healing, 3-6 months for complete bone regeneration"
      }}
    />
  )
}


