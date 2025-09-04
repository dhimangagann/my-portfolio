function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Movie Mania",
      description: "A dynamic movie discovery app built with vanilla JavaScript that fetches real-time movie data from external APIs.",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/dhimangagann/movie-app.git",
      demo: "https://dhimangagann.github.io/movie-app/"
    },
    {
      id: 2,
      title: "Text Editor",
      description: "A modern, feature-rich text editor built with React and styled with Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/dhimangagann/text-editor.git",
      demo: "#"
    },
    {
      id: 3,
      title: "News App",
      description: "A comprehensive news application using React with React Router for navigation and Tailwind CSS for styling.",
      technologies: ["React", "Tailwind CSS", "React Router", "News API"],
      github: "https://github.com/dhimangagann/news-app.git",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Project Preview</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-100 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a href={project.github} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  GitHub
                </a>
                <a href={project.demo} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
