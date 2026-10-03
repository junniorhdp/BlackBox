import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Schedules from './components/Schedules.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import DemoBadge from './components/DemoBadge.jsx'

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Schedules />
        <Gallery />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <DemoBadge />
    </div>
  )
}
