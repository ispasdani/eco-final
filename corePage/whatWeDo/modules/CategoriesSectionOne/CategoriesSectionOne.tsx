"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionOne/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { plasticwaste, woodwaste } from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionOne = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionOne}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.plasticWaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].plasticWaste}
      </h2>
      <div className={styles.plasticImages}>
        {plasticwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 12033} />
        ))}
      </div>
      <h2 className={styles.woodWaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].woodWaste}
      </h2>
      <div className={styles.woodImages}>
        {woodwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 19333} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionOne;
