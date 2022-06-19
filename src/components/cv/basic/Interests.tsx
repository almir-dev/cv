import React from "react";
import { InfoSection } from "../core/info-section/InfoSection";
import { ListItem } from "../core/list-item/ListItem";

export function Interests() {
  return (
    <InfoSection label={"Interests"}>
      <ListItem label={"Trying to master the Guitar"} />
      <ListItem label={"Spending time on Steam"} />
      <ListItem label={"Preparing for my first D&D session"} />
      <ListItem label={"Throwing myself in the world of fantasy and sci-fi"} />
    </InfoSection>
  );
}
