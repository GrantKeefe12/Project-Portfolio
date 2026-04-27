import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grant Keefe | Engineering Project Portfolio',
  description: 'Robotics, UAV, embedded control, and electromechanical engineering projects by Grant Keefe.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
