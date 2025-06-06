import { Box, DialogContent } from "@mui/material";
import { BaseImageModalPropsType } from "../../../type/component.type";
import { BaseImageModalWrapper } from "./styled";

export const BaseImageModal: React.FC<BaseImageModalPropsType> = ({
    open,
    src,
    altText,
    handleClose,
}) => {
    return (
        <BaseImageModalWrapper
            open={open}
            onClose={handleClose}
        >
            <DialogContent
                className="modal-content"
            >
                <Box
                    component={"div"}
                    className="image-box"
                >
                    <img
                        src={src}
                        alt={altText}
                    />
                </Box>
            </DialogContent>
        </BaseImageModalWrapper>
    )
}