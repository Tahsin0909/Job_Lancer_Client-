import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";


const DashBoard = () => {
    const { User, LogOut } = useContext(AuthContext)
    const handleLogOut = () =>{
        LogOut()
    }
    return (
        <div className="lg:px-32 md:px-10 px-4 pt-24">
            {/* profile */}
            <div className="">
                <p>Email: {User.userEmail}</p>
                <button onClick={handleLogOut} className="btn">Log Out</button>
            </div>
        </div>
    );
};

export default DashBoard;