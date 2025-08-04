import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Award, Code, Heart } from 'lucide-react';

const Founder = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const founder = {
    name: "Arjun Patel",
    title: "Founder & Visionary",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "A passionate computer science student with a vision to bridge the gap between academic learning and real-world application. Arjun founded Solvify Club in 2021 with the belief that collaborative problem-solving and hands-on experience are the keys to building the next generation of tech leaders.",
    longBio: "Starting as a freshman with big dreams and even bigger challenges, Arjun recognized the disconnect between classroom theory and industry practice. His journey began when he struggled to find practical applications for his coursework and realized many students faced the same challenge. This sparked the idea for Solvify Club - a community where students could work on real projects, learn from each other, and build meaningful solutions.",
    achievements: [
      "Founded Solvify Club with 5 members, now grown to 200+",
      "Led development of 15+ successful student projects",
      "Organized 25+ workshops and tech events",
      "Mentored 100+ students in their tech journey"
    ],
    skills: ["Full-Stack Development", "Project Management", "Community Building", "Mentorship"],
    social: {
      github: "https://github.com/arjunpatel",
      linkedin: "https://linkedin.com/in/arjunpatel",
      email: "arjun@solvify.club"
    },
    quote: "Technology is not just about code - it's about solving problems that matter and building communities that last."
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg mb-8">
            OUR FOUNDER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Vision Behind <span className="text-yellow-400">Solvify</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Meet the passionate individual who started it all - turning a simple idea into a thriving community 
            of innovators and problem solvers.
          </p>
        </motion.div>

        {/* Founder Profile Card */}
        <motion.div
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Profile Image and Basic Info */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden ring-4 ring-yellow-400/30 shadow-2xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-3 rounded-2xl shadow-lg">
                  <Heart className="w-6 h-6" />
                </div>
              </div>

              {/* Name and Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-yellow-400 text-xl font-semibold mb-6">
                {founder.title}
              </p>

              {/* Quote */}
              <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-8 max-w-md">
                "{founder.quote}"
              </blockquote>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href={founder.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-gray-400 rounded-2xl hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href={founder.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-gray-400 rounded-2xl hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href={`mailto:${founder.social.email}`}
                  className="p-3 bg-gray-800 text-gray-400 rounded-2xl hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Detailed Information */}
            <motion.div
              className="p-8 lg:p-12 bg-gradient-to-br from-yellow-400/5 to-transparent"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Bio */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-6 h-6 text-yellow-400 mr-3" />
                  The Story
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {founder.bio}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {founder.longBio}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-3" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {founder.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Core Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {founder.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-2xl text-sm font-medium border border-yellow-400/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Inspired by Our Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community and be part of the next chapter in our story. Together, we can solve 
              challenges that matter and build the future of technology.
            </p>
            <motion.button
              className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-2xl hover:shadow-yellow-400/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;