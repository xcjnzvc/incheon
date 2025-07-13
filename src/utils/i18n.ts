import type { Language } from "../config/languages";

// JSON 파일들을 동적으로 import
const koTranslations = () => import("../locales/ko.json");
const enTranslations = () => import("../locales/en.json");

// 번역 데이터 캐시
const translationCache: Record<Language, Record<string, string>> = {
  ko: {},
  en: {},
};

let isInitialized = false;

// 언어별 번역 데이터 로드
const loadTranslations = async (
  language: Language
): Promise<Record<string, string>> => {
  if (
    translationCache[language] &&
    Object.keys(translationCache[language]).length > 0
  ) {
    return translationCache[language];
  }

  try {
    let translations;
    if (language === "ko") {
      translations = await koTranslations();
    } else {
      translations = await enTranslations();
    }

    translationCache[language] = translations.default;
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    return {};
  }
};

// 번역 함수
export const getTranslation = async (
  language: Language,
  key: string
): Promise<string> => {
  if (!isInitialized) {
    await preloadTranslations();
  }
  const translations = await loadTranslations(language);
  return translations[`display_${key}`] || key;
};

// 동기적 번역 함수 (캐시된 데이터 사용)
export const getTranslationSync = (language: Language, key: string): string => {
  if (!isInitialized) {
    return key.replace("display_", "");
  }
  const translations = translationCache[language];
  return translations?.[`display_${key}`] || key.replace("display_", "");
};

// 번역 데이터 미리 로드
export const preloadTranslations = async (): Promise<void> => {
  if (isInitialized) {
    return;
  }

  try {
    await Promise.all([loadTranslations("ko"), loadTranslations("en")]);
    isInitialized = true;
  } catch (error) {
    console.error("Failed to preload translations:", error);
    throw error;
  }
};
