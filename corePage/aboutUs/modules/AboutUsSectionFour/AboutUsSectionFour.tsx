"use client";

import React, { useContext } from "react";
import styles from "@/corePage/aboutUs/modules/AboutUsSectionFour/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { aboutUsSectionFourTexts } from "@/constants/AboutUsSectionFour";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import Accordion from "@/components/accordion/Accordion";

function AboutUsSectionFour() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.aboutUsSectionFour}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2>
        {
          aboutUsSectionFourTexts[
            selectedLanguage as keyof typeof aboutUsSectionFourTexts
          ].titleFour
        }
      </h2>
      <p className={styles.introTextFour}>
        {
          aboutUsSectionFourTexts[
            selectedLanguage as keyof typeof aboutUsSectionFourTexts
          ].introTextFour
        }
      </p>
      <p className={styles.introFour}>
        {
          aboutUsSectionFourTexts[
            selectedLanguage as keyof typeof aboutUsSectionFourTexts
          ].introFour
        }
      </p>
      <div className={styles.certAccordions}>
        <Accordion
          title={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoOneTitle
          }`}
          description={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoOneText
          }`}
        />
        <Accordion
          title={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoTwoTitle
          }`}
          description={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoTwoText
          }`}
        />
        <Accordion
          title={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoThreeTitle
          }`}
          description={`${
            aboutUsSectionFourTexts[
              selectedLanguage as keyof typeof aboutUsSectionFourTexts
            ].isoThreeText
          }`}
        />
      </div>
    </div>
  );
}

export default AboutUsSectionFour;
