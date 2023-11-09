/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ContextApi/ContextApi";




const PrivetRoutes = ({ children }) => {

    const { AuthUser, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)
    // console.log(AuthUser)
    if (loading) {
        return <div className="flex justify-center items-center h-[60vh]">
            <span className="loading loading-infinity loading-lg text-green-600  py-40"></span>
        </div>
        // return <Navigate to={`/signIn?${location.pathname}`} replace={true} />
    }
    else if (AuthUser.email) {
        return children;
    }

    return <Navigate to={`/logIn?${location.pathname}`} replace={true} />
};

export default PrivetRoutes;