import React from "react";
import styles from "@/components/backgroundVideo/styles.module.scss";

const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop id="myVideo" className={styles.backgroundVideo}>
      <source src="/videos/mainVideo.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
