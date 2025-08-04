import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Star, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Mini Health Chatbot",
      description: "AI-powered healthcare assistant providing basic medical guidance and symptom checking. Built with natural language processing and medical knowledge base.",
      category: "AI/ML",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      icon: Code,
      github: "https://github.com/solvify/health-chatbot",
      demo: "https://health-chatbot-demo.com",
      status: "Active",
      contributors: 8,
      stars: 124
    },
    {
      id: 2,
      title: "Campus Connect",
      description: "Social networking platform for college students to connect, share resources, and collaborate on projects. Features real-time messaging and event management.",
      category: "Web Development",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      icon: Database,
      github: "https://github.com/solvify/campus-connect",
      demo: "https://campus-connect-demo.com",
      status: "Active",
      contributors: 12,
      stars: 89
    },
    {
      id: 3,
      title: "Study Buddy",
      description: "Mobile app helping students organize study sessions, track progress, and find study partners. Includes pomodoro timer and progress analytics.",
      category: "Mobile App",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      icon: Smartphone,
      github: "https://github.com/solvify/study-buddy",
      demo: "https://study-buddy-demo.com",
      status: "Active",
      contributors: 6,
      stars: 67
    },
    {
      id: 4,
      title: "Event Manager Pro",
      description: "Comprehensive event management system for college clubs and organizations. Features registration management, attendance tracking, and analytics.",
      category: "Web Development",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
      icon: Code,
      github: "https://github.com/solvify/event-manager",
      demo: "https://event-manager-demo.com",
      status: "Active",
      contributors: 10,
      stars: 156
    },
    {
      id: 5,
      title: "Code Review Bot",
      description: "Automated code review system using machine learning to analyze code quality, suggest improvements, and detect potential bugs.",
      category: "DevTools",
      tech: ["Python", "GitHub API", "Machine Learning", "Docker"],
      icon: Database,
      github: "https://github.com/solvify/code-review-bot",
      demo: "https://code-review-demo.com",
      status: "Active",
      contributors: 7,
      stars: 203
    },
    {
      id: 6,
      title: "Smart Library System",
      description: "Digital library management system with book recommendation engine, reservation system, and reading progress tracking.",
      category: "Web Development",
      tech: ["Vue.js", "Express.js", "MongoDB", "Recommendation Engine"],
      icon: Code,
      github: "https://github.com/solvify/smart-library",
      demo: "https://smart-library-demo.com",
      status: "Active",
      contributors: 9,
      stars: 98
    }
  ];

  const categories = ["All", "Web Development", "AI/ML", "Mobile App", "DevTools"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 relative inline-block">
            PROJECTS
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover the innovative projects built by our talented community. From AI solutions to web applications, 
            each project represents our commitment to solving real-world problems through technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-white/5 text-gray-300 hover:bg-yellow-400/20 hover:text-yellow-400 border border-gray-700 hover:border-yellow-400/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -15, scale: 1.03, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className="w-6 h-6 text-yellow-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-yellow-400/80 text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <motion.div 
                    className="flex items-center space-x-1 text-gray-400"
                    whileHover={{ scale: 1.1, color: '#facc15' }}
                  >
                    <Star className="w-4 h-4" />
                    <span className="text-sm">{project.stars}</span>
                  </motion.div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium group-hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{project.contributors} contributors</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 text-white px-4 py-2 rounded-xl font-medium hover:bg-white/20 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded-xl font-medium hover:bg-yellow-300 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Have an idea for a project? Join our community and bring it to life!
          </p>
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;