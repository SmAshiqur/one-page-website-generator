// src/components/QuickLinks.js
export default function QuickLinks() {
  // Define icons for each quick link
  const quickLinksData = [
    {
      name: 'Registration',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-[#323232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: 'Tuition Payment',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-[#323232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      name: 'Calendar',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-[#323232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Contact',
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-[#323232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-[#fbfbfb]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-8">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinksData.map((link, index) => (
            <div key={index} className="bg-white border-[#A6A6A6] border-1 p-6 rounded-sm text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105">
              {link.icon}
              <h3 className="font-semibold text-black">{link.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}