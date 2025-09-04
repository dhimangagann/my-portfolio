import React from 'react'

function AboutSection() {
  return (
    <section id="about" className="py-20 px-5 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-100">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-300">
              Hello! I'm a passionate developer
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I specialize in creating modern, responsive web applications using cutting-edge 
              technologies. My journey in web development has equipped me with a strong foundation 
              in both frontend and backend technologies.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm passionate about writing clean, efficient code and creating user experiences 
              that are both functional and beautiful. I love learning new technologies and 
              taking on challenging projects that push my skills to the next level.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-600 text-blue-100 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-green-600 text-green-100 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-purple-600 text-purple-100 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-yellow-600 text-yellow-100 rounded-full text-sm font-medium">
                CSS/Tailwind
              </span>
              <span className="px-4 py-2 bg-red-600 text-red-100 rounded-full text-sm font-medium">
                Git
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-gray-600">
              <img 
                src="/pfp.png" 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
