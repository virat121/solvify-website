import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Wireframe Graphics */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <svg width="200" height="400" viewBox="0 0 200 400" className="text-yellow-400">
          <path
            d="M50 50 Q100 100 50 150 Q100 200 50 250 Q100 300 50 350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
        <svg width="200" height="400" viewBox="0 0 200 400" className="text-yellow-400">
          <path
            d="M150 50 Q100 100 150 150 Q100 200 150 250 Q100 300 150 350"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content Container with proper spacing from navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 lg:pt-32">
        <div className="text-center">
          {/* Logo Animation - Properly sized and contained */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br rounded-2xl shadow-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                <img
                  src="/solvifylogo.png"
                  alt="Solvify Logo"
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />

              </div>
            </div>

          </motion.div>

          {/* Club Name */}
          <motion.h1
            className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Solvify
          </motion.h1>

          {/* Main Headlines - Responsive typography */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            BRIDGING GAPS
          </motion.h2>

          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            SOLVING CHALLENGES
          </motion.h3>

          {/* Description - Responsive text sizing */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            A student-led initiative building a strong tech community through problem-solving,
            project-based learning, and innovation. Empowering students with practical skills
            for the real tech world.
          </motion.p>

          {/* CTA Button - Responsive sizing */}
          <motion.div
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <motion.button
                className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>GO TO PROJECTS</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats - Responsive grid with proper spacing */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="text-center">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm sm:text-base">Projects Built</div>
            </div>
            <div className="text-center">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">200+</div>
              <div className="text-gray-400 text-sm sm:text-base">Active Members</div>
            </div>
            <div className="text-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">25+</div>
              <div className="text-gray-400 text-sm sm:text-base">Events Hosted</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;