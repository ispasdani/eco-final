"use client";

import React, { useContext } from "react";
import styles from "@/corePage/herobox/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import BackgroundVideo from "@/components/backgroundVideo/BackgroundVideo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { landingTexts } from "@/constants/Herobox";
import ArrowDecor from "@/svgs/Arrows/ArrowDecor";

function Herobox() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.herobox}>
      <GridBackground />
      <BackgroundVideo />
      <div className={styles.heroboxContent}>
        <div className={styles.heroboxLeft}>
          <div>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText1
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText2
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText3
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText4
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText5
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText6
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText7
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText8
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingLeftText9
              }
            </p>
          </div>
          <div className={styles.arrowDecorWrapper}>
            <ArrowDecor />
          </div>
        </div>
        <div className={styles.heroboxRight}>
          <h1>
            {
              landingTexts[selectedLanguage as keyof typeof landingTexts]
                .heroTitle
            }
          </h1>

          <div>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingTitle2
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingTitle4
              }
            </p>
            <p>
              {
                landingTexts[selectedLanguage as keyof typeof landingTexts]
                  .landingTitle3
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobox;
