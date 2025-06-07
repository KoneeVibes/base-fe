import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { BaseFormModal } from "../../../component/modal/form";
import { GalleryUploadFormWrapper } from "./styled";
import Cookies from "universal-cookie";
import { GalleryUploadFormPropsType } from "../../../type/form.type";
import { BaseInput } from "../../../component/form/input/styled";
import { Box, CircularProgress, Stack, Typography, useMediaQuery } from "@mui/material";
import { BaseButton } from "../../../component/button/styled";
import { AppContext } from "../../../context/appContext";
import { GalleryUploadCameraIcon, MediaIcon, UploadTickIcon } from "../../../asset";
import { galleryUploadService } from "../../../util/api/gallery/uploadgallery";
import { ProgressBar } from "../../../component/progressbar";
import { updateGalleryService } from "../../../util/api/gallery/updategallery";

export const GalleryUploadForm: React.FC<GalleryUploadFormPropsType> = ({ gallery, setGallery, alertModalController }) => {
    const cookies = new Cookies();
    const TOKEN = cookies.getAll().TOKEN;

    const {
        isGalleryUploadFormModalOpen,
        setIsGalleryUploadFormModalOpen
    } = useContext(AppContext);
    const matches = useMediaQuery('(min-width:425px)');
    const uploadImageRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formDetails, setFormDetails] = useState<{
        img: File | null,
        title: string,
        description: string,
    }[]>([]);

    useEffect(() => {
        if (!gallery?.id || !gallery?.url || !gallery?.title) return;
        const { url, title, description } = gallery;
        fetch(url)
            .then(async (res) => {
                const blob = await res.blob();
                const filename = url.split('/').pop() || 'image.jpg';
                const file = new File([blob], filename, { type: blob.type });
                setFormDetails((prev) => [...prev, { img: file, title, description }]);
            })
            .catch(() => {
                setFormDetails((prev) => [...prev, { img: null, title, description }]);
            });
    }, [gallery]);

    const handleClickOutside = () => {
        setIsGalleryUploadFormModalOpen(false);
        setError(null);
        setGallery({});
        return setFormDetails([]);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        setFormDetails((prev) =>
            prev.map((item, idx) => (idx === index ? { ...item, [name]: value } : item))
        );
    };

    const handleUploadImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        const newDetails = files.map((file) => ({
            img: file,
            title: '',
            description: '',
        }));
        setFormDetails((prev) => [...prev, ...newDetails]);
    };

    const handleSelectFileClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        if (uploadImageRef.current) {
            uploadImageRef?.current.click();
        };
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.stopPropagation();
        setFormDetails((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);
        const formData = new FormData();
        formDetails.forEach((item) => {
            if (item.img) {
                formData.append("img", item.img);
            };
            formData.append(`titles[]`, item.title);
            formData.append(`descriptions[]`, item.description);
        });
        try {
            let response;
            if (!gallery?.id || !gallery?.url || !gallery?.title) {
                response = await galleryUploadService(TOKEN, "334e375f-bcdf-4664-ad61-a61a31e590ac", formData);
            } else {
                response = await updateGalleryService(TOKEN, "334e375f-bcdf-4664-ad61-a61a31e590ac", gallery.id, formData);
            };
            if (response.status === "success") {
                setIsLoading(false);
                setIsGalleryUploadFormModalOpen(false);
                setGallery({});
                setFormDetails([]);
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
                    {/* <Box>
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
                    </Box> */}
                    <Box>
                        <Typography
                            variant="body1"
                            fontFamily={"Inter"}
                            fontWeight={400}
                            fontSize={12}
                            lineHeight={"normal"}
                            color="var(--ash-subtitle-color)"
                        >
                            click to browse file
                        </Typography>
                    </Box>
                    <Box
                        component={"div"}
                        className="select-file-button-box"
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
                            multiple
                            ref={uploadImageRef}
                            style={{ display: "none" }}
                            onChange={handleUploadImageChange}
                        />
                    </Box>
                </Stack>
                {formDetails?.map((detail, index) => (
                    <Fragment
                        key={index}
                    >
                        <Stack
                            direction={{ mobile: "row" }}
                            gap={"calc(var(--flex-gap))"}
                            justifyContent={"space-between"}
                            padding={"calc(var(--basic-padding)/2)"}
                            border={"1px solid var(--border-color)"}
                            borderRadius={"10px"}
                        >
                            <Box
                                flex={0.2}
                                overflow={"hidden"}
                            >
                                <MediaIcon style={{ width: matches ? "unset" : "100%", height: "auto" }} />
                            </Box>
                            <Stack
                                flex={0.7}
                                overflow={"hidden"}
                                gap={"calc(var(--flex-gap)/8)"}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={500}
                                        fontSize={14}
                                        lineHeight={"normal"}
                                        color="var(--progress-bar-label-color)"
                                    >
                                        {detail.img?.name}
                                    </Typography>
                                </Box>
                                <Box>
                                    <ProgressBar value={100} />
                                </Box>
                                <Stack
                                    direction={{ mobile: "row" }}
                                    gap={"calc(var(--flex-gap)/4)"}
                                >
                                    <Box
                                        component={"div"}
                                    >
                                        <BaseButton
                                            type="button"
                                            variant="text"
                                            border={"none"}
                                            padding={"0"}
                                            fontweight={600}
                                            fontsize="14px"
                                            colour="var(--image-upload-cta-color)"
                                            onClick={(e) => handleDelete(e, index)}
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
                                                Delete
                                            </Typography>
                                        </BaseButton>
                                    </Box>
                                    <Box
                                        component={"div"}
                                    >
                                        <BaseButton
                                            type="button"
                                            variant="text"
                                            border={"none"}
                                            padding={"0"}
                                            fontweight={600}
                                            fontsize="14px"
                                            colour="var(--image-upload-cta-color)"
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
                                                Upload Another
                                            </Typography>
                                        </BaseButton>
                                    </Box>
                                </Stack>
                            </Stack>
                            <Box
                                flex={0.1}
                                overflow={"hidden"}
                            >
                                <UploadTickIcon style={{ width: matches ? "unset" : "100%", height: "auto", float: "right" }} />
                            </Box>
                        </Stack>
                        <Fragment>
                            <BaseInput
                                required
                                type="text"
                                name="title"
                                value={detail.title}
                                placeholder="Enter Image Title"
                                onChange={(e) => handleChange(e, index)}
                            />
                            <BaseInput
                                required
                                type="text"
                                name="description"
                                multiline
                                minRows={4}
                                value={detail.description}
                                placeholder="Enter Description"
                                onChange={(e) => handleChange(e, index)}
                            />
                        </Fragment>
                    </Fragment>
                ))}
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
                {formDetails.length > 0 && (
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
                )}
            </GalleryUploadFormWrapper>
        </BaseFormModal>
    )
}