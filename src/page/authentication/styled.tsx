import { styled } from "@mui/material";

export const SignInWrapper = styled("form")(({ theme }) => {
    return {
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--flex-gap)/2)",
        padding: "var(--basic-padding)",
        boxShadow: "0px 4px 20px var(--box-shadow-color)",
        borderRadius: "10px",
        "& legend": {
            marginBlockEnd: "calc(var(--basic-margin)/4)",
        },
        "& fieldset": {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        },
        "& .call-to-action": {
            overflow: "hidden",
            "& button": {
                marginBlockStart: "var(--basic-margin)",
            }
        },
        "@supports (width: -webkit-fill-available)": {
            width: "-webkit-fill-available",
        },
        "@supports (width: -moz-available)": {
            width: "-moz-available",
        },
        "@supports (width: stretch)": {
            width: "stretch",
        },
        [theme.breakpoints.up("laptop")]: {
            margin: "var(--basic-margin) calc(var(--basic-margin) * 3)",
        }
    }
});
