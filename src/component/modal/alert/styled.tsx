import { Dialog, styled } from "@mui/material";

export const BaseAlertModalWrapper = styled(Dialog)(() => {
    return {
        "& .MuiDialog-paper": {
            borderRadius: "21px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
        "& h2": {
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "normal",
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            padding: "var(--basic-padding)",
        },
        "& .icon-box": {
            display: "flex",
            justifyContent: "center",
        },
        "& .modal-content": {
            padding: "var(--basic-padding)",
        }
    }
})