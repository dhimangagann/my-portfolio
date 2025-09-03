import Navigation from './components/Navigation'
import SoothingBackground from './components/SoothingBackground'
import ScrollProgressIndicator from './components/ScrollProgressIndicator'
import BackToTopButton from './components/BackToTopButton'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'

function App() {
  return (
    <div className="App">
      <ScrollProgressIndicator />
      <SoothingBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <BackToTopButton />
    </div>
  )
}

export default App
