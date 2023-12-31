import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';

const NavBarLink = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div className="lg:flex md:text-base text-sm">
            <li>
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? theme === "blue"? "text-blue-700 underline font-semibold": "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/freelancers`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                    Find FreeLancers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/jobs`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                    Find Jobs
                </NavLink>
            </li>
            <div className='md:hidden sm:flex flex-col'>
                <li>
                    <NavLink
                        to={`/dashBoard`}
                        className={({ isActive, isPending }) =>
                            isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                        DashBoard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/signIn`}
                        className={({ isActive, isPending }) =>
                            isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/logIn`}
                        className={({ isActive, isPending }) =>
                            isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                        Log In
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default NavBarLink;