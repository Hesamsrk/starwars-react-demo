import {BrowserRouter} from "react-router-dom"
import {Router} from "./routes/Router";
import {Credits} from "./components/Credits";
import {Loader} from "./components/Loader";

export const App = () => {
    return <>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
        <Credits/>
        <Loader/>
    </>
}
