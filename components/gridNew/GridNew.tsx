import React from "react";
import { heroes } from "@/data/heroes";
import styles from "./GridNew.module.scss";

export type Hero = (typeof heroes)[number];

export default function GridNew() {
  return (
    <div className={styles.container}>
      <div className={`${styles.grid} ${styles.gridFour} ${styles.gridEnd}`}>
        {heroes
          .filter((hero) => hero.role === "tank")
          .map((hero: Hero) => (
            <div className={styles.item} key={hero.id}>
              {hero.displayName}
            </div>
          ))}
      </div>
      <div className={`${styles.grid} ${styles.gridFive} ${styles.gridCenter}`}>
        {heroes
          .filter((hero) => hero.role === "damage")
          .map((hero: Hero) => (
            <div className={styles.item} key={hero.id}>
              {hero.displayName}
            </div>
          ))}
      </div>
      <div className={`${styles.grid} ${styles.gridFour}`}>
        {heroes
          .filter((hero) => hero.role === "support")
          .map((hero: Hero) => (
            <div className={styles.item} key={hero.id}>
              {hero.displayName}
            </div>
          ))}
      </div>
    </div>
  );
}
