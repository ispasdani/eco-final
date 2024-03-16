"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whyUs/modules/WhyUsSectionTwo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whyUsTexts } from "@/constants/WhyUsTexts";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import InfoCircle from "@/components/infoCircle/InfoCircle";

function WhyUsSectionTwo() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.whyUsSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <div className={styles.sortingMillImg}>
        <InfoCircle
          text="An industrial shredder is a machine used to break down materials for various applications such as recycling, volume reduction, and product destruction."
          left="5%"
          top="10%"
        />
      </div>
      <p className={styles.sortingMillLabel}>
        {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].sortingMill}
      </p>
      <div className={styles.trucksImg}>
        <InfoCircle
          text="The advantage of swap body vehicles is the separation of the container from the transport vehicle, which allows the container to be parked independently of the transport vehicle for loading or unloading."
          left="5%"
          top="6%"
        />
      </div>
      <p className={styles.trucksLabel}>
        {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].trucks}
      </p>
    </div>
  );
}

export default WhyUsSectionTwo;
