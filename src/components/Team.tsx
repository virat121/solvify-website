import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronLeft, ChevronRight, ChevronDown, Users } from 'lucide-react';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "President",
      department: "Computer Science",
      year: 2023,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Passionate about AI and machine learning. Leading our club's vision for innovation and technical excellence.",
      skills: ["Python", "Machine Learning", "React", "Leadership"],
      social: {
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
        twitter: "https://twitter.com/alexchen",
        email: "alex@solvify.club"
      },
      projects: 8,
      contributions: 156
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Vice President",
      department: "Software Engineering",
      year: 2023,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Full-stack developer with expertise in modern web technologies. Coordinates technical workshops and mentoring programs.",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"],
      social: {
        github: "https://github.com/sarahkim",
        linkedin: "https://linkedin.com/in/sarahkim",
        twitter: "https://twitter.com/sarahkim",
        email: "sarah@solvify.club"
      },
      projects: 12,
      contributions: 203
    },
    {
      id: 19,
      name: "Alexa Pow",
      role: "President",
      department: "Computer Science",
      year: 2023,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Passionate about AI and machine learning. Leading our club's vision for innovation and technical excellence.",
      skills: ["Python", "Machine Learning", "React", "Leadership"],
      social: {
        github: "https://github.com/alexchen",
        linkedin: "https://linkedin.com/in/alexchen",
        twitter: "https://twitter.com/alexchen",
        email: "alex@solvify.club"
      },
      projects: 8,
      contributions: 156
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Technical Lead",
      department: "Data Science",
      year: 2023,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data science enthusiast and competitive programmer. Leads our algorithm study groups and coding competitions.",
      skills: ["Python", "R", "TensorFlow", "Algorithms"],
      social: {
        github: "https://github.com/marcusj",
        linkedin: "https://linkedin.com/in/marcusj",
        twitter: "https://twitter.com/marcusj",
        email: "marcus@solvify.club"
      },
      projects: 6,
      contributions: 134
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      department: "Information Systems",
      year: 2023,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in project management and community building. Organizes our hackathons and networking events.",
      skills: ["Project Management", "UI/UX", "Marketing", "Communication"],
      social: {
        github: "https://github.com/emilyrod",
        linkedin: "https://linkedin.com/in/emilyrod",
        twitter: "https://twitter.com/emilyrod",
        email: "emily@solvify.club"
      },
      projects: 4,
      contributions: 89
    },
    {
      id: 5,
      name: "David Park",
      role: "Web Developer",
      department: "Computer Science",
      year: 2022,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Frontend specialist focused on creating beautiful, accessible user experiences. Maintains our club's digital presence.",
      skills: ["React", "TypeScript", "CSS", "Figma"],
      social: {
        github: "https://github.com/davidpark",
        linkedin: "https://linkedin.com/in/davidpark",
        twitter: "https://twitter.com/davidpark",
        email: "david@solvify.club"
      },
      projects: 10,
      contributions: 178
    },
    {
      id: 6,
      name: "Lisa Wong",
      role: "Mobile Developer",
      department: "Software Engineering",
      year: 2022,
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Mobile app development expert with focus on cross-platform solutions. Leads our mobile development workshops.",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      social: {
        github: "https://github.com/lisawong",
        linkedin: "https://linkedin.com/in/lisawong",
        twitter: "https://twitter.com/lisawong",
        email: "lisa@solvify.club"
      },
      projects: 7,
      contributions: 145
    },
    {
      id: 7,
      name: "Michael Chen",
      role: "Backend Developer",
      department: "Computer Science",
      year: 2022,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Backend architecture specialist with expertise in scalable systems and cloud technologies.",
      skills: ["Node.js", "AWS", "Docker", "PostgreSQL"],
      social: {
        github: "https://github.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        email: "michael@solvify.club"
      },
      projects: 9,
      contributions: 167
    },
    {
      id: 8,
      name: "Jessica Taylor",
      role: "UI/UX Designer",
      department: "Design",
      year: 2021,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer passionate about user-centered design and accessibility. Creates stunning interfaces for our projects.",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      social: {
        github: "https://github.com/jessicataylor",
        linkedin: "https://linkedin.com/in/jessicataylor",
        twitter: "https://twitter.com/jessicataylor",
        email: "jessica@solvify.club"
      },
      projects: 5,
      contributions: 92
    },
    {
      id: 9,
      name: "Ryan Kumar",
      role: "DevOps Engineer",
      department: "Computer Science",
      year: 2021,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Infrastructure and automation expert. Manages our deployment pipelines and cloud infrastructure.",
      skills: ["Kubernetes", "CI/CD", "Terraform", "Monitoring"],
      social: {
        github: "https://github.com/ryankumar",
        linkedin: "https://linkedin.com/in/ryankumar",
        twitter: "https://twitter.com/ryankumar",
        email: "ryan@solvify.club"
      },
      projects: 6,
      contributions: 134
    }
  ];

  const years = [2023, 2022, 2021];
  const filteredMembers = teamMembers.filter(member => member.year === selectedYear);

  const membersPerSlide = 4;
  const totalSlides = Math.ceil(filteredMembers.length / membersPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentMembers = () => {
    const start = currentSlide * membersPerSlide;
    return filteredMembers.slice(start, start + membersPerSlide);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setIsDropdownOpen(false);
  };

  // Reset slide when year changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [selectedYear]);

  return (
    <section id="team" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-56 h-56 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"></div>
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
            MEET OUR TEAM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Minds Behind <span className="text-yellow-400">Solvify</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Our diverse team of passionate students and tech enthusiasts working together to build
            an innovative community focused on solving real-world challenges.
          </p>

          {/* Year Filter Dropdown */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Custom Dropdown Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gradient-to-br from-yellow-400/20 to-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-8 py-4 pr-12 rounded-2xl font-bold text-lg hover:border-yellow-400/50 hover:bg-yellow-400/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-yellow-400/25 min-w-[180px] text-left"
              >
                {selectedYear} Team
                <ChevronDown
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Custom Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-yellow-400/30 rounded-2xl shadow-2xl shadow-yellow-400/10 overflow-hidden z-50 min-w-[180px]"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearSelect(year)}
                      className={`w-full text-left px-6 py-4 font-medium transition-all duration-200 ${selectedYear === year
                        ? 'bg-yellow-400/20 text-yellow-400 border-l-4 border-yellow-400'
                        : 'text-gray-300 hover:bg-yellow-400/10 hover:text-yellow-400'
                        }`}
                    >
                      {year} Team
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Backdrop to close dropdown */}
              {isDropdownOpen && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsDropdownOpen(false)}
                />
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Team Members Display */}
        {filteredMembers.length > 0 ? (
          <>
            {/* Team Carousel */}
            <div className="relative mb-16">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                key={selectedYear} // Force re-render when year changes
              >
                {getCurrentMembers().map((member, index) => (
                  <motion.div
                    key={member.id}
                    className="group bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl p-6 border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:bg-yellow-400/5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden ring-4 ring-yellow-400/20 group-hover:ring-yellow-400/40 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                        {member.role}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-white text-xl font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{member.department}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 mb-4 justify-center">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs group-hover:bg-gray-700 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                      <span>{member.projects} projects</span>
                      <span>{member.contributions} contributions</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href={member.social.email}
                        className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-yellow-400 transition-all duration-300"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              {totalSlides > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Slide Indicators */}
            {totalSlides > 1 && (
              <div className="flex justify-center space-x-2 mb-12">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          /* No Members Found State */
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-12 border border-gray-800">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Team Members Found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We don't have any team members for {selectedYear} yet. Please select a different year or check back later.
              </p>
            </div>
          </motion.div>
        )}

        {/* Join Team CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference.
              Join us in building innovative solutions and growing together as a community.
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;