'use client'
export default function TuitionFees() {
  const tuitionRates = [
    {
      category: "One Child",
      price: "$100",
      period: "per month"
    },
    {
      category: "Two Children", 
      price: "$180",
      period: "per month"
    },
    {
      category: "Three or more Children",
      price: "$240", 
      period: "per month"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Tuition Fees
        </h2>
        
        {/* Academic Year Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            2025-26 Session
          </h3>
          <p className="text-gray-600 text-lg">
            Tuition fees can be paid in full or in installments
          </p>
        </div>

        {/* Payment Plans */}
        <div className="mb-8">
          <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Payment Plans
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plan A */}
            <div className="bg-[#fafafa] p-6 rounded-lg border-l-4 border-[#e2e2e2]">
              <h5 className="text-lg font-bold text-black mb-3">Plan A</h5>
              <p className="text-gray-900 text-lg">
                Pay everything at the time of registration
              </p>
            </div>
            
            {/* Plan B */}
            <div className="bg-[#fafafa] p-6 rounded-lg border-l-4 border-[#e2e2e2]">
              <h5 className="text-lg font-bold text-black mb-3">Plan B</h5>
              <p className="text-gray-700 font-medium">
                Pay half + <span className="font-semibold text-black text-lg">$35 (Admin fees)</span> at the time of registration and the other half before the second semester starts.
              </p>
            </div>
          </div>
        </div>

        {/* Tuition Rates */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className=" text-black">
            <h4 className="text-xl font-bold text-center">
              Pre-K through 12th Grade
            </h4>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-800 text-lg">
                      Number of Students
                    </th>
                    <th className="text-right py-4 px-4 font-bold text-gray-800 text-lg">
                      Monthly Tuition
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionRates.map((rate, index) => (
                    <tr 
                      key={index}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        index === tuitionRates.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="py-6 px-4">
                        <span className="text-gray-700 font-medium text-lg">
                          {rate.category}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-right">
                        <span className="text-2xl font-bold text-black">
                          {rate.price}
                        </span>
                        <span className="text-gray-500 ml-2">
                          {rate.period}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-6">
            <p className="text-gray-700">
              <span className="font-semibold">Need financial assistance?</span> Please contact our administration office to discuss available options.
            </p>
          </div>
          
          <div className="space-x-4">
            <button 
              onClick={() => window.open('https://secure-api.net/school/registration/demo-mosque', '_blank', 'noopener,noreferrer')}
              className="bg-[#2A5BBE] cursor-pointer text-white px-12 py-3 rounded-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#244ea6] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              REGISTER NOW
            </button>
            <button className="mt-7 cursor-pointer border-2 border-[#2A5BBE] text-[#2A5BBE] px-12 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#2A5BBE] hover:text-white hover:shadow-md transform hover:-translate-y-1 hover:scale-105">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}