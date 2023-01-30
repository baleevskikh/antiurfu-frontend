import React, {useState} from "react";
import Link from "next/link";
import styles from "./Header.module.scss"
import Image from "next/image";
import Logo from "@/public/logo.svg"
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import {IconBurger, IconLogin} from "@/ui/Icons";
import clsx from "clsx";
import MobileSidebar from "./components/MobileSidebar";

const Header = () => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const sidebarShow = () => setShowSidebar(true)
    const sidebarHide = () => setShowSidebar(false)

    return (
        <header className={styles.header}>
            <Container className="d-flex justify-content-between align-items-center">
                <div className={styles.left_block}>
                    <div className={clsx(styles.toggle_sidebar, 'me-md')}>
                        <Button onClick={sidebarShow} isIcon>
                            <IconBurger color={"#838C98"}  size={14}/>
                        </Button>
                    </div>
                    <Link href={'/'} className={styles.logo}>
                        <Image className={styles.logo_image} src={Logo} alt="АнтиУрФУ"/>
                    </Link>
                </div>
                <div className={styles.right_block}>
                    <Button href={'/login'} className={"me-sm"}>Войти</Button>
                    <Button href={'/join'} mode={"primary"}>Регистрация</Button>
                </div>
                <div className={styles.right_block__mobile}>
                    <Button href={'/login'} isIcon><IconLogin color={"#838C98"}/></Button>
                </div>
            </Container>
            <MobileSidebar show={showSidebar} sidebarHide={sidebarHide}/>
        </header>
    )
}

export default Header