import { Box, styled } from "@mui/material";

export const MenuWrapper = styled(Box)<{ open: boolean }>(({ open }) => {
    return {
        display: open ? "block" : "none",
        "& ul": {
            marginBlock: 0,
            marginInline: 0,
            paddingInline: 0,
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--flex-gap)/4)",
        },
        "& li": {
            fontFamily: "Nunito",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "normal",
            color: "var(--dark-color)",
            textWrap: "wrap",
            display: "block",
            minHeight: "unset",
            padding: "0",
        },
        "& li:hover": {
            color: "var(--active-primary-button)",
            background: "transparent",
        },
    }
})