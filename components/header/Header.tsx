"use client";

import React, { useRef } from "react";
import styles from "./Header.module.css";
import useAnimateText from "@/hooks/useAnimateText";

export default function Header() {
  const titleRef = useRef<HTMLHeadingElement>(null!);
  useAnimateText(titleRef);

  return (
    <section className={styles.header}>
      <h1 ref={titleRef} className={styles.title}>
        Heroes
      </h1>
    </section>
  );
}
