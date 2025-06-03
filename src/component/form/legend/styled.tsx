import { styled } from "@mui/material";
import { BaseTypographyType } from "../../../type/component.type";

export const BaseLegend = styled("legend")<BaseTypographyType>(({ fontweight, fontsize, colour }) => {
    return {
        fontFamily: "Inter",
        fontWeight: fontweight || 700,
        fontSize: fontsize || "24px",
        lineHeight: "normal",
        color: colour || "var(--dark-h1-color)",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
})
