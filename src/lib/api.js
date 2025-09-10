import { apiEndpoints } from './config'

// Generic API fetch function
async function fetchApi(url, options = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Fetch Error:', error)
    return null
  }
}

// School data API functions with fallbacks
export const schoolApi = {
  // Top header data (phone, email, location)
  getTopHeaderData: async () => {
    const data = await fetchApi(apiEndpoints.topHeader)
    return data || staticFallbacks.topHeader
  },
  
  // Navigation data (logo, menu items)
  getNavigationData: async () => {
    const data = await fetchApi(apiEndpoints.navigation)
    return data || staticFallbacks.navigation
  },
  
  // Hero slider data
  getHeroData: async () => {
    const data = await fetchApi(apiEndpoints.hero)
    return data || staticFallbacks.hero
  },
  
  // About section data
  getAboutData: async () => {
    const data = await fetchApi(apiEndpoints.about)
    return data || staticFallbacks.about
  },
  
  // Quick links data
  getQuickLinksData: async () => {
    const data = await fetchApi(apiEndpoints.quickLinks)
    return data || staticFallbacks.quickLinks
  },
  
  // School calendar events
  getCalendarData: async () => {
    const data = await fetchApi(apiEndpoints.calendar)
    return data || staticFallbacks.calendar
  },
  
  // Curriculum information
  getCurriculumData: async () => {
    const data = await fetchApi(apiEndpoints.curriculum)
    return data || staticFallbacks.curriculum
  },
  
  // Tuition fees data
  getTuitionData: async () => {
    const data = await fetchApi(apiEndpoints.tuition)
    return data || staticFallbacks.tuition
  },
  
  // Footer data
  getFooterData: async () => {
    const data = await fetchApi(apiEndpoints.footer)
    return data || staticFallbacks.footer
  },
}

// Static data fallbacks (for development/testing)
export const staticFallbacks = {
  topHeader: {
    phone: '+1 (555) 123-4567',
    email: 'info@school.edu',
    location: '123 School Street, City, State 12345'
  },
  navigation: {
    logo: '/images/placeholders/Demo-School-Logo.png',
    // schoolName: 'Demo School',
    menuItems: ['Home', 'Academic', 'Registration', 'Tuition', 'Contact', 'Donate']
  },
  hero: {
    slides: [
      {
        title: 'SCHOOL REGISTRATION NOW OPEN',
        subtitle: '2025-2026 REGISTRATION ARE OPEN NOW FOR ALL CLASSES!',
        buttonText: 'REGISTER NOW',
        buttonLink: '#registration',
        backgroundImage: '/images/placeholders/Slide-1.jpg'
      },
      {
        title: 'EXCELLENCE IN EDUCATION',
        subtitle: 'Preparing students for success in a changing world',
        buttonText: 'LEARN MORE',
        buttonLink: '#about',
        backgroundImage: '/images/placeholders/Slide-1.jpg'
      },
      {
        title: 'JOIN OUR COMMUNITY',
        subtitle: 'Be part of a supportive learning environment',
        buttonText: 'APPLY TODAY',
        buttonLink: '#contact',
        backgroundImage: '/images/placeholders/Slide-1.jpg'
      }
    ]
  },
  about: {
    title: 'About Our School',
    content: 'We are dedicated to providing excellent education...',
    image: '/images/placeholders/about.jpg'
  },
  quickLinks: {
    title: 'Quick Links',
    links: [
      { name: 'Registration', url: '#registration' },
      { name: 'Tuition Payment', url: '#tuition' },
      { name: 'Calendar', url: '#calendar' },
      { name: 'Contact', url: '#contact' }
    ]
  },
  calendar: {
    title: 'Upcoming Events',
    events: [
      { date: '2024-01-15', title: 'Parent-Teacher Conference', time: '6:00 PM' },
      { date: '2024-01-20', title: 'School Assembly', time: '9:00 AM' },
      { date: '2024-01-25', title: 'Sports Day', time: 'All Day' }
    ]
  },
  curriculum: {
    title: 'Our Curriculum',
    description: 'We offer a comprehensive curriculum designed to prepare students for success.',
    programs: ['Elementary', 'Middle School', 'High School', 'Advanced Placement']
  },
  tuition: {
    title: 'Tuition & Fees',
    description: 'Affordable education for all families.',
    fees: [
      { grade: 'Elementary', amount: '$8,000/year' },
      { grade: 'Middle School', amount: '$9,500/year' },
      { grade: 'High School', amount: '$11,000/year' }
    ]
  },
  footer: {
    schoolName: 'Demo School',
    address: '123 School Street, City, State 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@school.edu',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      instagram: '#'
    }
  }
}