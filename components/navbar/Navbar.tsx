"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "@/components/navbar/styles.module.scss";
import NavLogo from "../navLogo/NavLogo";
import Link from "next/link";
import EnglishFlag from "@/svgs/Flags/EnglishFlag";
import RomaniaFlag from "@/svgs/Flags/RomaniaFlag";
import { LanguageSelectorContext } from "@/contexts/Homepage/Homepage";
import { navTexts } from "@/constants/NavTexts";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let { selectedLanguage, setSelectedLanguage } = useContext(
    LanguageSelectorContext
  );

  return (
    <header
      className={`${isScrolling ? styles.headerOnScroll : styles.header}`}
    >
      <div className={styles.logo}>
        <NavLogo />
      </div>
      <nav className={`${openNav ? styles.mobileNav : styles.navbar}`}>
        <div className={styles.navbarLeft}>
          <Link className={styles.navLink} href={"/#whyUs"}>
            {navTexts[selectedLanguage as keyof typeof navTexts].navLink1}
            <span className={styles.navLinkDecor} />
          </Link>
          <Link className={styles.navLink} href={"/#aboutUs"}>
            {navTexts[selectedLanguage as keyof typeof navTexts].navLink2}
            <span className={styles.navLinkDecor} />
          </Link>
          <Link className={styles.navLink} href={"/#whatWeDo"}>
            {navTexts[selectedLanguage as keyof typeof navTexts].navLink3}
            <span className={styles.navLinkDecor} />
          </Link>
          <Link className={styles.navLink} href={"/#contactUs"}>
            {navTexts[selectedLanguage as keyof typeof navTexts].navLink4}
            <span className={styles.navLinkDecor} />
          </Link>
        </div>
        <div className={styles.langContainer}>
          <select
            className={styles.selectLang}
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="RO">RO</option>
            <option value="EN">EN</option>
          </select>
          {selectedLanguage === "EN" && <EnglishFlag />}
          {selectedLanguage === "RO" && <RomaniaFlag />}
        </div>
      </nav>
      <div className={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
