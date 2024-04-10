import { createBrowserRouter } from "react-router-dom";
import DisplayPassword from "../modules/DisplayPassword/Components/DisplayPassword";

import Layouts from "../modules/Layouts";
const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
    }
])

export default Routes;