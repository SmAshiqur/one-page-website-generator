'use client'

// src/components/SchoolCalendar.js
export default function SchoolCalendar() {
    return (
      <section id="calendar" className="pt-26 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-8">School Calendar</h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="my-2 mb-4 cursor-pointer border-2 border-[#2A5BBE] text-[#2A5BBE] px-12 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#2A5BBE] hover:text-white hover:shadow-md transform hover:-translate-y-1 hover:scale-105"
                onClick={() => window.location.href = 'https://forms-web.secure-api.net/calendar/imca-wa'}
                >
                VIEW FULL CALENDAR
              </button>
          </div>
        
          <div className="bg-white rounded-lg">
          <div className="relative w-full mx-auto bg-white rounded-lg  overflow-hidden 
                md:mx-[10px] md:rounded-md 
                sm:mx-[5px] sm:rounded-none">
            <iframe
              className="w-full h-[800px] border-0 block 
                        md:h-[700px] 
                        sm:h-[500px]"
              src="https://mosque.masjidapps.net/plugins/event-calendar/?company=imca-wa"
              title="Event Calendar"
              loading="lazy"
            ></iframe>
          </div>

          </div>
        </div>
      </section>
    )
  }
  