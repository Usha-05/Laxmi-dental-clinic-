"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Upload,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Smile,
} from "lucide-react"

interface QuizAnswers {
  alignmentIssue: string
  hadBraces: string
  ageGroup: string
  budget: string
}

export default function SmileSimulator() {
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    alignmentIssue: "",
    hadBraces: "",
    ageGroup: "",
    budget: "",
  })
  const [formData, setFormData] = useState({
    concern: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    agreeToContact: false,
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraInputRef = useRef<HTMLInputElement>(null)

  const totalSteps = 4
  const quizProgress = ((currentStep - 1) / (totalSteps - 1)) * 100

  const quizQuestions = [
    {
      id: "alignmentIssue",
      question: "What best describes your teeth alignment issue?",
      options: ["Crooked", "Gaps", "Overbite", "Underbite", "Crowded", "None"],
    },
    {
      id: "hadBraces",
      question: "Have you had braces before?",
      options: ["Yes", "No"],
    },
    {
      id: "ageGroup",
      question: "What's your age group?",
      options: ["Below 18", "18–30", "30–45", "45+"],
    },
    {
      id: "budget",
      question: "What's your preferred Invisalign treatment budget?",
      options: ["< ₹50,000", "₹50,000–₹1,00,000", "₹1,00,000+"],
    },
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
    if (cameraInputRef.current) cameraInputRef.current.value = ""
  }

  const handleQuizAnswer = (questionId: keyof QuizAnswers, answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    const currentQuestion = quizQuestions[currentStep - 1]
    if (currentQuestion && !quizAnswers[currentQuestion.id as keyof QuizAnswers]) {
      alert("Please select an option before proceeding")
      return
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      setError("Please fill in all required fields")
      return
    }

    if (!formData.agreeToContact) {
      setError("Please agree to be contacted for consultation")
      return
    }

    setIsLoading(true)

    try {
      const consultationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        concern: formData.concern || "",
        alignmentIssue: quizAnswers.alignmentIssue,
        hadBraces: quizAnswers.hadBraces,
        ageGroup: quizAnswers.ageGroup,
        budget: quizAnswers.budget,
        photo: uploadedImage || undefined, // Include photo if uploaded
      }

      const response = await fetch("/api/smile-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(consultationData),
      })

      if (!response.ok) {
        const contentType = response.headers.get("content-type")
        let errorMessage = "Failed to submit consultation request"

        if (contentType?.includes("application/json")) {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } else {
          errorMessage = await response.text()
        }

        throw new Error(errorMessage)
      }

      const data = await response.json()

      // Also open WhatsApp as fallback (in case API doesn't send)
      const message = `Smile View Simulator Consultation Request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\n\nInvisalign Quiz Results:\nAlignment Issue: ${quizAnswers.alignmentIssue}\nHad Braces Before: ${quizAnswers.hadBraces}\nAge Group: ${quizAnswers.ageGroup}\nBudget: ${quizAnswers.budget}\n\nConcern: ${formData.concern || "Not specified"}`
      const whatsappUrl = `https://wa.me/917794879535?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")

      setShowSuccessModal(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("[v0] Consultation submission error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const currentQuestion = quizQuestions[currentStep - 1]

  return (
    <section id="smile-simulator" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-[#d1fae5] via-white to-[#ecfdf5]">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Smile View Simulator
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Visualize your new smile and discover Invisalign options tailored to you!
          </p>
        </div>

        <div className="space-y-6">
          {/* Upload Section */}
          <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <CardHeader className="bg-gradient-to-r from-[#1E603F] via-[#289660] to-[#34d399] text-white">
              <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                <Smile className="w-6 h-6" />
                Upload Your Photo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {!uploadedImage ? (
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-8">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <input
                    ref={cameraInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="camera-upload"
                  />
                  <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-semibold py-3"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    Upload Photo
                  </Button>
                  <Button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    variant="outline"
                    className="w-full md:w-auto border-green-600 text-green-600 hover:bg-green-50 text-base md:text-lg font-semibold py-3"
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                </div>
              ) : (
                <div className="relative group">
                  <div className="rounded-lg overflow-hidden border-4 border-green-200 shadow-lg">
                    <img
                      src={uploadedImage}
                      alt="Your smile preview"
                      className="w-full h-72 object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-lg md:text-xl font-semibold text-green-600 mb-3">Preview Your Smile</p>
                    <Button
                      type="button"
                      onClick={handleRemoveImage}
                      variant="outline"
                      className="text-base md:text-lg font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 py-3 px-6"
                    >
                      <X className="w-5 h-5 mr-2" />
                      Remove Photo
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Invisalign Quiz Section */}
          <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <CardHeader className="bg-gradient-to-r from-[#1E603F] via-[#289660] to-[#34d399] text-white">
              <CardTitle className="text-2xl md:text-3xl font-bold">Invisalign Quiz</CardTitle>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm md:text-base lg:text-lg text-green-100">
                    Question {currentStep} of {totalSteps}
                  </span>
                  <span className="text-sm md:text-base lg:text-lg font-semibold text-green-100">{Math.round(quizProgress)}%</span>
                </div>
                <Progress value={quizProgress} className="h-2 bg-green-400/30" />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              {currentQuestion && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                    {currentQuestion.question}
                  </h3>
                  <RadioGroup
                    value={quizAnswers[currentQuestion.id as keyof QuizAnswers]}
                    onValueChange={(value) => handleQuizAnswer(currentQuestion.id as keyof QuizAnswers, value)}
                  >
                    <div className="grid gap-4">
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-3 p-5 rounded-xl border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all cursor-pointer"
                        >
                          <RadioGroupItem value={option} id={option} className="size-4 shrink-0 border-2 border-primary/40" />
                          <Label
                            htmlFor={option}
                            className="flex-1 cursor-pointer font-semibold text-base md:text-lg lg:text-xl text-foreground"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  <div className="flex gap-4 pt-4">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        onClick={handlePrevious}
                        variant="outline"
                        className="flex-1 text-base md:text-lg font-semibold py-3"
                      >
                        <ChevronLeft className="w-5 h-5 mr-2" />
                        Previous
                      </Button>
                    )}
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-semibold py-3"
                      >
                        Next
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => {
                          // Quiz completed - scroll to form section
                          const formSection = document.getElementById("basic-details-form")
                          if (formSection) {
                            formSection.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        }}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-semibold py-3"
                      >
                        Complete Quiz
                        <CheckCircle className="w-5 h-5 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Concern Query Section */}
          <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <CardHeader className="bg-gradient-to-r from-[#1E603F] via-[#289660] to-[#34d399] text-white">
              <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">Tell Us About Your Concerns</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Textarea
                placeholder="Tell us about your dental concerns (optional)... For example: 'I have gaps between my teeth' or 'I want a whiter smile'"
                value={formData.concern}
                onChange={(e) => setFormData((prev) => ({ ...prev, concern: e.target.value }))}
                className="w-full resize-none min-h-36 text-lg md:text-xl lg:text-2xl"
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Basic Details Section */}
          <Card id="basic-details-form" className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
            <CardHeader className="bg-gradient-to-r from-[#1E603F] via-[#289660] to-[#34d399] text-white">
              <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold">Your Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-3 form-text-xl">
                {error && (
                  <div className="text-red-600 text-lg md:text-xl lg:text-2xl font-semibold bg-red-50 p-3 rounded-lg border border-red-200">
                    {error}
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="name" className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1.5 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                      className="text-lg md:text-xl lg:text-2xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1.5 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="text-lg md:text-xl lg:text-2xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1.5 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="Your phone number"
                      className="text-lg md:text-xl lg:text-2xl"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-1.5 block">
                      City *
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      placeholder="Your city"
                      className="text-lg md:text-xl lg:text-2xl"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreeToContact: checked as boolean }))
                    }
                  />
                  <Label
                    htmlFor="agree"
                    className="text-lg md:text-xl lg:text-2xl text-muted-foreground cursor-pointer leading-relaxed"
                  >
                    I agree to be contacted for a consultation *
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E603F] via-[#289660] to-[#34d399] hover:from-[#155d33] hover:via-[#227d4f] hover:to-[#2ab584] text-white h-16 font-bold text-xl md:text-2xl mt-6 py-5"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Request Consultation"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">Thank You!</DialogTitle>
            <DialogDescription className="text-center text-lg md:text-xl lg:text-2xl pt-2 leading-relaxed">
              Our dental team will contact you shortly for your Invisalign consultation. Your consultation request and photo have been sent to our email and WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => {
                setShowSuccessModal(false)
                // Reset form
                setFormData({
                  concern: "",
                  name: "",
                  email: "",
                  phone: "",
                  city: "",
                  agreeToContact: false,
                })
                setQuizAnswers({
                  alignmentIssue: "",
                  hadBraces: "",
                  ageGroup: "",
                  budget: "",
                })
                setCurrentStep(1)
                setUploadedImage(null)
              }}
              className="bg-green-600 hover:bg-green-700 text-white text-lg md:text-xl font-bold px-8 py-4"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
