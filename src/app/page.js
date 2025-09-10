import TopHeader from '../components/TopHeader'
import Navigation from '../components/Navigation'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import QuickLinks from '../components/QuickLinks'
import SchoolCalendar from '../components/SchoolCalendar'
import Curriculum from '../components/Curriculum'
import TuitionFees from '../components/TuitionFees'
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
      <QuickLinks />
      <SchoolCalendar />
      <section id="curriculum">
        <Curriculum />
      </section>
      <section id="tuition">
        <TuitionFees />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600 // Revalidate every hour