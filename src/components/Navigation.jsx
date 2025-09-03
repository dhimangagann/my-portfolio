import { useState, useEffect } from 'react'
import { smoothScrollTo, initSmoothScrolling } from '../utils/smoothScroll'

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  
  useEffect(() => {
    initSmoothScrolling();
  }, []);
  
  const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId, 80);
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]
  
  return (
    <nav className="bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center space-x-2 flex-shrink-0 group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain logo-no-bg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </button>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm lg:text-base font-medium transition-all duration-200 py-2 px-4 rounded-lg group ${
                  activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item.label}
                
                <span 
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                ></span>
                
                <span 
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
                ></span>
                
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-2xl animate-slide-down">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative block w-full text-left transition-all duration-200 py-3 px-4 rounded-lg text-base font-medium group ${
                    activeSection === item.id 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/30'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  
                  <span 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r transition-all duration-300 group-hover:h-6 opacity-0 group-hover:opacity-100"
                  ></span>
                  
                  {activeSection === item.id && (
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
