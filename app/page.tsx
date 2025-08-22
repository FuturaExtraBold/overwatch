import React from "react";
import Selector from "@/components/selector/Selector";
import Header from "@/components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img
          className={styles.background}
          src="/images/backgrounds/background_final.webp"
          alt="Selector Background"
        />
        <Header />
        <Selector />
      </main>
    </div>
  );
}
