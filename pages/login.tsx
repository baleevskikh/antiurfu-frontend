import React from 'react';
import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import styles from "styles/modules/Form.module.scss"
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className={styles.form__wrapper}>
            <div>

                <div className={styles.form__body}>
                    <Link href={'/'} className={styles.logo}>
                        <Image className={styles.logo_image} height={33} src={Logo} alt="АнтиУрФУ"/>
                    </Link>
                    <h1 className={styles.title}>Авторизация</h1>
                    <form action="/">
                        <Input
                            className={'mb-xs'}
                            type={'text'}
                            mode={'lg'}
                            hasBorder
                            stretched
                            placeholder={'Логин или почта'}
                        />
                        <Input
                            className={'mb-md'}
                            type={'password'}
                            mode={'lg'}
                            hasBorder
                            stretched
                            placeholder={'Пароль'}
                        />
                        <Button mode={'primary'} size={'lg'} stretched>Войти</Button>
                    </form>
                </div>
                <div className={styles.form__footer}>
                    <p className={'mb-xs'}>Нет аккаунта? <Link href={'/join'}>Зарегистрироваться</Link></p>
                    <Link href={'/reset'}>Забыли пароль?</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;