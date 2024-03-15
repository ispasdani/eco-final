import React from "react";
import styles from "@/components/backgroundVideo/styles.module.scss";

type BackgroundVideoProps = {
  src: string;
};

const BackgroundVideo = ({ src }: BackgroundVideoProps) => {
  return (
    <video autoPlay muted loop id="myVideo" className={styles.backgroundVideo}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
