import { NavLink } from 'react-router-dom';

const NavBarLink = () => {
    return (
        <div className="lg:flex ">
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
                    to={`/about`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                    Find FreeLancers
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/service`}
                    className={({ isActive, isPending }) =>
                        isActive ? "text-green-700 underline font-semibold" : isPending ? "pending" : ""}>
                    Find Jobs
                </NavLink>
            </li>
        </div>
    );
};

export default NavBarLink;