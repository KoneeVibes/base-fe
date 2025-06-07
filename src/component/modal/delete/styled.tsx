import { Dialog, styled } from "@mui/material";

export const BaseDeleteModalWrapper = styled(Dialog)(({ theme }) => {
    return {
        "& .MuiDialogContent-root": {
            padding: "var(--basic-padding)",
            overflow: "unset",
            display: "flex",
            flexDirection: "column",
            gap: "var(--flex-gap)",
            "& svg": {
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
            }
        },
        "& .MuiDialogActions-root": {
            padding: "0 var(--basic-padding) var(--basic-padding)",
            "& .MuiButton-root:last-of-type": {
                margin: 0
            }
        },
        [theme.breakpoints.down(190)]: {
            "& .MuiDialogContent-root": {
                "& svg": {
                    width: "100%",
                    height: "auto",
                }
            },
        }
    }
})