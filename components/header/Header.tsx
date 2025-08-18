"use client";

import React, { useRef } from "react";
import styles from "./Header.module.css";
import useAnimateText from "@/hooks/useAnimateText";

export default function Header() {
  const titleRef = useRef<HTMLElement>(null!);
  useAnimateText(titleRef);

  return (
    <section className={styles.header}>
      <span ref={titleRef} className={styles.title}>
        Heroes
      </span>
    </section>
  );
}
