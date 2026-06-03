"use client";

import { useCursor } from "@/src/hooks/useCursor";
import styles from "@/src/styles/CustomCursor.module.css";

export default function CustomCursor() {
  const { cursorRef, dotRef } = useCursor();

  return (
    <>
      {/* Outer ring — smooth follower */}
      <div ref={cursorRef} className={styles.cursor} aria-hidden="true" />
      {/* Inner dot — snaps to mouse */}
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}