import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function PreventivePage() {
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
            Preventive Dentistry
          </h1>
          <div className="w-20" />
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Stop Dental Problems Before They Start
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Preventive dentistry is the foundation of a healthy smile. Through regular check-ups, cleanings, and
                protective treatments, we help you maintain optimal oral health and avoid costly dental procedures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-emerald-700 mb-6">What We Prevent</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Tooth decay and cavities</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Gum disease and tooth loss</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Tooth staining and discoloration</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Oral cancer and other diseases</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium">Expensive dental treatments</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-green-100">
              <img src="/female-preventive-care.jpg" alt="Preventive Dentistry" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-3xl opacity-40" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Preventive Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Dental Exams", desc: "Comprehensive check-ups to detect early problems" },
            { title: "Professional Cleanings", desc: "Deep cleaning to remove tartar and plaque" },
            { title: "Fluoride Treatment", desc: "Strengthens enamel and prevents decay" },
            { title: "Sealants", desc: "Protective coating for cavity-prone areas" },
            { title: "X-rays", desc: "Early detection of hidden dental problems" },
            { title: "Oral Cancer Screening", desc: "Early detection saves lives" },
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
                Your Home Care Routine
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Brush twice daily with fluoride toothpaste</li>
                <li>✓ Floss daily to remove plaque between teeth</li>
                <li>✓ Use mouthwash to kill bacteria</li>
                <li>✓ Limit sugary foods and drinks</li>
                <li>✓ Avoid tobacco and excessive alcohol</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-12 border border-emerald-200">
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Recommended Schedule</h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Regular Check-ups</p>
                <p className="text-sm text-gray-600">Every 6 months for most patients</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Professional Cleanings</p>
                <p className="text-sm text-gray-600">Twice yearly or as recommended</p>
              </div>
              <div className="pb-4 border-b border-emerald-200">
                <p className="font-semibold text-gray-900">Oral Cancer Screening</p>
                <p className="text-sm text-gray-600">During regular check-ups</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Additional Treatment</p>
                <p className="text-sm text-gray-600">As recommended based on individual needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-12 text-white text-center space-y-6">
          <h2 className="text-4xl font-bold">Prevention is Better Than Cure</h2>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Start your preventive care journey today. Schedule your check-up and cleaning now
          </p>
          <Link
            href="/#appointment"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Schedule Your Check-up
          </Link>
        </div>
      </section>
    </div>
  )
}
