// src/components/SchoolCalendar.js
export default function SchoolCalendar() {
    return (
      <section className="pt-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-black font-bold text-center mb-8">School Calendar</h2>
          <div className="bg-white rounded-lg">
          <div className="relative w-full mx-auto bg-white rounded-lg  overflow-hidden 
                md:mx-[10px] md:rounded-md 
                sm:mx-[5px] sm:rounded-none">
            <iframe
              className="w-full h-[800px] border-0 block 
                        md:h-[800px] 
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
  