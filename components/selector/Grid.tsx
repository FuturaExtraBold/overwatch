import React from "react";
import { heroes } from "@/data/heroes";
import { Hero } from "./Hero";
import styles from "./Grid.module.scss";

export type HeroType = (typeof heroes)[number];

export default function Grid({
  role,
  gridClass,
}: {
  role: string;
  gridClass: string;
}) {
  return (
    <div className={`${styles.grid} ${gridClass}`}>
      {heroes
        .filter((hero) => hero.role === role)
        .map((hero: HeroType) => (
          <Hero key={hero.id} {...hero} />
        ))}
    </div>
  );
}
