import { AppBar, styled } from "@mui/material";

export const TopNavigationWrapper = styled(AppBar)(({ theme }) => {
    return {
        position: "static",
        backgroundColor: "inherit",
        boxShadow: "none",
        "& .MuiToolbar-root": {
            minHeight: "var(--top-nav-height)",
            borderRadius: "inherit",
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding)) !important",
            gap: "var(--flex-gap)",
            justifyContent: "space-between",
        },
        "& .top-navigation-LHS": {
            overflow: "hidden",
            display: "none"
        },
        "& .top-navigation-RHS": {
            overflow: "hidden",
        },
        "& .menu-button-box": {
            display: "flex",
            justifyContent: "center",
            border: "2px solid var(--dark-color)",
            borderRadius: "5px",
            padding: "calc(var(--basic-padding)/4)",
        },
        "& .ancilliary-element-box": {
            display: "none"
        },
        [theme.breakpoints.up(200)]: {
            "& .top-navigation-LHS": {
                display: "block"
            },
            "& .top-navigation-RHS": {
                overflow: "unset",
                cursor: "pointer",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            width: "auto",
            position: "fixed",
            top: 0,
            right: 0,
            left: "var(--side-nav-width)",
            backgroundColor: "inherit",
            "& .menu-button-box": {
                display: "none"
            },
            "& .ancilliary-element-box": {
                display: "block"
            },
        },
    }
})