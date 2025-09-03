function Projects() {
  const projects = [
    {
      id: 1,
      title: "Modern Web App",
      description: "A stunning web application built with React and Tailwind CSS featuring responsive design and smooth animations",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Data Dashboard",
      description: "An interactive analytics dashboard with beautiful data visualizations and real-time updates",
      technologies: ["React", "Chart.js", "Node.js"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with secure payments and admin panel",
      technologies: ["React", "Express", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen dark-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-900/50 text-blue-300 border border-blue-700 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
            Portfolio
          </span>
          <h1 className="section-title">My Projects</h1>
          <p className="subtitle max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group dark-card rounded-2xl hover:shadow-blue-500/20 overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <span className="relative text-white font-display text-lg font-semibold">Project Preview</span>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
              </div>
              
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="elegant-text mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-700 border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="group/link flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    <svg className="w-4 h-4 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.demo} className="group/link flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
