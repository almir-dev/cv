import React from "react";
import { DescriptionSection } from "../../core/description-section/DescriptionSection";
import { ScoreItem } from "../../core/score-item/ScoreItem";
import styles from "./Skills.module.scss";

export function Skills() {
  return (
    <DescriptionSection label={"Skills"}>
      <SkillItem skill={"React"} score={5} />
      <SkillItem skill={"Javascript"} score={4} />
      <SkillItem skill={"Typescript"} score={4} />
      <SkillItem skill={"HTML"} score={4} />
      <SkillItem skill={"CSS"} score={4} />
      <SkillItem skill={"Java"} score={4} />
      <SkillItem skill={"Spring boot"} score={4} />
      <SkillItem skill={"SQL"} score={4} />
      <SkillItem skill={"PostgreSQL"} score={4} />
      <SkillItem skill={"GitLab"} score={3} />
      <SkillItem skill={"Jest"} score={5} />
      <SkillItem skill={"Enzyme"} score={5} />
      <SkillItem skill={"Mockito"} score={4} />
      <SkillItem skill={"Cypress"} score={4} />
    </DescriptionSection>
  );
}

export function SkillItem({ skill, score }: { skill: string; score: number }) {
  return (
    <div className={styles.skillItem}>
      <span className={styles.label}>{skill}</span>
      <ScoreItem score={score} />
    </div>
  );
}
