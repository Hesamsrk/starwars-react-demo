import React from "react";
import {useFetch} from "../hooks/useFetch";
import {MovieOT, Result, swapi} from "../services/swapi";
import {GlassPage} from "../layouts/GlassPage";
import {Loader} from "../components/Loader";
import {MovieItem} from "../components/movies/MovieItem";

export const MovieList = () => {
    const movies = useFetch<Result<MovieOT>>(swapi.url(swapi.endpoints.getMovies))

    if (movies.error) {
        alert("Error while loading movies!")
        return <></>
    }

    return <>
        <GlassPage minHeight={"200px"} header={"Starwars Movies:"} title={"Movie List"}>
            {movies.result?.results && movies.result.results.sort((a, b) => a.episode_id - b.episode_id).map(
                (item) => <MovieItem key={item.episode_id} data={item} onSelect={(id) => console.log(id)}/>
            )}
        </GlassPage>
        <Loader display={movies.loading}/>
    </>
}