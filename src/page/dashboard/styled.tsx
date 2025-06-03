import { Stack, styled } from "@mui/material";

export const DashboardWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "var(--flex-gap)",
        "& .MuiCard-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        "& .card-content": {
            padding: "0",
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        "& .card-content:last-child": {
            paddingBottom: 0,
        },
    }
})