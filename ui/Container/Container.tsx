import React, {FC, PropsWithChildren} from "react";
import styles from "./Container.module.scss"
import clsx from "clsx";

interface ContainerProps {
    className?: string
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({className, children}) => {
    return (
        <div className={clsx(styles.container, className)}>
            {children}
        </div>
    )
}

export {type ContainerProps}
export default Container