import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Coffee, 
  Code, 
  Eye, 
  Utensils, 
  Presentation, 
  Trophy,
  CheckCircle,
  Zap,
  Star,
  ArrowRight,
  ExternalLink,
  Award,
  Target,
  Sparkles
} from 'lucide-react';

const CodeAThon = () => {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const sponsorRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isHeroInView = useInView(heroRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isSponsorInView = useInView(sponsorRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [registrationCount, setRegistrationCount] = useState(0);

  // Animated counter for registrations
  useEffect(() => {
    if (isHeroInView) {
      const timer = setInterval(() => {
        setRegistrationCount(prev => {
          if (prev < 247) return prev + 3;
          return 247;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isHeroInView]);

  const timelineEvents = [
    {
      id: 1,
      title: "Registration Opens",
      time: "8:00 AM",
      description: "Check-in begins for all participants. Get your welcome kit, event badge, and networking starter pack.",
      icon: Users,
      location: "Main Entrance, Tech Building",
      address: "Room 101, Computer Science Department",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/25"
    },
    {
      id: 2,
      title: "Welcome Ceremony",
      time: "9:00 AM",
      description: "Opening keynote from industry leaders and introduction to the Code-A-Thon challenges.",
      icon: Presentation,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/25"
    },
    {
      id: 3,
      title: "Networking Breakfast",
      time: "9:30 AM",
      description: "Connect with fellow coders, mentors, and sponsors over energizing breakfast.",
      icon: Coffee,
      location: "Student Cafeteria",
      address: "2nd Floor, Student Center",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/25"
    },
    {
      id: 4,
      title: "Code-A-Thon Begins",
      time: "10:30 AM",
      description: "Teams dive into coding challenges. 12 hours of intense programming starts now!",
      icon: Code,
      location: "Computer Labs 1-5",
      address: "3rd Floor, Tech Building",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      glowColor: "shadow-green-500/25"
    },
    {
      id: 5,
      title: "Mid-Point Review",
      time: "2:00 PM",
      description: "Progress check-in with mentors, feedback sessions, and technical guidance.",
      icon: Eye,
      location: "Conference Room B",
      address: "4th Floor, Tech Building",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
      glowColor: "shadow-yellow-500/25"
    },
    {
      id: 6,
      title: "Power Lunch",
      time: "1:00 PM",
      description: "Refuel with gourmet lunch while networking and sharing ideas with other teams.",
      icon: Utensils,
      location: "Student Cafeteria",
      address: "2nd Floor, Student Center",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30",
      glowColor: "shadow-red-500/25"
    },
    {
      id: 7,
      title: "Final Presentations",
      time: "4:00 PM",
      description: "Teams showcase their innovative solutions to judges and the tech community.",
      icon: Presentation,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-indigo-400 to-purple-500",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/25"
    },
    {
      id: 8,
      title: "Results & Awards",
      time: "6:00 PM",
      description: "Winner announcements, prize distribution, and celebration of innovation!",
      icon: Trophy,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-400/20",
      borderColor: "border-yellow-400/30",
      glowColor: "shadow-yellow-400/25"
    }
  ];

  const sponsors = {
    platinum: [
      { name: "TechCorp", logo: "🚀", amount: "$10,000", description: "Leading AI Solutions" },
      { name: "CodeMasters", logo: "💻", amount: "$8,500", description: "Cloud Infrastructure" }
    ],
    gold: [
      { name: "DevTools Inc", logo: "⚡", amount: "$5,000", description: "Developer Tools" },
      { name: "StartupHub", logo: "🌟", amount: "$4,500", description: "Innovation Platform" },
      { name: "CloudTech", logo: "☁️", amount: "$4,000", description: "Cloud Services" }
    ],
    silver: [
      { name: "WebFlow", logo: "🌊", amount: "$2,500", description: "Web Development" },
      { name: "DataSync", logo: "📊", amount: "$2,000", description: "Data Analytics" },
      { name: "MobileFirst", logo: "📱", amount: "$2,000", description: "Mobile Solutions" },
      { name: "SecureNet", logo: "🔒", amount: "$1,800", description: "Cybersecurity" }
    ],
    others: [
      { name: "Pizza Palace", logo: "🍕", amount: "$500", description: "Food Sponsor" },
      { name: "Coffee Co", logo: "☕", amount: "$300", description: "Beverage Partner" },
      { name: "Swag Store", logo: "👕", amount: "$400", description: "Merchandise" },
      { name: "Print Pro", logo: "🖨️", amount: "$200", description: "Printing Services" }
    ]
  };

  useEffect(() => {
    const observers = timelineEvents.map((event) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, event.id]));
          }
        },
        { threshold: 0.3 }
      );

      const element = document.getElementById(`timeline-item-${event.id}`);
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }, (_, i) => (
              <motion.div
                key={i}
                className="border border-cyan-500/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="code-a-thon" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" ref={heroRef}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Glowing Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative"
              style={{
                background: 'linear-gradient(45deg, #00f5ff, #ff00ff, #00ff00, #ffff00)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              CODE-A-THON
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20 blur-2xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.h1>
          </motion.div>

          {/* Event Details */}
          <motion.div
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-xl md:text-2xl">
              <motion.div 
                className="flex items-center space-x-3 text-cyan-400"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Calendar className="w-8 h-8" />
                <span className="font-bold">December 15-16, 2024</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-purple-400"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Clock className="w-8 h-8" />
                <span className="font-bold">48 Hours</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-green-400"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <Users className="w-8 h-8" />
                <span className="font-bold">{registrationCount}+ Registered</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-cyan-400 font-bold">Code.</span>{' '}
            <span className="text-purple-400 font-bold">Create.</span>{' '}
            <span className="text-green-400 font-bold">Compete.</span>{' '}
            <br />
            48 hours of pure innovation and endless possibilities!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="relative group bg-gradient-to-r from-cyan-500 via-purple-500 to-green-500 text-black px-12 py-6 rounded-2xl font-black text-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="relative z-10 flex items-center space-x-3">
                <Zap className="w-6 h-6" />
                <span>REGISTER NOW</span>
                <ArrowRight className="w-6 h-6" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-green-500/50 blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.button
              className="bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 px-8 py-6 rounded-2xl font-bold text-xl hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-6 h-6" />
              <span>VIEW DETAILS</span>
            </motion.button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: Trophy, label: "Prize Pool", value: "$25K", color: "text-yellow-400" },
              { icon: Users, label: "Teams", value: "100+", color: "text-cyan-400" },
              { icon: Award, label: "Mentors", value: "20+", color: "text-purple-400" },
              { icon: Target, label: "Challenges", value: "5", color: "text-green-400" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20" ref={timelineRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
            >
              <Clock className="w-6 h-6 mr-3" />
              EVENT TIMELINE
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">48-Hour</span> Journey
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              From registration to victory celebration - every moment is designed to fuel your creativity and push your limits.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Progress Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full">
              <motion.div
                className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-green-400 rounded-full origin-top"
                style={{ 
                  scaleY: useTransform(timelineProgress, [0, 100], [0, 1])
                }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                const isVisible = visibleItems.has(event.id);

                return (
                  <motion.div
                    key={event.id}
                    id={`timeline-item-${event.id}`}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-black z-10 ${
                        isVisible ? `bg-gradient-to-r ${event.color}` : 'bg-gray-600'
                      }`}
                      animate={isVisible ? { 
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(6, 182, 212, 0.7)',
                          '0 0 0 10px rgba(6, 182, 212, 0)',
                          '0 0 0 0 rgba(6, 182, 212, 0)'
                        ]
                      } : { scale: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    >
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} blur-md -z-10`}
                        animate={isVisible ? { 
                          scale: [0, 2, 0],
                          opacity: [0, 0.6, 0]
                        } : { scale: 0 }}
                        transition={{ duration: 2, delay: index * 0.1 + 0.5, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                      whileHover={{ scale: 1.02, y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border ${event.borderColor} hover:border-opacity-80 transition-all duration-300 ${event.glowColor} hover:shadow-2xl`}>
                        {/* Time Badge */}
                        <motion.div
                          className={`inline-flex items-center bg-gradient-to-r ${event.color} text-black px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}
                          animate={isVisible ? { x: [20, 0], opacity: [0, 1] } : { x: 20, opacity: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </motion.div>

                        {/* Event Header */}
                        <div className="flex items-start space-x-4 mb-4">
                          <motion.div
                            className={`p-3 ${event.bgColor} rounded-2xl flex-shrink-0 border ${event.borderColor}`}
                            animate={isVisible ? { rotate: [0, 360] } : { rotate: 0 }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                            whileHover={{ scale: 1.2, rotate: 180 }}
                          >
                            <event.icon className={`w-6 h-6 text-${event.color.split('-')[1]}-400`} />
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              className="text-xl font-bold text-white mb-2"
                              animate={isVisible ? { y: [20, 0], opacity: [0, 1] } : { y: 20, opacity: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                            >
                              {event.title}
                            </motion.h3>
                            <motion.p
                              className="text-gray-300 leading-relaxed"
                              animate={isVisible ? { y: [20, 0], opacity: [0, 1] } : { y: 20, opacity: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                            >
                              {event.description}
                            </motion.p>
                          </div>
                        </div>

                        {/* Location Info */}
                        <motion.div
                          className="space-y-2"
                          animate={isVisible ? { y: [20, 0], opacity: [0, 1] } : { y: 20, opacity: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                        >
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          <div className="text-gray-500 text-xs ml-6">
                            {event.address}
                          </div>
                        </motion.div>

                        {/* Completion Indicator */}
                        {isVisible && (
                          <motion.div
                            className="mt-4 flex items-center text-green-400 text-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            <span>Ready to rock!</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    {/* Connecting Line Animation */}
                    <motion.div
                      className={`hidden md:block absolute top-1/2 ${
                        isEven ? 'left-1/2 ml-4' : 'right-1/2 mr-4'
                      } w-8 h-0.5 bg-gradient-to-r ${
                        isEven ? `${event.color} to-transparent` : `from-transparent ${event.color}`
                      }`}
                      animate={isVisible ? { scaleX: [0, 1] } : { scaleX: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      style={{ transformOrigin: isEven ? 'left' : 'right' }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative z-10 py-20" ref={sponsorRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg mb-8"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)" }}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              OUR SPONSORS
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Innovation</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Amazing partners who believe in the power of student innovation and make this event possible.
            </p>
          </motion.div>

          {/* Sponsor Categories */}
          <div className="space-y-16">
            {/* Platinum Sponsors */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white mb-2">
                  PLATINUM SPONSORS
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-gray-300 to-white mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {sponsors.platinum.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 hover:border-gray-400 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSponsorInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-6xl mb-4">{sponsor.logo}</div>
                    <h4 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-400 mb-4">{sponsor.description}</p>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      {sponsor.amount}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Gold Sponsors */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                  GOLD SPONSORS
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {sponsors.gold.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSponsorInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="text-4xl mb-3">{sponsor.logo}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{sponsor.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{sponsor.description}</p>
                    <div className="text-xl font-bold text-yellow-400">{sponsor.amount}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Silver Sponsors */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-500 mb-2">
                  SILVER SPONSORS
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sponsors.silver.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 backdrop-blur-sm rounded-xl p-4 border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSponsorInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="text-3xl mb-2">{sponsor.logo}</div>
                    <h4 className="text-lg font-bold text-white mb-1">{sponsor.name}</h4>
                    <p className="text-gray-400 text-xs mb-2">{sponsor.description}</p>
                    <div className="text-lg font-bold text-gray-400">{sponsor.amount}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Other Sponsors */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-lg font-bold text-gray-500 mb-2">COMMUNITY PARTNERS</h3>
                <div className="w-12 h-1 bg-gray-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {sponsors.others.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isSponsorInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl mb-1">{sponsor.logo}</div>
                    <h4 className="text-sm font-bold text-white mb-1">{sponsor.name}</h4>
                    <p className="text-gray-500 text-xs mb-1">{sponsor.description}</p>
                    <div className="text-sm font-bold text-gray-500">{sponsor.amount}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Become a Sponsor CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isSponsorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Want to Sponsor Our Event?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our amazing sponsors and support the next generation of innovators. 
                Get your brand in front of 500+ talented students and tech enthusiasts.
              </p>
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Sponsor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CodeAThon;