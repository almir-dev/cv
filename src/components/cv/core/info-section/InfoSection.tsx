import {PropsWithChildren} from "react";
import styles from './InfoSection.module.scss';

export interface InfoSectionProps {
    /* Label which is displayed at the top of the section. */
    label: string;
}

export function InfoSection({label, children}: PropsWithChildren<InfoSectionProps>) {
    return <div className={styles.infoSection}>
        <h1>{label}</h1>
        {children}
    </div>
}