import React, {useEffect, useState} from "react";
import Input from "@/ui/Input/Input";
import Button from "@/ui/Button/Button";
import Avatar from "@/ui/Avatar/Avatar";
import styles from "styles/modules/PostFull.module.scss"
import clsx from "clsx";
import Link from "next/link";
import {IconPlaner} from "@/ui/Icons";


const PostFull = () => {
    const [commentRounded, setCommentRounded] = useState<boolean>(false)
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setCommentRounded(window.innerHeight + window.scrollY > document.body.clientHeight - 100)
            })
        }
    }, [])

    return (
        <>
            <div className={styles.post}>
                <article className={styles.post_content}>
                    <div className={"user__info"}>
                        <Avatar size={"xs"} className={"me-xs"} username={"baleevskikh"}/>
                        <div>
                            <Link href={"/about"} className={"user__name"}>
                                baleevskikhsv
                            </Link> <span className={"date"}>сегодня в 13:00</span>
                        </div>
                    </div>
                    <h2 className={styles.title}>Как списать на экзамене по матанализу?</h2>
                    <p className={styles.paragraph}>Сколько уже было сломано копий о задачу выравнивания элементов на
                        странице.
                        Предлагаю вашему вниманию перевод отличной статьи с решением этой проблемы от Стефана Шоу
                        (Stephen
                        Shaw)
                        для Smashing Magazine — Absolute Horizontal And Vertical Centering In CSS.</p>
                    <br/>
                    <p className={styles.paragraph}>Все мы знали о <b>margin: 0 auto;</b> для горизонтального
                        центрирования,
                        но <b>margin: auto;</b> не работало для вертикального. Это можно легко исправить, просто задав
                        высоту и
                        применив следующие стили:</p>
                    <br/>
                    <p className={styles.paragraph}>Я не первый, кто предложил это решение, однако такой подход редко
                        применяется при вертикальном
                        выравнивании. В комментариях к статье <a href="#">How to Center Anything With CSS Simon</a> How
                        to
                        Center
                        Anything With CSS Simon ссылается на пример jsFiddle, где приводится
                        отличное решение для вертикального центрирования. Вот еще несколько источников на эту тему.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                    <br/>
                    <p className={styles.paragraph}>Метод был протестирован, и прекрасно работает в Chrome, Firefox,
                        Safari,
                        Mobile Safari и даже IE 8-10.
                        Один пользователь упоминал, что контент не выравнивается по вертикали на Windows Phone.</p>
                </article>
                <section className={styles.comment_block}>
                    <h2 className={styles.comment_block__header}>Комментарии (2)</h2>
                    {/*<div className={styles.comment_block__empty}>*/}
                    {/*    <span>Здесь пока нет ни одного комментария, вы можете стать первым!</span>*/}
                    {/*</div>*/}
                    <article className={styles.comment_item}>
                        <Avatar size={"lg"} className={"me-md"} username={"stepan"}/>
                        <div className={styles.comment_item__body}>
                            <Link href={'/about'} className={styles.comment_item__header}>stepan</Link>
                            <p className={styles.comment_item__text}>По моему опыту, обычно наоборот: не указывают там,
                                где или просто стыдно указывать, или где будут пытаться максимально прогнуть по
                                зарплате, как будто последнюю почку отдают.</p>
                            <div className={styles.footer}>
                                <span className={clsx(styles.data, 'me-xs')}>17 минут назад</span>
                                <Link className={styles.answer} href={'#'}>Ответить</Link>
                            </div>
                            <div className={styles.separator}/>
                            <article className={styles.comment_item}>
                                <Avatar size={"md"} className={"me-md"} username={"Alex"}/>
                                <div className={styles.comment_item__body}>
                                    <Link href={'/about'} className={styles.comment_item__header}>Alexander</Link>
                                    <p className={styles.comment_item__text}><Link href={'#'}>stepan</Link>, полностью с вами согласан</p>
                                    <div className={styles.footer}>
                                        <span className={clsx(styles.data, 'me-xs')}>2 минуты назад</span>
                                        <Link className={styles.answer} href={'#'}>Ответить</Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </article>
                </section>
            </div>
            <div className={clsx(
                styles.comment_form,
                commentRounded && styles.comment_rounded
            )}>
                <Avatar username={'baleevskikh'} size={'md'} className={'me-sm'}/>
                <Input placeholder={'Написать комментарий...'} className={'me-sm'} stretched/>
                <Button isIcon mode={"primary"} disabled><IconPlaner size={18}/></Button>
            </div>
        </>
    )
}

export default PostFull