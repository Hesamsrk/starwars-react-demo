import {Credits} from "./components/Credits";
import React, {useState} from "react";
import {Starships} from "./pages/Starships";
import {MovieList} from "./pages/MovieList";
import styled, {css} from "styled-components";


export const App = () => {
    const [movieID, setMovieID] = useState<number | undefined>(undefined)

    return <Container>
        {movieID ? <Starships/> : <MovieList/>}
        <Credits/>
    </Container>
}

const Container = styled.div`
    width: 100%;
`

