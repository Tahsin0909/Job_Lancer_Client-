import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";


const DashBoard = () => {
    const { AuthUser, LogOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        LogOut()
    }
    return (
        <div>
            <div className="pt-20">
                <p>Dashboard</p>
                <p>Email: {AuthUser.email}</p>
                <button onClick={handleLogOut} className="btn">Log Out</button>
            </div>
        </div>
    );
};

export default DashBoard;