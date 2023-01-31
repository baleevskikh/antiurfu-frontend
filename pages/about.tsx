import React, {ReactElement} from "react";
import Link from "next/link";
import LayoutMain from "@/layouts/LayoutMain";
import InputV2 from "@/ui/InputV2";

const Page = () => (
    <h1 className={"mb-md"}>О проекте <Link href="/">назад</Link></h1>
)

Page.getLayout = (page: ReactElement) => (
    <LayoutMain>
        {page}
        <InputV2 placeholder={'Логин или почта'}/>
    </LayoutMain>
)

export default Page