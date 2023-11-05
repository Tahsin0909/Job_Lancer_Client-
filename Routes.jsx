import {
    createBrowserRouter,
} from "react-router-dom";
import MainHome from "./src/HomePage/MainHome";
import HomeOutlet from "./src/HomePage/HomeOutlet";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainHome></MainHome>,
        children: [
            {
                path: "/",
                element:<HomeOutlet></HomeOutlet>
            },
        ],
    },
]);


export default Routes;