import { useEffect, useState } from "react"
import { get } from "../data/httpClient"
import {MovieCard} from "../componentes/MovieCard"

export function ContextMovieCard(){
const [movies,SetMovies] = useState([])
useEffect(()=>{
    get("/discover/movie").then((data)=>{
        SetMovies(data.results)
    });
},[]);
    return(<ul>
        {movies.map((movie)=>(
            <MovieCard />
        ))}
    </ul>)
}