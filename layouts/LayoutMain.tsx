import React, {FC, PropsWithChildren} from "react";
import Header from "@/components/Header/Header";
import LeftSidebar from "@/components/LeftSidebar";
import Container from "@/ui/Container";

const LayoutMain: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Header/>
            <Container className={"d-flex p-0-mobile"}>
                <LeftSidebar/>
                <div className={"content"}>
                    {children}
                </div>
            </Container>
        </>
    )
}

export default LayoutMain