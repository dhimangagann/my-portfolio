function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="section-title text-center">About Me</h1>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                  <span className="elegant-text text-lg text-gray-300">Your Photo</span>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full opacity-20"></div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full text-sm font-medium tracking-wide uppercase">
                  Developer & Designer
                </span>
              </div>
              
              <h2 className="font-display text-4xl font-bold text-gray-100 mb-6">
                Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gagan</span>
              </h2>
              
              <p className="elegant-text text-lg mb-8 leading-relaxed">
                I'm a passionate web developer with expertise in modern technologies like React, 
                JavaScript, and various frameworks. I love creating user-friendly applications 
                and solving complex problems through elegant code solutions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-gray-100 mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                      <span key={skill} className="group bg-gray-800 border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:border-blue-500 hover:text-blue-300 transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6">
                  <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 font-medium">
                    <span className="flex items-center gap-2">
                      Download Resume
                      <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </div>
  )
}

export default About
