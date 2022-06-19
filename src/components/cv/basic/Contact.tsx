import React from "react";
import { InfoSection } from "../core/info-section/InfoSection";
import { LabeledField } from "../core/labeled-field/LabeledField";
import { Email, LinkedIn, GitHub, Web } from "@material-ui/icons";

export function Contact() {
  return (
    <InfoSection label={"Contact"}>
      <EmailField />
      <LinkedInField />
      <GithubField />
      {/*<WebField />*/}
    </InfoSection>
  );
}

export function EmailField() {
  return (
    <LabeledField icon={<Email />} label={"Email"}>
      almir.omerovic.dev@gmail.com
    </LabeledField>
  );
}

export function LinkedInField() {
  return (
    <LabeledField icon={<LinkedIn />} label={"LinkedIn"}>
      www.linkedin.com/in/almirdev
    </LabeledField>
  );
}

export function GithubField() {
  return (
    <LabeledField icon={<GitHub />} label={"GitHub"}>
      www.github.com/almir-dev
    </LabeledField>
  );
}

export function WebField() {
  return (
    <LabeledField icon={<Web />} label={"Website"}>
      www.almir-dev.com
    </LabeledField>
  );
}
