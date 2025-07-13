import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./header/header";
import { LanguageProvider } from "./contexts/LanguageContext";
import { preloadTranslations } from "./utils/i18n";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preloadTranslations().then(() => {
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <LanguageProvider>
      <Header />
    </LanguageProvider>
  );
}

export default App;
