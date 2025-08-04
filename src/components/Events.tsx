import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Trophy, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      title: "Glitch Fix",
      description: "A debugging competition where teams compete to fix code challenges under time pressure. Test your problem-solving skills!",
      date: "Dec 15, 2024",
      participants: "150+ participants",
      status: "Upcoming",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Competition", "Debugging", "Team Event"]
    },
    {
      id: 2,
      title: "Byte Battle",
      description: "An intense coding competition featuring algorithmic challenges, data structures, and competitive programming.",
      date: "Nov 28, 2024",
      participants: "200+ participants",
      status: "Completed",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Competition", "Algorithms", "Programming"]
    },
    {
      id: 3,
      title: "Tech Talk Series",
      description: "Monthly sessions featuring industry experts sharing insights on emerging technologies and career guidance.",
      date: "Every Month",
      participants: "100+ attendees",
      status: "Ongoing",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Learning", "Industry", "Networking"]
    },
    {
      id: 4,
      title: "Hackathon 2024",
      description: "48-hour intensive hackathon focusing on solving real-world problems with innovative tech solutions.",
      date: "Jan 20-22, 2025",
      participants: "300+ participants",
      status: "Registration Open",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Hackathon", "Innovation", "Competition"]
    }
  ];

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-500';
      case 'Completed': return 'bg-green-500';
      case 'Ongoing': return 'bg-yellow-500';
      case 'Registration Open': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="events" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-yellow-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-400/5 rounded-full blur-2xl"></div>
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
            EVENTS
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Join our exciting events designed to challenge, educate, and connect the tech community. 
            From competitions to workshops, there's something for everyone.
          </p>
        </motion.div>

        {/* Main Event Showcase */}
        <div className="relative mb-16">
          <motion.div
            className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Event Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <img
                  src={events[currentIndex].image}
                  alt={events[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(events[currentIndex].status)}`}>
                  {events[currentIndex].status}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-4"
                  key={events[currentIndex].title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {events[currentIndex].title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  key={events[currentIndex].description}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {events[currentIndex].description}
                </motion.p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                    {events[currentIndex].date}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-5 h-5 mr-3 text-yellow-400" />
                    {events[currentIndex].participants}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {events[currentIndex].tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:bg-yellow-300 transition-colors duration-300 inline-flex items-center space-x-2 w-fit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <ExternalLink size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Event Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Upcoming Events Preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {events.slice(0, 3).map((event, index) => (
            <motion.div
              key={event.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-white text-xs font-medium ${getStatusColor(event.status)}`}>
                  {event.status}
                </div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ backdropFilter: 'blur(2px)' }}
                >
                </motion.div>
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-white text-xl font-bold mb-2"
                  whileHover={{ x: 5 }}
                >
                  {event.title}
                </motion.h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span>{event.participants.split(' ')[0]} people</span>
                </div>
              </div>
              <motion.div 
                className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-colors duration-300"
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(250, 204, 21, 0.3)',
                  borderColor: 'rgba(250, 204, 21, 0.8)'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;