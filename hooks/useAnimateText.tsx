"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function useAnimateText(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;
    const split = new SplitText(ref.current, { type: "chars" });
    gsap.set(ref.current, {
      display: "block",
    });
    gsap.fromTo(
      split.chars,
      {
        y: 40,
        autoAlpha: 0,
      },
      {
        duration: 0.25,
        y: 0,
        stagger: 0.025,
        ease: "back.out(1.5)",
        autoAlpha: 1,
      }
    );
    return () => split.revert();
  }, [ref]);
}
