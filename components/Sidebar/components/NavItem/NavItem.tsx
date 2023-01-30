import React from "react";
import Tappable from "@/ui/Tappable";
import clsx from "clsx";
import styles from "./NavItem.module.scss";
import NavIcon,{NavIconProps} from "../NavIcon";

interface NavItemProps extends NavIconProps {
    className?: string
    children: React.ReactNode
}

const NavItem = ({children, active = false, icon, className}: NavItemProps) => {
    return (
        <Tappable
            className={clsx(
                styles.nav__item,
                active && styles.active,
                className
            )}
            Component={"li"}
            rippleColor={"rgba(0, 0, 0, .05)"}
        >
            <NavIcon icon={icon} active={active}></NavIcon>
            {children}
        </Tappable>
    )
}

export {type NavItemProps}
export default NavItem