"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.fixedContainer} ${
        scrolled ? styles.scrolled : ""
      }`}
    >

      <div className={styles.whiteBg} />


      <div className={styles.header}>

        <div className={styles.leftContainer}>

          <div className={styles.brand}>

            <div className={styles.logoBox}>

              <Image
                src="/images/comp_logo.png"
                alt="SADAIV"
                width={80}
                height={80}
                className={styles.logoImage}
                style={{width: "32px", height: "32px"}}
              />

            </div>

            <span className={styles.logo}>
              S A D A I V
            </span>

            <span className={styles.subLogo}>
              Finance
            </span>

          </div>

        </div>



        <div className={styles.rightSection}>

          <button
            className={styles.iconBtn}
            onClick={() =>
              console.log("Notification clicked")
            }
          >
            <span className={styles.notificationIcon}>
              ♧
            </span>
          </button>


          <div className={styles.divider} />


          <button
            className={styles.iconBtn}
            onClick={() =>
              console.log("Profile clicked")
            }
          >
            <span className={styles.profileIcon}>
              ♙
            </span>
          </button>

        </div>

      </div>

    </header>
  );
}