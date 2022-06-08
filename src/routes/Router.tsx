import {Route, Routes} from "react-router-dom";
import {Redirect} from "../components/Redirect";
import {NotFound} from "../pages/NotFound";
import {Movies} from "../pages/Movies";
import {Starships} from "../pages/Starships";


export const Router = () => {
    return <Routes>
        <Route path="/">
            <Route index element={<Redirect to={"movies"}/>}/>
            <Route path={"movies"}>
                <Route index element={<Movies/>}/>
                <Route path={":id"} element={<Starships/>}/>
            </Route>
            <Route path={"*"} element={<NotFound/>}/>
        </Route>
    </Routes>
}