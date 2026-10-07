"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import IonIcon from "@reacticons/ionicons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCoffee,} from '@fortawesome/free-solid-svg-icons'; 
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";

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
    <header className={`${styles.fixedContainer} ${ scrolled ? styles.scrolled : ""}`}>

      <div className={styles.whiteBg} />


      <div className={styles.header}>

        <div className={styles.leftContainer}>

          <div className={styles.brand}>

            <div className={styles.logoBox}>

              <Image
                src="/images/comp_logo.png"
                alt="SADAIV"
                width={60}
                height={60}
                className={styles.logoImage}
                style={{width: "60px", height: "60px"}}/>

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

          <button className={styles.iconBtn}
            onClick={() => console.log("Notification clicked")}>

            <span className={styles.notificationIcon}>
              <IonIcon name="notifications-outline" />
            </span>
          </button>


          <div className={styles.divider} />


          <button
            className={styles.iconBtn}
            onClick={() =>
              console.log("Profile clicked")
            }>
            <span className={styles.profileIcon}>
              <FontAwesomeIcon icon={faUserRegular} style={{ fontSize: '20px' }} />
            </span>
          </button>

        </div>

      </div>

    </header>
  );
}