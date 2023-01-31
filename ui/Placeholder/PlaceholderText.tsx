import React from 'react'
import styles from './Placeholder.module.scss'
import clsx from "clsx"

interface PlaceholderTextProps {
    size?: number,
    width?: number,
    className?: string
}

const PlaceholderText = ({size = 16, width = 75, className}: PlaceholderTextProps) => {
    return (
        <div style={{width: width + '%', height: size + 'px'}} className={clsx(
            styles.Placeholder,
            className
        )}>
            <div className={styles.Placeholder__activity}/>
        </div>
    );
};

export default PlaceholderText