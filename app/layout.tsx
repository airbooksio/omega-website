import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const _dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omega-markets.com'),
  title: {
    default:
      'Omega — Access capital markets infrastructure, finally on your terms.',
    template: '%s — Omega',
  },
  description:
    'Modern applications and an open protocol that give fixed-income teams cleaner, faster, more controllable access to the infrastructure capital markets already run on.',
  applicationName: 'Omega',
  keywords: [
    'capital markets infrastructure',
    'fixed income',
    'market data',
    'open protocol',
    'exchange API',
    'OMEGA',
    'Omega Markets',
  ],
  authors: [{ name: 'Omega' }],
  creator: 'Omega',
  publisher: 'Omega',
  // Favicon + apple icon come from app/icon.svg and app/apple-icon.png.
  // OG/Twitter images come from app/opengraph-image.png and app/twitter-image.png.
  openGraph: {
    type: 'website',
    siteName: 'Omega',
    locale: 'en_US',
    url: 'https://omega-markets.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1016',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
