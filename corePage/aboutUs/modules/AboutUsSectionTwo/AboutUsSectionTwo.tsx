"use client";

import React, { useContext } from "react";
import styles from "@/corePage/aboutUs/modules/AboutUsSectionTwo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { aboutUsSectionOneTexts } from "@/constants/AboutUsSectionOne";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";

function AboutUsSectionTwo() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.aboutUsSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" oneMoreRow={true} />
      <div className={styles.aboutUsSectionTwoLeft}>
        <div className={styles.imageTwo}></div>
        <div className={styles.textTwo}>
          <p>
            {
              aboutUsSectionOneTexts[
                selectedLanguage as keyof typeof aboutUsSectionOneTexts
              ].aboutTextFour
            }
          </p>
        </div>
      </div>
      <div className={styles.aboutUsSectionTwoRight}>
        <div className={styles.imageTwoRight}></div>
        <div className={styles.textTwoRight}>
          {
            aboutUsSectionOneTexts[
              selectedLanguage as keyof typeof aboutUsSectionOneTexts
            ].aboutTextFive
          }
        </div>
      </div>
    </div>
  );
}

export default AboutUsSectionTwo;
