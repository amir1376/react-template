import {Route, Routes} from "react-router-dom";
import {Home} from "~/feature/home/Home";

export function AppRoutes() {
    return <Routes>
        <Route
            path="/"
            element={<Home/>}
        />
    </Routes>
}