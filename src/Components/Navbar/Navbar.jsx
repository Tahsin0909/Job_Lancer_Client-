import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center lg:px-32 border-b py-3">
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
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay lg:hidden"></label>
                            <ul className="menu p-4 w-32 md:w-40 lg:w-80 min-h-full bg-base-200 text-base-content lg:hidden">
                                {/* Sidebar content here */}
                                {
                                    <NavBarLink />
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1><span>JOB</span><span>LANCER</span></h1>
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
                <div>
                    <Link>Sign In</Link>
                </div>
                <div>
                    <Link>Log In</Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;