import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/language';
import type { Language } from '../lib/translations';

export function LanguageSwitcher() {
  const language = useStore(languageStore);

  const toggleLanguage = () => {
    languageStore.set(language === 'id' ? 'en' as Language : 'id' as Language);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === 'id' ? 'ID' : 'EN'}</span>
    </Button>
  );
}