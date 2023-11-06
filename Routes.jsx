import {
    createBrowserRouter,
} from "react-router-dom";
import MainHome from "./src/HomePage/MainHome";
import HomeOutlet from "./src/HomePage/HomeOutlet";
import SignUp from "./src/Components/SignUp/SignUp";


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
        ],
    },
]);


export default Routes;