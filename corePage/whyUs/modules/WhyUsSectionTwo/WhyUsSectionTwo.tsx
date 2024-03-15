"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whyUs/modules/WhyUsSectionTwo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whyUsTexts } from "@/constants/WhyUsTexts";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";

function WhyUsSectionTwo() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.whyUsSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <div className={styles.sortingMillImg} />
      <p className={styles.sortingMillLabel}>
        {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].sortingMill}
      </p>
      <div className={styles.trucksImg} />
      <p className={styles.trucksLabel}>
        {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].trucks}
      </p>
    </div>
  );
}

export default WhyUsSectionTwo;
