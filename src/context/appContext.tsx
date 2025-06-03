import { createContext, useState } from "react";
import { ContextProviderPropsType, AppContextType } from "../type/context.type";

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider: React.FC<ContextProviderPropsType> = ({ children }) => {
    const [isMobileSideNavigationOpen, setIsMobileSideNavigationOpen] = useState(false);
    const [isSideNavigationClosing, setIsSideNavigationClosing] = useState(false);

    return (
        <AppContext.Provider
            value={{
                isMobileSideNavigationOpen,
                setIsMobileSideNavigationOpen,
                isSideNavigationClosing,
                setIsSideNavigationClosing
            }}
        >
            {children}
        </AppContext.Provider>
    )
}