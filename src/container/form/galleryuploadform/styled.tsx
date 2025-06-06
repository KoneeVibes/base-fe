import { Stack, styled } from "@mui/material";

export const GalleryUploadFormWrapper = styled(Stack)(({ theme }) => {
    return {
        gap: "var(--flex-gap)",
        padding: "0 var(--basic-padding) var(--basic-padding)",
        overflow: "hidden",
        "& .modal-call-to-action": {
            gap: "calc(var(--flex-gap)/4)",
        },
        "& .MuiInputBase-root": {
            border: "0.89px solid #CACACA",
            borderRadius: "4px",
            color: "#000000",
        },
        [theme.breakpoints.up(285)]: {
            "& .modal-call-to-action": {
                alignItems: "center",
            },
        }
    }
})