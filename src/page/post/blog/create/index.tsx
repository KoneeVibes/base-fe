import { AppLayout } from "../../../../container/layout/app";
import { MakeBlogPostWrapper } from "./styled";

export const MakeBlogPost = () => {
    return (
        <AppLayout
            pageId={"Blog"}
            pageTitle={"Make a Blog Post"}
        >
            <MakeBlogPostWrapper>
                <p>Hello</p>
            </MakeBlogPostWrapper>
        </AppLayout>
    )
}