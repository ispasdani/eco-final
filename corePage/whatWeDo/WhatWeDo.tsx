"use client";

import React, { useContext } from "react";
import styles from "@/corePage/whatWeDo/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";
import { whatWeDo } from "@/constants/WhatWeDo";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";

function WhatWeDo() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <div className={styles.whatWeDo}>
      <GridBackground borderColor="var(--main-grey)" />
      <div className={styles.titleBox}>
        <span>
          {whatWeDo[selectedLanguage as keyof typeof whatWeDo].whatWeDoNumber}
        </span>
        <h2>
          {whatWeDo[selectedLanguage as keyof typeof whatWeDo].whatWeDoTitle}
        </h2>
      </div>
      <p className={styles.whatWeDoTextOne}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].whatWeDoTextOne}
      </p>
      <p className={styles.whatWeDoTextTwo}>
        {whatWeDo[selectedLanguage as keyof typeof whatWeDo].WhatWeDoTextTwo}
      </p>
    </div>
  );
}

export default WhatWeDo;
