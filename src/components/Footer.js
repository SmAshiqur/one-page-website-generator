export default function Footer() {
  const ArrowIcon = () => (
    <svg className="w-3 h-3 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">About Our School</h3>
            <p className="text-slate-300 leading-relaxed">
              Our Demo School provides an environment for your child to learn
              and love Islam and Islamic lifestyle in the modern world. We teach
              the Quran in easy, memorable and positive ways — Allah’s love, His
              wills, and what He expects of us.
            </p>
          </div>

{/* Contact */}
<div className="space-y-6">
  <h3 className="text-xl font-semibold text-white">Contact Information</h3>
  <div className="space-y-4 text-slate-300">

    {/* Address */}
    <div className="flex items-start gap-3">
      <svg className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p>
        <a 
          href="https://maps.google.com/?q=123+School+Street+City,+State+12345" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white transition-colors"
        >
          123 School Street, City, State 12345
        </a>
      </p>
    </div>

    {/* Email */}
    <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
      <a 
        href="mailto:info@school.edu" 
        className="hover:text-white transition-colors"
      >
        info@school.edu
      </a>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-3">
      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <a 
        href="tel:+15551234567" 
        className="hover:text-white transition-colors"
      >
        +1 (555) 123-4567
      </a>
    </div>

  </div>
</div>


          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="space-y-4">
              {[
                { name: 'Registration', url: '#registration' },
                { name: 'Tuition Payment', url: '#tuition' },
                { name: 'Donation', url: 'https://secure-api.net/give/v7/demo-mosque' },
                { name: 'Contact', url: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  <ArrowIcon />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Legal</h3>
            <nav className="space-y-4">
              {[
                { name: 'Privacy Policy', url: '#' },
                { name: 'Terms & Conditions', url: '#' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  <ArrowIcon />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2025 Demo School. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Powered by 
              <a 
                href="https://masjidsolutions.net/" 
                className="text-slate-300 hover:text-white transition-colors ml-1"
              >
                Masjidsolutions.net
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
