import React, {FC, InputHTMLAttributes} from 'react'
import styles from "./Input.module.scss"
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    mode?: 'sm' | 'md' | 'lg'
    stretched?: boolean
    hasBorder?: boolean
}

const Input: FC<InputProps> =
    ({
         className,
         mode = 'md',
         stretched,
         hasBorder = false,
         ...restProps
     }) => {
        return (
            <input className={clsx(
                styles.input,
                styles[mode],
                stretched && styles.stretched,
                hasBorder && styles.input_has_border,
                className
            )} {...restProps}/>
        )
    }

export {type InputProps}
export default Input
