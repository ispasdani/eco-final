"use client";

import React, { useContext } from "react";
import styles from "@/corePage/aboutUs/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import ScrollBand from "@/components/scrollBand/ScrollBand";
import { aboutUsSectionOneTexts } from "@/constants/AboutUsSectionOne";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import InfoCircle from "@/components/infoCircle/InfoCircle";

function AboutUsSectionOne() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <section className={styles.aboutUsSectionOne}>
      <GridBackground borderColor="var(--main-grey)" oneMoreRow={true} />
      <div className={styles.scrollBand}>
        <ScrollBand
          text={`${
            aboutUsSectionOneTexts[
              selectedLanguage as keyof typeof aboutUsSectionOneTexts
            ].scrollBandText
          }`}
        />
      </div>
      <div className={styles.titleSectionOne}>
        <h3>
          {
            aboutUsSectionOneTexts[
              selectedLanguage as keyof typeof aboutUsSectionOneTexts
            ].numberTitleSectionOne
          }
        </h3>
        <h2>
          {
            aboutUsSectionOneTexts[
              selectedLanguage as keyof typeof aboutUsSectionOneTexts
            ].titleSectionOne
          }
        </h2>
      </div>
      <div className={styles.inLine}>
        <div className={styles.textOne}>
          <p>
            {
              aboutUsSectionOneTexts[
                selectedLanguage as keyof typeof aboutUsSectionOneTexts
              ].aboutTextOne
            }
          </p>
          <p>
            {
              aboutUsSectionOneTexts[
                selectedLanguage as keyof typeof aboutUsSectionOneTexts
              ].aboutTextTwo
            }
          </p>
          <p>
            {
              aboutUsSectionOneTexts[
                selectedLanguage as keyof typeof aboutUsSectionOneTexts
              ].aboutTextThree
            }
          </p>
        </div>
        <div className={styles.imageOne}>
          <InfoCircle
            text="There are more than 171 trillion pieces of plastic floating in the world's oceans, and more than 5.25 trillion macro and microplastics."
            top="5%"
            left="5%"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSectionOne;
