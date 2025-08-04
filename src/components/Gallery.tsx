import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Tech Talk Series",
      description: "Industry experts sharing insights on emerging technologies",
      date: "October 2024",
      location: "Main Auditorium",
      category: "Workshop"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Hackathon 2024",
      description: "48-hour intensive coding competition with innovative solutions",
      date: "September 2024",
      location: "Computer Lab",
      category: "Competition"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Team Building",
      description: "Annual team building and networking event",
      date: "August 2024",
      location: "Campus Grounds",
      category: "Social"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Code Review Session",
      description: "Collaborative code review and learning session",
      date: "November 2024",
      location: "Study Room",
      category: "Learning"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AI Workshop",
      description: "Hands-on machine learning and AI development workshop",
      date: "October 2024",
      location: "Tech Center",
      category: "Workshop"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Project Demo Day",
      description: "Showcasing member projects and innovations",
      date: "December 2024",
      location: "Exhibition Hall",
      category: "Showcase"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Coding Bootcamp",
      description: "Intensive programming bootcamp for beginners",
      date: "September 2024",
      location: "Computer Lab",
      category: "Learning"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Industry Visit",
      description: "Field trip to local tech companies and startups",
      date: "November 2024",
      location: "Tech Park",
      category: "Visit"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Open Source Day",
      description: "Contributing to open source projects as a community",
      date: "October 2024",
      location: "Library",
      category: "Collaboration"
    }
  ];

  const categories = ["All", "Workshop", "Competition", "Learning", "Social", "Showcase"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  // Modal functions
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage, filteredImages]);

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-12 w-44 h-44 bg-yellow-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 right-12 w-52 h-52 bg-yellow-400/5 rounded-full blur-3xl"></div>
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
            GALLERY
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Dive into our recent updates! Explore moments from our events, workshops, and community activities 
            that showcase the vibrant spirit of Solvify Club.
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

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-900 aspect-square"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onClick={() => openModal(image)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{image.description}</p>
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-white/5 border border-gray-700 text-white px-8 py-4 rounded-2xl font-medium hover:bg-yellow-400/20 hover:border-yellow-400/50 hover:text-yellow-400 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Images
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            {/* Modal Content */}
            <motion.div
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/90 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/90 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/90 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={24} />
                  </motion.button>
                </>
              )}

              {/* Image Container */}
              <div className="w-full h-full flex items-center justify-center">
                <motion.img
                  key={selectedImage.id}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Image Info Overlay */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                        {selectedImage.category}
                      </span>
                    </div>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">{selectedImage.description}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-gray-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <motion.div
                  className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-gray-700"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;