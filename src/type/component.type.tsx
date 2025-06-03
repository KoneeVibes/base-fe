import { FormLabelProps, InputBaseProps } from "@mui/material";

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
    menuitems: T,
    handleMenuItemClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: string) => void
};
