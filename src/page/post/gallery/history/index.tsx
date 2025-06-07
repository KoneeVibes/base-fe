import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { AppLayout } from "../../../../container/layout/app";
import { GalleryPostHistoryWrapper } from "./styled";
import { BaseButton } from "../../../../component/button/styled";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/appContext";
import { GalleryUploadForm } from "../../../../container/form/galleryuploadform";
import Cookies from "universal-cookie";
import { retrieveAllGalleryService } from "../../../../util/api/gallery/retrieveallgallery";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../../helper/dateFormatter";
import { GalleryDeleteIcon, GalleryEditIcon, GalleryViewIcon, SuccessTickIcon } from "../../../../asset";
import { BaseAlertModal } from "../../../../component/modal/alert";
import { BaseImageModal } from "../../../../component/modal/image";
import { BaseDeleteModal } from "../../../../component/modal/delete";
import { deleteGalleryService } from "../../../../util/api/gallery/deletegallery";

export const GalleryPostHistory = () => {
    const cookies = new Cookies();
    const TOKEN = cookies.getAll().TOKEN;

    const { isGalleryUploadFormModalOpen, setIsGalleryUploadFormModalOpen } = useContext(AppContext);

    const [isLoading, setIsLoading] = useState(false);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [activeGalleryItem, setActiveGalleryItem] = useState({} as Record<string, any>);
    const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
    const [isGalleryUploadSuccessfulAlertModalOpen, setIsGalleryUploadSuccessfulAlertModalOpen] = useState(false);

    const { data: gallery, refetch: refetchGallery } = useQuery({
        queryKey: ['gallery', TOKEN],
        queryFn: async () => {
            const response = await retrieveAllGalleryService(TOKEN);
            return response;
        },
        enabled: !!TOKEN,
    });

    useEffect(() => {
        if (isGalleryUploadSuccessfulAlertModalOpen) {
            refetchGallery();
        };
    }, [isGalleryUploadSuccessfulAlertModalOpen, refetchGallery]);

    const handleOpenGalleryUploadFormModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return setIsGalleryUploadFormModalOpen(true);
    };

    const handleActionClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string, item: Record<string, any>) => {
        e.preventDefault();
        e.stopPropagation();
        await setActiveGalleryItem(item);
        switch (action) {
            case "view":
                setIsImageModalOpen(true);
                break;
            case "edit":
                setIsGalleryUploadFormModalOpen(true);
                break;
            case "delete":
                setIsDeleteConfirmationModalOpen(true);
                break;
            default:
                break;
        }
    };

    const handleGalleryUploadSuccessfulAlertModalClickOutside = () => {
        return setIsGalleryUploadSuccessfulAlertModalOpen(true);
    };

    const handleGalleryUploadSuccessfulAlertModalCallToActionClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return setIsGalleryUploadSuccessfulAlertModalOpen(false);
    };

    const handleImageModalClose = () => {
        setIsImageModalOpen(false);
        return setActiveGalleryItem({});
    };

    const handleDeleteConfirmationModalClose = () => {
        return setIsDeleteConfirmationModalOpen(false);
    }

    const handleDeleteGallery = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await deleteGalleryService(TOKEN, "334e375f-bcdf-4664-ad61-a61a31e590ac", activeGalleryItem.id);
            if (response.status === "success") {
                setIsLoading(false);
                setActiveGalleryItem({});
                setIsDeleteConfirmationModalOpen(false);
                return refetchGallery();
            } else {
                setIsLoading(false);
            }
        } catch (error: any) {
            setIsLoading(false);
            console.error('Upload to gallery failed:', error);
        }
    };

    return (
        <AppLayout
            pageId={"Gallery"}
            pageTitle={"Gallery Post History"}
            ancillaryElement={
                <BaseButton
                    type="button"
                    variant="contained"
                    sx={{
                        width: "100%"
                    }}
                    onClick={handleOpenGalleryUploadFormModal}
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
                        Make a Post
                    </Typography>
                </BaseButton>
            }
        >
            <GalleryPostHistoryWrapper>
                <Box
                    component={"div"}
                    className="main-area-ancilliary-element-box"
                >
                    <BaseButton
                        type="button"
                        variant="contained"
                        sx={{
                            width: "100%"
                        }}
                        onClick={handleOpenGalleryUploadFormModal}
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
                            Make a Post
                        </Typography>
                    </BaseButton>
                </Box>
                <GalleryUploadForm
                    gallery={isGalleryUploadFormModalOpen ? activeGalleryItem : {}}
                    setGallery={setActiveGalleryItem}
                    alertModalController={setIsGalleryUploadSuccessfulAlertModalOpen}
                />
                <BaseImageModal
                    open={isImageModalOpen}
                    handleClose={handleImageModalClose}
                    src={activeGalleryItem.url}
                    altText={activeGalleryItem.description}
                />
                <BaseAlertModal
                    icon={<SuccessTickIcon />}
                    callToAction="Close"
                    className="gallery-upload-successful-modal"
                    message="Upload Successful"
                    open={isGalleryUploadSuccessfulAlertModalOpen}
                    handleClose={handleGalleryUploadSuccessfulAlertModalClickOutside}
                    handleCallToAction={handleGalleryUploadSuccessfulAlertModalCallToActionClick}
                />
                <BaseDeleteModal
                    className="gallery-delete-confirmation-modal"
                    title="Are you sure you want to delete item?"
                    open={isDeleteConfirmationModalOpen}
                    isLoading={isLoading}
                    handleClose={handleDeleteConfirmationModalClose}
                    handleCallToAction={handleDeleteGallery}
                />
                <Stack
                    gap={"var(--flex-gap)"}
                >
                    {gallery?.map((item: Record<string, any>, index: number) => {
                        return (
                            <Card
                                key={index}
                                sx={{ borderRadius: "30px", boxShadow: "none", filter: "drop-shadow(0px 4px 4px rgba(214, 214, 214, 0.25))" }}
                            >
                                <CardMedia
                                    component="img"
                                    alt="gallery"
                                    height="250px"
                                    image={item?.url}
                                />
                                <CardContent
                                    className="card-content"
                                >
                                    <Stack
                                        height={"100%"}
                                        gap={"calc(var(--flex-gap))"}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h3"
                                                fontFamily={"Nunito"}
                                                fontWeight={700}
                                                fontSize={23}
                                                lineHeight={"normal"}
                                                color="var(--dark-color)"
                                            >
                                                {item?.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                fontFamily={"Nunito"}
                                                fontWeight={400}
                                                fontSize={15}
                                                lineHeight={"normal"}
                                                color="var(--dark-color)"
                                            >
                                                {`Uploaded: ${formatDate(item?.createdAt, false)}`}
                                            </Typography>
                                        </Box>
                                        <Stack
                                            direction={"row"}
                                            gap={"calc(var(--flex-gap)/2)"}
                                            alignItems={"center"}
                                            justifyContent={"space-between"}
                                            overflow={"hidden"}
                                        >
                                            <Box
                                                component={"div"}
                                                className="card-button"
                                            >
                                                <BaseButton
                                                    type="button"
                                                    disableElevation
                                                    variant="contained"
                                                    sx={{ width: "-webkit-fill-available" }}
                                                    bgcolor="var(--gallery-view-color)"
                                                    onClick={(e) => handleActionClick(e, "view", item)}
                                                >
                                                    <GalleryViewIcon />
                                                </BaseButton>
                                            </Box>
                                            <Box
                                                component={"div"}
                                                className="card-button"
                                            >
                                                <BaseButton
                                                    type="button"
                                                    disableElevation
                                                    variant="contained"
                                                    sx={{ width: "-webkit-fill-available" }}
                                                    bgcolor="var(--gallery-edit-color)"
                                                    onClick={(e) => handleActionClick(e, "edit", item)}
                                                >
                                                    <GalleryEditIcon />
                                                </BaseButton>
                                            </Box>
                                            <Box
                                                component={"div"}
                                                className="card-button"
                                            >
                                                <BaseButton
                                                    type="button"
                                                    disableElevation
                                                    variant="contained"
                                                    sx={{ width: "-webkit-fill-available" }}
                                                    bgcolor="var(--gallery-delete-color)"
                                                    onClick={(e) => handleActionClick(e, "delete", item)}
                                                >
                                                    <GalleryDeleteIcon />
                                                </BaseButton>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        )
                    })}
                </Stack>
            </GalleryPostHistoryWrapper>
        </AppLayout>
    )
}