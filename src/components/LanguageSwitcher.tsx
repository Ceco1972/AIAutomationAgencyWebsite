import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bg' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      title={i18n.language === 'en' ? 'Switch to Bulgarian' : 'Превключи на английски'}
    >
      <Globe className="h-5 w-5" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'БГ' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;