import './globals.css'
import { Jaldi } from 'next/font/google'

const jaldi = Jaldi({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Demo School',
  description: 'Welcome to demo school community',
  keywords: 'school, education, students, community',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Demo School',
    description: 'Welcome to demo school community',
    type: 'website',
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`antialiased ${jaldi.className}`}>
        {children}
      </body>
    </html>
  )
}