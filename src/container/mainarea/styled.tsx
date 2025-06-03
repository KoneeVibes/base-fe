import { Box, styled } from "@mui/material";

export const MainAreaWrapper = styled(Box)(({ theme }) => {
    return {
        top: "var(--top-nav-height)",
        padding: "var(--basic-padding)",
        overflow: "hidden",
        [theme.breakpoints.up("tablet")]: {
            position: "absolute",
            padding: "calc(var(--basic-padding)/1.5) 0",
            left: "calc(var(--side-nav-width) + var(--basic-padding))",
            right: "var(--basic-padding)",
            top: "calc(var(--top-nav-height) + calc(var(--basic-padding) * 2))"
        },
    }
})
