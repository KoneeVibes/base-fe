import { Stack, styled } from "@mui/material";

export const BlogPostHistoryWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "var(--flex-gap)",
        overflow: "hidden",
        [theme.breakpoints.between("miniTablet", "tablet")]: {
            "& .main-area-ancilliary-element-box": {
                width: "fit-content",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            "& .main-area-ancilliary-element-box": {
                display: "none"
            },
        },
    }
})