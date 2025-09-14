'use client'

export default function RegistrationSection() {
    return (
      <section id="registration" className="py-26 bg-white text-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center text-black">
            {/* Main Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                2025-26 School Year Registration is Open
              </h2>
              <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
            </div>
  
            {/* Registration Details */}
            {/* <div className="bg-[#fafafa] rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Pre-K through 12th Grade
                  </h3>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-semibold">Classes:</span> Every Saturday and Sunday
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Time:</span> 11 AM to 2 PM
                    </p>
                  </div>
                </div>
  
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    Pre-K Requirements
                  </h3>
                  <div className="space-y-2">
                    <p className="text-lg">
                      ✓ At least <span className="font-semibold">4 years old</span> on August 1st, 2025
                    </p>
                    <p className="text-lg">
                      ✓ Must be <span className="font-semibold">potty trained</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
  
            {/* Special Announcement */}
            {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
              <p className="text-gray-700 text-2xl">
                <span className="font-semibold">NEW:</span> We are accepting Pre-K this year!
              </p>
            </div> */}
  
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* New Parent Registration Button */}
              <button 
                className="mt-7 bg-[#2A5BBE] cursor-pointer text-white px-12 py-3 rounded-sm border-2 border-[#2A5BBE] font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                onClick={() => window.location.href = 'https://secure-api.net/school/registration/demo-mosque'}
                >
                NEW PARENT REGISTRATION
              </button>
  
              {/* Returning Student Registration Button */}
              <button 
                className="mt-7 cursor-pointer border-2 border-[#2A5BBE] text-[#2A5BBE] px-12 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#2A5BBE] hover:text-white hover:shadow-md transform hover:-translate-y-1 hover:scale-105"
                onClick={() => window.location.href = 'https://secure-api.net/demo-mosque'}
                >
                EXISTING PARENT REGISTRATION
              </button>
            </div>
  
            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-lg text-gray-700">
                Questions about registration? 
                <a href="#contact" className="font-bold hover:underline ml-2 text-[#2A5BBE]">
                  Contact our office →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }