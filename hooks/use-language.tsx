"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('id');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: TranslationKey): string | string[] => {
  // Ambil dulu 'kamus' untuk bahasa yang sedang dipilih (misal: 'en')
  const selectedLanguageSet = translations[language];

  // Cek secara eksplisit: Apakah kata kunci (key) ini ada di dalam kamus yang dipilih?
  // 'in' adalah operator JavaScript yang aman untuk mengecek keberadaan properti.
  if (key in selectedLanguageSet) {
    // Jika ada, langsung kembalikan terjemahannya. TypeScript sekarang yakin.
    return selectedLanguageSet[key];
  }
  
  // Jika tidak ada di kamus yang dipilih, baru ambil dari kamus default ('id')
  // atau kembalikan kuncinya sendiri jika di 'id' juga tidak ada.
  return translations.id[key] || key;
};

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
