'use client'
import { schoolApi, staticFallbacks } from '../lib/api'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [data, setData] = useState(staticFallbacks.navigation)

  useEffect(() => {
    async function fetchNavigationData() {
      const navData = await schoolApi.getNavigationData()
      setData(navData || staticFallbacks.navigation)
    }
    fetchNavigationData()
  }, [])

  // Map menu items to their corresponding section IDs
  const getSectionId = (item) => {
    const sectionMap = {
      'Home': 'home',
      'Academic': 'curriculum',
      'Registration': 'registration',
      'Tuition': 'tuition',
      'Contact': 'contact',
      'Donate': 'donate'
    }
    return sectionMap[item] || item.toLowerCase()
  }

  // Handle smooth scrolling to sections
  const handleNavClick = (e, item) => {
    e.preventDefault()
    const sectionId = getSectionId(item)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-3">
            <Image 
              src={data.logo} 
              alt={data.schoolName}
              width={100}
              height={100}
              className="object-contain"
            />
            <h1 className="text-xl font-bold text-blue-900">
              {data.schoolName}
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {data.menuItems?.map((item, index) => {
              // Check if this is the last item (Donate)
              const isLastItem = index === data.menuItems.length - 1
              
              if (isLastItem) {
                // Render Donate as a button
                return (
                  <button
                    key={index}
                    className="bg-[#2A5BBE] cursor-pointer text-white px-8 py-2 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    {item}
                  </button>
                )
              } else {
                // Render other items as regular links
                return (
                  <button
                    key={index}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 cursor-pointer"
                  >
                    {item}
                  </button>
                )
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}