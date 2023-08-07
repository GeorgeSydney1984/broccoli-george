import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@components/header'
import { Footer } from '@components/footer'

export const metadata: Metadata = {
  title: 'Brocconi & Co',
  description: 'A better new life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="page-content flex items-center h-screen w-full bg-slate-100 pt-[var(--header-height)] pb-[var(--footer-height)]">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
