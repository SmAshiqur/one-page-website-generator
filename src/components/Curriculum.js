
'use client'
import { useState } from 'react'

const islamicStudiesLevels = [
  "Level 1: Learning Islam through Stories",
  "Level 2: God and His Final Messenger – Seerah 1", 
  "Level 3: God and His Final Messenger – Seerah 2",
  "Level 4: Building Character Through Quran",
  "Level 5: Understanding The Quran",
  "Level 6: Gems from the Quran and Hadith",
  "Level 7: Islamic Law and Wisdom – 1",
  "Level 8: Islamic Law and Wisdom – 2",
  "Level 9: Survey of Contemporary Issues"
]

const quranicClasses = [
  {
    name: "Class Abū Bakr",
    ages: "Ages 4–7",
    profile: "Beginners and younger children.",
    skills: "Arabic letters, vowels, simple connected words.",
    focus: "Qaʿidah, letter recognition, pronunciation.",
    goal: "Build strong reading foundations."
  },
  {
    name: "Class ʿUmar",
    ages: "Ages 7–10", 
    profile: "Basic readers, slow with mistakes.",
    skills: "Connected Qur'anic text, short surahs, basic tajwīd.",
    focus: "Fluency and error correction.",
    goal: "Smooth independent reading."
  },
  {
    name: "Class ʿUthmān",
    ages: "Ages 10–14",
    profile: "Intermediate readers, fluent but tajwīd errors.",
    skills: "Reads most Qur'an, basic waqf, needs tajwīd refinement.",
    focus: "Fluency in long passages, tajwīd correction.",
    goal: "Confident reading across half the Qur'an."
  },
  {
    name: "Class ʿAlī",
    ages: "Ages 14+",
    profile: "Advanced readers, older students, or adults.",
    skills: "Fluent anywhere, applies tajwīd correctly.",
    focus: "Advanced tajwīd, recitation beauty, leadership prep.",
    goal: "Excellence in recitation, role models for others."
  }
]

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('islamic')

  return (
    <section id="curriculum" className="py-8 md:py-26 bg-[#fff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Curriculum
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md cursor-pointer">
            <button
              onClick={() => setActiveTab('islamic')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'islamic'
                  ? 'bg-[#2F497E] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#2F497E]'
              }`}
            >
              Subject 1
            </button>
            <button
              onClick={() => setActiveTab('quranic')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'quranic'
                  ? 'bg-[#2F497E] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#2F497E]'
              }`}
            >
              Subject 2
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'islamic' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {islamicStudiesLevels.map((level, index) => (
                  <div 
                    key={index}
                    className="bg-[#fff] p-4 rounded-sm border-l-3 border-[#e2e2e2] hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-700 font-medium">{level}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quranic' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quranicClasses.map((qclass, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-sm border-l-3 border-[#e2e2e2] hover:shadow-md transition-shadow"
                  >
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-black mb-1">
                        {qclass.name}
                      </h4>
                      <p className="text-blue-500 font-semibold text-sm">
                        {qclass.ages}
                      </p>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">Profile:</span>
                        <span className="text-gray-600 ml-2">{qclass.profile}</span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-gray-700">Skills:</span>
                        <span className="text-gray-600 ml-2">{qclass.skills}</span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-gray-700">Focus:</span>
                        <span className="text-gray-600 ml-2">{qclass.focus}</span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-gray-700">Goal:</span>
                        <span className="text-gray-600 ml-2">{qclass.goal}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
