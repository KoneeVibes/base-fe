import { MenuItem } from "@mui/material";
import { MenuItemType, MenuPropsType } from "../../type/component.type";
import { MenuWrapper } from "./styled";

export const Menu: React.FC<MenuPropsType<MenuItemType>> = ({ open, menuitems, handleMenuItemClick }) => {
    return (
        <MenuWrapper
            open={open}
            className="menu-box"
        >
            <ul>
                {menuitems?.map((item: Record<any, any>, index: string) => {
                    return (
                        <MenuItem
                            key={index}
                            className={`${item.name.replace(/\s+/g, '-')}-Side-Nav-Button`}
                            onClick={(e) => handleMenuItemClick(e, item.url.replace(/\s+/g, '').toLowerCase())}
                        >
                            {item.name}
                        </MenuItem>
                    )
                })}
            </ul>
        </MenuWrapper>
    )
}
