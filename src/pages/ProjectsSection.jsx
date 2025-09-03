import { useScrollAnimation } from '../hooks/useScrollAnimation'

function ProjectsSection() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      id: 1,
      title: "Movie Mania",
      description: "A dynamic movie discovery app built with vanilla JavaScript that fetches real-time movie data from external APIs, featuring search functionality and responsive design",
      technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
      github: "https://github.com/dhimangagann/movie-app.git",
      demo: "https://dhimangagann.github.io/movie-app/"
    },
    {
      id: 2,
      title: "Text Editor",
      description: "A modern, feature-rich text editor built with React and styled with Tailwind CSS, offering a clean interface for document editing and formatting",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/dhimangagann/text-editor.git",
      demo: "#"
    },
    {
      id: 3,
      title: "News App",
      description: "A comprehensive news application using React with React Router for navigation and Tailwind CSS for styling, fetching live news from news APIs",
      technologies: ["React", "Tailwind CSS", "React Router", "News API"],
      github: "https://github.com/dhimangagann/news-app.git",
      demo: "#"
    }
  ]

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`min-h-screen soothing-bg flex items-center relative transition-all duration-1000 ${
        isVisible ? 'smooth-scroll-section visible' : 'smooth-scroll-section'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-indigo-300 border border-indigo-500/30 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-sm mb-6 sm:mb-8">
            💼 Portfolio Showcase
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="subtitle max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto">
            Explore my latest work and creative solutions that showcase 
            <span className="highlight-text">innovation</span> and <span className="highlight-text">craftsmanship</span>
          </p>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group dark-card rounded-2xl hover:shadow-blue-500/20 overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <span className="relative text-white font-display text-base sm:text-lg font-semibold">Project Preview</span>
                <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-white opacity-10 rounded-full"></div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="elegant-text mb-6 sm:mb-8 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge text-gray-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a href={project.github} className="group/link flex items-center justify-center sm:justify-start gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm sm:text-base">
                    <svg className="w-4 h-4 group-hover/link:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={project.demo} className="group/link flex items-center justify-center sm:justify-start gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm sm:text-base">
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
    </section>
  )
}

export default ProjectsSection
