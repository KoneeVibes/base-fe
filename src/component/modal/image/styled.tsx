import { Dialog, styled } from "@mui/material";

export const BaseImageModalWrapper = styled(Dialog)(({ theme }) => {
    return {
        "& .MuiDialog-paper": {
            borderRadius: "16px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        "& .modal-content": {
            padding: "var(--basic-padding)",
        },
        "& .image-box": {
            overflow: "hidden",
            border: "2px dashed var(--primary-color)",
            borderRadius: "16px",
            padding: "calc(var(--basic-padding)/4)",
            maxWidth: "350px",
            maxHeight: "350px",
            "img": {
                width: "100%",
                height: "100%",
                objectFit: "fill",
                aspectRatio: "1/1",
                borderRadius: "8px",
            },
            [theme.breakpoints.up("tablet")]: {
                width: "350px",
                height: "350px",
            }
        }
    }
})