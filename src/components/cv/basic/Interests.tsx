import React from "react";
import {InfoSection} from "../core/info-section/InfoSection";
import {ListItem} from "../core/list-item/ListItem";

export function Interests() {
    return <InfoSection label={'Interests'}>
        <ListItem label={'Guitar'}/>
        <ListItem label={'Casual Gaming'}/>
        <ListItem label={'Board Games'}/>
        <ListItem label={'Reading'}/>
    </InfoSection>
}
