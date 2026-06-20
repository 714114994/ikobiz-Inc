import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], preload: true })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Ikobiz — Vote for the future of local commerce in Kenya',
  description:
    'Ikobiz is building a smarter way for communities in Kenya to discover nearby sellers, shop instantly through familiar messaging, and help small businesses thrive digitally. Vote for Ikobiz and join early access.',
  openGraph: {
    title: 'Ikobiz — Shopping as simple as a WhatsApp message',
    description:
      'Discover nearby sellers, shop instantly, and support local businesses across Kenya. Vote for Ikobiz.',
    type: 'website',
  },
  icons: {
    icon: '/images/ikobiz-logo.png',
    apple: '/images/ikobiz-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f7a52',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
