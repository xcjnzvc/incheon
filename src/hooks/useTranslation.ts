import { useLanguage } from "./useLanguage";
import { getTranslationSync } from "../utils/i18n";

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    return getTranslationSync(language, key);
  };

  return { t, language };
}
