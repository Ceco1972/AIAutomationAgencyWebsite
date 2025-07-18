import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'TechFlow Inc. - Process Automation',
    description: 'Reduced manual processing time by 80% and eliminated human errors through intelligent workflow automation.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { label: 'Time Saved', value: '80%', icon: Zap },
      { label: 'Error Reduction', value: '95%', icon: TrendingUp },
      { label: 'Team Efficiency', value: '3x', icon: Users }
    ],
    category: 'Process Automation'
  },
  {
    id: '2',
    title: 'Global Dynamics - AI Customer Service',
    description: 'Implemented AI chatbot system that handles 3x more customer inquiries with higher satisfaction rates.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { label: 'Inquiries Handled', value: '3x', icon: Users },
      { label: 'Response Time', value: '90%', icon: Zap },
      { label: 'Satisfaction Rate', value: '4.8/5', icon: TrendingUp }
    ],
    category: 'Customer Service'
  },
  {
    id: '3',
    title: 'InnovateCorp - Data Analytics',
    description: 'Transformed raw data into actionable insights, improving decision-making accuracy by 85%.',
    image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    metrics: [
      { label: 'Decision Accuracy', value: '85%', icon: TrendingUp },
      { label: 'Data Processing', value: '10x', icon: Zap },
      { label: 'Cost Reduction', value: '40%', icon: Users }
    ],
    category: 'Data Analytics'
  }
];

const CaseStudies: React.FC = () => {
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
            Success <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses. Discover how our AI solutions have 
            transformed operations and driven measurable growth.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 p-1">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-900 dark:text-white">
                    {study.category}
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <metric.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200 group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;