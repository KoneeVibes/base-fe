import { useContext, useEffect } from "react";
import { DashboardLayoutPropsType } from "../../../type/container.type";
import { MainArea } from "../../mainarea";
import { SideNavigation } from "../../navigation/sidenavigation";
import { TopNavigation } from "../../navigation/topnavigation";
import { AppLayoutWrapper } from "./styled";
import { Avatar } from "@mui/material";
import uploadImageIcon from "../../../asset/image/sample-profile-photo.svg";
import { AppContext } from "../../../context/appContext";
import { retrieveLoggedInUserService } from "../../../util/api/user/retrieveloggedinuser";
import Cookies from "universal-cookie";

export const AppLayout: React.FC<DashboardLayoutPropsType> = ({ pageId, pageTitle, ancillaryElement, children }) => {
    const cookies = new Cookies();
    const TOKEN = cookies.getAll().TOKEN;

    const {
        authenticatedUser,
        setAuthenticatedUser 
    } = useContext(AppContext);

    useEffect(() => {
        if (!pageId) return;
        document.body.id = pageId;
        return () => {
            document.body.removeAttribute("id");
        };
    }, [pageId]);

    useEffect(() => {
        if (!TOKEN) return;
        const fetchLoggedInUser = async () => {
            try {
                const response = await retrieveLoggedInUserService(TOKEN);
                return setAuthenticatedUser(response);
            } catch (error) {
                console.error('Failed to fetch authenticated user:', error);
            }
        };
        fetchLoggedInUser();
    }, [TOKEN, setAuthenticatedUser]);

    return (
        <AppLayoutWrapper
            maxWidth={false}
        >
            <TopNavigation
                pageTitle={pageTitle}
                ancillaryElement={ancillaryElement}
            />
            <SideNavigation
                username={authenticatedUser.firstName || "User"}
                role={authenticatedUser?.type}
                headshot={
                    <Avatar
                        variant="rounded"
                        src={uploadImageIcon}
                        alt={`Easin Arafat Avatar`}
                        className="navigation-avatar"
                    />
                }
            />
            <MainArea>
                {children}
            </MainArea>
        </AppLayoutWrapper>
    )
}