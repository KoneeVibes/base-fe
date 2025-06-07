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
    callToAction,
    className
}) => {
    return (
        <BaseAlertModalWrapper
            open={open}
            onClose={handleClose}
            className={className}
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
                    fontFamily={"Nunito"}
                    fontWeight={600}
                    fontSize={24}
                    lineHeight={"normal"}
                    color={"var(--dark-color)"}
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