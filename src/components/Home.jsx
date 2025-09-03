function Home() {
  return (
    <div className="min-h-screen dark-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full text-sm font-medium tracking-wide uppercase">
              Welcome to my world
            </span>
          </div>
          
          <h1 className="hero-title mb-8">
            Gagan's Portfolio
          </h1>
          
          <p className="subtitle max-w-3xl mx-auto mb-12">
            I'm <span className="font-semibold text-blue-400">Gagan</span>, a passionate developer crafting 
            <span className="font-display italic text-blue-300"> beautiful</span> and 
            <span className="font-display italic text-blue-300"> functional</span> web experiences. 
            Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium">
              <span className="flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="group border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:scale-105 font-medium">
              <span className="flex items-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
