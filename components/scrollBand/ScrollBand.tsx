"use client";

import React from "react";
import styles from "@/components/scrollBand/styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollBandProps = {
  text: string;
};

const ScrollBand = ({ text }: ScrollBandProps) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className={styles.textOnScrollContainer}>
      <motion.p className={styles.motionText} style={{ x: x }}>
        {text}
      </motion.p>
    </div>
  );
};

export default ScrollBand;
