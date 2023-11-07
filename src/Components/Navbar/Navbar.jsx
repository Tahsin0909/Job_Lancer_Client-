import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import { IoLogInOutline, IoCreateOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../ContextApi/ContextApi";
import { CgProfile } from 'react-icons/cg';


const Navbar = () => {
    const { User,LogOut } = useContext(AuthContext)
    console.log(User);
    return (
        <div className="flex justify-between items-center lg:px-32 md:px-10 px-4 border-b py-3 fixed w-full bg-white z-50">
            <div className="flex items-center">
                <div className="flex items-center">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay  lg:hidden"></label>
                            <ul className="menu p-4 w-52  lg:w-80 min-h-full bg-white text-base-content lg:hidden">
                                {/* Sidebar content here */}
                                {
                                    <NavBarLink />
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <h1
                            className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-300 to-purple-400 bg-clip-text text-transparent"><span>job</span><span className="font-[BlackOpsOne]">lancer</span>
                        </h1>
                        <img className="w-4 h-4 relative -top-1 right-1" src="https://cdn-icons-png.flaticon.com/128/1432/1432368.png" alt="" />
                    </div>
                </div>
                <div className="hidden lg:flex mx-10">
                    <ul className="menu menu-horizontal px-1">
                        {
                            <NavBarLink></NavBarLink>
                        }
                    </ul>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Link className="border px-2 py-[7px] text-white bg-green-700 rounded-lg">Post a Job</Link>
                {
                    User?.userEmail ?
                        <div className="lg:flex items-center gap-4  hidden">
                            <div className="hidden md:flex items-center hover:text-green-400">
                                <IoLogInOutline size={'20px'} />
                                <Link onClick={()=>LogOut()}>Log Out</Link>
                            </div>
                            <div className="hidden md:flex items-center hover:text-green-400">
                                {
                                    User?.userPhoto ? <Link to={'/dashBoard'}><img className="w-12 rounded-full" src={User?.userPhoto} alt="" /></Link> : <Link to={'/dashBoard'}> <CgProfile size={'40px'} /></Link>
                                }
                            </div>
                        </div>
                        :
                        <div className="lg:flex items-center gap-4  hidden">
                            <div className="hidden md:flex items-center hover:text-green-400">
                                <IoCreateOutline size={'20px'} />
                                <Link to={'/signUp'}>Sign Up</Link>
                            </div>
                            <div className="hidden md:flex items-center hover:text-green-400">
                                <IoLogInOutline size={'20px'} />
                                <Link to={'/logIn'}>Log In</Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
};

export default Navbar;