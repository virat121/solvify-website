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
  CheckCircle
} from 'lucide-react';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  const timelineEvents = [
    {
      id: 1,
      title: "Registration Opens",
      time: "8:00 AM",
      description: "Check-in begins for all participants. Get your welcome kit and event badge.",
      icon: Users,
      location: "Main Entrance, Tech Building",
      address: "Room 101, Computer Science Department",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      id: 2,
      title: "Welcome Ceremony",
      time: "9:00 AM",
      description: "Opening remarks from club leaders and introduction to the event schedule.",
      icon: Presentation,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      id: 3,
      title: "Breakfast",
      time: "9:30 AM",
      description: "Networking breakfast with fellow participants and mentors.",
      icon: Coffee,
      location: "Student Cafeteria",
      address: "2nd Floor, Student Center",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      id: 4,
      title: "Hackathon Begins",
      time: "10:30 AM",
      description: "Teams start working on their innovative solutions. Let the coding begin!",
      icon: Code,
      location: "Computer Labs 1-5",
      address: "3rd Floor, Tech Building",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: 5,
      title: "Mid Review",
      time: "2:00 PM",
      description: "Progress check-in with mentors and feedback session for all teams.",
      icon: Eye,
      location: "Conference Room B",
      address: "4th Floor, Tech Building",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      id: 6,
      title: "Lunch Break",
      time: "1:00 PM",
      description: "Refuel with a delicious lunch and continue networking with peers.",
      icon: Utensils,
      location: "Student Cafeteria",
      address: "2nd Floor, Student Center",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20",
      borderColor: "border-red-500/30"
    },
    {
      id: 7,
      title: "Final Presentations",
      time: "4:00 PM",
      description: "Teams present their completed projects to judges and audience.",
      icon: Presentation,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      id: 8,
      title: "Results Announcement",
      time: "6:00 PM",
      description: "Winners announced with prizes and certificates for outstanding projects.",
      icon: Trophy,
      location: "Main Auditorium",
      address: "Ground Floor, Academic Block A",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-400/20",
      borderColor: "border-yellow-400/30"
    }
  ];

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
    <section id="timeline" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-bold text-lg mb-8">
            <Calendar className="w-5 h-5 mr-2" />
            EVENT TIMELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hackathon <span className="text-yellow-400">Schedule</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Follow our comprehensive timeline to make the most of your hackathon experience. 
            From registration to results, every moment is designed to inspire innovation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Progress Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-800 rounded-full">
            <motion.div
              className="w-full bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full origin-top"
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
                    className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-black z-10 ${
                      isVisible ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}
                    animate={isVisible ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-yellow-400"
                      animate={isVisible ? { scale: [0, 1.5, 0] } : { scale: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      style={{ opacity: 0.3 }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border ${event.borderColor} hover:border-opacity-60 transition-all duration-300 shadow-2xl hover:shadow-xl`}>
                      {/* Time Badge */}
                      <motion.div
                        className={`inline-flex items-center bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-lg`}
                        animate={isVisible ? { x: [20, 0], opacity: [0, 1] } : { x: 20, opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </motion.div>

                      {/* Event Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div
                          className={`p-3 ${event.bgColor} rounded-2xl flex-shrink-0`}
                          animate={isVisible ? { rotate: [0, 10, 0] } : { rotate: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        >
                          <event.icon className={`w-6 h-6 text-${event.color.split('-')[1]}-500`} />
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
                          <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
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
                          <span>Ready to attend</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Connecting Line Animation */}
                  <motion.div
                    className={`hidden md:block absolute top-1/2 ${
                      isEven ? 'left-1/2 ml-3' : 'right-1/2 mr-3'
                    } w-8 h-0.5 bg-gradient-to-r ${
                      isEven ? 'from-yellow-400 to-transparent' : 'from-transparent to-yellow-400'
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

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join the Hackathon?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't miss out on this incredible opportunity to showcase your skills, learn from peers, 
              and build something amazing in just one day!
            </p>
            <motion.button
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;