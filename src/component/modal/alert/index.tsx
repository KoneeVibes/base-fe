import { Box, DialogActions, DialogContent, DialogContentText, Typography } from "@mui/material";
import { BaseAlertModalPropsType } from "../../../type/component.type";
import { BaseAlertModalWrapper } from "./styled";
import { BaseButton } from "../../../component/button/styled";

export const BaseAlertModal: React.FC<BaseAlertModalPropsType> = ({
    open,
    icon,
    handleClose,
    title,
    message,
    handleCallToAction,
    callToAction
}) => {
    return (
        <BaseAlertModalWrapper
            open={open}
            onClose={handleClose}
        >
            <DialogContent
                className="modal-content"
            >
                <Box
                    component={"div"}
                    className="icon-box"
                >
                    {icon}
                </Box>
                <DialogContentText
                    variant="h2"
                    fontFamily={"Poppins"}
                    fontWeight={700}
                    fontSize={24}
                    lineHeight={"normal"}
                    color={"var(--midnight-blue-color)"}
                    marginBlock={"calc(var(--basic-margin)/2)"}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                >
                    {title}
                </DialogContentText>
                {message && (
                    <DialogContentText
                        variant="body1"
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={16}
                        lineHeight={"normal"}
                        color={"var(--semi-dark-color)"}
                        whiteSpace={"normal"}
                        textAlign={"center"}
                    >
                        {message}
                    </DialogContentText>
                )}
            </DialogContent>
            <DialogActions
                sx={{ justifyContent: "center", padding: "0 var(--basic-padding) var(--basic-padding)" }}
            >
                <BaseButton
                    variant="contained"
                    onClick={handleCallToAction}
                    padding={"calc(var(--basic-padding)/4) calc(var(--basic-padding) * 1.5)"}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        {callToAction}
                    </Typography>
                </BaseButton>
            </DialogActions>
        </BaseAlertModalWrapper>
    )
}