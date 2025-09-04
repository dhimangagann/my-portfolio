function HeroSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="hero" className="min-h-screen bg-gray-900 flex items-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Gagan</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">Creative Developer</p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          I create beautiful and functional web experiences with modern technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
