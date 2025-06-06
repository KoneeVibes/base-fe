// import { SideNavigationDashboardIcon, SideNavigationPostIcon, SideNavigationSettingsIcon } from "../asset";
import { SideNavigationPostIcon } from "../asset";

export const sideNavigationItems = [
    // {
    //     name: "Dashboard",
    //     icon: <SideNavigationDashboardIcon />,
    //     url: "/dashboard"
    // },
    {
        name: "Post",
        icon: <SideNavigationPostIcon />,
        subItems: [
            // {
            //     name: "Blog",
            //     url: "/history/blog"
            // },
            {
                name: "Gallery",
                url: "/history/gallery"
            },
        ]
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