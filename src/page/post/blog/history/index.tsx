import { Box, Typography } from "@mui/material";
import { AppLayout } from "../../../../container/layout/app";
import { BlogPostHistoryWrapper } from "./styled";
import { BlogHistoryTable } from "../../../../container/table/bloghistorytable";
import { BaseButton } from "../../../../component/button/styled";
import { useNavigate } from "react-router-dom";

export const BlogPostHistory = () => {
    const navigate = useNavigate();

    const handleNavigateToCreateBlogPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return navigate("/post/blog");
    };

    const handleEllipsisButtonClick = () => {

    };

    const handleActionItemClick = () => {

    };

    return (
        <AppLayout
            pageId={"Blog"}
            pageTitle={"Blog Post History"}
            ancillaryElement={
                <BaseButton
                    type="button"
                    variant="contained"
                    sx={{
                        width: "100%"
                    }}
                    onClick={handleNavigateToCreateBlogPost}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Make a Post
                    </Typography>
                </BaseButton>
            }
        >
            <BlogPostHistoryWrapper>
                <Box
                    component={"div"}
                    className="main-area-ancilliary-element-box"
                >
                    <BaseButton
                        type="button"
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                    >
                        <Typography
                            variant={"button"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Make a Post
                        </Typography>
                    </BaseButton>
                </Box>
                <Box
                    component={"div"}
                    className="blog-history-table-box"
                >
                    <BlogHistoryTable
                        rows={[]}
                        selectedBlogPostId={null}
                        handleActionItemClick={handleActionItemClick}
                        handleEllipsisButtonClick={handleEllipsisButtonClick}
                    />
                </Box>
            </BlogPostHistoryWrapper>
        </AppLayout>
    )
}