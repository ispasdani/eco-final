"use client";

import React, { useContext } from "react";
import styles from "@/corePage/aboutUs/modules/AboutUsSectionTwo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { aboutUsSectionOneTexts } from "@/constants/AboutUsSectionOne";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import InfoCircle from "@/components/infoCircle/InfoCircle";

function AboutUsSectionTwo() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.aboutUsSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" oneMoreRow={true} />
      <div className={styles.aboutUsSectionTwoLeft}>
        <div className={styles.imageTwo}>
          <InfoCircle
            text="This machine is used to move materials both vertically and horizontally, utilizing a system of a boom, hoist, wire ropes or chains, and sheaves for lifting and relocating heavy objects within the swing of its boom."
            left="20%"
            top="50%"
          />
        </div>
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
        <div className={styles.imageTwoRight}>
          <InfoCircle
            text="Freight containers are a reusable transport and storage unit for moving products and raw materials between locations or countries."
            left="5%"
            top="6%"
          />
        </div>
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
