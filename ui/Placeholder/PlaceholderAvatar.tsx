import React from 'react';
import clsx from "clsx";
import styles from "@/ui/Placeholder/Placeholder.module.scss";

interface PlaceholderAvatarProps {
    size?: number,
    rounded?: boolean,
    className?: string
}

const PlaceholderAvatar = ({size = 16, rounded = true, className}: PlaceholderAvatarProps) => {
    return (
        <div style={{width: size + 'px', height: size + 'px'}} className={clsx(
            styles.Placeholder,
            rounded && styles['Placeholder--rounded'],
            className
        )}>
            <div className={styles.Placeholder__activity}/>
        </div>
    );
};

export default PlaceholderAvatar;