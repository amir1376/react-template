import {createBrowserRouter} from "react-router-dom";
import {Home} from "../feature/home/Home";

export const routes=createBrowserRouter([
    {
        element:<Home/>,
        path:"/",
    }
])

