import React, { PropsWithChildren } from "react";
import styles from "./LabeledField.module.scss";

export interface LabeledFieldProps {
  /* Icon displayed at the left side of the field.*/
  icon: React.ReactNode;
  /* Label displayed the the top of the field. */
  label: string;
}

export function LabeledField({ icon, label, children }: PropsWithChildren<LabeledFieldProps>) {
  return (
    <div className={styles.labeledField}>
      {icon}
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        {children}
      </div>
    </div>
  );
}
