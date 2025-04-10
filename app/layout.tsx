import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'
import { TopBar } from '@/components/top-bar'

export const metadata: Metadata = {
  title: 'Balaji Honda',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body><TopBar/>{children}<Footer/></body>
    </html>
  )
}
