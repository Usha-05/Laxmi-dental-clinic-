import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function InvisalignPage() {
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
            Clear Aligners / Invisalign
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Transform Your Smile Invisibly</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Clear aligners offer a modern, nearly invisible solution to straighten your teeth without the
                traditional look of braces. Using advanced 3D technology, we create a custom treatment plan just for
                you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Why Choose Clear Aligners?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Nearly invisible - perfect for professionals and students
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Removable for eating, brushing, and flossing</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">More comfortable than traditional braces</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Shorter treatment time - typically 6-24 months</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Advanced technology shows results before treatment starts
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-aligners-invisalign.jpg" alt="Clear Aligners" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">The Treatment Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Consultation",
              desc: "Meet with our orthodontist to discuss your goals and assess your teeth",
            },
            { step: 2, title: "3D Scan", desc: "Advanced scanning creates a detailed digital model of your teeth" },
            {
              step: 3,
              title: "Custom Plan",
              desc: "We create your personalized aligner series - you'll see your future smile",
            },
            { step: 4, title: "Treatment", desc: "Wear aligners 20+ hours daily, changing them every 1-2 weeks" },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-xl p-8 border border-green-200/60 hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Details */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap size={24} className="text-emerald-600" />
                Key Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Discreet appearance - no one will notice you're in treatment</li>
                <li>✓ Improved oral hygiene - aligners are removable for cleaning</li>
                <li>✓ Reduced discomfort compared to traditional braces</li>
                <li>✓ Fewer dental visits required</li>
                <li>✓ Predictable results with 3D visualization</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal For</h3>
              <p className="text-gray-700 mb-3">Clear aligners work best for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Mild to moderate crowding or spacing issues</li>
                <li>• Adults who want a discreet option</li>
                <li>• Professionals in customer-facing roles</li>
                <li>• Patients committed to wearing aligners 20+ hours daily</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Treatment Timeline</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Duration: 6-24 months</p>
                <p className="text-sm text-gray-600">Average treatment is 12-18 months</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Aligner Changes</p>
                <p className="text-sm text-gray-600">Every 1-2 weeks, as per the treatment plan</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Check-ups</p>
                <p className="text-sm text-gray-600">Every 6-8 weeks to monitor progress</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Retention</p>
                <p className="text-sm text-gray-600">Wear retainers to maintain your results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Smile?</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Schedule a free consultation with our orthodontist to see if clear aligners are right for you
          </p>
          <Link
            href="/#appointment"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
