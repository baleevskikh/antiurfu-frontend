import React, {FC, MutableRefObject, useEffect, useRef} from 'react'
import Sidebar from "@/components/Sidebar/Sidebar"
import Button from "@/ui/Button";
import styles from "./MobileSidebar.module.scss"
import clsx from "clsx"
import {IconXMark} from "@/ui/Icons";

interface MobileSidebarProps {
    show: boolean
    sidebarHide: () => void
}

const MobileSidebar: FC<MobileSidebarProps> = ({show, sidebarHide}) => {
    const sidebar = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        if (show) {
            sidebar.current.classList.add(styles.show)
            setTimeout(() => {
                sidebar.current.classList.add(styles.fade)
            }, 0)
        }
        else {
            sidebar.current.classList.remove(styles.fade)
            setTimeout(() => {
                sidebar.current.classList.remove(styles.show)
            }, 300)
        }
    })

    return (
        <div
            ref={sidebar}
            className={styles.mobile_sidebar__wrapper}
        >
            <div className={clsx(styles.mobile_sidebar, 'm-0')}>
                <div className={styles.mobile_sidebar__header}>
                    <Button onClick={sidebarHide} mode={'border'} isIcon>
                        <IconXMark color={"#838C98"} size={16}/>
                    </Button>
                    <h3 className={styles.header__title}>Меню</h3>
                </div>
                <Sidebar/>
            </div>
            <div onClick={sidebarHide} className={styles.mobile_sidebar__background}/>
        </div>
    );
};

export default MobileSidebar;