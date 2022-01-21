import React from "react";
import styles from './ListItem.module.scss';

export interface ListItemProps {
    /* displayed label of the item. */
    label: string;
}

export function ListItem({label}: {label: string}) {
    return <div className={styles.listItem}>
        <div className={styles.bullet}/>
        {label}
    </div>
}

