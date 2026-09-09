import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Ryan Summers — Author & Observer',
  description: 'The official portfolio of author Ryan Summers: fiction, essays, poetry, and stories for the in-between.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#403c49',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}

      </body>
    </html>
  )
}
