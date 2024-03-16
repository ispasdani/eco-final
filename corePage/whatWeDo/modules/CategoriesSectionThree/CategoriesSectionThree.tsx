"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/modules/CategoriesSectionThree/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import {
  ferrousmetalwaste,
  nonferrousmetalwaste,
} from "@/constants/WasteCategories";
import ImageWasteCategory from "@/components/imageWasteCategory/ImageWasteCategory";

const CategoriesSectionThree = () => {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.categoriesSectionTwo}>
      <GridBackground borderColor="var(--main-grey)" />
      <h2 className={styles.ferrousmetalwaste}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].ferrousMetalWaste}
      </h2>
      <div className={styles.ferrousmetalImages}>
        {ferrousmetalwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 120863} />
        ))}
      </div>
      <h2 className={styles.textileAndLeatherWaste}>
        {
          whatWeDo[selectedLanguage as keyof typeof whatWeDo]
            .textileAndLeatherWaste
        }
      </h2>
      <div className={styles.textileAndLeatherImages}>
        {nonferrousmetalwaste.map((item, index) => (
          <ImageWasteCategory backgroundImageSrc={item} key={index * 19333} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSectionThree;
