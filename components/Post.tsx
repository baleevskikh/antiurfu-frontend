import React from "react"
import Button from "@/ui/Button"
import Avatar from "@/ui/Avatar"
import styles from "styles/modules/Post.module.scss"
import Link from "next/link"



const Post = () => {
    return (
        <article className={styles.post}>
            <div className={"user__info"}>
                <Avatar size={"xs"} className={"me-xs"} username={"baleevskikh"}/>
                <div>
                    <Link href={"/about"} className={"user__name"}>
                        baleevskikhsv
                    </Link> <span className={"date"}>сегодня в 13:00</span>
                </div>
            </div>
            <Link className={"text-decoration-none"} href="/post_full">
                <h2 className={styles.title}>Как списать на экзамене по матанализу?</h2>
            </Link>
            <p className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros felis, pharetra id pulvinar ut, mollis vel risus. Phasellus commodo, purus vitae porttitor tincidunt, purus nulla iaculis risus, vulputate feugiat ex arcu ac lectus. Aenean aliquet maximus tincidunt. Donec scelerisque cursus enim, vitae congue enim consectetur lobortis. Etiam at luctus ante. In leo libero, varius sit amet magna eu, dapibus aliquam nulla. Integer sodales hendrerit felis. Nulla efficitur aliquet libero, quis efficitur magna venenatis pretium. Aliquam justo ex, viverra sed urna vitae, interdum bibendum neque. Integer consectetur neque et fringilla vulputate. Aliquam varius condimentum nisl ut iaculis. Vestibulum faucibus odio vel dui vulputate pharetra. Nulla non porta odio. Ut a suscipit augue. Etiam libero eros, maximus nec auctor vel, euismod quis ma...</p>
            <Button className={styles.post__button}>Читать полностью</Button>
        </article>
    )
}

export default Post