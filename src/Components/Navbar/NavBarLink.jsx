import { NavLink } from 'react-router-dom';

const NavBarLink = () => {
    return (
        <div className="lg:flex md:text-base text-sm">
            <li>
                <NavLink
                    to={`/`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
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