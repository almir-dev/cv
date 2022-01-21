import React from "react";
import styles from './Cv.module.scss';
import {BasicInfo} from "./basic/BasicInfo";
import {AdvanceInfo} from "./advanced/Advanced";

export function Cv() {
    return <div className={styles.cv}>
        <BasicInfo/>
        <AdvanceInfo/>
    </div>
}
