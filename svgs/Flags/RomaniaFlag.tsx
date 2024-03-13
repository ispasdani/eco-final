import React from "react";
import styles from "@/svgs/Flags/styles.module.scss";

const RomaniaFlag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="400"
      viewBox="0 0 3 2"
      className={styles.flagLang}
    >
      <rect width="3" height="2" x="0" y="0" fill="#002B7F" />
      <rect width="2" height="2" x="1" y="0" fill="#FCD116" />
      <rect width="1" height="2" x="2" y="0" fill="#CE1126" />
    </svg>
  );
};

export default RomaniaFlag;
