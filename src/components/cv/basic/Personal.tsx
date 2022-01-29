import React from "react";
import { LabeledField } from "../core/labeled-field/LabeledField";
import { InfoSection } from "../core/info-section/InfoSection";
import { Place, Cake } from "@material-ui/icons";

export function Personal() {
  return (
    <InfoSection label={"Personal"}>
      <AgeField />
      <LocationField />
    </InfoSection>
  );
}

export function AgeField() {
  return (
    <LabeledField icon={<Cake />} label={"Age"}>
      25 years
    </LabeledField>
  );
}

export function LocationField() {
  return (
    <LabeledField icon={<Place />} label={"Location"}>
      Bosnia and Herzegovina, Tuzla
    </LabeledField>
  );
}
