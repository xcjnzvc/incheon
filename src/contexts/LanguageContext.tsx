import { createContext, useState, useEffect, type ReactNode } from "react";
import type { Language } from "../config/languages";
import { DEFAULT_LANGUAGE } from "../config/languages";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    // localStorage에서 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem("language") as Language;
    return savedLanguage || DEFAULT_LANGUAGE;
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // 언어가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
