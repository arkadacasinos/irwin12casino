import { Literata, Manrope } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

const literata = Literata({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-literata',
  display: 'swap',
})

const pageTitle =
  'Irwin Casino: официальный сайт, зеркало и как поиграть в Ирвин Казино с телефона'
const pageDescription =
  'Плотный гид без сказок для обычного игрока: Irwin Casino официальный сайт, рабочее зеркало Ирвин Казино и как играть онлайн с телефона. Сверьте адрес и не вводите пароль на чужой странице. Только 18+.'
const canonical = 'https://irwin12casino.vercel.app/'

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  applicationName: 'Irwin Casino',
  authors: [{ name: 'Irwin Casino' }],
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/favicon-32.png', sizes: '32x32', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
  themeColor: '#10241c',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: pageTitle,
  description: pageDescription,
  inLanguage: 'ru',
  mainEntityOfPage: canonical,
  image: `${canonical}art-table.jpg`,
  author: { '@type': 'Organization', name: 'Irwin Casino' },
  publisher: { '@type': 'Organization', name: 'Irwin Casino' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${literata.variable} bg-background`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Irwin Casino" />
        <meta name="theme-color" content="#10241c" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Irwin Casino" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${canonical}art-table.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${canonical}art-table.jpg`} />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="alternate" hrefLang="ru" href={canonical} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* дополнительные пользовательские теги — вставляйте сюда */}
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
