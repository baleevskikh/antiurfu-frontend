import React from "react"
import styles from "./Sidebar.module.scss"
import NavItem from "./components/NavItem";

const LeftSidebar = () => {
    return (
        <nav>
            <ul>
                <NavItem active icon={"home"} className={styles.home}>Все обсуждения</NavItem>
                <NavItem icon={"bookmark"} className={styles.favourites}>Избранное</NavItem>
                <NavItem icon={"text"} className={styles.my_topics}>Мои темы</NavItem>
                <div className={styles.separator}/>
                <NavItem>Раздел 1</NavItem>
                <NavItem>Раздел 2</NavItem>
                <NavItem>Раздел 3</NavItem>
                <div className={styles.separator}/>
                <NavItem>Сервисы</NavItem>
            </ul>
        </nav>
    )
}

export default LeftSidebar