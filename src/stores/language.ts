import { atom } from 'nanostores';
import type { Language } from '../lib/translations';

export const languageStore = atom<Language>('id');

// Initialize from localStorage if available
if (typeof window !== 'undefined') {
  const savedLanguage = localStorage.getItem('language') as Language;
  if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
    languageStore.set(savedLanguage);
  }
  
  // Save to localStorage when language changes
  languageStore.subscribe((language) => {
    localStorage.setItem('language', language);
  });
}