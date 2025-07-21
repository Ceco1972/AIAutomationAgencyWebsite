import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-none">
              404
            </span>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('notFound.title')}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            {t('notFound.subtitle')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 group"
            >
              <Home className="mr-2 h-5 w-5" />
              {t('notFound.returnHome')}
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-200 group"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t('notFound.goBack')}
            </button>
          </div>

          {/* AI Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-40 animate-ping"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute inset-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;