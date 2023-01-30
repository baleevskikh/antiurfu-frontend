import React, {ReactElement} from "react";
import Post from "@/components/Post";
import LayoutMain from "@/layouts/LayoutMain";

const Page = () => (
    <>
        <h1 className={"mb-md content-margin-mobile"}>Все обсуждения</h1>
        <main>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </main>
    </>
)

Page.getLayout = (page: ReactElement) => (
    <LayoutMain>
        {page}
    </LayoutMain>
)

export default Page