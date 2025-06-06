import { useContext, useRef, useState } from "react";
import { BaseFormModal } from "../../../component/modal/form";
import { GalleryUploadFormWrapper } from "./styled";
import Cookies from "universal-cookie";
import { GalleryUploadFormPropsType } from "../../../type/form.type";
import { BaseInput } from "../../../component/form/input/styled";
import { Box, CircularProgress, SelectChangeEvent, Stack, Typography } from "@mui/material";
import { BaseButton } from "../../../component/button/styled";
import { AppContext } from "../../../context/appContext";
import { GalleryUploadCameraIcon } from "../../../asset";
import { galleryUploadService } from "../../../util/api/gallery/uploadgallery";

export const GalleryUploadForm: React.FC<GalleryUploadFormPropsType> = ({ alertModalController }) => {
    const cookies = new Cookies();
    const TOKEN = cookies.getAll().TOKEN;

    const {
        isGalleryUploadFormModalOpen,
        setIsGalleryUploadFormModalOpen
    } = useContext(AppContext);
    const uploadImageRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formDetails, setFormDetails] = useState<{
        img: File | null,
        title: string,
        description: string,
    }>({
        img: null,
        title: "",
        description: "",
    });
    const [uploadImagePreview, setUploadImagePreview] = useState<string | ArrayBuffer | null>(null);

    const handleClickOutside = () => {
        return setIsGalleryUploadFormModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<unknown>) => {
        const { name, value } = e.target;
        setFormDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUploadImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setUploadImagePreview(e.target.result);
                    setFormDetails((prev) => ({
                        ...prev,
                        img: file
                    }))
                }
            };
            reader.readAsDataURL(file);
        };
    };

    const handleSelectFileClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        if (uploadImageRef.current) {
            uploadImageRef?.current.click();
        };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        const formData = new FormData();
        Object.entries(formDetails).forEach(([key, value]) => {
            formData.append(key, value as any);
        });
        try {
            const response = await galleryUploadService(TOKEN, "334e375f-bcdf-4664-ad61-a61a31e590ac", formData);
            if (response.status === "success") {
                setIsLoading(false);
                setIsGalleryUploadFormModalOpen(false);
                return alertModalController(true);
            } else {
                setIsLoading(false);
                setError('Upload to gallery failed. Please check your credentials and try again.');
            }
        } catch (error: any) {
            setIsLoading(false);
            setError(`Upload to gallery failed. ${error.message}`);
            console.error('Upload to gallery failed:', error);
        }
    };

    return (
        <BaseFormModal
            open={isGalleryUploadFormModalOpen}
            handleClickOutside={handleClickOutside}
            handleSubmit={handleSubmit}
            title="Upload Media"
            className="gallery-upload-form-modal"
        >
            <GalleryUploadFormWrapper>
                <Stack
                    className="modal-call-to-action"
                >
                    <Box>
                        <GalleryUploadCameraIcon />
                    </Box>
                    <Box>
                        <Typography
                            variant="h3"
                            fontFamily={"Inter"}
                            fontWeight={600}
                            fontSize={16}
                            lineHeight={"normal"}
                            color="var(--dark-color)"
                        >
                            Drop your files here
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={12}
                            lineHeight={"normal"}
                            color="var(--ash-subtitle-color)"
                        >
                            or click to browse
                        </Typography>
                    </Box>
                    <Box
                        component={"div"}
                    >
                        <BaseButton
                            type="button"
                            variant="contained"
                            onClick={handleSelectFileClick}
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
                                Choose File
                            </Typography>
                        </BaseButton>
                        <input
                            type="file"
                            name={"img"}
                            ref={uploadImageRef}
                            style={{ display: "none" }}
                            onChange={handleUploadImageChange}
                        />
                    </Box>
                </Stack>
                <BaseInput
                    required
                    type="text"
                    name="title"
                    value={formDetails.title}
                    placeholder="Enter Image/Video Title"
                    onChange={(e) => handleChange(e)}
                />
                <BaseInput
                    required
                    type="text"
                    name="description"
                    multiline
                    minRows={4}
                    value={formDetails.description}
                    placeholder="Enter Description"
                    onChange={(e) => handleChange(e)}
                />
                {error && <Typography
                    fontFamily={"Poppins"}
                    fontWeight={700}
                    fontSize={13}
                    lineHeight={"normal"}
                    color={"#FF0000"}
                    whiteSpace={"normal"}
                >
                    {error}
                </Typography>}
                <Box
                    component={"div"}
                >
                    <BaseButton
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
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
                                Upload To Gallery
                            </Typography>
                        )}
                    </BaseButton>
                </Box>
            </GalleryUploadFormWrapper>
        </BaseFormModal>
    )
}