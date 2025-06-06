import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { AppLayout } from "../../../../container/layout/app";
import { GalleryPostHistoryWrapper } from "./styled";
import { BaseButton } from "../../../../component/button/styled";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../../context/appContext";
import { GalleryUploadForm } from "../../../../container/form/galleryuploadform";
import Cookies from "universal-cookie";
import { retrieveAllGalleryService } from "../../../../util/api/gallery/retrieveallgallery";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../../../../helper/dateFormatter";
import { GalleryDeleteIcon, GalleryEditIcon, GalleryViewIcon } from "../../../../asset";

export const GalleryPostHistory = () => {
    const cookies = new Cookies();
    const TOKEN = cookies.getAll().TOKEN;

    const { setIsGalleryUploadFormModalOpen } = useContext(AppContext);

    const { data: gallery, refetch: refetchGallery } = useQuery({
        queryKey: ['gallery', TOKEN],
        queryFn: async () => {
            const response = await retrieveAllGalleryService(TOKEN);
            return response;
        },
        enabled: !!TOKEN,
    });

    const handleOpenGalleryUploadFormModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        return setIsGalleryUploadFormModalOpen(true);
    };

    const handleActionClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, action: string, item: Record<string, any>) => {
        e.preventDefault();
        e.stopPropagation();
        switch (action) {
            case "view":

                break;
            case "edit":

                break;
            case "delete":

                break;
            default:
                break;
        }
    }

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
                    alertModalController={setIsGalleryUploadFormModalOpen}
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