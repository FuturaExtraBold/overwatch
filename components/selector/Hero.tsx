import React from "react";
import styles from "./Hero.module.scss";
import { type HeroType } from "./Grid";

export const Hero = (hero: HeroType) => {
  return (
    <div className={styles.hero} key={hero.id}>
      <img
        className={styles.avatar}
        src={`/assets/images/avatars/${hero.id}.webp`}
        alt={hero.displayName}
      />
      <div className={styles.name}>{hero.displayName}</div>
      <div className={styles.accent} style={{ backgroundColor: hero.accent }} />
    </div>
  );
};
