import pfpImage from '../assets/pfp.png'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AboutSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`min-h-screen calm-gradient flex items-center relative transition-all duration-1000 ${
        isVisible ? 'smooth-scroll-section visible' : 'smooth-scroll-section'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">About Me</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full mx-auto mb-6 sm:mb-8 shadow-2xl shadow-blue-500/20 overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src={pfpImage} 
                      alt="Gagan's Profile" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-6 sm:mb-8 text-center lg:text-left">
                <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-300 border border-purple-500/30 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
                  🚀 Developer & Designer
                </span>
              </div>
              
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-6 sm:mb-8 leading-tight text-center lg:text-left">
                Hello, I'm <br />
                <span className="gradient-text">Gagan</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 text-center lg:text-left">
                <p className="elegant-text">
                  I'm a <span className="highlight-text">passionate web developer</span> with expertise in modern technologies. 
                  I specialize in creating <span className="gradient-text font-semibold">user-friendly applications</span> 
                  and solving complex problems through elegant code solutions.
                </p>
                
                <p className="elegant-text">
                  My journey in development has led me to master various frameworks and tools, 
                  always staying curious about emerging technologies and best practices.
                </p>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-display text-2xl sm:text-3xl font-semibold text-gray-100 mb-4 sm:mb-6 relative text-center lg:text-left">
                    Skills
                    <span className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git'].map((skill) => (
                      <span key={skill} className="tech-badge text-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium text-center block">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 sm:pt-6 text-center lg:text-left">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-150 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 font-medium text-sm sm:text-base">
                    <span className="flex items-center justify-center gap-2">
                      Download Resume
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
