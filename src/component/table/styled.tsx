import { styled, TableContainer, TableContainerProps } from "@mui/material";

export const TableWrapper = styled(TableContainer)<TableContainerProps>(() => {
    return {
        boxShadow: "none",
        "& .MuiTableCell-root": {
            fontFamily: "Nunito",
            fontWeight: 600,
            fontSize: "14px",
            color: "var(--dark-color)",
            overflow: "hidden",
            whiteSpace: "normal",
            textOverflow: "ellipsis",
            maxWidth: "10rem",
            padding: "var(--basic-padding)",
        },
        "& .MuiTableHead-root": {
            "& .MuiTableCell-root": {
                fontFamily: "Nunito",
                fontWeight: 400,
                fontSize: "12px",
            },
        },
    }
})