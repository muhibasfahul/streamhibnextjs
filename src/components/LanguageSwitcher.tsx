import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/language';

export function LanguageSwitcher() {
  const language = useStore(languageStore);

  const toggleLanguage = () => {
    languageStore.set(language === 'id' ? 'en' : 'id');
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