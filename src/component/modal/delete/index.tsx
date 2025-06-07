import { Box, CircularProgress, DialogActions, DialogContent, Typography } from "@mui/material";
import { BaseDeleteModalWrapper } from "./styled";
import { DeleteModalPropsType } from "../../../type/component.type";
import { BaseButton } from "../../button/styled";
import { CautionIcon } from "../../../asset";

export const BaseDeleteModal: React.FC<DeleteModalPropsType> = ({ open, className, handleClose, title, isLoading, handleCallToAction }) => {
    return (
        <BaseDeleteModalWrapper
            open={open}
            onClose={handleClose}
            className={className}
        >
            <DialogContent>
                <Box>
                    <CautionIcon />
                </Box>
                <Box>
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={16}
                        lineHeight={"normal"}
                        color="var(--dark-color)"
                        textAlign={"center"}
                        whiteSpace={"normal"}
                    >
                        {title}
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <BaseButton
                    variant="contained"
                    sx={{ width: "100%" }}
                    bgcolor="var(--caution-button-color)"
                    onClick={handleCallToAction}
                >
                    {isLoading ? (
                        <CircularProgress color="inherit" className="loader" />
                    ) : (
                        <Typography
                            variant={"button"}
                            fontFamily={"inherit"}
                            fontWeight={"inherit"}
                            fontSize={"inherit"}
                            lineHeight={"inherit"}
                            color={"inherit"}
                            textTransform={"inherit"}
                        >
                            Continue
                        </Typography>
                    )}
                </BaseButton>
            </DialogActions>
        </BaseDeleteModalWrapper>
    )
}
