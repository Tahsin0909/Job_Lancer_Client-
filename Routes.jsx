import {
    createBrowserRouter,
} from "react-router-dom";
import MainHome from "./src/HomePage/MainHome";
import HomeOutlet from "./src/HomePage/HomeOutlet";
import SignUp from "./src/Components/SignUp/SignUp";
import LogIn from "./src/Components/LogIn/LogIn";
import DashBoard from "./src/Components/DashBoard/DashBoard";
import PostJob from "./src/Components/PostJob/PostJob";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainHome></MainHome>,
        children: [
            {
                path: "/",
                element:<HomeOutlet></HomeOutlet>
            },
            {
                path: "/signUp",
                element:<SignUp></SignUp>
            },
            {
                path: "/logIn",
                element:<LogIn></LogIn>
            },
            {
                path: "/dashBoard",
                element:<DashBoard></DashBoard>
            },
            {
                path: "/postJob",
                element:<PostJob></PostJob>
            },
        ],
    },
]);


export default Routes;