"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whyUs/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { whyUsTexts } from "@/constants/WhyUsTexts";

function WhyUs() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <section className={styles.whyUs}>
      <GridBackground borderColor="var(--main-grey)" />
      <div className={styles.titleBoxWhy}>
        <span>
          {
            whyUsTexts[selectedLanguage as keyof typeof whyUsTexts]
              .whyUsTitleNumber
          }
        </span>
        <h2>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyUsTexts}
        </h2>
      </div>

      <p className={styles.whyExperienceTitle}>
        {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].experienceText}
      </p>
      <div className={styles.whyExperienceContent}>
        <p>
          {
            whyUsTexts[selectedLanguage as keyof typeof whyUsTexts]
              .experienceYears
          }
        </p>
        <p>
          {
            whyUsTexts[selectedLanguage as keyof typeof whyUsTexts]
              .experienceYearsLabel
          }
        </p>
      </div>

      <div className={styles.whyTextBoxOne}>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextOne}
        </p>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextTwo}
        </p>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextThree}
        </p>
      </div>
      <div className={styles.whyTextBoxTwo}>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextFour}
        </p>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextFive}
        </p>
        <p>
          {whyUsTexts[selectedLanguage as keyof typeof whyUsTexts].whyTextSix}
        </p>
      </div>
    </section>
  );
}

export default WhyUs;
