import React from "react";
import styles from "@/corePage/whyUs/styles.module.scss";
import GridBackground from "@/components/gridBackground/GridBackground";

function WhyUs() {
  return (
    <section className={styles.whyUs}>
      <GridBackground borderColor="var(--main-grey)" />
    </section>
  );
}

export default WhyUs;
