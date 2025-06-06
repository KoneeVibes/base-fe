import { Dialog, styled } from "@mui/material";

export const BaseFormModalWrapper = styled(Dialog)(() => {
    return {
        "& .MuiDialogContent-root": {
            padding: 0
        },
        "& .MuiDialogTitle-root": {
            fontFamily: "Nunito",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: "normal",
            textAlign: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            padding: "var(--basic-padding)",
        }
    }
})
