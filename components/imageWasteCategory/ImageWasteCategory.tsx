import React from "react";
import styles from "@/components/imageWasteCategory/styles.module.scss";

type ImageWasteCategoryProps = {
  backgroundImageSrc: string;
};

const ImageWasteCategory = ({
  backgroundImageSrc,
}: ImageWasteCategoryProps) => {
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: backgroundImageSrc }}
    ></div>
  );
};

export default ImageWasteCategory;
