import React from "react";
import styles from "./CircularItem.module.scss";

export function CircularItem({ bold }: { bold: boolean }) {
  const classes = bold ? `${styles.circularItem} ${styles.boldItem}` : styles.circularItem;
  return <div className={classes} />;
}
