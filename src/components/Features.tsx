import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, TrendingUp, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Deploy AI solutions in days, not months. Our proven frameworks accelerate your digital transformation.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, compliance certifications, and data protection.'
  },
  {
    icon: Clock,
    title: '24/7 Automation',
    description: 'Round-the-clock intelligent automation that works while you sleep, increasing productivity by 300%.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Solutions that grow with your business, from startup to enterprise scale with seamless scaling.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated AI specialists providing ongoing support, training, and optimization services.'
  },
  {
    icon: Sparkles,
    title: 'Cutting-Edge AI',
    description: 'Latest machine learning models and AI technologies tailored for your specific business needs.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge AI technology with deep business expertise to deliver 
            solutions that transform your operations and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 border border-transparent hover:border-purple-200 dark:hover:border-purple-800">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;