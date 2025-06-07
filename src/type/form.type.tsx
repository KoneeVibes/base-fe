export type GalleryUploadFormPropsType = {
    gallery: Record<string, any> | null,
    setGallery: React.Dispatch<React.SetStateAction<Record<string, any>>>
    alertModalController: React.Dispatch<React.SetStateAction<boolean>>
}