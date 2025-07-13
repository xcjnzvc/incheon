import Select from "react-select";
import type { SingleValue } from "react-select";

type LanguageOption = {
  value: string;
  label: string;
};

const options: LanguageOption[] = [
  { value: "ko", label: "KO" },
  { value: "en", label: "EN" },
];

export default function LanguageSelector() {
  const handleChange = (selectedOption: SingleValue<LanguageOption>) => {
    if (selectedOption) {
      console.log("언어 선택됨:", selectedOption.value);
    }
  };

  return (
    <Select
      options={options}
      defaultValue={options[0]}
      onChange={handleChange}
      isSearchable={false}
    />
  );
}
