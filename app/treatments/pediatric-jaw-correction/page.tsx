import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function PediatricPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white">
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
            Jaw Corrections in Children
          </h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Early Intervention for Optimal Development
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Interceptive orthodontics in children can guide proper jaw development, prevent future problems, and
                reduce the need for extensive treatment later. Early intervention is key to achieving beautiful, healthy
                smiles.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Benefits of Early Treatment</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Guide jaw growth for better facial proportions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Prevent crowding and spacing issues</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Correct bite problems early</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">May eliminate the need for future surgery</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Boost child's confidence and self-esteem</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-child-dental-care.jpg" alt="Pediatric Care" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Treatment Options for Children</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Expansion Devices", desc: "Gently widen the upper jaw to create space for permanent teeth" },
            { title: "Partial Braces", desc: "Early braces to correct specific bite problems" },
            { title: "Habit Correction", desc: "Address thumb-sucking and tongue thrusting habits" },
            { title: "Functional Appliances", desc: "Guide jaw growth using the child's natural growth" },
            { title: "Retainers", desc: "Maintain proper jaw position during growth phases" },
            { title: "Monitoring", desc: "Regular check-ups to track jaw development" },
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

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-emerald-600" />
                Age Recommendations
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ First orthodontic check-up by age 7</li>
                <li>✓ Phase I treatment (4-9 years old): Guides jaw growth</li>
                <li>✓ Phase II treatment (12-14 years old): Aligns permanent teeth</li>
                <li>✓ Retention phase: Maintains results</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Parent Guide</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">What to Expect</p>
                <p className="text-sm text-gray-600">Gentle, gradual jaw guidance with minimal discomfort</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Compliance</p>
                <p className="text-sm text-gray-600">Help your child wear appliances as directed</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Oral Hygiene</p>
                <p className="text-sm text-gray-600">Extra care with brushing and flossing during treatment</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Regular Visits</p>
                <p className="text-sm text-gray-600">Keep all appointments for optimal results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Give Your Child the Best Smile</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Early orthodontic treatment can make a lifetime of difference. Schedule a free consultation for your child
          </p>
          <Link
            href="/#appointment"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Book Your Child's Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
