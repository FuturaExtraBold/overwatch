"use client";

import React from "react";
import styles from "./master.module.css";
import HeroGrid from "../heroGrid/HeroGrid";
import { useAppContext } from "@/context/AppContext";
import GridNew from "../gridNew/GridNew";

export default function Master() {
  const { currentHero } = useAppContext();

  return (
    <div className={styles.master}>
      <div className={styles.master__left}>
        {/* <HeroGrid /> */}
        <GridNew />
      </div>
      <div className={styles.master__right}>
        <div className={styles.master__detail}>
          <h1>{currentHero?.displayName}</h1>
        </div>
        <div className={styles.master__info}>
          <h1>{currentHero?.realName}</h1>
          <p>{currentHero?.bio}</p>
        </div>
      </div>
    </div>
  );
}
