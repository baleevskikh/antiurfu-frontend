import React, {ReactElement} from "react";
import PostFull from "@/components/PostFull";
import LayoutMain from "@/layouts/LayoutMain";

const Page = () => (
    <PostFull/>
)

Page.getLayout = (page: ReactElement) => (
    <LayoutMain>
        {page}
    </LayoutMain>
)

export default Page