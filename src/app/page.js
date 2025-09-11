import TopHeader from '../components/TopHeader'
import Navigation from '../components/Navigation'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import RegistrationSection from '../components/RegistrationSection'
import QuickLinks from '../components/QuickLinks'
import SchoolCalendar from '../components/SchoolCalendar'
import Curriculum from '../components/Curriculum'
import TuitionFees from '../components/TuitionFees'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopHeader />
      <Navigation />
      <section id="home">
        <HeroSlider />
      </section>
      <AboutSection />
      <section id="registration">
        <RegistrationSection />
      </section>
      <QuickLinks />
      <section id="calendar">
        <SchoolCalendar />
      </section>
      <section id="curriculum">
        <Curriculum />
      </section>
      <section id="tuition">
        <TuitionFees />
      </section>
      <section id="contact">
      <ContactUs />
        <Footer />
      </section>
    </main>
  )
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600 // Revalidate every hour