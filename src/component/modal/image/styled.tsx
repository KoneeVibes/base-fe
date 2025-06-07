import { Dialog, styled } from "@mui/material";

export const BaseImageModalWrapper = styled(Dialog)(({ theme }) => {
    return {
        "& .MuiDialog-paper": {
            borderRadius: "8px",
            maxWidth: "56rem",
            width: "-webkit-fill-available",
        },
        "& .modal-content": {
            padding: "var(--basic-padding)",
        },
        "& .image-box": {
            overflow: "hidden",
            "img": {
                width: "100%",
                height: "100%",
                objectFit: "fill",
                aspectRatio: "1/1",
                borderRadius: "8px",
            },
            [theme.breakpoints.up("tablet")]: {
                height: "500px",
            }
        }
    }
})