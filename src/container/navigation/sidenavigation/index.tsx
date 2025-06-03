import { useContext, useState } from "react";
import { Box, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sideNavigationItems, sideNavigationUserProfileMenuItems } from "../../../config/static";
import { Close } from "@mui/icons-material";
import { AppContext } from "../../../context/appContext";
import logo from "../../../asset/icon/logo.svg";
import { SideNavigationPropsType } from "../../../type/container.type";
import { SideNavigationLogoutIcon } from "../../../asset";
import { Menu } from "../../menu";

export const SideNavigation: React.FC<SideNavigationPropsType> = ({ username, role, headshot }) => {
    const navigate = useNavigate();
    const matchesMobileAndAbove = useMediaQuery('(min-width:425px)');
    const { setIsSideNavigationClosing, isMobileSideNavigationOpen, setIsMobileSideNavigationOpen } = useContext(AppContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleDrawerClose = () => {
        setIsSideNavigationClosing(true);
        setIsMobileSideNavigationOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsSideNavigationClosing(false);
    };

    const handleNavItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, item: string) => {
        e.stopPropagation();
        navigate(`${item}`);
        return setIsMobileSideNavigationOpen(false);
    };

    const handleUserProfileIconAreaClick = () => {
        return setIsMenuOpen(!isMenuOpen);
    };

    const handleUserProfileMenuItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, url: string) => {
        e.preventDefault();
        switch (url) {
            case "/logout":
                // logout user here
                navigate("/")
                break;
            default:
                break;
        }
    };

    const drawer = (
        sideNavigationItems.map((sideNavItem, index) => {
            return (
                <ListItem
                    key={index}
                    className={`${sideNavItem.name.replace(/\s+/g, '-')}-Side-Nav-Item Side-Nav-Item`}
                    component={"div"}
                    sx={{
                        flexDirection: "column",
                        alignItems: "stretch",
                        padding: "0",
                        marginTop: "0",
                        cursor: "pointer",
                    }}
                    onClick={(e) => handleNavItemClick(e, sideNavItem.url)}
                >
                    <ListItemButton
                        sx={{
                            padding: "calc(var(--basic-padding)/2) calc(var(--basic-padding))",
                            overflow: "hidden",
                            "&:hover": {
                                background: "transparent !important"
                            }
                        }}
                    >
                        <ListItemIcon>
                            {sideNavItem.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={sideNavItem.name}
                        />
                    </ListItemButton>
                </ListItem>
            )
        })
    );

    return (
        <Box
            component={"nav"}
            sx={{ width: { mobile: "var(--side-nav-width)" }, flexShrink: { mobile: 0 } }}
        >
            <Drawer
                variant="temporary"
                open={isMobileSideNavigationOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { mobile: 'block', tablet: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: "var(--side-nav-width)",
                        backgroundColor: "var(--light-color)",
                    },
                }}
            >
                <ListItem
                    className="side-navigation-header mobile-side-navigation-header"
                >
                    <ListItemIcon
                        className="app-icon"
                    >
                        <img
                            src={logo}
                            alt="institution-logo"
                            className="institution-logo"
                        />
                    </ListItemIcon>
                    <Box
                        overflow={"hidden"}
                    >
                        <IconButton
                            sx={{
                                color: "var(--dark-color)",
                                border: "1px solid var(--dark-color)",
                                borderRadius: "5px",
                                display: matchesMobileAndAbove ? "none" : "inline-flex"
                            }}
                            onClick={handleDrawerClose}
                        >
                            <Close />
                        </IconButton>
                    </Box>
                </ListItem>
                {drawer}
                <Box
                    component={"div"}
                    className="Side-Nav-Actions-Area"
                    marginTop={"auto"}
                    sx={{
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={"calc(var(--flex-gap)/4)"}
                        overflow={"hidden"}
                        padding={"calc(var(--basic-padding)) calc(var(--basic-padding))"}
                        paddingBottom={isMenuOpen ? "0" : "calc(var(--basic-padding))"}
                        onClick={handleUserProfileIconAreaClick}
                    >
                        <Box>
                            {headshot}
                        </Box>
                        <Stack
                            gap={"calc(var(--flex-gap)/8)"}
                            overflow={"hidden"}
                        >
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Nunito"}
                                    fontWeight={600}
                                    fontSize={12}
                                    lineHeight={"normal"}
                                    color="var(--dark-color)"
                                >
                                    {username}
                                </Typography>
                            </Box>
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Nunito"}
                                    fontWeight={400}
                                    fontSize={10}
                                    lineHeight={"normal"}
                                >
                                    {role}
                                </Typography>
                            </Box>
                        </Stack>
                        <Box
                            component={"div"}
                            className="log-out-icon-box"
                        >
                            <IconButton
                                sx={{ padding: 0 }}
                            >
                                <SideNavigationLogoutIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Menu
                        open={isMenuOpen}
                        menuitems={sideNavigationUserProfileMenuItems}
                        handleMenuItemClick={handleUserProfileMenuItemClick}
                    />
                </Box>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { mobile: 'none', tablet: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: "var(--side-nav-width)",
                        backgroundColor: "var(--light-color)",
                    },
                }}
                open
            >
                <ListItem
                    className="side-navigation-header"
                >
                    <ListItemIcon
                        className="app-icon"
                    >
                        <img
                            src={logo}
                            alt="institution-logo"
                            className="institution-logo"
                        />
                    </ListItemIcon>
                </ListItem>
                {drawer}
                <Box
                    component={"div"}
                    className="Side-Nav-Actions-Area"
                    marginTop={"auto"}
                    sx={{
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={"calc(var(--flex-gap)/4)"}
                        overflow={"hidden"}
                        padding={"calc(var(--basic-padding)) calc(var(--basic-padding))"}
                        paddingBottom={isMenuOpen ? "0" : "calc(var(--basic-padding))"}
                        onClick={handleUserProfileIconAreaClick}
                    >
                        <Box
                            width={"40px"}
                            height={"40px"}
                            borderRadius={"12px"}
                        >
                            {headshot}
                        </Box>
                        <Stack
                            gap={"calc(var(--flex-gap)/8)"}
                            overflow={"hidden"}
                        >
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Nunito"}
                                    fontWeight={600}
                                    fontSize={12}
                                    lineHeight={"normal"}
                                    color="var(--dark-color)"
                                >
                                    {username}
                                </Typography>
                            </Box>
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Nunito"}
                                    fontWeight={400}
                                    fontSize={10}
                                    lineHeight={"normal"}
                                >
                                    {role}
                                </Typography>
                            </Box>
                        </Stack>
                        <Box
                            component={"div"}
                            className="log-out-icon-box"
                        >
                            <IconButton
                                sx={{ padding: 0 }}
                            >
                                <SideNavigationLogoutIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Menu
                        open={isMenuOpen}
                        menuitems={sideNavigationUserProfileMenuItems}
                        handleMenuItemClick={handleUserProfileMenuItemClick}
                    />
                </Box>
            </Drawer>
        </Box>
    )
}