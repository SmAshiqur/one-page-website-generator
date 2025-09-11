// src/components/HeroSlider.js
'use client'
import { useState, useEffect } from 'react'
import { schoolApi, staticFallbacks } from '../lib/api'

export default function HeroSlider() {
  const [slides, setSlides] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)

  // Fetch slides data
  useEffect(() => {
    async function fetchSlides() {
      const data = await schoolApi.getHeroData()
      setSlides(data?.slides || staticFallbacks.hero.slides)
    }
    fetchSlides()
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000) // Change slide every 8 seconds
      return () => clearInterval(timer)
    }
  }, [slides.length])

  // Handle manual slide navigation
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Handle previous/next navigation
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (slides.length === 0) {
    return <div>Loading...</div>
  }

  const currentSlideData = slides[currentSlide]
  
  // Debug: Log the current slide data
  console.log('Current slide data:', currentSlideData)

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
    <section className="relative h-[600px] max-sm:aspect-video max-sm:h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out bg-gray-800"
        style={{ 
          backgroundImage: `url(${currentSlideData.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-1"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl max-sm:text-2xl font-bold mb-4 max-sm:mb-2 max-w-4xl mx-auto leading-tight">
            {currentSlideData.title}
          </h1>
          <p className="text-xl md:text-2xl max-sm:text-sm font-semibold mb-8 max-sm:mb-4 max-w-3xl mx-auto">
            {currentSlideData.subtitle}
          </p>
          <button 
            className="bg-[#2A5BBE] cursor-pointer text-white px-12 py-4 max-sm:px-6 max-sm:py-2 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-lg max-sm:text-sm"
            onClick={() => window.location.href = currentSlideData.buttonLink}
          >
            {currentSlideData.buttonText}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute cursor-pointer left-4 max-sm:left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-20 hover:bg-opacity-30 p-3 max-sm:p-2 rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute cursor-pointer right-4 max-sm:right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-20 hover:bg-opacity-30 p-3 max-sm:p-2 rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 max-sm:w-4 max-sm:h-4" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 max-sm:bottom-3 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 max-sm:space-x-1">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 max-sm:w-2 max-sm:h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}