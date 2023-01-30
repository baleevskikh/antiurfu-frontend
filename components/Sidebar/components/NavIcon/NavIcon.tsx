import React from "react";
import styles from "./NavIcon.module.scss"
import {
    IconBookmark,
    IconBookmarkSolid,
    IconHome,
    IconHomeSolid, IconQuestion,
    IconQuestionSolid,
    IconText,
    IconTextSolid
} from "@/ui/Icons";
import clsx from "clsx";

type IconType = 'home' | 'bookmark' | 'text' | 'placeholder'

interface NavIconProps {
    active?: boolean
    icon?: IconType
}

const NavIcon = ({active, icon = 'placeholder'}: NavIconProps) => {
    const iconElement = active ? {
        'home': <IconHomeSolid/>,
        'bookmark': <IconBookmarkSolid/>,
        'text': <IconTextSolid/>,
        'placeholder': <IconQuestionSolid/>
    } : {
        'home': <IconHome/>,
        'bookmark': <IconBookmark/>,
        'text': <IconText/>,
        'placeholder': <IconQuestion/>
    }
    return (
        <div className={clsx(styles.nav__icon, styles[icon])}>
            {iconElement[icon]}
        </div>
    )
}

export {type NavIconProps}
export default NavIcon