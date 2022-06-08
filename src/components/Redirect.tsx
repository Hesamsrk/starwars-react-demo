import React, {FC, PropsWithChildren, useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface PropTypes {
    to: string
}

export const Redirect: FC<PropsWithChildren<PropTypes>> = ({to}) => {
    let navigate = useNavigate();
    useEffect(() => {
        navigate(to, {replace: true})
    }, [])
    return <></>
}