import { schoolApi, staticFallbacks } from '../lib/api'

async function getTopHeaderData() {
  const data = await schoolApi.getTopHeaderData()
  return data || staticFallbacks.topHeader
}

export default async function TopHeader() {
  const data = await getTopHeaderData()

  return (
    <div className="bg-[#2A5BBE] text-white py-2 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
          {/* Left side - Contact info */}
          <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>{data.phone}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span>{data.email}</span>
            </div>
          </div>

          {/* Right side - Location */}
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>{data.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}