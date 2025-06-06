export type ContextProviderPropsType = {
    children: React.ReactNode
};

export type AppContextType = {
    isMobileSideNavigationOpen: boolean
    setIsMobileSideNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>
    isSideNavigationClosing: boolean
    setIsSideNavigationClosing: React.Dispatch<React.SetStateAction<boolean>>,
    activeNavItem: string | undefined,
    setActiveNavItem: React.Dispatch<React.SetStateAction<string | undefined>>,
    authenticatedUser: Record<string, any>,
    setAuthenticatedUser: React.Dispatch<React.SetStateAction<Record<string, any>>>
    isGalleryUploadFormModalOpen: boolean,
    setIsGalleryUploadFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};
