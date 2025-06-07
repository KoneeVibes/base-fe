import { FormLabelProps, InputBaseProps, LinearProgressProps } from "@mui/material";

export type BaseTypographyType = {
    fontsize?: string,
    fontweight?: number,
    colour?: string,
};

export type BaseButtonPropsType = BaseTypographyType & {
    radius?: string,
    padding?: string,
    bgcolor?: string,
    border?: string,
};

export type BaseLabelPropsType = BaseTypographyType & FormLabelProps;

export type BaseInputPropsType = BaseTypographyType & {
    border?: string,
    bgcolor?: string,
} & InputBaseProps;

export type MenuItemType = {
    [key: string]: any
};

export type MenuPropsType<T> = {
    open: boolean,
    menuitems?: T,
    handleMenuItemClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: string) => void
};

export type BaseTablePropsType = {
    headers: string[]
    children: React.ReactNode
};

export type BaseAlertModalPropsType = {
    open: boolean,
    icon: React.ReactNode,
    handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
    handleCallToAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    title?: string,
    message?: string,
    callToAction?: string,
    className?: string
};

export type FormModalPropsType = {
    open: boolean,
    handleClickOutside: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    title?: string,
    children: React.ReactNode,
    className?: string,
};

export type BaseImageModalPropsType = {
    open: boolean,
    src: string,
    altText: string,
    handleClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined,
};

export type ProgressBarPropsType = {
    value: number
} & LinearProgressProps

export type DeleteModalPropsType = Omit<BaseAlertModalPropsType, "icon" | "message" | "callToAction"> & {
    isLoading: boolean
}
