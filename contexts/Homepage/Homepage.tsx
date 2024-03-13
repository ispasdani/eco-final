"use client";

import React, { createContext, useContext, useState } from "react";

export const LanguageSelectorContext = createContext<{
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}>({
  selectedLanguage: "EN",
  setSelectedLanguage: () => {},
});

type HomepageProps = {
  children: React.ReactNode;
};

function Homepage({ children }: HomepageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");

  return (
    <LanguageSelectorContext.Provider
      value={{ selectedLanguage, setSelectedLanguage }}
    >
      {children}
    </LanguageSelectorContext.Provider>
  );
}

export default Homepage;
