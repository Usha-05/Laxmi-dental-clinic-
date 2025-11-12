import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function TMJPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-green-200/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/#treatments"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Treatments
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
            TMJ Disorders Treatment
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Relief from Jaw Pain & Dysfunction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TMJ (Temporomandibular Joint) disorders can cause significant pain and discomfort. Our specialized
                treatment approach addresses the root causes of jaw joint problems, clicking, and dysfunction to restore
                comfort and proper function.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Symptoms We Treat</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Jaw pain and facial pain</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Clicking or popping sounds in the jaw</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Difficulty opening or closing the mouth</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Headaches and neck pain</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Ear pain or ringing in the ears</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-tmj-treatment.jpg" alt="TMJ Treatment" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Treatment Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Comprehensive Diagnosis",
              desc: "Advanced imaging and examination to identify the exact cause of your TMJ disorder",
            },
            { title: "Bite Analysis", desc: "Detailed evaluation of your bite and jaw alignment" },
            { title: "Physical Therapy", desc: "Targeted exercises and stretches to improve jaw function" },
            { title: "Occlusal Therapy", desc: "Orthodontic adjustments to correct bite misalignment" },
            { title: "Splint Therapy", desc: "Custom night guard or splint to reduce stress on the joint" },
            { title: "Pain Management", desc: "Strategies to manage pain and promote healing" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-green-200/60 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-emerald-600" />
                Expected Results
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Reduced jaw pain and discomfort</li>
                <li>✓ Elimination of clicking and popping sounds</li>
                <li>✓ Improved jaw mobility and function</li>
                <li>✓ Relief from associated headaches</li>
                <li>✓ Better quality of life and sleep</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Treatment Duration</h3>
              <p className="text-gray-700 mb-3">
                Most TMJ disorders show improvement within 4-8 weeks of treatment. Some cases may require 2-3 months of
                therapy for optimal results. We monitor your progress regularly and adjust treatment as needed.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Why Choose Our TMJ Treatment?</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Specialized Expertise</p>
                <p className="text-sm text-gray-600">Our team has extensive experience treating complex TMJ cases</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Multidisciplinary Approach</p>
                <p className="text-sm text-gray-600">We combine orthodontics, physical therapy, and pain management</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Personalized Care</p>
                <p className="text-sm text-gray-600">Each treatment plan is customized to your specific condition</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Long-term Solutions</p>
                <p className="text-sm text-gray-600">
                  We focus on permanent relief, not just temporary symptom management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Stop Living with Jaw Pain</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Our specialized TMJ treatment can provide relief. Schedule your consultation today
          </p>
          <Link
            href="/#appointment"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
