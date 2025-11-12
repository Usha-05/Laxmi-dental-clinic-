import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function SealantsPage() {
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
            Sealants
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Protect Teeth with Dental Sealants</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dental sealants are thin, protective coatings applied to the chewing surfaces of back teeth (molars and premolars). They create a barrier that prevents food and bacteria from getting trapped in the deep grooves of teeth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">Why Choose Dental Sealants?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Prevent cavities in hard-to-clean back teeth
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Quick, painless, and non-invasive procedure</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Cost-effective preventive treatment</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Last 5-10 years with proper care</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">
                    Ideal for children and teenagers
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-preventive-care.jpg" alt="Dental Sealants" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">The Sealant Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: "Cleaning",
              desc: "Tooth surface is thoroughly cleaned and dried",
            },
            { step: 2, title: "Preparation", desc: "Acid solution prepares tooth surface for bonding" },
            {
              step: 3,
              title: "Application",
              desc: "Sealant material is painted onto tooth grooves",
            },
            { step: 4, title: "Curing", desc: "Special light hardens sealant to create protective barrier" },
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
                <li>✓ Prevent cavities in back teeth</li>
                <li>✓ Protect deep grooves from food and bacteria</li>
                <li>✓ Cost-effective preventive measure</li>
                <li>✓ Quick and painless application</li>
                <li>✓ Long-lasting protection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ideal Candidates</h3>
              <p className="text-gray-700 mb-3">Sealants are recommended for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Children when permanent molars erupt (age 6-12)</li>
                <li>• Teenagers with deep grooves in back teeth</li>
                <li>• Adults at high risk for cavities</li>
                <li>• Anyone with deep tooth grooves</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Treatment Timeline</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Application</p>
                <p className="text-sm text-gray-600">Quick procedure - 5-10 minutes per tooth</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Best Time</p>
                <p className="text-sm text-gray-600">When permanent molars first erupt (age 6-12)</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Longevity</p>
                <p className="text-sm text-gray-600">5-10 years with proper care</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Maintenance</p>
                <p className="text-sm text-gray-600">Checked during regular dental visits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Protect Your Child's Teeth</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Schedule a consultation to see if dental sealants are right for protecting your or your child's teeth
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

