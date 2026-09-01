import Link from "next/link"

export type LocalSeoTreatment = {
  title: string
  description: string
  h1: string
  intro: string
  image: string
  imageAlt: string
  reviewer?: string
  reviewerNote?: string
  sections: { heading: string; paragraphs?: string[]; bullets?: string[]; steps?: string[] }[]
  faqs: { q: string; a: string }[]
  cta: string
}

const PHONE = "7794879535"
const TEL = "tel:+917794879535"
const WHATSAPP = "https://wa.me/917794879535"
const MAPS = "https://maps.app.goo.gl/WSmG37qqRPK42Lpt8?g_st=iw"

export default function LocalSeoTreatmentPage({ data }: { data: LocalSeoTreatment }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white text-gray-900">
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="font-bold text-emerald-700">Laxmi Face Dental Hospital</Link>
          <div className="flex flex-wrap justify-end gap-2 text-sm font-semibold">
            <a href={TEL} className="rounded-lg bg-emerald-700 px-3 py-2 text-white">Call</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-600 px-3 py-2 text-white">WhatsApp</a>
            <Link href="/#appointment" className="rounded-lg border border-emerald-700 px-3 py-2 text-emerald-700">Book Appointment</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-700">Laxmi Face and Multispeciality Dental Hospital · Vanasthalipuram</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{data.h1}</h1>
          <p className="mt-5 text-lg leading-8 text-gray-700">{data.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={TEL} className="rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white">Call {PHONE}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-600 px-5 py-3 font-bold text-white">WhatsApp</a>
            <Link href="/#appointment" className="rounded-lg border-2 border-emerald-700 bg-white px-5 py-3 font-bold text-emerald-700">Book Appointment</Link>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-emerald-100">
          <img src={data.image} alt={data.imageAlt} className="h-80 w-full object-cover md:h-[26rem]" />
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-extrabold">Clinical review</h2>
          <p className="mt-2 text-gray-700">{data.reviewer || "The treating dentist's verified name and qualifications must be confirmed by the clinic before publication."}</p>
          {data.reviewerNote && <p className="mt-2 text-sm text-gray-600">{data.reviewerNote}</p>}
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-4 pb-16 sm:px-6">
        {data.sections.map((section) => (
          <section key={section.heading} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100 md:p-8">
            <h2 className="text-2xl font-extrabold md:text-3xl">{section.heading}</h2>
            {section.paragraphs?.map((p) => <p key={p} className="mt-4 leading-7 text-gray-700">{p}</p>)}
            {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">{section.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            {section.steps && <ol className="mt-5 list-decimal space-y-3 pl-6 text-gray-700">{section.steps.map((s) => <li key={s}>{s}</li>)}</ol>}
          </section>
        ))}

        <section className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-200 md:p-8">
          <h2 className="text-2xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-5 space-y-5">
            {data.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-bold">{faq.q}</h3>
                <p className="mt-1 leading-7 text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-emerald-700 p-7 text-white md:p-9">
          <h2 className="text-2xl font-extrabold">Book an assessment</h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">{data.cta}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={TEL} className="rounded-lg bg-white px-5 py-3 font-bold text-emerald-700">Call {PHONE}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-green-500 px-5 py-3 font-bold text-white">WhatsApp</a>
            <Link href="/#appointment" className="rounded-lg border border-white px-5 py-3 font-bold text-white">Book Appointment</Link>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/70 px-5 py-3 font-bold text-white">Get Directions</a>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-100">
          <h2 className="text-2xl font-extrabold">Laxmi Face and Multispeciality Dental Hospital</h2>
          <p className="mt-3 text-gray-700">Main road, beside new Venkateswara Book World, Hastina Puram Colony, TV Colony, Vanasthalipuram, Hyderabad, Telangana 500070, India</p>
          <p className="mt-2 text-gray-700">Phone: <a href={TEL} className="font-semibold text-emerald-700">{PHONE}</a></p>
          <p className="mt-2 text-gray-700">Opening hours: Monday-Sunday, 9:00 AM-9:00 PM</p>
          <p className="mt-2"><a href={MAPS} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline">Get Directions on Google Maps</a></p>
        </section>
      </div>
    </main>
  )
}
