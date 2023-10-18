import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scuole aperte',
  description: 'Locandina ISIS BEM Marconi - 2023 / 2024'
  // image profile
  // seo optimization, like preload ecc...
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" vocab="http://schema.org/" prefix="ov: http://open.vocab.org/terms/">
      <body className={inter.className}>{children}</body>
    </html>
  )
}