"use client";

import React, { useContext, useState } from "react";
import styles from "@/corePage/aboutUs/modules/AboutUsSectionThree/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import EuropeMap from "@/svgs/EuropeMap/EuropeMap";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { aboutUsSectionThreeTexts } from "@/constants/AboutUsSectionThree";

function AboutUsSectionThree() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);
  const [countryHovered, setCountryHovered] = useState<string>("");

  return (
    <div className={styles.aboutUsSectionThree}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2>
        {
          aboutUsSectionThreeTexts[
            selectedLanguage as keyof typeof aboutUsSectionThreeTexts
          ].titleThree
        }
      </h2>
      <p>
        {
          aboutUsSectionThreeTexts[
            selectedLanguage as keyof typeof aboutUsSectionThreeTexts
          ].introTextThree
        }
      </p>

      <div className={styles.bottomText}>
        <p>
          {
            aboutUsSectionThreeTexts[
              selectedLanguage as keyof typeof aboutUsSectionThreeTexts
            ].infoThree
          }
        </p>
        <p>
          {
            aboutUsSectionThreeTexts[
              selectedLanguage as keyof typeof aboutUsSectionThreeTexts
            ].introThreeTwo
          }
        </p>
      </div>
      <div className={styles.europeMapContainer}>
        {countryHovered === "hu" && (
          <p className={styles.countryTitle}>Hungary</p>
        )}
        {countryHovered === "md" && (
          <p className={styles.countryTitle}>Republic of Moldova</p>
        )}
        {countryHovered === "ro" && (
          <p className={styles.countryTitle}>Romania</p>
        )}
        <EuropeMap setCountryHovered={setCountryHovered} />
      </div>
    </div>
  );
}

export default AboutUsSectionThree;
