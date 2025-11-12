"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import DentalSymbolsBackground from "@/components/dental-symbols-background"

type AssessmentType = "invisalign" | "tmj" | "emergency" | null

interface Question {
  id: number
  text: string
}

const assessments: Record<
  Exclude<AssessmentType, null>,
  { title: string; description: string; questions: Question[] }
> = {
  invisalign: {
    title: "Clear Aligner / Invisalign Eligibility Assessment",
    description: "Determine if you're a suitable candidate for clear aligner or Invisalign treatment.",
    questions: [
      { id: 1, text: "Will you wear the aligners for at least 20-22 hours daily?" },
      { id: 2, text: "Have you previously undergone braces treatment and need retreatment but don't want braces?" },
      { id: 3, text: "Are you willing to remove the aligners when eating or drinking anything other than water?" },
      { id: 4, text: "Will you maintain good oral hygiene habits, including brushing and flossing regularly?" },
      { id: 5, text: "Are you concerned with the visibility of your braces?" },
      { id: 6, text: "Does your work or study not permit you to visit the clinic monthly for check-ups?" },
      { id: 7, text: "Are you planning to get married or go abroad during the treatment process?" },
      { id: 8, text: "Do you undergo physical sports training that braces may hinder?" },
      { id: 9, text: "Are you concerned about food restrictions during orthodontic treatment?" },
      { id: 10, text: "Have you discontinued any previous orthodontic treatment due to braces discomfort?" },
    ],
  },
  tmj: {
    title: "TMJ Disorders Self-Assessment",
    description: "Help identify factors that may put you at risk of developing TMJ disorders.",
    questions: [
      { id: 1, text: "Do you experience jaw pain or clicking sounds when opening/closing your mouth?" },
      { id: 2, text: "Do you have headaches or migraines?" },
      { id: 3, text: "Do you experience neck or shoulder pain?" },
      { id: 4, text: "Do you grind your teeth at night?" },
      { id: 5, text: "Do you chew on one side of your mouth?" },
      { id: 6, text: "Do you bite your nails or pencils?" },
      { id: 7, text: "Have you experienced any recent trauma to your jaw?" },
      { id: 8, text: "Do you have difficulty chewing hard foods?" },
    ],
  },
  emergency: {
    title: "Dental Emergency Assessment",
    description: "Identify factors that may indicate you have a dental emergency.",
    questions: [
      { id: 1, text: "Do you have severe tooth pain?" },
      { id: 2, text: "Do you have swelling or facial trauma?" },
      { id: 3, text: "Have you lost a tooth?" },
      { id: 4, text: "Is your tooth cracked, chipped, or broken?" },
      { id: 5, text: "Do you have bleeding gums or mouth?" },
      { id: 6, text: "Do you have signs of infection (fever, swelling)?" },
      { id: 7, text: "Do you have an object stuck between teeth?" },
      { id: 8, text: "Do you have severe gum pain?" },
    ],
  },
}

