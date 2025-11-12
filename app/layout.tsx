import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import AnimatedBackground from '@/components/animated-background'
import VideoBackground from '@/components/video-background'

export const metadata: Metadata = {
  title: 'Laxmi Face and Multispeciality Dental Hospital',
  description: 'Transforming Smiles, Enhancing Lives: Your Trusted Destination for Complete Dental & Facial Care.',
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
        <Analytics />
      </body>
    </html>
  )
}
