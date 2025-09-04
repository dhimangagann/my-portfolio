import Navigation from './components/Navigation'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'

function App() {
  return (
    <div className="App" style={{
      fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.6',
      letterSpacing: '0.01em'
    }}>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
