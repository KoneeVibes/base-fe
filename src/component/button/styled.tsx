import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropsType } from "../../type/component.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropsType>(({ variant, fontsize, fontweight, radius, padding, bgcolor, border, colour }) => {
    return {
        fontFamily: "Inter",
        fontWeight: fontweight || 500,
        fontSize: fontsize || "16px",
        lineHeight: "normal",
        borderRadius: radius || "10px",
        border: (variant === "contained") ? "none" : (border || "1px solid var(--border-color)"),
        color: (variant === "contained") ? (colour || "var(--light-color)") : (colour || "var(--dark-color)"),
        background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        padding: padding || "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: (variant === "contained") ? "none" : (border || "1px solid var(--border-color)"),
            background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        }
    }
})
