import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { TopNavigationWrapper } from "./styled";
import { TopNavigationPropsType } from "../../../type/container.type";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { AppContext } from "../../../context/appContext";

export const TopNavigation: React.FC<TopNavigationPropsType> = ({ pageTitle, ancillaryElement }) => {
    const {
        isSideNavigationClosing,
        isMobileSideNavigationOpen,
        setIsMobileSideNavigationOpen
    } = useContext(AppContext);

    const handleDrawerToggle = () => {
        if (!isSideNavigationClosing) {
            setIsMobileSideNavigationOpen(!isMobileSideNavigationOpen);
        }
    };

    return (
        <TopNavigationWrapper>
            <Toolbar>
                <Box
                    component={"div"}
                    className="top-navigation-LHS"
                >
                    <Typography
                        variant="h1"
                        fontFamily={"Nunito"}
                        fontWeight={700}
                        fontSize={24}
                        lineHeight={"normal"}
                        color="var(--dark-color)"
                    >
                        {pageTitle}
                    </Typography>
                </Box>
                <Stack
                    className="top-navigation-RHS"
                    direction={"row"}
                    gap={"calc(var(--flex-gap)/4)"}
                >
                    <Box
                        component={"div"}
                        className="top-navigation-RHS-item ancilliary-element-box"
                    >
                        {ancillaryElement}
                    </Box>
                    <Box
                        component={"div"}
                        className="top-navigation-RHS-item menu-button-box"
                    >
                        <IconButton
                            size="large"
                            aria-label="menu"
                            sx={{
                                color: "var(--dark-color)",
                                padding: 0
                            }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Stack>
            </Toolbar>
        </TopNavigationWrapper>
    )
}