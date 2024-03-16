"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionSix/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import {
  ferrousmetalwaste,
  glasswaste,
  nonferrousmetalwaste,
  hazardouswaste,
  usedbatteries,
  wasteelectricalandelectronicequipment,
} from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionSix = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.hazardouswaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].hazardousWaste}
      </h2>
      <div className={styles.rubberImages}>
        {hazardouswaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 120863} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionSix;
