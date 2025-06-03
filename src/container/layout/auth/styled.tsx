import { Stack, styled } from "@mui/material";

export const AuthLayoutWrapper = styled(Stack)(({ theme }) => {
    return {
        flexDirection: "row",
        minHeight: "100vh",
        backgroundColor: "var(--diluted-primary-color)",
        "& .image-box": {
            flex: 1,
            overflow: "hidden",
            background: "inherit",
            justifyContent: "space-between",
            "& .auth-text-area": {
                padding: "var(--basic-padding)",
                gap: "calc(var(--flex-gap))",
            },
            "& .auth-image-area": {
                "& svg": {
                    width: "100%",
                }
            },
            [theme.breakpoints.down("laptop")]: {
                display: "none",
            },
        },
        "& .form-box": {
            flex: 1,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--light-color)",
            borderRadius: "16px 0 0 16px",
            [theme.breakpoints.down("laptop")]: {
                padding: "var(--basic-padding)",
            }
        },
    }
});
