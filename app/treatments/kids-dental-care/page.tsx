import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function KidsDentalCarePage() {
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
            Kids Dental Care
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Specialized Care for Your Child's Smile</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our pediatric dental care focuses on creating a positive, comfortable experience for children while ensuring their oral health and development. We make dental visits fun and educational.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Why Choose Our Pediatric Care?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Child-friendly environment designed to reduce anxiety
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Experienced team specializing in pediatric dentistry</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Preventive care to avoid future problems</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Education on proper oral hygiene habits</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Early detection and intervention for dental issues
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-child-dental-care.jpg" alt="Kids Dental Care" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services for Children</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Regular Checkups",
              desc: "Age-appropriate examinations and cleanings",
            },
            { step: 2, title: "Preventive Care", desc: "Fluoride treatments and dental sealants" },
            {
              step: 3,
              title: "Cavity Treatment",
              desc: "Gentle fillings and restorations for primary teeth",
            },
            { step: 4, title: "Orthodontic Evaluation", desc: "Early assessment for future orthodontic needs" },
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
                <li>✓ Establish healthy oral hygiene habits early</li>
                <li>✓ Prevent dental problems before they develop</li>
                <li>✓ Monitor proper tooth and jaw development</li>
                <li>✓ Create positive dental experiences</li>
                <li>✓ Reduce dental anxiety for future visits</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When to Start</h3>
              <p className="text-gray-700 mb-3">Recommended dental care timeline:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• First visit by age 1 or when first tooth appears</li>
                <li>• Regular checkups every 6 months</li>
                <li>• Early orthodontic evaluation by age 7</li>
                <li>• Ongoing preventive care throughout childhood</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Care Schedule</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">First Visit</p>
                <p className="text-sm text-gray-600">By age 1 or when first tooth appears</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Regular Checkups</p>
                <p className="text-sm text-gray-600">Every 6 months for preventive care</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Orthodontic Evaluation</p>
                <p className="text-sm text-gray-600">By age 7 for early assessment</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Preventive Treatments</p>
                <p className="text-sm text-gray-600">As recommended based on risk assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Start Your Child's Dental Journey</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Schedule an appointment to give your child the foundation for a lifetime of healthy smiles
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

