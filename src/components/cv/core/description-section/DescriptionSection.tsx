import { PropsWithChildren } from "react";
import styles from "./DescriptionSection.module.scss";

export interface DescriptionSectionProps {
  /* Label which is displayed at the top of the section. */
  label: string;
}

export function DescriptionSection({ label, children }: PropsWithChildren<DescriptionSectionProps>) {
  return (
    <div className={styles.descriptionSection}>
      <h1>{label}</h1>
      {children}
    </div>
  );
}
