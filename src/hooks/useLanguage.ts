import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguage 사용 전 LanguageProvider 컴포넌트 안에 있어야 합니다."
    );
  }
  return context;
}
