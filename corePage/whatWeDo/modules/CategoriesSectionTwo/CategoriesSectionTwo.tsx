"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionTwo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import {
  papercardboardwaste,
  plasticwaste,
  textileandleatherwaste,
  woodwaste,
} from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionTwo = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.paperCardboardWaste}>
        {
          whatWeDo[selectedLanguage as keyof typeof whatWeDo]
            .paperCardboardWaste
        }
      </h2>
      <div className={styles.paperCardboardImages}>
        {papercardboardwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 12033} />
        ))}
      </div>
      <h2 className={styles.textileAndLeatherWaste}>
        {
          whatWeDo[selectedLanguage as keyof typeof whatWeDo]
            .textileAndLeatherWaste
        }
      </h2>
      <div className={styles.textileAndLeatherImages}>
        {textileandleatherwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 19333} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionTwo;