export default function AssessYourself() {
  const [selectedType, setSelectedType] = useState<AssessmentType>(null)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const currentAssessment = selectedType ? assessments[selectedType] : null
  const yesCount = Object.values(answers).filter((a) => a === "yes").length
  const totalQuestions = currentAssessment?.questions.length || 0
  const eligibilityPercentage = totalQuestions > 0 ? Math.round((yesCount / totalQuestions) * 100) : 0

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleAssess = () => {
    if (Object.keys(answers).length === totalQuestions) {
      setShowResults(true)
    }
  }

  const handleReset = () => {
    setSelectedType(null)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <section id="assess-yourself" className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-[#d1fae5] via-[#ecfdf5] to-white relative">
      <DentalSymbolsBackground />
      <div className="w-full px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">Assess Yourself</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-4 leading-relaxed">
            Take our self-assessment forms to understand your dental health better
          </p>
        </div>

        {!selectedType ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Object.entries(assessments).map(([key, assessment]) => (
              <Card
                key={key}
                className="hover:shadow-xl transition-shadow cursor-pointer border-emerald-100"
                onClick={() => setSelectedType(key as AssessmentType)}
              >
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-extrabold text-emerald-800 leading-snug">
                    {assessment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-5 leading-relaxed">
                    {assessment.description}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-lg md:text-xl py-4 font-semibold tracking-wide shadow-md">
                    Start Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <Card className="border-emerald-100 shadow-lg">
              <CardHeader>
                <Button variant="ghost" className="mb-4 w-fit text-lg md:text-xl font-semibold text-primary hover:text-primary/80" onClick={handleReset}>
                  ← Back to Assessments
                </Button>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary leading-tight">{currentAssessment?.title}</CardTitle>
                <CardDescription className="text-lg md:text-xl mt-3 leading-relaxed text-muted-foreground">
                  {currentAssessment?.description}
                </CardDescription>
                <p className="text-base md:text-lg text-amber-700 mt-6 bg-amber-50/80 border border-amber-200 p-4 rounded-xl">
                  Note: This self-assessment is informative and does not substitute for a professional evaluation by a
                  dentist or specialist.
                </p>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="space-y-5">
                    {currentAssessment?.questions.map((question) => (
                      <div key={question.id} className="space-y-3 pb-4 border-b border-border/60 last:border-b-0">
                        <Label className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                          {question.id}. {question.text}
                        </Label>
                        <RadioGroup
                          value={answers[question.id] || ""}
                          onValueChange={(value) => handleAnswer(question.id, value)}
                        >
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="yes" id={`q${question.id}-yes`} className="size-4 shrink-0 border-2 border-primary/40" />
                            <Label htmlFor={`q${question.id}-yes`} className="text-lg md:text-xl cursor-pointer text-muted-foreground">
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="no" id={`q${question.id}-no`} className="size-4 shrink-0 border-2 border-primary/40" />
                            <Label htmlFor={`q${question.id}-no`} className="text-lg md:text-xl cursor-pointer text-muted-foreground">
                              No
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    ))}
                    <div className="pt-5 space-y-4">
                      <Button
                        onClick={handleAssess}
                        disabled={Object.keys(answers).length !== totalQuestions}
                        className="w-full bg-primary hover:bg-primary/90 h-14 text-lg md:text-xl font-semibold"
                        size="lg"
                      >
                        Assess
                      </Button>
                      <Button onClick={handleReset} variant="outline" className="w-full bg-transparent text-lg md:text-xl font-semibold h-14">
                        Clear
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-2xl text-center shadow-inner">
                      <p className="text-lg md:text-xl text-muted-foreground mb-3 font-semibold tracking-wide uppercase">Your Assessment Score</p>
                      <div className="text-6xl md:text-7xl font-extrabold text-primary mb-3">{eligibilityPercentage}%</div>
                      <p className="text-lg md:text-xl text-foreground mb-4">
                        {eligibilityPercentage >= 70
                          ? "You appear to be a good candidate for this treatment! We recommend scheduling a consultation with our specialists."
                          : eligibilityPercentage >= 40
                            ? "You may be suitable for this treatment. Please consult with our specialists to discuss your options."
                            : "You may need to explore alternative treatment options. Schedule a consultation to discuss what's best for you."}
                      </p>
                    </div>
                    <div className="space-y-5">
                      <Button
                        onClick={handleReset}
                        className="w-full bg-primary hover:bg-primary/90 h-14 text-lg md:text-xl font-semibold"
                        size="lg"
                      >
                        Take Another Assessment
                      </Button>
                      <p className="text-center text-base md:text-lg text-muted-foreground leading-relaxed">
                        Have Doubts?{" "}
                        <a href="#appointment" className="text-primary hover:underline font-semibold">
                          Book an appointment
                        </a>{" "}
                        or contact us for a consultation.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
