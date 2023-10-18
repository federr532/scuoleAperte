import type { Metadata } from 'next'
import './globals.css'

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
      <body className='font-Agrandir'>{children}</body>
    </html>
  )
}