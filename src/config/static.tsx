// import { SideNavigationDashboardIcon, SideNavigationPostIcon, SideNavigationSettingsIcon } from "../asset";
import { SideNavigationDashboardIcon, SideNavigationPostIcon } from "../asset";

export const sideNavigationItems = [
    {
        name: "Dashboard",
        icon: <SideNavigationDashboardIcon />,
        url: "/dashboard"
    },
    {
        name: "Post",
        icon: <SideNavigationPostIcon />,
        url: "/posthistory"
    },
    // {
    //     name: "Settings",
    //     icon: <SideNavigationSettingsIcon />,
    //     url: "/settings"
    // },
];

export const sideNavigationUserProfileMenuItems = [
    {
        name: "Log Out",
        url: "/logout"
    }
]