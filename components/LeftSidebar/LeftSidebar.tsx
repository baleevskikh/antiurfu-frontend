import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./LeftSidebar.module.scss"

const LeftSidebar = () => {
    return (
        <div className={styles.left_sidebar}>
            <div className={styles.sticky_container}>
                <Sidebar/>
            </div>
        </div>
    )
}

export default LeftSidebar