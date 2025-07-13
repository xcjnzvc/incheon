export type Language = "ko" | "en";

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  // flag: string;
  label: string;
  value: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    // flag: "🇰🇷",
    label: "🇰🇷 한국어",
    value: "ko",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    // flag: "🇺🇸",
    label: "🇺🇸 English",
    value: "en",
  },
];

export const DEFAULT_LANGUAGE: Language = "ko";

export const getLanguageConfig = (code: Language): LanguageConfig => {
  return (
    SUPPORTED_LANGUAGES.find((lang) => lang.code === code) ||
    SUPPORTED_LANGUAGES[0]
  );
};
