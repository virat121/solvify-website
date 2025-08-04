import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Calendar,
  Users,
  Code
} from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/solvify-club', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/solvify-club', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/solvify_club', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/solvify_club', color: 'hover:text-pink-400' }
  ];

  const stats = [
    { icon: Users, number: '200+', label: 'Active Members' },
    { icon: Code, number: '50+', label: 'Projects Built' },
    { icon: Calendar, number: '25+', label: 'Events Hosted' }
  ];

  return (
    <footer id="contact" className="bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-60 h-60 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Contact Section */}
        <div className="py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 relative inline-block">
              GET IN TOUCH
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to join our community or have questions? We'd love to hear from you!
              Reach out and let's build something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-yellow-400/50 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-400 text-black px-6 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-2xl hover:shadow-yellow-400/25 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-400/20 rounded-2xl">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <a href="mailto:contact@solvify.club" className="text-white font-medium hover:text-yellow-400 transition-colors duration-300">
                        contact@solvify.club
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-400/20 rounded-2xl">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white font-medium hover:text-yellow-400 transition-colors duration-300">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-400/20 rounded-2xl">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="text-white font-medium">
                        College Campus, Tech Building<br />
                        Room 204, Computer Science Dept.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-900 border border-gray-700 rounded-2xl text-gray-400 ${social.color} transition-all duration-300 hover:border-yellow-400/50`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Our Impact</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-gradient-to-br from-yellow-400/10 to-transparent rounded-2xl p-4 text-center border border-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <motion.div
                    className="flex items-center space-x-3 flex-shrink-0 cursor-pointer group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      {  /* <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Puzzle className="w-6 h-6 text-black" />
                </motion.div>
                */}
                      <motion.div
                        className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-all duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <img
                          src="/solvifylogo.png"
                          alt="Solvify Logo"
                          className="w-6 h-6"
                        />
                      </motion.div>


                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-xl font-bold leading-none group-hover:text-yellow-400 transition-colors duration-300">
                        Solvify
                      </span>
                      <span className="text-gray-400 text-xs font-medium leading-none">
                        Club
                      </span>
                    </div>
                  </motion.div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-700"></div>
              <p className="text-gray-400 text-sm">
                © 2024 Solvify Club. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              Made with ❤️ by the Solvify Club team •
              <span className="text-yellow-400 ml-1">Building the future, one line of code at a time</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;