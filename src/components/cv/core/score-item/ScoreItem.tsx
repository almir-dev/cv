import React from "react";
import {CircularItem} from "../circular-item/CircularItem";
import styles from './ScoreItem.module.scss';

export interface ScoreItemProps {
    /* Score number (max 5) */
    score: number
}

export function ScoreItem({score}: ScoreItemProps) {
    return <div className={styles.scoreItem}>
        <CircularItem bold={score > 0}/>
        <CircularItem bold={score > 1}/>
        <CircularItem bold={score > 2}/>
        <CircularItem bold={score > 3}/>
        <CircularItem bold={score > 4}/>
    </div>
}
