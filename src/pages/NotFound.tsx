import {GlassPage} from "../layouts/GlassPage";

export const NotFound = ()=>{
    return <GlassPage tabTitle={"404 - Not found"} title={
        {
            side: "center",
            content: "404 - Page not found!"
        }
    }/>
}