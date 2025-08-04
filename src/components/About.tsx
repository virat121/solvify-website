import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Users, Code2 } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "We tackle real-world challenges through innovative thinking and collaborative problem-solving approaches."
    },
    {
      icon: Code2,
      title: "Project-Based Learning",
      description: "Learn by doing with hands-on projects that build practical skills and industry-relevant experience."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Foster creativity and innovation through hackathons, workshops, and cutting-edge technology exploration."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded peers, mentors, and industry professionals in our vibrant tech community."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-2xl"></div>
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
            ABOUT US
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Solvify Club is more than just a tech club – we're a movement. Founded by passionate students 
            who believe in the power of collaboration, innovation, and continuous learning. Our mission is 
            to bridge the gap between academic knowledge and real-world application.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl p-8 mb-16 backdrop-blur-sm border border-yellow-400/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <blockquote className="text-center">
            <p className="text-white text-xl md:text-2xl font-light italic leading-relaxed mb-4">
              "To solve problems creatively and efficiently while building the next generation of tech leaders."
            </p>
            <cite className="text-yellow-400 font-medium">— Solvify Club Mission</cite>
          </blockquote>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:bg-yellow-400/5"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="mb-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-14 h-14 bg-yellow-400/20 rounded-2xl group-hover:bg-yellow-400/30 transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-yellow-400" />
                </motion.div>
              </div>
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "3+", label: "Years Active" },
            { number: "200+", label: "Members" },
            { number: "50+", label: "Projects" },
            { number: "25+", label: "Events" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;