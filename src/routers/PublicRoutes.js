import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const {user } = useSelector(state => state.auth);
    console.log("usuario private",user.logged);
    return (!user.logged)?children:<Navigate to="/citas" />;
}