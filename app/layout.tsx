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

const siteUrl = 'https://nexora-studio-landing-page.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nexora Studio — Sitios web premium para empresas en Colombia',
    template: '%s | Nexora Studio',
  },
  description:
    'Nexora Studio diseña y desarrolla sitios web premium y de alta conversión para pymes colombianas que buscan más credibilidad, mejor posicionamiento en Google y más clientes.',
  keywords: [
    'diseño web Colombia',
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
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Nexora Studio',
    title: 'Nexora Studio — Sitios web premium para empresas en Colombia',
    description:
      'Sitios web que convierten visitas en clientes. Diseñados para empresas colombianas que quieren crecer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexora Studio — Sitios web premium para empresas en Colombia',
    description:
      'Sitios web que convierten visitas en clientes. Diseñados para empresas colombianas que quieren crecer.',
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
      lang="es"
      className={`light ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
