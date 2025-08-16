"use client";

import React from "react";
import styles from "./hero.module.css";
import { useAppContext } from "@/context/AppContext";

type HeroProps = {
  id: string;
  name: string;
};

export default function Hero(props: HeroProps) {
  const { setCurrentHeroById } = useAppContext();
  const { id, name } = props;

  return (
    <div className={styles.hero} onMouseEnter={() => setCurrentHeroById(id)}>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
