import React from "react";
import styles from "@/components/infoCircle/styles.module.scss";

type InfoCircleProps = {
  text: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const InfoCircle = ({ text, top, left, right, bottom }: InfoCircleProps) => {
  return (
    <div
      className={styles.infoCircleContainer}
      style={{ top: top, left: left, right: right, bottom: bottom }}
    >
      <div className={styles.infoCircle}>
        <div className={styles.infoSmallerCircle}></div>
        <div className={styles.infoCircleText}>{text}</div>
      </div>
    </div>
  );
};

export default InfoCircle;
