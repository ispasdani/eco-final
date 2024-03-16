"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionFour/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import {
  ferrousmetalwaste,
  glasswaste,
  nonferrousmetalwaste,
  wasteelectricalandelectronicequipment,
} from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionFour = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.wasteelectricalandelectronicequipment}>
        {
          whatWeDo[selectedLanguage as keyof typeof whatWeDo]
            .wasteElectricalAndElectronicEquipment
        }
      </h2>
      <div className={styles.wasteelectricalandelectronicequipmentImages}>
        {wasteelectricalandelectronicequipment.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 120863} />
        ))}
      </div>
      <h2 className={styles.glasswaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].glassWaste}
      </h2>
      <div className={styles.glassImages}>
        {glasswaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 16633} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionFour;
