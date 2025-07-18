import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 dark:text-purple-400 font-medium">AI-Powered Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white">Empowering Your</span>
              <br />
              <span className="text-gray-900 dark:text-white">Business with</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              We streamline operations with cutting-edge AI solutions tailored for modern enterprises. 
              Transform your business processes with intelligent automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-200"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* AI Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* AI Digital Human Face */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-square bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-1">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-indigo-900/40 rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {/* Digital Face Pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <svg
                        viewBox="0 0 400 400"
                        className="w-full h-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Neural network pattern */}
                        <defs>
                          <linearGradient id="neural" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        
                        {/* Face outline */}
                        <ellipse cx="200" cy="180" rx="120" ry="140" stroke="url(#neural)" strokeWidth="2" fill="none" />
                        
                        {/* Eyes */}
                        <circle cx="170" cy="150" r="15" fill="url(#neural)" />
                        <circle cx="230" cy="150" r="15" fill="url(#neural)" />
                        
                        {/* Neural connections */}
                        <path d="M50 50 Q200 100 350 50" stroke="url(#neural)" strokeWidth="1" fill="none" opacity="0.6" />
                        <path d="M50 150 Q200 200 350 150" stroke="url(#neural)" strokeWidth="1" fill="none" opacity="0.6" />
                        <path d="M50 250 Q200 300 350 250" stroke="url(#neural)" strokeWidth="1" fill="none" opacity="0.6" />
                        <path d="M50 350 Q200 300 350 350" stroke="url(#neural)" strokeWidth="1" fill="none" opacity="0.6" />
                        
                        {/* Data nodes */}
                        <circle cx="80" cy="80" r="4" fill="#8B5CF6" opacity="0.8" />
                        <circle cx="320" cy="120" r="4" fill="#3B82F6" opacity="0.8" />
                        <circle cx="60" cy="180" r="4" fill="#1D4ED8" opacity="0.8" />
                        <circle cx="340" cy="220" r="4" fill="#8B5CF6" opacity="0.8" />
                        <circle cx="100" cy="280" r="4" fill="#3B82F6" opacity="0.8" />
                        <circle cx="300" cy="320" r="4" fill="#1D4ED8" opacity="0.8" />
                      </svg>
                    </div>
                    
                    {/* Centered AI text */}
                    <div className="relative z-10 text-center">
                      <div className="text-6xl font-bold text-white mb-4">AI</div>
                      <div className="text-lg text-white/80">Intelligence</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;