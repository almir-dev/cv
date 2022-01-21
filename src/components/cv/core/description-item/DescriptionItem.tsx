import React, {PropsWithChildren} from "react";
import styles from './DescriptionItem.module.scss';

export interface DescriptionItemProps {
    /* title of the description. */
    title: string;
    /* content of the description. */
    description: string;
    /* timespan text displayed at the right end of the section. */
    timespan: string;
}

export function DescriptionItem({title, description, timespan, children}: PropsWithChildren<DescriptionItemProps>) {
    return <div className={styles.descriptionItem}>
        <ExperienceItemHeadline title={title} description={description} timespan={timespan}/>
        {children}
    </div>
}

export function ExperienceItemHeadline({title, description, timespan}: DescriptionItemProps) {
    return <div className={styles.headline}>
        <div className={styles.title}>
            <span>{title}</span>
            <div>{description}</div>
        </div>
        <div className={styles.timespan}>
            {timespan}
        </div>
    </div>
}
