
export default function Footer() {
  return (
    <footer className="bg-[#2F497E] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid for 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          
          {/* Column 1 - Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 leading-relaxed">
              Our Demo School provides an environment for your child to learn
              and love Islam and Islamic lifestyle in the modern world. We teach
              the Quran in easy, memorable and positive ways — Allah’s love, His
              wills, and what He expects of us.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tuition Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Donation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                123 School Street, City, State 12345
              </li>
              <li className="flex items-center gap-3">
                info@school.edu
              </li>
              <li className="flex items-center gap-3">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="mt-8 text-gray-300 border-t-1 border-[#E9E9E9] pt-4">
            &copy; 2025 Demo School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
