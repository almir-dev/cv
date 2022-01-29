import React from "react";
import { InfoSection } from "../../core/info-section/InfoSection";
import { ScoreItem } from "../../core/score-item/ScoreItem";
import styles from "./Languages.module.scss";

export function Languages() {
  return (
    <InfoSection label={"Languages"}>
      <Language language={"English"} score={5} />
      <Language language={"Bosnian"} score={5} />
      <Language language={"German"} score={4} />
    </InfoSection>
  );
}

export function Language({ language, score }: { language: string; score: number }) {
  return (
    <div className={styles.language}>
      <span className={styles.label}>{language}</span>
      <ScoreItem score={score} />
    </div>
  );
}
