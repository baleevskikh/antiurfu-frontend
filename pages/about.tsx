import React, {ReactElement} from "react";
import Link from "next/link";
import LayoutMain from "@/layouts/LayoutMain";

const Page = () => (
    <h1 className={"mb-md"}>О проекте <Link href="/">назад</Link></h1>
)

Page.getLayout = (page: ReactElement) => (
    <LayoutMain>
        {page}
    </LayoutMain>
)

export default Page