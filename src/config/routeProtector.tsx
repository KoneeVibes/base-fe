import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

export const RouteProtector: React.FC = () => {
    const cookies = new Cookies();
    const { AUTH_TOKEN } = cookies.getAll();
    return !AUTH_TOKEN ? <Outlet /> : <Navigate to="/" replace />;
};
