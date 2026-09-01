import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AnimatedBackground from '@/components/animated-background'
import VideoBackground from '@/components/video-background'
import StructuredData from '@/components/structured-data'

export const metadata: Metadata = {
  metadataBase: new URL('https://laxmifaceanddental.com'),
  title: 'Dentist in Vanasthalipuram | Laxmi Face Dental Hospital',
  description: 'Visit Laxmi Face and Multispeciality Dental Hospital in Vanasthalipuram for root canal treatment, braces, clear aligners, implants, wisdom tooth removal and emergency dental care.',
  generator: 'v0.app',
  icons: {
    icon: '/finalclinicc.jpg',
    shortcut: '/finalclinicc.jpg',
    apple: '/finalclinicc.jpg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <VideoBackground />
        <AnimatedBackground />
        {children}
        <StructuredData />
        <Analytics />
      </body>
    </html>
  )
}
