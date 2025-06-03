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
