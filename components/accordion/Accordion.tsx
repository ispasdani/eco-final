"use client";

import React, { useState } from "react";
import styles from "@/components/accordion/styles.module.scss";
import Image from "next/image";
import ArrowExpandMore from "@/svgs/Arrows/ArrowExpandMore";

type AccordionProps = {
  title: string;
  imgSrc?: string;
  description?: string;
};

const Accordion = ({ title, imgSrc, description }: AccordionProps) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [showImageOnHover, setShowImageOnHover] = useState<boolean>(false);

  return (
    <div className={styles.workAccordion}>
      <div
        className={styles.workAccordionTop}
        onClick={() => setExpand(!expand)}
        onMouseEnter={() => setShowImageOnHover(true)}
        onMouseLeave={() => setShowImageOnHover(false)}
      >
        <span className={styles.lineDecor}></span>
        <div className={styles.workAccordionLeft}>
          <span className={styles.decorCircle} />
          <p>
            <span>{title}</span>
          </p>
        </div>
        <ArrowExpandMore />
        {/* {showImageOnHover && expand === false && (
          <Image
            src={imgSrc}
            width={220}
            height={280}
            alt="accordion"
            className={styles.workAccordionImage}
          />
        )} */}
      </div>
      {expand && <div className={styles.expand}>{description}</div>}
    </div>
  );
};

export default Accordion;
