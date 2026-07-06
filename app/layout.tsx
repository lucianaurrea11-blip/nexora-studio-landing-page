import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://nexorastudio.co'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nexora Studio — Premium Websites for Colombian Businesses',
    template: '%s | Nexora Studio',
  },
  description:
    'Nexora Studio designs and builds premium, high-converting websites for Colombian businesses that want more credibility, better Google visibility and more customers.',
  keywords: [
    'web design Colombia',
    'diseño web premium',
    'agencia de diseño web',
    'páginas web para empresas',
    'SEO Colombia',
    'Nexora Studio',
  ],
  authors: [{ name: 'Nexora Studio' }],
  creator: 'Nexora Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Nexora Studio',
    title: 'Nexora Studio — Premium Websites for Colombian Businesses',
    description:
      'Premium websites that turn visitors into customers. Built for Colombian businesses that want to grow.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Studio — Premium Websites for Colombian Businesses',
    description:
      'Premium websites that turn visitors into customers. Built for Colombian businesses that want to grow.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`light ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
