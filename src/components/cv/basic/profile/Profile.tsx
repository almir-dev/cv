import React from "react";
import styles from "./Profile.module.scss";

import profilePicture from "../../profile.png";

export function Profile() {
    return <div className={styles.profile}>
        <Decorator/>
        <Picture/>
    </div>
}

export function Picture() {
    return (
        <div className={styles.profilePicture}>
            <img src={profilePicture} alt="profile" width={200} className={''} />
        </div>
    );
}

export function Decorator() {
    return <div className={styles.profileDecorator}>
        <div className={styles.circle}/>
        <FullName/>
    </div>
}

export function FullName() {
    return <div className={styles.fullName}>
        ALMIR OMEROVIC
    </div>
}