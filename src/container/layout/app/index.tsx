import { useEffect } from "react";
import { DashboardLayoutPropsType } from "../../../type/container.type";
import { MainArea } from "../../mainarea";
import { SideNavigation } from "../../navigation/sidenavigation";
import { TopNavigation } from "../../navigation/topnavigation";
import { AppLayoutWrapper } from "./styled";
import { Avatar } from "@mui/material";
import uploadImageIcon from "../../../asset/image/sample-profile-photo.svg";

export const AppLayout: React.FC<DashboardLayoutPropsType> = ({ pageId, pageTitle, ancillaryElement, children }) => {

    useEffect(() => {
        if (!pageId) return;
        document.body.id = pageId;
        return () => {
            document.body.removeAttribute("id");
        };
    }, [pageId]);

    return (
        <AppLayoutWrapper
            maxWidth={false}
        >
            <TopNavigation
                pageTitle={pageTitle}
                ancillaryElement={ancillaryElement}
            />
            <SideNavigation
                username={"Easin Arafat"}
                role={"Free Account"}
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