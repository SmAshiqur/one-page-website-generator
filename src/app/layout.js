import './globals.css'

export const metadata = {
  title: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'School Website',
  description: 'Welcome to our school community',
  keywords: 'school, education, students, community',
  openGraph: {
    title: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'School Website',
    description: 'Welcome to our school community',
    type: 'website',
    url: `https://${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Jaldi:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased" style={{fontFamily: 'Jaldi, system-ui, sans-serif'}}>
        {children}
      </body>
    </html>
  )
}