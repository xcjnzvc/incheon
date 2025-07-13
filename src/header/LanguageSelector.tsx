import Select from "react-select";
import type { SingleValue } from "react-select";
import { useLanguage } from "../hooks/useLanguage";
import { useTranslation } from "../hooks/useTranslation";
import { SUPPORTED_LANGUAGES, type LanguageConfig } from "../config/languages";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleChange = (selectedOption: SingleValue<LanguageConfig>) => {
    if (selectedOption) {
      setLanguage(selectedOption.code);
    }
  };

  const currentOption = SUPPORTED_LANGUAGES.find(
    (lang) => lang.code === language
  );

  return (
    <Select
      options={SUPPORTED_LANGUAGES}
      value={currentOption}
      onChange={handleChange}
      isSearchable={false}
      placeholder={t("language_select")}
      className="language-selector"
      classNamePrefix="language-selector"
    />
  );
}
