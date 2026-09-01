import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function AdultOrthodonticsPage() {
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
            Adult Orthodontics
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">It's Never Too Late for a Perfect Smile</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Adult orthodontics is increasingly popular, with more adults seeking treatment than ever before. Modern orthodontic solutions are designed to be discreet, comfortable, and effective for adult patients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Why Choose Adult Orthodontics?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Discreet options like clear aligners and ceramic braces
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Improve oral health and function</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Boost confidence and self-esteem</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Address issues that worsen with age</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Flexible treatment options to fit your lifestyle
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-patient-smile.jpg" alt="Adult Orthodontics" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Treatment Options for Adults</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Clear Aligners",
              desc: "Invisible, removable aligners perfect for professional adults",
            },
            { step: 2, title: "Ceramic Braces", desc: "Tooth-colored braces that blend with your natural smile" },
            {
              step: 3,
              title: "Lingual Braces",
              desc: "Braces placed behind teeth for complete invisibility",
            },
            { step: 4, title: "Traditional Braces", desc: "Proven metal braces for complex cases" },
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
                <li>✓ Improve oral hygiene and reduce gum disease risk</li>
                <li>✓ Prevent premature wear and tear on teeth</li>
                <li>✓ Enhance facial aesthetics and smile confidence</li>
                <li>✓ Address TMJ disorders and bite problems</li>
                <li>✓ Better preparation for dental implants or restorations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Adult Concerns</h3>
              <p className="text-gray-700 mb-3">We address various adult orthodontic issues:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Crowding that worsens with age</li>
                <li>• Spacing and gaps between teeth</li>
                <li>• Bite problems affecting function</li>
                <li>• Teeth shifting after previous treatment</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Treatment Timeline</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Duration: 12-30 months</p>
                <p className="text-sm text-gray-600">Varies based on complexity and treatment type</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Consultation</p>
                <p className="text-sm text-gray-600">Comprehensive evaluation and treatment planning</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Follow-ups</p>
                <p className="text-sm text-gray-600">Regular visits every 4-8 weeks</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Maintenance</p>
                <p className="text-sm text-gray-600">Retainers to maintain results long-term</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section (generated) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <details className="bg-white rounded-xl p-6 border border-emerald-100">
            <summary className="font-semibold text-gray-900">How long does adult orthodontic treatment usually take?</summary>
            <p className="mt-3 text-gray-700">Treatment time varies by complexity but typically ranges from 12 to 30 months. Your orthodontist will provide an individualized estimate.</p>
          </details>
          <details className="bg-white rounded-xl p-6 border border-emerald-100">
            <summary className="font-semibold text-gray-900">Are braces or clear aligners better for adults?</summary>
            <p className="mt-3 text-gray-700">Choice depends on case complexity and patient preference; aligners work well for many adults, while braces may be needed for more complex movements.</p>
          </details>
          <details className="bg-white rounded-xl p-6 border border-emerald-100">
            <summary className="font-semibold text-gray-900">Will orthodontic treatment be painful?</summary>
            <p className="mt-3 text-gray-700">Mild discomfort after adjustments is normal and usually managed with over-the-counter pain relief. Most patients tolerate treatment well.</p>
          </details>
          <details className="bg-white rounded-xl p-6 border border-emerald-100">
            <summary className="font-semibold text-gray-900">Do I need retainers after treatment?</summary>
            <p className="mt-3 text-gray-700">Yes — retainers are essential to maintain results. Your orthodontist will advise on the retention schedule.</p>
          </details>
        </div>
      </section>

      {/* Contact & Quick Actions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Book an Appointment or Call Us</h3>
            <p className="text-gray-700 mb-4">To discuss orthodontic options or request a consultation, choose an option below.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#appointment" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg">Book Appointment</Link>
              <a href="tel:+917794879535" className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors">Call: 7794879535</a>
              <a href="https://wa.me/917794879535" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:opacity-90 transition-opacity">WhatsApp Us</a>
            </div>
          </div>

          <div className="col-span-1 bg-white rounded-2xl p-6 border border-emerald-100">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Clinic Information</h4>
            <p className="text-sm text-gray-700">Laxmi Face and Multispeciality Dental Hospital</p>
            <p className="text-sm text-gray-700">1st floor, beside new venkateswara book world, mainroad</p>
            <p className="text-sm text-gray-700">Vanasthalipuram, Hyderabad 500070</p>
            <p className="text-sm text-gray-700 mt-2">Phone: <a className="font-semibold" href="tel:+917794879535">7794879535</a></p>
            <p className="text-sm text-gray-700">Opening Hours: 9 AM - 9 PM</p>
            <div className="mt-4 text-sm text-gray-600">Please bring any recent X-rays or reports to your appointment. For emergencies, call or WhatsApp for the fastest response.</div>
          </div>
        </div>
      </section>

      {/* CTA Section (kept for emphasis) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-10 text-white text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold">Ready to Transform Your Smile?</h2>
          <p className="text-base md:text-lg text-emerald-50 max-w-2xl mx-auto">Schedule a consultation with our orthodontic team to learn more.</p>
          <Link href="/#appointment" className="inline-block px-8 py-3 bg-white text-emerald-600 font-extrabold rounded-lg hover:bg-emerald-50 transition-colors">Book Appointment</Link>
        </div>
      </section>
    </div>
  )
}

