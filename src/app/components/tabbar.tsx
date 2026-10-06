"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./TabBar.module.css";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.tabBar}>

      <Link
        href="/"
        className={`${styles.tabItem} ${
          pathname === "/" ? styles.active : ""
        }`}
      >
        <div className={styles.iconContainer}>
          <span>⌂</span>
        </div>

        <span className={styles.label}>Home</span>
      </Link>

      <Link
        href="/loan"
        className={`${styles.tabItem} ${
          pathname.startsWith("/loan") ? styles.active : ""
        }`}
      >
        <div className={styles.iconContainer}>
          <span>▣</span>
        </div>

        <span className={styles.label}>Loan</span>
      </Link>

      <Link
        href="/scanandpay"
        className={styles.scanItem}
      >
        <div className={styles.scanButton}>
          <span>⌗</span>
        </div>

        <span className={styles.label}>Scan & Pay</span>
      </Link>

      <Link
        href="/investment"
        className={`${styles.tabItem} ${
          pathname.startsWith("/investment") ? styles.active : ""
        }`}
      >
        <div className={styles.iconContainer}>
          <span>₹</span>
        </div>

        <span className={styles.label}>Investment</span>
      </Link>

      <Link
        href="/history"
        className={`${styles.tabItem} ${
          pathname.startsWith("/history") ? styles.active : ""
        }`}
      >
        <div className={styles.iconContainer}>
          <span>↶</span>
        </div>

        <span className={styles.label}>History</span>
      </Link>

    </nav>
  );
}