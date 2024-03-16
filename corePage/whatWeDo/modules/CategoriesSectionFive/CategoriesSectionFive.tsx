"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionFive/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { rubberwaste, usedbatteries } from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionFive = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.rubberwaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].rubberWaste}
      </h2>
      <div className={styles.rubberImages}>
        {rubberwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 120863} />
        ))}
      </div>
      <h2 className={styles.usedbatteries}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].userBatteries}
      </h2>
      <div className={styles.usedbatteriesImages}>
        {usedbatteries.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 16633} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionFive;
