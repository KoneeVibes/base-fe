import React from "react"

export type AuthLayoutPropsType = {
    children: React.ReactNode
}

export type SideNavigationPropsType = {
    username: string,
    role: string,
    headshot: React.ReactNode,
}

export type TopNavigationPropsType = {
    pageTitle: string,
    ancillaryElement?: React.ReactNode
}

export type DashboardLayoutPropsType = {
    pageTitle: string,
    pageId: string,
    ancillaryElement?: React.ReactNode
    children: React.ReactNode,
}

export type MainAreaPropsType = {
    children: React.ReactNode
}

export type BaseTablePropsType = {
    rows: Record<any, any>[],
}

export type BlogHistoryTablePropsType = {
    selectedBlogPostId: string | null,
    handleEllipsisButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void
    handleActionItemClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, action: string) => void
} & BaseTablePropsType;

export type GalleryHistoryTablePropsType = {
    selectedGalleryPostId: string | null,
    handleEllipsisButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void
    handleActionItemClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, action: string) => void
} & BaseTablePropsType;
