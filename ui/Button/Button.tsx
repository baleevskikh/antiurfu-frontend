import React, {FC, PropsWithChildren} from "react"
import styles from "./Button.module.scss"
import Tappable, {TappableProps} from "@/ui/Tappable"
import clsx from "clsx"
import Link from "next/link";
import Spinner from "@/ui/Spinner";

interface ButtonProps extends TappableProps {
    mode?: 'default' | 'primary' | 'border'
    size?: 'sm' | 'md' | 'lg'
    stretched?: boolean
    loading?: boolean
    isIcon?: boolean
    disabled?: boolean
}

const Button: FC<PropsWithChildren<ButtonProps>> =
    ({
         className,
         mode = 'default',
         size = 'md',
         stretched = false,
         rippleColor = "rgba(0, 0, 0, .1)",
         isIcon,
         children,
         disabled = false,
         loading = false,
         ...restProps
     }) => {


        if (mode === "primary") rippleColor = "rgba(255, 255, 255, .1)"
        if (mode === "border") rippleColor = "rgba(0, 0, 0, .05)"
        const Component = restProps.href ? Link : 'button'
        const spinnerSize = {'sm': 14, 'md': 16, 'lg': 18}

        return (
            <Tappable
                className={clsx(
                    styles.button,
                    styles[mode],
                    styles[size],
                    stretched && styles.stretched,
                    isIcon && styles.is_icon,
                    disabled || loading && styles.disabled,
                    loading && styles.loading,
                    className
                )}
                Component={Component}
                rippleColor={rippleColor}
                {...restProps}
            >
                {loading && <div className={styles.spinner_wrapper}>
                    <Spinner size={spinnerSize[size]} className={styles.spinner}/>
                </div>}
                <span>{children}</span>
            </Tappable>
        )
    }

export {type ButtonProps}
export default Button
