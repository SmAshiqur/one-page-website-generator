// src/components/AboutSection.js  
export default function AboutSection() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Welcome to Demo School</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            We welcome students from kindergarten through 12th grade into a nurturing and structured learning environment. Our in-person Quranic and Islamic Studies classes are thoughtfully designed for each grade level, ensuring age-appropriate learning and growth. Children gain knowledge of Islam while building connections with fellow Muslims in a warm and engaging community.
          </p>
          <button className="mt-7 cursor-pointer border-2 border-[#2A5BBE] text-[#2A5BBE] px-12 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#2A5BBE] hover:text-white hover:shadow-md transform hover:-translate-y-1 hover:scale-105">
            VIEW CURRICULUM
          </button>

        </div>
      </section>
    )
  }