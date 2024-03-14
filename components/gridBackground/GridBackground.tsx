import React from "react";
import styles from "@/components/gridBackground/styles.module.scss";

type GridBackgroundProps = {
  borderColor?: string;
  oneMoreRow?: boolean;
};

function GridBackground({ borderColor, oneMoreRow }: GridBackgroundProps) {
  return (
    <div
      className={`${
        oneMoreRow ? styles.gridLinesOneMoreRow : styles.gridLines
      }`}
    >
      <div
        className={styles.gridLine1}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine2}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine3}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine4}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine5}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine6}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine7}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine8}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine9}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine10}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine11}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine12}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine13}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine14}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine15}
        style={{ borderColor: borderColor }}
      ></div>
      <div
        className={styles.gridLine16}
        style={{ borderColor: borderColor }}
      ></div>
      {oneMoreRow && (
        <div
          className={styles.gridLine17}
          style={{ borderColor: borderColor }}
        ></div>
      )}
      {oneMoreRow && (
        <div
          className={styles.gridLine18}
          style={{ borderColor: borderColor }}
        ></div>
      )}
      {oneMoreRow && (
        <div
          className={styles.gridLine19}
          style={{ borderColor: borderColor }}
        ></div>
      )}
      {oneMoreRow && (
        <div
          className={styles.gridLine20}
          style={{ borderColor: borderColor }}
        ></div>
      )}
    </div>
  );
}

export default GridBackground;
