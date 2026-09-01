export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Laxmi Face and Multispeciality Dental Hospital",
    telephone: "+91 77948 79535",
    url: "https://laxmifaceanddental.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main road, beside new Venkateswara Book World, Hastina Puram Colony, TV Colony",
      addressLocality: "Vanasthalipuram",
      addressRegion: "Hyderabad",
      postalCode: "500070",
      addressCountry: "IN",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "21:00",
    }],
    sameAs: [
      "https://www.facebook.com/share/17eD4vZyRb/",
      "https://www.instagram.com/laxmifaceanddentalhospital/",
      "https://youtube.com/@LaxmiFaceandMultispecialityDen",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
