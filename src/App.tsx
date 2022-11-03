import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./router/appRoutes";
import {Layout} from "./layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <AppRoutes/>
            </Layout>
        </BrowserRouter>
    )
}

export default App
