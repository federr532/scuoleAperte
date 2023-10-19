import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer'


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
      <body className='font-Agrandir overflow-x-hidden'>{children}</body>
      <Footer />
    </html>
  )
}