import React from "react";
import { Skills } from "./skills/Skills";
import { DescriptionItem } from "../core/description-item/DescriptionItem";
import styles from "./Advanced.module.scss";

export function AdvanceInfo() {
  return (
    <div className={styles.advancedInfo}>
      <p>
        Passionate software engineer with 5+ years of experience in developing web applications focused on supporting
        clients in the Automotive industry. Looking for new challenges and not afraid to go out of the comfort zone.
      </p>
      <h2>Work experience</h2>
      <DccsExperience />
      <h2>Education</h2>
      <FacultyEducation />
      <UdacityEducation />
      <Skills />
    </div>
  );
}

export function DccsExperience() {
  const title = "Software Engineer";
  const description = "DCCS, Tuzla";
  const timespan = "Apr 2017 - Present";
  return (
    <DescriptionItem title={title} description={description} timespan={timespan}>
      <p>
        <ul className={styles.regularUl}>
          <li>Developed web applications for famous automobile groups</li>
          <li>Maintained existing products, and was part of products from start to end</li>
          <li>Mentoring new junior team members</li>
          <li>Fullstack experience with java/spring boot and react</li>
          <li>Worked in an agile environment while doing pair and mock programming</li>
          <li>Created a custom micro-frontend solution</li>
          <li>TDD on both backend and frontend</li>
          <li>Extensive unit and e2e testing (Mockito, Jest, React tests, Cypress)</li>
          <li>Maintaining Gitlab pipelines</li>
        </ul>
      </p>
    </DescriptionItem>
  );
}

export function FacultyEducation() {
  const title = "Bachelor of Electrical Engineering";
  const description = "University of Tuzla, Tuzla";
  const timespan = "Apr 2014 - Sep 2021";
  return (
    <DescriptionItem title={title} description={description} timespan={timespan}>
      <p>
        <ul>
          <li>Studied Electrical engineering and computer science</li>
        </ul>
      </p>
    </DescriptionItem>
  );
}

export function UdacityEducation() {
  const title = "Cloud Developer, Computer Software Engineering";
  const description = "Udacity";
  const timespan = "Jun 2021 - Sep 2021";
  return (
    <DescriptionItem title={title} description={description} timespan={timespan}>
      <p>
        <ul>
          <li>Studied the basics of AWS Cloud computing</li>
          <li>Deployed static web apps</li>
          <li>Deployed instagram clone app using aws beanstalk</li>
          <li>Deployed instagram clone app using serverless framework</li>
          <li>Developed/Deployed tic tac toe game using serverless framework</li>
        </ul>
      </p>
    </DescriptionItem>
  );
}
