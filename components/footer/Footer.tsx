"use client";

import React, { useContext } from "react";
import styles from "@/components/footer/styles.module.scss";
import Image from "next/image";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { footerTexts } from "@/constants/Footer";

function Footer() {
  let { selectedLanguage } = useContext(LanguageSelectorContext);

  return (
    <footer className={styles.footer} id="contactUs">
      <div className={styles.footerTop}>
        <h2>
          {
            footerTexts[selectedLanguage as keyof typeof footerTexts]
              .footerTitle
          }
        </h2>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomContact}>
          <h3>
            {
              footerTexts[selectedLanguage as keyof typeof footerTexts]
                .contactLabel
            }
          </h3>
          <h4>
            {
              footerTexts[selectedLanguage as keyof typeof footerTexts]
                .footerMessage
            }
          </h4>

          <div className={styles.contactWrapper}>
            <Image
              src="/icons/mail.svg"
              alt="E-mail icon"
              width={24}
              height={24}
              className={styles.footerIcon}
            />
            <p>
              {" "}
              {footerTexts[selectedLanguage as keyof typeof footerTexts].email}
            </p>
          </div>
          <div className={styles.contactWrapper}>
            <Image
              src="/icons/location.svg"
              alt="Location Pin icon"
              width={24}
              height={24}
              className={styles.footerIcon}
            />
            <p>
              {" "}
              {
                footerTexts[selectedLanguage as keyof typeof footerTexts]
                  .address
              }
            </p>
          </div>
          <div className={styles.contactWrapper}>
            <Image
              src="/icons/phone.svg"
              alt="Phone icon"
              width={24}
              height={24}
              className={styles.footerIcon}
            />
            <p>
              {" "}
              {footerTexts[selectedLanguage as keyof typeof footerTexts].phone}
            </p>
          </div>
        </div>
        <div className={styles.bottomInfo}></div>
      </div>
    </footer>
  );
}

export default Footer;
