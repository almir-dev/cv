import React from "react";
import { Contact } from "./Contact";
import { Personal } from "./Personal";
import { Languages } from "./languages/Languages";
import styles from "./BasicInfo.module.scss";
import { Interests } from "./Interests";
import { Profile } from "./profile/Profile";

export function BasicInfo() {
  return (
    <div className={styles.basicInfo}>
      <Profile />
      <Personal />
      <Contact />
      <Interests />
      <Languages />
    </div>
  );
}
