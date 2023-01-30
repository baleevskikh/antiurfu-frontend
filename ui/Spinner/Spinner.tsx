import React, {FC} from 'react'
import styles from "./Spinner.module.scss"
import clsx from "clsx";
import {IconSpinner} from "@/ui/Icons";

interface SpinnerProps {
    size?: number
    className?: string
}

const Spinner: FC<SpinnerProps> = ({size = 16, className}) => {
    return (
        <IconSpinner
            size={size}
            className={clsx(
                styles.spinner,
                className
            )}
        />
    )
}

export {type SpinnerProps}
export default Spinner