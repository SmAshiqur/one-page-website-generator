// src/components/ContactUs.js
export default function ContactUs() {
    return (
      <section id="contact" className="pt-26 pb-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-black font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for any questions or to learn more about our school programs.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xl">
            
  
            {/* Email */}
            <div className="text-center">
              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#2f497e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">   <a 
                  href="mailto:info@school.edu" 
                  className="text-gray-600 hover:text-[#2A5BBE] transition-colors duration-200"
                >
                  info@school.edu
                </a></h3>
             
              </div>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#2f497e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">     <a 
                  href="https://maps.google.com/?q=123+School+Street,+City,+State+12345" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#2A5BBE] transition-colors duration-200"
                >
                  123 School Street<br />
                  City, State 12345
                </a></h3>
           
              </div>
            </div>
  
            {/* Phone */}
            <div className="text-center">
              <div className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#2f497e]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">   <a 
                  href="tel:+15551234567" 
                  className="text-gray-600 hover:text-[#2A5BBE] transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a></h3>
             
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }