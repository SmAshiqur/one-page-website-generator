
'use client'
import { schoolApi, staticFallbacks } from '../lib/api'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Navigation() {
  const [data, setData] = useState(staticFallbacks.navigation)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [isClickNavigating, setIsClickNavigating] = useState(false)
  const navRef = useRef(null) // Ref for navigation bar

  useEffect(() => {
    async function fetchNavigationData() {
      const navData = await schoolApi.getNavigationData()
      setData(navData || staticFallbacks.navigation)
    }
    fetchNavigationData()

    // Handle scroll events with debounce
    let scrollTimeout
    const handleScroll = () => {
      if (isClickNavigating) return // Skip scroll handling during click navigation

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const sections = data.menuItems
          .filter(item => item !== 'Donate')
          .map(item => getSectionId(item))
        
        let currentSection = 'home'
        let closestTop = Infinity

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId)
          if (element) {
            const rect = element.getBoundingClientRect()
            const topDistance = Math.abs(rect.top)
            if (rect.top <= window.innerHeight && rect.bottom >= 0 && topDistance < closestTop) {
              currentSection = sectionId
              closestTop = topDistance
            }
          }
        }

        // Map section ID back to menu item name
        const sectionMap = {
          home: 'Home',
          curriculum: 'Academic',
          calendar: 'Calendar',
          registration: 'Registration',
          tuition: 'Tuition',
          contact: 'Contact'
        }
        setActiveSection(sectionMap[currentSection] || 'Home')
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [data.menuItems, isClickNavigating])

  // Map menu items to their corresponding section IDs
  const getSectionId = (item) => {
    const sectionMap = {
      'Home': 'home',
      'Academic': 'curriculum',
      'Calendar': 'calendar',
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
    setIsClickNavigating(true)
    setActiveSection(item)
    
    const sectionId = getSectionId(item)
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 0
      const offset = window.innerWidth < 768 ? 80 : 104 // 80px for mobile, 104px (py-26) for desktop
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight - offset,
        behavior: 'smooth'
      })
      setTimeout(() => setIsClickNavigating(false), 1000)
    }
    setIsMobileMenuOpen(false)
  }

  // Handle logo click - scroll to top
  const handleLogoClick = () => {
    setIsClickNavigating(true)
    setActiveSection('Home')
    const navHeight = navRef.current?.offsetHeight || 0
    const offset = window.innerWidth < 768 ? 80 : 104
    window.scrollTo({
      top: 0 - navHeight - offset,
      behavior: 'smooth'
    })
    setTimeout(() => setIsClickNavigating(false), 1000)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav ref={navRef} className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and School Name */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-3 transition-opacity duration-200 cursor-pointer"
          >
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
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-md text-black font-bold">
            {data.menuItems?.map((item, index) => {
              const isLastItem = index === data.menuItems.length - 1
              
              if (isLastItem) {
                return (
                  <button
                    key={index}
                    onClick={() => window.location.href = 'https://secure-api.net/give/v7/demo-mosque'}
                    className="bg-[#2A5BBE] cursor-pointer text-white px-8 py-2 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  >
                    {item}
                  </button>
                )
              } else {
                return (
                  <button
                    key={index}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-black hover:text-blue-600 font-bold transition-colors duration-200 cursor-pointer border-2 rounded-sm px-2 py-1 ${
                      activeSection === item ? 'border-blue-600 text-blue-600' : 'border-transparent'
                    }`}
                  >
                    {item}
                  </button>
                )
              }
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {data.menuItems?.map((item, index) => {
                const isRegistration = item === 'Registration'
                const isDonation = item === 'Donate'
                
                if (isRegistration) {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        window.open('https://secure-api.net/school/registration/demo-mosque', '_blank', 'noopener,noreferrer')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full bg-[#2A5BBE] text-white px-6 py-3 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-center"
                    >
                      {item}
                    </button>
                  )
                } else if (isDonation) {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        window.open('https://secure-api.net/give/v7/demo-mosque', '_blank', 'noopener,noreferrer')
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-center"
                    >
                      {item}
                    </button>
                  )
                } else {
                  return (
                    <button
                      key={index}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`w-full text-left text-black hover:text-blue-600 font-bold transition-colors duration-200 py-2 border-2 rounded-sm px-2 ${
                        activeSection === item ? 'border-blue-600 text-blue-600' : 'border-transparent'
                      }`}
                    >
                      {item}
                    </button>
                  )
                }
              })}
              
              <div className="pt-3 border-t border-gray-200">
                <a 
                  href="https://secure-api.net/demo-mosque" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
