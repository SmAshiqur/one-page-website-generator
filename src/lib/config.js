// School configuration
export const schoolConfig = {
    schoolId: process.env.SCHOOL_ID || '1',
    schoolSlug: process.env.SCHOOL_SLUG || 'demo-school',
    apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com',
    schoolName: process.env.NEXT_PUBLIC_SCHOOL_NAME || 'Demo School',
    domain: process.env.NEXT_PUBLIC_DOMAIN || 'localhost:3000',
    revalidateSecret: process.env.REVALIDATE_SECRET || 'secret',
  }
  
  // API endpoints
  export const apiEndpoints = {
    topHeader: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/top-header`,
    navigation: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/navigation`,
    hero: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/hero`,
    about: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/about`,
    quickLinks: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/quick-links`,
    calendar: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/calendar`,
    curriculum: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/curriculum`,
    tuition: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/tuition`,
    footer: `${schoolConfig.apiBaseUrl}/schools/${schoolConfig.schoolId}/footer`,
  }