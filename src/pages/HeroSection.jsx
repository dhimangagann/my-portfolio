import { smoothScrollTo } from '../utils/smoothScroll'

function HeroSection() {
  const scrollToSection = (sectionId) => {
    smoothScrollTo(sectionId, 80);
  };

  return (
    <section id="hero" className="min-h-screen lightning-bg flex items-center pt-14 sm:pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-300 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
              ✨ Welcome to my digital space
            </span>
          </div>
          
          <h1 className="hero-title mb-8 sm:mb-12">
            Hi, I'm <span className="gradient-text">Gagan</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-400 block mt-2 sm:mt-4">
              Creative Developer
            </span>
          </h1>
          
          <div className="max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-12 sm:mb-16">
            <p className="subtitle mb-4 sm:mb-6">
              I craft <span className="highlight-text">beautiful</span> and <span className="highlight-text">functional</span> web experiences 
              that bring ideas to life through elegant code and thoughtful design.
            </p>
            <p className="elegant-text">
              Passionate about modern technologies • Building digital solutions • Creating user-centered experiences
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-blue-500/30 font-medium w-full sm:w-auto text-sm sm:text-base animate-gradient-shift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-xl"></div>
              
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-150"></div>
              
              <span className="relative flex items-center justify-center gap-2">
                View My Work
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 font-medium w-full sm:w-auto text-sm sm:text-base"
            >
              <div className="bg-gray-900 rounded-lg px-6 sm:px-8 py-3 sm:py-4 group-hover:bg-transparent transition-all duration-150">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-150"></div>
                
                <span className="relative flex items-center justify-center gap-2 text-blue-400 group-hover:text-white transition-colors duration-150">
                  Get In Touch
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </button>
          </div>
          
          <div className="mt-12 sm:mt-16 flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce hover:text-blue-300 transition-colors duration-150"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
