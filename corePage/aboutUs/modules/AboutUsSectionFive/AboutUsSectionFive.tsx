import React from "react";
import styles from "@/corePage/aboutUs/modules/AboutUsSectionFive/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";

function AboutUsSectionFive() {
  return (
    <div className={styles.aboutUsSectionFive}>
      <GridBackground borderColor="var(--main-grey)" />
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className={styles.backgroundVideo}
      >
        <source src="/videos/ecoVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default AboutUsSectionFive;
