"use client";

import React from "react";
import styles from "./heroGrid.module.css";
import { heroes } from "@/data/heroes";
import Hero from "../hero/Hero";

export default function HeroGrid() {
  return (
    <section className={styles.grid}>
      {heroes.map((hero) => (
        <Hero key={hero.id} id={hero.id} name={hero.displayName} />
      ))}
    </section>
  );
}
