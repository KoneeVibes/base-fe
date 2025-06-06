import { Stack, styled } from "@mui/material";

export const GalleryPostHistoryWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "var(--flex-gap)",
        overflow: "hidden",
        "& .MuiCard-root": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        "& .MuiCardMedia-root": {
            objectFit: "fill",
            aspectRatio: "1/1",
        },
        "& .card-button": {
            flex: 1,
        },
        "& .card-content": {
            padding: "var(--basic-padding)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
        },
        "& .card-content:last-child": {
            paddingBottom: "var(--basic-padding)",
        },
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