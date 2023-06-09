import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";

import tailwindConfig from "@/tailwind.config";

import ContentContext from "@/utils/contexts/content";
import CountriesContext from "@/utils/contexts/countries";
import LanguageContext from "@/utils/contexts/language";
import ThemeContext from "@/utils/contexts/theme";

import { getContent } from "@/utils/resources/content";
import { getCountries } from "@/utils/resources/countries";
import { getLanguages } from "@/utils/resources/languages";

import ContentType from "@/utils/types/content";
import CountryType from "@/utils/types/country";
import Theme from "@/utils/types/enums/theme";
import LanguageType from "@/utils/types/language";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const [content, setContent] = useState<ContentType | null>(null);
  const [countries, setCountries] = useState<CountryType[] | null>(null);
  const [language, setJustLanguage] = useState<LanguageType | null>(null);
  const [languages, setLanguages] = useState<LanguageType[] | null>(null);
  const [theme, setTheme] = useState<Theme | null>(null);

  const setLanguage = (language: LanguageType | null) => {
    setJustLanguage(language);
    if (language) localStorage.setItem("frontend_lang", language.abbr);
    else localStorage.removeItem("frontend_lang");
  };

  useEffect(() => {
    const root = document.querySelector("html")!;
    if (theme === Theme.DARK) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  useEffect(() => {
    if (theme === null) {
      const dark = localStorage.getItem("dark");
      if (dark) setTheme(Theme.DARK);
      else setTheme(Theme.LIGHT);
    }
  }, [theme]);

  useEffect(() => {
    if (countries === null)
      getCountries().then((countries) => setCountries(countries));
  }, [countries]);

  useEffect(() => {
    if (languages === null)
      getLanguages().then((languages) => setLanguages(languages));
  }, [languages]);

  useEffect(() => {
    if (content === null) getContent().then((content) => setContent(content));
  }, [content]);

  return languages && content ? (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider
        value={{ language, setLanguage, languages, setLanguages }}
      >
        <CountriesContext.Provider value={{ countries, setCountries }}>
          <ContentContext.Provider value={{ content, setContent }}>
            <Head>
              <link rel="icon" href="/images/favicon.png" />

              <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
              />

              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black"
              />
              <meta name="apple-mobile-web-app-title" content="Safrilen" />
              <meta name="application-name" content="Safrilen" />

              <meta
                name="msapplication-TileColor"
                content={tailwindConfig.theme.extend.colors.primary[600]}
              />

              <base href="/" />

              <meta property="og:locale" content="fr_FR" />
              <meta property="og:type" content="article" />
              <meta property="og:site_name" content="Safrilen" />

              <meta name="twitter:card" content="summary" />
              <meta
                name="theme-color"
                content={
                  theme === Theme.DARK
                    ? tailwindConfig.theme.extend.colors.secondary[900]
                    : "#ffffff"
                }
              />
            </Head>

            {theme != null ? children : null}
          </ContentContext.Provider>
        </CountriesContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  ) : null;
}
